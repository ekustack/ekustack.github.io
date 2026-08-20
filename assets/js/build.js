// ==========================================================================
// ProvChart — /get-started generator (Free Tier)
// Strictly single-series. "Add series" redirects to Pro Dashboard.
// ==========================================================================

(function () {
  // Core engine must be available
  if (typeof ProvChart === 'undefined') {
    document.getElementById('preview').innerHTML =
      `<p style="color:var(--down);">⚠️ Chart engine not loaded. Please check your network or refresh.</p>`;
    return;
  }

  const els = {
    type: document.getElementById('chart-type'),
    seriesList: document.getElementById('series-list'),
    addSeries: document.getElementById('add-series'),
    axisInput: document.getElementById('axis-labels'),
    preview: document.getElementById('preview'),
    htmlOut: document.getElementById('html-out'),
    cssOut: document.getElementById('css-out'),
    copyHtml: document.getElementById('copy-html'),
    copyCss: document.getElementById('copy-css'),
  };

  // Only one series allowed — this is the source of truth
  let series = [{ name: 'Series 1', color: '#8b7bff', values: '20,35,33,30,48,35,66' }];

  function parseValues(str) {
    return str.split(',').map((v) => Number(v.trim())).filter((v) => !isNaN(v));
  }

  function renderSeriesRows() {
    els.seriesList.innerHTML = '';
    series.forEach((s, i) => {
      const row = document.createElement('div');
      row.className = 'series-row';
      row.innerHTML = `
        <input type="color" value="${s.color}" data-role="color" data-i="${i}" aria-label="Series color">
        <input type="text" value="${s.values}" data-role="values" data-i="${i}" placeholder="e.g. 20,35,33,30" aria-label="Series values, comma separated">
      `;
      els.seriesList.appendChild(row);
    });

    // Make the "add" button a Pro upsell – redirect to Pro Dashboard
    els.addSeries.textContent = 'Unlock Multi‑Series (Pro) →';
    els.addSeries.style.borderColor = 'var(--violet)';
    els.addSeries.style.color = 'var(--violet-2)';
    els.addSeries.style.cursor = 'pointer';
  }

  els.seriesList.addEventListener('input', (e) => {
    const i = Number(e.target.dataset.i);
    if (e.target.dataset.role === 'color') series[i].color = e.target.value;
    if (e.target.dataset.role === 'values') series[i].values = e.target.value;
    generate();
  });

  // Redirect to Pro Dashboard when user clicks "Add series"
  els.addSeries.addEventListener('click', () => {
    window.location.href = '/dashboard';
  });

  [els.type, els.axisInput].forEach((el) => el.addEventListener('input', generate));

  function generate() {
    try {
      // 🔒 HARD GUARD: Free tier only allows ONE series
      if (series.length !== 1) {
        throw new Error('Free plan supports only one series. Please upgrade to Pro.');
      }

      const type = els.type.value;
      let result;

      if (type === 'line') {
        const s = series.map((s) => ({ name: s.name, color: s.color, points: parseValues(s.values) }));
        const axisLabels = els.axisInput.value.trim() ? els.axisInput.value.split(',').map((l) => l.trim()) : undefined;
        result = ProvChart.line({ series: s, axisX: axisLabels });
      } else if (type === 'bar') {
        const bars = series[0].values.split(',').map((v, i) => ({
          label: `Item ${i + 1}`,
          value: Number(v.trim()) || 0,
          color: ['#8b7bff', '#4fd8c4', '#f0a860', '#ff5e7d'][i % 4]
        }));
        result = ProvChart.bar({ bars });
      } else if (type === 'gauge') {
        const v = parseValues(series[0].values)[0] || 0;
        result = ProvChart.gauge({ value: v, color: series[0].color });
      }

      els.preview.innerHTML = `<style>${result.css}</style>${result.html}`;
      els.htmlOut.textContent = result.html;
      els.cssOut.textContent = result.css;
    } catch (err) {
      els.preview.innerHTML = `<p style="color:var(--down); font-size:13px;">${err.message}</p>`;
    }
  }

  function wireCopy(button, source) {
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(source.textContent);
        const original = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => (button.textContent = original), 1400);
      } catch (err) {
        // fallback
      }
    });
  }

  wireCopy(els.copyHtml, els.htmlOut);
  wireCopy(els.copyCss, els.cssOut);

  renderSeriesRows();
  generate();
})();
