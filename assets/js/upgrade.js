  import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

  // ── CONFIG ──
  const SUPABASE_URL = tu;          // ← replace
  const SUPABASE_ANON_KEY = tk;     // ← replace
  const PAYSTACK_PUBLIC_KEY = 'pk_live_0b0770be1e29f5e7a159b39d2d9bdc2c41785306';

  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  // ── Plan config (USD prices) ──
  const PLANS = {
    pro: {
      name: 'Pro',
      usdPrice: 12,
      label: '$12 / month',
      desc: 'Unlock multi-series charts, custom theming, live data, and priority support.'
    },
    business: {
      name: 'Business',
      usdPrice: 29,
      label: '$29 / month',
      desc: 'Everything in Pro + team features and dedicated support.'
    }
  };

  // ── Read query param ──
  const params = new URLSearchParams(window.location.search);
  const planKey = (params.get('plan') || 'pro').toLowerCase();
  const plan = PLANS[planKey] || PLANS.pro;

  // DOM refs
  const statusEl = document.getElementById('status');
  const payBtn = document.getElementById('pay-btn');
  const usdPriceEl = document.getElementById('usd-price');
  const ngnPriceEl = document.getElementById('ngn-price');
  const planTitle = document.getElementById('plan-title');
  const planDesc = document.getElementById('plan-desc');

  // ── State ──
  let exchangeRate = null;
  let ngnAmount = null; // in kobo

  // ── Fetch live USD/NGN rate ──
  async function fetchExchangeRate() {
    try {
      statusEl.textContent = 'Fetching live exchange rate...';
      statusEl.className = 'status loading';
      payBtn.disabled = true;
      payBtn.innerHTML = '<span class="spinner"></span> Loading rate...';

      // Free API – no key required
      const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
      if (!res.ok) throw new Error('Failed to fetch rate');
      const data = await res.json();
      const rate = data.rates.NGN;
      if (!rate) throw new Error('NGN rate not available');
      exchangeRate = rate;

      // Compute NGN amount in kobo (multiply by 100)
      const ngnRaw = plan.usdPrice * exchangeRate;
      // Round to nearest whole kobo (i.e., 2 decimal places of NGN)
      ngnAmount = Math.round(ngnRaw * 100); // in kobo
      const ngnDisplay = (ngnAmount / 100).toFixed(2);

      // Update UI
      usdPriceEl.textContent = `$${plan.usdPrice}`;
      ngnPriceEl.textContent = `≈ ₦${ngnDisplay}`;
      statusEl.textContent = `Rate: 1 USD = ₦${exchangeRate.toFixed(2)}`;
      statusEl.className = 'status success';
      payBtn.disabled = false;
      payBtn.innerHTML = '<i class="fa-regular fa-credit-card"></i> Pay with Paystack';
    } catch (err) {
      console.error(err);
      statusEl.textContent = 'Could not fetch exchange rate. Please refresh or try again later.';
      statusEl.className = 'status error';
      payBtn.disabled = true;
      payBtn.innerHTML = 'Retry';
      // Allow retry on click
      payBtn.onclick = fetchExchangeRate;
    }
  }

  // ── Ensure user is logged in ──
  async function ensureLoggedIn() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      const returnUrl = encodeURIComponent(window.location.pathname + window.location.search);
      window.location.href = `/auth?redirect=${returnUrl}&plan=${planKey}`;
      return null;
    }
    return session;
  }

  // ── Start Paystack payment ──
  async function startPayment() {
    statusEl.textContent = '';
    statusEl.className = 'status';
    payBtn.disabled = true;
    payBtn.innerHTML = '<span class="spinner"></span> Preparing payment...';

    try {
      const session = await ensureLoggedIn();
      if (!session) return;
      const user = session.user;

      if (!ngnAmount) {
        throw new Error('Exchange rate not loaded. Please refresh.');
      }

      // Load Paystack inline script if needed
      if (!window.PaystackPop) {
        await new Promise((resolve, reject) => {
          const s = document.createElement('script');
          s.src = 'https://js.paystack.co/v1/inline.js';
          s.onload = resolve;
          s.onerror = reject;
          document.head.appendChild(s);
        });
      }

      // Clean transaction reference
      const ref = `provchart_${planKey}_${user.id.replace(/-/g, '')}_${Date.now()}`;

      const handler = PaystackPop.setup({
        key: PAYSTACK_PUBLIC_KEY,
        email: user.email,
        amount: ngnAmount,          // in kobo
        currency: 'NGN',
        ref: ref,
        metadata: {
          user_id: user.id,
          plan: planKey,
          custom_fields: [
            { display_name: 'Plan', variable_name: 'plan', value: plan.name },
            { display_name: 'USD Price', variable_name: 'usd_price', value: String(plan.usdPrice) },
            { display_name: 'Exchange Rate', variable_name: 'rate', value: String(exchangeRate) }
          ]
        },
        callback: function (response) {
          statusEl.textContent = 'Payment successful! Activating your plan...';
          statusEl.className = 'status success';
          setTimeout(() => {
            window.location.href = '/dashboard';
          }, 1800);
        },
        onClose: function () {
          statusEl.textContent = 'Payment cancelled.';
          statusEl.className = 'status';
          payBtn.disabled = false;
          payBtn.innerHTML = '<i class="fa-regular fa-credit-card"></i> Pay with Paystack';
        }
      });

      handler.openIframe();
    } catch (err) {
      console.error(err);
      statusEl.textContent = err.message || 'Something went wrong. Please try again.';
      statusEl.className = 'status error';
      payBtn.disabled = false;
      payBtn.innerHTML = '<i class="fa-regular fa-credit-card"></i> Pay with Paystack';
    }
  }

  // ── Init ──
  // Update UI with plan info
  planTitle.textContent = `Upgrade to ${plan.name}`;
  usdPriceEl.textContent = `$${plan.usdPrice}`;
  planDesc.textContent = plan.desc;

  // Fetch rate and enable pay button
  await fetchExchangeRate();

  // Attach payment handler
  payBtn.addEventListener('click', startPayment);

  // Ensure login on load (but don't redirect if already logged in)
  ensureLoggedIn();
