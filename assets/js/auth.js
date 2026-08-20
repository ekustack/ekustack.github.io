import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// ---- CONFIG ----
const SUPABASE_URL = tu; // replace with your actual URL
const SUPABASE_ANON_KEY = tk; // replace with your actual anon key

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ── DOM refs ──
const form = document.getElementById('auth-form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submitBtn = document.getElementById('submit-btn');
const toggleBtn = document.getElementById('toggle-btn');
const toggleLink = document.getElementById('toggle-link');
const toggleText = document.getElementById('toggle-text');
const authTitle = document.getElementById('auth-title');
const authSub = document.getElementById('auth-sub');
const authError = document.getElementById('auth-error');
const authSuccess = document.getElementById('auth-success');
const forgotLink = document.getElementById('forgot-link');
const passwordField = document.getElementById('password-field');

// ── State ──
let isLogin = true;
let isForgot = false;

// ── Get redirect URL from query params ──
const urlParams = new URLSearchParams(window.location.search);
const redirectTo = urlParams.get('redirect') || '/dashboard';
const plan = urlParams.get('plan'); // optional, used for upgrade flow

// ── Toggle between login/signup ──
function setMode(login) {
  isLogin = login;
  isForgot = false;
  forgotLink.style.display = login ? 'block' : 'none';
  passwordField.style.display = login ? 'block' : 'block';
  if (login) {
    authTitle.textContent = 'Sign in';
    authSub.textContent = 'Enter your D-invites credentials to continue.';
    submitBtn.innerHTML = '<i class="fas fa-regular fa-arrow-right-to-bracket"></i> Sign in';
    toggleBtn.innerHTML = '<i class="fas fa-regular fa-user-plus"></i> Create D-invites account';
    toggleText.innerHTML = 'New here? <a id="toggle-link">Create a D-invites account</a>';
    document.getElementById('toggle-link').addEventListener('click', () => setMode(false));
  } else {
    authTitle.textContent = 'Create D-invites account';
    authSub.textContent = 'Start using ProvChart and D-invites for free.';
    submitBtn.innerHTML = '<i class="fas fa-regular fa-user-plus"></i> Create account';
    toggleBtn.innerHTML = '<i class="fas fa-regular fa-arrow-right-to-bracket"></i> Sign in';
    toggleText.innerHTML = 'Already have an account? <a id="toggle-link">Sign in</a>';
    document.getElementById('toggle-link').addEventListener('click', () => setMode(true));
  }
  authError.textContent = '';
  authSuccess.textContent = '';
}

// ── Forgot password ── (unchanged) ──
forgotLink.addEventListener('click', async (e) => {
  e.preventDefault();
  const emailVal = email.value.trim();
  if (!emailVal) {
    authError.textContent = 'Please enter your email address.';
    return;
  }
  try {
    authError.textContent = '';
    authSuccess.textContent = '';
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner"></span> Sending...';
    const { error } = await supabase.auth.resetPasswordForEmail(emailVal, {
      redirectTo: window.location.origin + '/auth?reset=true',
    });
    if (error) throw error;
    authSuccess.textContent = 'Password reset link sent to your email. Check your inbox.';
    forgotLink.style.display = 'none';
  } catch (err) {
    authError.textContent = err.message;
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fas fas fa-regular fa-arrow-right-to-bracket"></i> Sign in';
  }
});

// ── Handle password reset callback ──
async function handlePasswordReset() {
  const hash = window.location.hash;
  if (hash.includes('access_token')) {
    isForgot = true;
    authTitle.textContent = 'Reset password';
    authSub.textContent = 'Enter your new password.';
    submitBtn.innerHTML = '<i class="fas fa-regular fa-check"></i> Update password';
    toggleBtn.style.display = 'none';
    toggleText.style.display = 'none';
    forgotLink.style.display = 'none';
    passwordField.style.display = 'block';
  }
}

// ── Form submit ──
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  authError.textContent = '';
  authSuccess.textContent = '';
  
  const emailVal = email.value.trim();
  const passwordVal = password.value;
  
  if (!emailVal) { authError.textContent = 'Email is required.'; return; }
  if (!isForgot && !passwordVal) { authError.textContent = 'Password is required.'; return; }
  
  try {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner"></span> Processing...';
    
    if (isForgot) {
      const { error } = await supabase.auth.updateUser({ password: passwordVal });
      if (error) throw error;
      authSuccess.textContent = 'Password updated successfully. You can now sign in.';
      setTimeout(() => {
        setMode(true);
        isForgot = false;
        toggleBtn.style.display = 'inline-flex';
        toggleText.style.display = 'block';
        forgotLink.style.display = 'block';
        submitBtn.innerHTML = '<i class="fas fa-regular fa-arrow-right-to-bracket"></i> Sign in';
      }, 2000);
      return;
    }
    
    let result;
    if (isLogin) {
      result = await supabase.auth.signInWithPassword({
        email: emailVal,
        password: passwordVal,
      });
    } else {
      result = await supabase.auth.signUp({
        email: emailVal,
        password: passwordVal,
      });
    }
    
    if (result.error) throw result.error;
    
    if (isLogin) {
      let target = redirectTo || '/dashboard';
      if (plan === 'pro') {
        target += (target.includes('?') ? '&' : '?') + 'plan=pro';
      }
      window.location.href = target;
    } else {
      authSuccess.textContent = 'Account created! You can now sign in.';
      // Optionally auto-switch to login mode
      setTimeout(() => setMode(true), 1500);
    }
  } catch (err) {
    authError.textContent = err.message;
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = isLogin ?
      '<i class="fas fa-regular fa-arrow-right-to-bracket"></i> Sign in' :
      '<i class="fas fa-regular fa-user-plus"></i> Create account';
  }
});

// ── Toggle buttons ──
toggleBtn.addEventListener('click', () => setMode(!isLogin));
// toggleLink is re-attached in setMode

// ── Init ──
if (window.location.hash.includes('access_token')) {
  handlePasswordReset();
} else {
  setMode(true);
}

if (plan === 'pro') {
  authSub.textContent = 'Sign in to upgrade to ProvChart Pro.';
}

// ── Auto-redirect if already logged in ──
(async () => {
  const { data: { session } } = await supabase.auth.getSession();
  if (session && !window.location.hash.includes('access_token')) {
    // Redirect to the target, preserving plan param if any
    let target = redirectTo || '/dashboard';
    if (plan === 'pro') {
      target += (target.includes('?') ? '&' : '?') + 'plan=pro';
    }
    window.location.href = target;
  }
})();
