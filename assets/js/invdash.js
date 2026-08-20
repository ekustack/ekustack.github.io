import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// ---- CONFIG ----
const SUPABASE_URL = tu; // replace with your actual URL
const SUPABASE_ANON_KEY = tk; // replace with your actual anon key
const WORKER_ENDPOINT = 'https://provchart-api.devtem.org';

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ── Custom Modal Helpers ── (unchanged)
const overlay = document.getElementById('modal-overlay');
const modalBox = document.getElementById('modal-box');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
const modalInput = document.getElementById('modal-input');
const modalCancel = document.getElementById('modal-cancel');
const modalConfirm = document.getElementById('modal-confirm');

let modalResolve = null;
let modalType = 'alert'; // 'alert' | 'confirm' | 'prompt'

function openModal(type, title, message, defaultValue = '') {
  return new Promise((resolve) => {
    modalResolve = resolve;
    modalType = type;

    modalTitle.textContent = title || (type === 'alert' ? 'Notice' : 'Confirm');
    modalMessage.textContent = message || '';

    if (type === 'prompt') {
      modalInput.style.display = 'block';
      modalInput.value = defaultValue || '';
      modalInput.focus();
    } else {
      modalInput.style.display = 'none';
    }

    modalCancel.style.display = (type === 'alert') ? 'none' : 'inline-flex';
    modalConfirm.textContent = (type === 'alert') ? 'OK' : (type === 'confirm' ? 'Confirm' : 'OK');

    overlay.classList.add('open');
    setTimeout(() => {
      if (type === 'prompt') modalInput.focus();
      else modalConfirm.focus();
    }, 100);
  });
}

function closeModal(value) {
  overlay.classList.remove('open');
  if (modalResolve) modalResolve(value);
  modalResolve = null;
}

modalCancel.addEventListener('click', () => {
  if (modalType === 'prompt') closeModal(null);
  else if (modalType === 'confirm') closeModal(false);
  else closeModal(null);
});

modalConfirm.addEventListener('click', () => {
  if (modalType === 'alert') closeModal(undefined);
  else if (modalType === 'confirm') closeModal(true);
  else if (modalType === 'prompt') closeModal(modalInput.value.trim() || null);
});

overlay.addEventListener('click', (e) => {
  if (e.target === overlay && modalType !== 'prompt') {
    closeModal(modalType === 'confirm' ? false : undefined);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && overlay.classList.contains('open')) {
    if (modalType === 'prompt') closeModal(null);
    else if (modalType === 'confirm') closeModal(false);
    else closeModal(undefined);
  }
});

window.showAlert = (msg, title = 'Notice') => openModal('alert', title, msg);
window.showConfirm = (msg, title = 'Confirm') => openModal('confirm', title, msg);
window.showPrompt = (msg, title = 'Enter value', defaultValue = '') => openModal('prompt', title, msg, defaultValue);

