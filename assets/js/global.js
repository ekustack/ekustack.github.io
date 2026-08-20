// ==========================================================================
// Statik — global site behavior
// Shared across every page on chart.devtem.org.
// ==========================================================================

(function () {
  const toggle = document.querySelector('[data-nav-toggle]');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
    const isOpen = document.body.classList.contains('nav-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close the mobile menu when a link inside it is clicked
  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
  
})();
const tu= "https://ostmbucbsptftvbwhmjc.supabase.co";
const tk= "sb_publishable_0eJBR0X5fmU1FTyu346etQ_6syHbiCo";
const footer = document.querySelector(".site-footer");
if(footer){
  footer.innerHTML=`
          <div class="wrap">
            <div class="footer-grid">
                <div class="footer-col footer-about">
                    <a href="/" class="brand">
                        <img src="/assets/img/icon.png" width="35" alt="Prov" loading="lazy" decoding="async">
                        <span class="brand-name">ProvChart</span>
                    </a>
                    <p>A pure‑CSS chart engine for pages that can't afford a runtime.</p>
                    <div class="footer-social">
                        <a href="https://github.com/fscss-ttr/" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
                        <a href="https://x.com/fscss_ttr" aria-label="Twitter"><i class="fa-brands fa-twitter"></i></a>
                        <a href="https://www.youtube.com/@devtem_org" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
                        <a href="https://dev.to/fscss" aria-label="DEV"><i class="fa-brands fa-dev"></i></a>
                    </div>
                </div>

                <div class="footer-col">
                    <h4><i class="fas fa-regular fa-cube" style="margin-right:6px;"></i>Product</h4>
                    <ul>
                        <li><a href="/docs">Docs</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/pricing">Pricing</a></li>
                        <li><a href="/changelog">Changelog</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4><i class="fas fa-regular fa-book" style="margin-right:6px;"></i>Resources</h4>
                    <ul>
                        <li><a href="https://fscss.devtem.org">FSCSS</a></li>
                        <li><a href="https://github.com/fscss-ttr/st-core.fscss">st-core.fscss (open source)</a></li>
                        <li><a href="/docs#overview">API reference</a></li>
                        <li><a href="/faq">FAQs</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4><i class="fa-regular fa-building" style="margin-right:6px;"></i>Company</h4>
                    <ul>
                        <li><a href="https://devtem.org">DevTemple</a></li>
                        <li><a href="mailto:provchart@devtem.org" target="_blank" noopener>Contact</a></li>
                        <li><a href="/privacy">Privacy</a></li>
                        <li><a href="/terms">Terms</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <span>&copy; ${new Date().getFullYear()} ProvChart, DevTemple, fscss-ttr.</span>
                <span>Built for those who choose performance and SEO over heavy libraries.</span>
            </div>
        </div>
  `
}