// ---- Main App ----
(function () {
  const trigger = document.getElementById('profile-trigger');
  const menu = document.getElementById('profile-menu');
  const avatarEl = document.getElementById('user-avatar');
  const avatarLgEl = document.getElementById('user-avatar-lg');
  const menuName = document.getElementById('menu-user-name');
  const menuEmail = document.getElementById('menu-user-email');
  const tierLabel = document.getElementById('tier-label');
  const tierDot = document.getElementById('tier-dot');
  const tierExpiry = document.getElementById('tier-expiry');
  const upgradeLink = document.getElementById('menu-upgrade');
  const upgradeLabel = document.getElementById('menu-upgrade-label');
  const editProfileLink = document.getElementById('menu-edit-profile');
  const signOutBtn = document.getElementById('sign-out-btn');

  let session = null;

  function closeMenu() {
    menu.classList.remove('open');
    trigger.setAttribute('aria-expanded', 'false');
  }
  function toggleMenu() {
    const willOpen = !menu.classList.contains('open');
    menu.classList.toggle('open', willOpen);
    trigger.setAttribute('aria-expanded', String(willOpen));
  }
  trigger.addEventListener('click', (e) => { e.stopPropagation(); toggleMenu(); });
  document.addEventListener('click', (e) => { if (!menu.contains(e.target) && e.target !== trigger) closeMenu(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

  async function loadProfile() {
    const { data: { session: s } } = await supabaseClient.auth.getSession();
    if (!s) { window.location.href = '/auth'; return; }
    session = s;

    const { data: profile } = await supabaseClient
      .from('profiles')
      .select('full_name')
      .eq('id', session.user.id)
      .maybeSingle();
    const fullName = profile?.full_name || session.user.email || 'User';
    const initial = fullName[0]?.toUpperCase() || '?';

    avatarEl.textContent = initial;
    avatarLgEl.textContent = initial;
    menuName.textContent = fullName;
    menuEmail.textContent = session.user.email;

    const { data: sub } = await supabaseClient
      .schema('public')
      .from('provchart_subscriptions')
      .select('status, expires_at')
      .eq('user_id', session.user.id)
      .maybeSingle();

    const expired = sub?.expires_at && new Date(sub.expires_at) < new Date();
    const isPro = sub?.status === 'active' && !expired;

    tierLabel.textContent = isPro ? 'Pro plan' : 'Free plan';
    tierDot.className = 'tier-dot ' + (isPro ? 'active' : 'inactive');
    tierExpiry.textContent = isPro && sub.expires_at
      ? `renews ${new Date(sub.expires_at).toLocaleDateString()}`
      : '';

    upgradeLabel.textContent = isPro ? 'Manage plan' : 'Upgrade to Pro';
    upgradeLink.href = isPro ? '/pricing' : '/upgrade?plan=pro';
  }

  editProfileLink.addEventListener('click', async (e) => {
    e.preventDefault();
    const current = menuName.textContent;
    const next = await window.showPrompt('Display name', 'Edit your profile name', current === 'User' ? '' : current);
    if (next === null || !next.trim()) return;
    const { error } = await supabaseClient
      .from('profiles')
      .update({ full_name: next.trim() })
      .eq('id', session.user.id);
    if (error) {
      await window.showAlert('Failed to update name: ' + error.message);
    } else {
      menuName.textContent = next.trim();
      const init = next.trim()[0]?.toUpperCase() || '?';
      avatarEl.textContent = init;
      avatarLgEl.textContent = init;
      closeMenu();
    }
  });

  signOutBtn.addEventListener('click', async () => {
    await supabaseClient.auth.signOut();
    window.location.href = '/';
  });

  loadProfile();

  // ── Chart builder ──
  const palette = ['#8b7bff', '#4fd8c4', '#f0a860', '#ff5e7d', '#4fffb0', '#5ea8ff'];
  let series = [{ name: 'Series 1', color: palette[0], values: '20,35,33,30,48,35,66' }];

  // DOM refs for conditional fields
  const chartTypeSelect = document.getElementById('chart-type');
  const stackField = document.getElementById('stack-field');
  const radiusField = document.getElementById('radius-field');
  const stackCheckbox = document.getElementById('stack-checkbox');
  const radiusInput = document.getElementById('radius-input');

  // Show/hide conditional fields based on chart type
  function updateConditionalFields() {
    const type = chartTypeSelect.value;
    // Stack field: visible for bar, stackedbar, combo
    const showStack = ['bar', 'stackedbar', 'combo'].includes(type);
    stackField.classList.toggle('visible', showStack);
    // Radius field: visible only for scatter
    radiusField.classList.toggle('visible', type === 'scatter');
  }
  chartTypeSelect.addEventListener('change', updateConditionalFields);
  updateConditionalFields();

  function parseValues(str) {
    return str.split(',').map((v) => Number(v.trim())).filter((v) => !isNaN(v));
  }

  function renderSeries() {
    const container = document.getElementById('series-list');
    container.innerHTML = '';
    series.forEach((s, i) => {
      const row = document.createElement('div');
      row.className = 'series-row';
      row.innerHTML = `
        <input type="color" value="${s.color}" data-role="color" data-i="${i}">
        <input type="text" value="${s.values}" data-role="values" data-i="${i}" placeholder="e.g. 20,35,33,30">
        ${series.length > 1 ? `<button type="button" data-role="remove" data-i="${i}">&times;</button>` : ''}
      `;
      container.appendChild(row);
    });
  }

  document.getElementById('series-list').addEventListener('input', (e) => {
    const i = Number(e.target.dataset.i);
    if (e.target.dataset.role === 'color') series[i].color = e.target.value;
    if (e.target.dataset.role === 'values') series[i].values = e.target.value;
  });

  document.getElementById('series-list').addEventListener('click', (e) => {
    if (e.target.dataset.role === 'remove') {
      series.splice(Number(e.target.dataset.i), 1);
      renderSeries();
    }
  });

  document.getElementById('add-series').addEventListener('click', () => {
    const n = parseValues(series[0].values).length || 7;
    const newVals = Array.from({ length: n }, () => Math.round(15 + Math.random() * 70)).join(',');
    series.push({ name: `Series ${series.length + 1}`, color: palette[series.length % palette.length], values: newVals });
    renderSeries();
  });

  document.getElementById('generate-btn').addEventListener('click', async () => {
    const type = chartTypeSelect.value;
    const axisLabels = document.getElementById('axis-labels').value.trim().split(',').map((s) => s.trim()).filter(Boolean);
    const stack = stackCheckbox.checked;
    const radius = parseInt(radiusInput.value) || 4;

    // Build series data with per-series properties
    const seriesData = series.map((s, idx) => {
      const base = {
        name: s.name,
        color: s.color,
        points: parseValues(s.values),
      };
      // For combo: assign types based on index (first: bar, rest: line) or use a per-series type if we had a dropdown.
      if (type === 'combo') {
        base.type = (idx === 0) ? 'bar' : 'line';
      } else if (type === 'stackedbar') {
        base.stack = true;
      } else if (type === 'bar') {
        // stack is handled via the global flag
      } else if (type === 'scatter') {
        base.radius = radius;
      }
      return base;
    });

    const payload = {
      type,
      series: seriesData,
      axisX: axisLabels,
      // For bar: pass stacked flag
      stacked: (type === 'bar' || type === 'stackedbar') ? stack : undefined,
    };

    const { data: { session: s } } = await supabaseClient.auth.getSession();
    if (!s) { window.location.href = '/auth'; return; }

    try {
      const res = await fetch(`${WORKER_ENDPOINT}/api/generate-pro`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${s.access_token}` },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (result.error) {
        await window.showAlert(result.error);
        return;
      }
      document.getElementById('preview').innerHTML = `<style>${result.css}</style>${result.html}`;
      document.getElementById('html-out').textContent = result.html;
      document.getElementById('css-out').textContent = result.css;
    } catch (err) {
      await window.showAlert('Failed to generate chart. Please try again.');
    }
  });

  // Copy buttons
  ['copy-html', 'copy-css'].forEach((btnId) => {
    document.getElementById(btnId).addEventListener('click', async () => {
      const sourceId = btnId === 'copy-html' ? 'html-out' : 'css-out';
      const text = document.getElementById(sourceId).textContent;
      await navigator.clipboard.writeText(text);
      const btn = document.getElementById(btnId);
      const orig = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(() => (btn.textContent = orig), 1400);
    });
  });

  renderSeries();
})();
