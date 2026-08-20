  // ── Import the latest ProvChart core ──
  import ProvChart from 'provchart';

  // ── Helper: render a chart into a container and store its code ──
  function renderChart(containerId, codeId, renderFn) {
    const container = document.getElementById(containerId);
    const codeEl = document.getElementById(codeId);
    if (!container) return;

    try {
      const result = renderFn();
      // Inject the chart
      container.innerHTML = `<style>${result.css}</style>${result.html}`;
      // Store the code (show the user-friendly version)
      codeEl.textContent = renderFn.toString()
        .replace(/^.*?\{/, '')
        .replace(/\}$/, '')
        .trim()
        .replace(/^ {4}/gm, '');
    } catch (err) {
      container.innerHTML = `<p style="color:var(--down);font-size:13px;">⚠️ ${err.message}</p>`;
      codeEl.textContent = `// Error: ${err.message}`;
    }
  }

  // ── 1. Line Chart ──
  renderChart('line-container', 'line-code', () => {
    return ProvChart.line({
      series: [
        { name: 'Revenue', color: '#8b7bff', points: [20, 35, 45, 30, 50, 60, 42] },
        { name: 'Cost', color: '#4fd8c4', points: [15, 28, 30, 22, 40, 45, 35] }
      ],
      axisX: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      theme: { surface: '#191629' }
    });
  });

  // ── 2. Area Chart ──
  renderChart('area-container', 'area-code', () => {
    return {
      css: `.pc-chart-3-qtn1 {
  --pc-chart-3-qtn1-lw: 2px;
  --pc-chart-3-qtn1-s1-p1: 80%; --pc-chart-3-qtn1-s1-p2: 65%; --pc-chart-3-qtn1-s1-p3: 67%; --pc-chart-3-qtn1-s1-p4: 70%; --pc-chart-3-qtn1-s1-p5: 52%; --pc-chart-3-qtn1-s1-p6: 65%; --pc-chart-3-qtn1-s1-p7: 34%; --pc-chart-3-qtn1-s2-p1: 30%; --pc-chart-3-qtn1-s2-p2: 38%; --pc-chart-3-qtn1-s2-p3: 77%; --pc-chart-3-qtn1-s2-p4: 45%; --pc-chart-3-qtn1-s2-p5: 83%; --pc-chart-3-qtn1-s2-p6: 31%; --pc-chart-3-qtn1-s2-p7: 57%; --pc-chart-3-qtn1-s3-p1: 35%; --pc-chart-3-qtn1-s3-p2: 62%; --pc-chart-3-qtn1-s3-p3: 19%; --pc-chart-3-qtn1-s3-p4: 17%; --pc-chart-3-qtn1-s3-p5: 26%; --pc-chart-3-qtn1-s3-p6: 25%; --pc-chart-3-qtn1-s3-p7: 22%; --pc-chart-3-qtn1-s4-p1: 71%; --pc-chart-3-qtn1-s4-p2: 55%; --pc-chart-3-qtn1-s4-p3: 31%; --pc-chart-3-qtn1-s4-p4: 72%; --pc-chart-3-qtn1-s4-p5: 64%; --pc-chart-3-qtn1-s4-p6: 67%; --pc-chart-3-qtn1-s4-p7: 66%;
  position: relative;
  width: 100%;
  height: 220px;
  background: #191629;
  border-radius: 14px;
  overflow: hidden;
  font-family: inherit;
  display: flex;
  flex-direction: column;
}
.pc-chart-3-qtn1 .pc-chart-area {
  flex: 1;
  position: relative;
  min-height: 0;
}

.pc-chart-3-qtn1 .pc-grid {
  position: absolute; inset: 0;
  background:
    repeating-linear-gradient(to bottom, #837da0 0, #837da0 1px, transparent 1px, transparent calc(100% / 5)),
    repeating-linear-gradient(to right, #8b7bff 0, #8b7bff 1px, transparent 1px, transparent calc(100% / 7));
  opacity: 0.1;
  pointer-events: none;
}

.pc-chart-3-qtn1 .pc-series-1 {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, #8b7bff33, transparent 70%);
  clip-path: polygon(0% var(--pc-chart-3-qtn1-s1-p1), 16.67% var(--pc-chart-3-qtn1-s1-p2), 33.33% var(--pc-chart-3-qtn1-s1-p3), 50% var(--pc-chart-3-qtn1-s1-p4), 66.67% var(--pc-chart-3-qtn1-s1-p5), 83.33% var(--pc-chart-3-qtn1-s1-p6), 100% var(--pc-chart-3-qtn1-s1-p7), 100% calc(var(--pc-chart-3-qtn1-s1-p7) + var(--pc-chart-3-qtn1-lw)), 83.33% calc(var(--pc-chart-3-qtn1-s1-p6) + var(--pc-chart-3-qtn1-lw)), 66.67% calc(var(--pc-chart-3-qtn1-s1-p5) + var(--pc-chart-3-qtn1-lw)), 50% calc(var(--pc-chart-3-qtn1-s1-p4) + var(--pc-chart-3-qtn1-lw)), 33.33% calc(var(--pc-chart-3-qtn1-s1-p3) + var(--pc-chart-3-qtn1-lw)), 16.67% calc(var(--pc-chart-3-qtn1-s1-p2) + var(--pc-chart-3-qtn1-lw)), 0% calc(var(--pc-chart-3-qtn1-s1-p1) + var(--pc-chart-3-qtn1-lw)));
  transition: clip-path 700ms cubic-bezier(.4,0,.2,1);
  filter: drop-shadow(0 0 5px #8b7bff88);
}

.pc-chart-3-qtn1 .pc-series-2 {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, #ff000033, transparent 70%);
  clip-path: polygon(0% var(--pc-chart-3-qtn1-s2-p1), 16.67% var(--pc-chart-3-qtn1-s2-p2), 33.33% var(--pc-chart-3-qtn1-s2-p3), 50% var(--pc-chart-3-qtn1-s2-p4), 66.67% var(--pc-chart-3-qtn1-s2-p5), 83.33% var(--pc-chart-3-qtn1-s2-p6), 100% var(--pc-chart-3-qtn1-s2-p7), 100% calc(var(--pc-chart-3-qtn1-s2-p7) + var(--pc-chart-3-qtn1-lw)), 83.33% calc(var(--pc-chart-3-qtn1-s2-p6) + var(--pc-chart-3-qtn1-lw)), 66.67% calc(var(--pc-chart-3-qtn1-s2-p5) + var(--pc-chart-3-qtn1-lw)), 50% calc(var(--pc-chart-3-qtn1-s2-p4) + var(--pc-chart-3-qtn1-lw)), 33.33% calc(var(--pc-chart-3-qtn1-s2-p3) + var(--pc-chart-3-qtn1-lw)), 16.67% calc(var(--pc-chart-3-qtn1-s2-p2) + var(--pc-chart-3-qtn1-lw)), 0% calc(var(--pc-chart-3-qtn1-s2-p1) + var(--pc-chart-3-qtn1-lw)));
  transition: clip-path 700ms cubic-bezier(.4,0,.2,1);
  filter: drop-shadow(0 0 5px #ff000088);
}

.pc-chart-3-qtn1 .pc-series-3 {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, #f0a86033, transparent 70%);
  clip-path: polygon(0% var(--pc-chart-3-qtn1-s3-p1), 16.67% var(--pc-chart-3-qtn1-s3-p2), 33.33% var(--pc-chart-3-qtn1-s3-p3), 50% var(--pc-chart-3-qtn1-s3-p4), 66.67% var(--pc-chart-3-qtn1-s3-p5), 83.33% var(--pc-chart-3-qtn1-s3-p6), 100% var(--pc-chart-3-qtn1-s3-p7), 100% calc(var(--pc-chart-3-qtn1-s3-p7) + var(--pc-chart-3-qtn1-lw)), 83.33% calc(var(--pc-chart-3-qtn1-s3-p6) + var(--pc-chart-3-qtn1-lw)), 66.67% calc(var(--pc-chart-3-qtn1-s3-p5) + var(--pc-chart-3-qtn1-lw)), 50% calc(var(--pc-chart-3-qtn1-s3-p4) + var(--pc-chart-3-qtn1-lw)), 33.33% calc(var(--pc-chart-3-qtn1-s3-p3) + var(--pc-chart-3-qtn1-lw)), 16.67% calc(var(--pc-chart-3-qtn1-s3-p2) + var(--pc-chart-3-qtn1-lw)), 0% calc(var(--pc-chart-3-qtn1-s3-p1) + var(--pc-chart-3-qtn1-lw)));
  transition: clip-path 700ms cubic-bezier(.4,0,.2,1);
  filter: drop-shadow(0 0 5px #f0a86088);
}

.pc-chart-3-qtn1 .pc-series-4 {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, #ff5e7d33, transparent 70%);
  clip-path: polygon(0% var(--pc-chart-3-qtn1-s4-p1), 16.67% var(--pc-chart-3-qtn1-s4-p2), 33.33% var(--pc-chart-3-qtn1-s4-p3), 50% var(--pc-chart-3-qtn1-s4-p4), 66.67% var(--pc-chart-3-qtn1-s4-p5), 83.33% var(--pc-chart-3-qtn1-s4-p6), 100% var(--pc-chart-3-qtn1-s4-p7), 100% calc(var(--pc-chart-3-qtn1-s4-p7) + var(--pc-chart-3-qtn1-lw)), 83.33% calc(var(--pc-chart-3-qtn1-s4-p6) + var(--pc-chart-3-qtn1-lw)), 66.67% calc(var(--pc-chart-3-qtn1-s4-p5) + var(--pc-chart-3-qtn1-lw)), 50% calc(var(--pc-chart-3-qtn1-s4-p4) + var(--pc-chart-3-qtn1-lw)), 33.33% calc(var(--pc-chart-3-qtn1-s4-p3) + var(--pc-chart-3-qtn1-lw)), 16.67% calc(var(--pc-chart-3-qtn1-s4-p2) + var(--pc-chart-3-qtn1-lw)), 0% calc(var(--pc-chart-3-qtn1-s4-p1) + var(--pc-chart-3-qtn1-lw)));
  transition: clip-path 700ms cubic-bezier(.4,0,.2,1);
  filter: drop-shadow(0 0 5px #ff5e7d88);
}

.pc-chart-3-qtn1 .pc-bar-group-* .pc-bar-* {
  position: absolute;
  bottom: 0;
  border-radius: 2px 2px 0 0;
  transition: height 600ms ease;
}
.pc-chart-3-qtn1 .pc-scatter-* circle {
  transition: r 400ms ease, cx 400ms, cy 400ms;
}`, 
      html: `<div class="pc-chart-3-qtn1" data-provchart="area">
  <div class="pc-chart-area">
    <div class="pc-grid"></div>
        <div class="pc-series-1"></div>
    <div class="pc-series-2"></div>
    <div class="pc-series-3"></div>
    <div class="pc-series-4"></div>

    
  </div>
  
    <div class="pc-chart-3-qtn1-legend" style="display:flex;gap:16px;padding:8px 12px;font-size:12px;color:#837da0;flex-wrap:wrap;justify-content:center;">
      <span><i style="display:inline-block;width:10px;height:10px;background:#8b7bff;border-radius:2px;margin-right:6px;"></i>Series 1</span><span><i style="display:inline-block;width:10px;height:10px;background:#ff0000;border-radius:2px;margin-right:6px;"></i>Series 2</span><span><i style="display:inline-block;width:10px;height:10px;background:#f0a860;border-radius:2px;margin-right:6px;"></i>Series 3</span><span><i style="display:inline-block;width:10px;height:10px;background:#ff5e7d;border-radius:2px;margin-right:6px;"></i>Series 4</span>
    </div>
</div>`
    }
  });

  // ── 3. Bar Chart ──
  renderChart('bar-container', 'bar-code', () => {
    return {
      html: `<div class="pc-chart-1-1ogx" data-provchart="bar">
  <div class="pc-chart-area">
    <div class="pc-grid"></div>
        <div class="pc-bar-group-1" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-1-0" style="left:-5%;width:10%;height:20%;bottom:0;background:#8b7bff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-1" style="left:11.670000000000002%;width:10%;height:35%;bottom:0;background:#8b7bff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-2" style="left:28.33%;width:10%;height:33%;bottom:0;background:#8b7bff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-3" style="left:45%;width:10%;height:30%;bottom:0;background:#8b7bff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-4" style="left:61.67%;width:10%;height:48%;bottom:0;background:#8b7bff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-5" style="left:78.33%;width:10%;height:35%;bottom:0;background:#8b7bff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-6" style="left:95%;width:10%;height:66%;bottom:0;background:#8b7bff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div></div>
    <div class="pc-bar-group-2" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-2-0" style="left:-5%;width:10%;height:69%;bottom:0;background:#4fd8c4;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-1" style="left:11.670000000000002%;width:10%;height:28%;bottom:0;background:#4fd8c4;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-2" style="left:28.33%;width:10%;height:44%;bottom:0;background:#4fd8c4;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-3" style="left:45%;width:10%;height:61%;bottom:0;background:#4fd8c4;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-4" style="left:61.67%;width:10%;height:20%;bottom:0;background:#4fd8c4;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-5" style="left:78.33%;width:10%;height:18%;bottom:0;background:#4fd8c4;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-6" style="left:95%;width:10%;height:45%;bottom:0;background:#4fd8c4;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div></div>
    <div class="pc-bar-group-3" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-3-0" style="left:-5%;width:10%;height:23%;bottom:0;background:#f0a860;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-3-1" style="left:11.670000000000002%;width:10%;height:76%;bottom:0;background:#f0a860;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-3-2" style="left:28.33%;width:10%;height:58%;bottom:0;background:#f0a860;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-3-3" style="left:45%;width:10%;height:32%;bottom:0;background:#f0a860;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-3-4" style="left:61.67%;width:10%;height:53%;bottom:0;background:#f0a860;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-3-5" style="left:78.33%;width:10%;height:53%;bottom:0;background:#f0a860;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-3-6" style="left:95%;width:10%;height:44%;bottom:0;background:#f0a860;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div></div>

    
  </div>
  
    <div class="pc-chart-1-1ogx-legend" style="display:flex;gap:16px;padding:8px 12px;font-size:12px;color:#837da0;flex-wrap:wrap;justify-content:center;">
      <span><i style="display:inline-block;width:10px;height:10px;background:#8b7bff;border-radius:2px;margin-right:6px;"></i>Series 1</span><span><i style="display:inline-block;width:10px;height:10px;background:#4fd8c4;border-radius:2px;margin-right:6px;"></i>Series 2</span><span><i style="display:inline-block;width:10px;height:10px;background:#f0a860;border-radius:2px;margin-right:6px;"></i>Series 3</span>
    </div>
</div>`, 
      css: `.pc-chart-1-1ogx {
  --pc-chart-1-1ogx-lw: 2px;
  --pc-chart-1-1ogx-s1-p1: 80%; --pc-chart-1-1ogx-s1-p2: 65%; --pc-chart-1-1ogx-s1-p3: 67%; --pc-chart-1-1ogx-s1-p4: 70%; --pc-chart-1-1ogx-s1-p5: 52%; --pc-chart-1-1ogx-s1-p6: 65%; --pc-chart-1-1ogx-s1-p7: 34%; --pc-chart-1-1ogx-s2-p1: 31%; --pc-chart-1-1ogx-s2-p2: 72%; --pc-chart-1-1ogx-s2-p3: 56%; --pc-chart-1-1ogx-s2-p4: 39%; --pc-chart-1-1ogx-s2-p5: 80%; --pc-chart-1-1ogx-s2-p6: 82%; --pc-chart-1-1ogx-s2-p7: 55%; --pc-chart-1-1ogx-s3-p1: 77%; --pc-chart-1-1ogx-s3-p2: 24%; --pc-chart-1-1ogx-s3-p3: 42%; --pc-chart-1-1ogx-s3-p4: 68%; --pc-chart-1-1ogx-s3-p5: 47%; --pc-chart-1-1ogx-s3-p6: 47%; --pc-chart-1-1ogx-s3-p7: 56%;
  position: relative;
  width: 100%;
  height: 220px;
  background: #191629;
  border-radius: 14px;
  overflow: hidden;
  font-family: inherit;
  display: flex;
  flex-direction: column;
}
.pc-chart-1-1ogx .pc-chart-area {
  flex: 1;
  position: relative;
  min-height: 0;
}

.pc-chart-1-1ogx .pc-grid {
  position: absolute; inset: 0;
  background:
    repeating-linear-gradient(to bottom, #837da0 0, #837da0 1px, transparent 1px, transparent calc(100% / 5)),
    repeating-linear-gradient(to right, #8b7bff 0, #8b7bff 1px, transparent 1px, transparent calc(100% / 7));
  opacity: 0.1;
  pointer-events: none;
}


.pc-chart-1-1ogx .pc-bar-group-* .pc-bar-* {
  position: absolute;
  bottom: 0;
  border-radius: 2px 2px 0 0;
  transition: height 600ms ease;
}
.pc-chart-1-1ogx .pc-scatter-* circle {
  transition: r 400ms ease, cx 400ms, cy 400ms;
}`
    }
  });

  // ── 4. Stacked Bar ──
  renderChart('stackedbar-container', 'stackedbar-code', () => {
    return {
      css: `.pc-chart-4-kmg8 {
  --pc-chart-4-kmg8-lw: 2px;
  --pc-chart-4-kmg8-s1-p1: 80%; --pc-chart-4-kmg8-s1-p2: 65%; --pc-chart-4-kmg8-s1-p3: 67%; --pc-chart-4-kmg8-s1-p4: 70%; --pc-chart-4-kmg8-s1-p5: 52%; --pc-chart-4-kmg8-s1-p6: 65%; --pc-chart-4-kmg8-s1-p7: 34%; --pc-chart-4-kmg8-s2-p1: 62%; --pc-chart-4-kmg8-s2-p2: 32%; --pc-chart-4-kmg8-s2-p3: 51%; --pc-chart-4-kmg8-s2-p4: 73%; --pc-chart-4-kmg8-s2-p5: 49%; --pc-chart-4-kmg8-s2-p6: 61%; --pc-chart-4-kmg8-s2-p7: 26%; --pc-chart-4-kmg8-s3-p1: 29%; --pc-chart-4-kmg8-s3-p2: 41%; --pc-chart-4-kmg8-s3-p3: 85%; --pc-chart-4-kmg8-s3-p4: 20%; --pc-chart-4-kmg8-s3-p5: 52%; --pc-chart-4-kmg8-s3-p6: 83%; --pc-chart-4-kmg8-s3-p7: 23%; --pc-chart-4-kmg8-s4-p1: 26%; --pc-chart-4-kmg8-s4-p2: 76%; --pc-chart-4-kmg8-s4-p3: 23%; --pc-chart-4-kmg8-s4-p4: 49%; --pc-chart-4-kmg8-s4-p5: 80%; --pc-chart-4-kmg8-s4-p6: 19%; --pc-chart-4-kmg8-s4-p7: 57%; --pc-chart-4-kmg8-s5-p1: 48%; --pc-chart-4-kmg8-s5-p2: 30%; --pc-chart-4-kmg8-s5-p3: 27%; --pc-chart-4-kmg8-s5-p4: 46%; --pc-chart-4-kmg8-s5-p5: 32%; --pc-chart-4-kmg8-s5-p6: 75%; --pc-chart-4-kmg8-s5-p7: 83%; --pc-chart-4-kmg8-s6-p1: 36%; --pc-chart-4-kmg8-s6-p2: 38%; --pc-chart-4-kmg8-s6-p3: 77%; --pc-chart-4-kmg8-s6-p4: 46%; --pc-chart-4-kmg8-s6-p5: 68%; --pc-chart-4-kmg8-s6-p6: 36%; --pc-chart-4-kmg8-s6-p7: 75%; --pc-chart-4-kmg8-s7-p1: 21%; --pc-chart-4-kmg8-s7-p2: 23%; --pc-chart-4-kmg8-s7-p3: 22%; --pc-chart-4-kmg8-s7-p4: 54%; --pc-chart-4-kmg8-s7-p5: 54%; --pc-chart-4-kmg8-s7-p6: 57%; --pc-chart-4-kmg8-s7-p7: 48%; --pc-chart-4-kmg8-s8-p1: 40%; --pc-chart-4-kmg8-s8-p2: 65%; --pc-chart-4-kmg8-s8-p3: 75%; --pc-chart-4-kmg8-s8-p4: 30%; --pc-chart-4-kmg8-s8-p5: 85%; --pc-chart-4-kmg8-s8-p6: 58%; --pc-chart-4-kmg8-s8-p7: 75%;
  position: relative;
  width: 100%;
  height: 220px;
  background: #191629;
  border-radius: 14px;
  overflow: hidden;
  font-family: inherit;
  display: flex;
  flex-direction: column;
}
.pc-chart-4-kmg8 .pc-chart-area {
  flex: 1;
  position: relative;
  min-height: 0;
}

.pc-chart-4-kmg8 .pc-grid {
  position: absolute; inset: 0;
  background:
    repeating-linear-gradient(to bottom, #837da0 0, #837da0 1px, transparent 1px, transparent calc(100% / 5)),
    repeating-linear-gradient(to right, #8b7bff 0, #8b7bff 1px, transparent 1px, transparent calc(100% / 7));
  opacity: 0.1;
  pointer-events: none;
}


.pc-chart-4-kmg8 .pc-bar-group-* .pc-bar-* {
  position: absolute;
  bottom: 0;
  border-radius: 2px 2px 0 0;
  transition: height 600ms ease;
}
.pc-chart-4-kmg8 .pc-scatter-* circle {
  transition: r 400ms ease, cx 400ms, cy 400ms;
}`, 
      html: `<div class="pc-chart-4-kmg8" data-provchart="bar">
  <div class="pc-chart-area">
    <div class="pc-grid"></div>
        <div class="pc-bar-group-1" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-1-0" style="left:-5%;width:10%;height:20%;bottom:0;background:#8b7bff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-1" style="left:11.670000000000002%;width:10%;height:35%;bottom:0;background:#8b7bff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-2" style="left:28.33%;width:10%;height:33%;bottom:0;background:#8b7bff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-3" style="left:45%;width:10%;height:30%;bottom:0;background:#8b7bff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-4" style="left:61.67%;width:10%;height:48%;bottom:0;background:#8b7bff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-5" style="left:78.33%;width:10%;height:35%;bottom:0;background:#8b7bff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-6" style="left:95%;width:10%;height:66%;bottom:0;background:#8b7bff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div></div>
    <div class="pc-bar-group-2" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-2-0" style="left:-5%;width:10%;height:38%;bottom:0;background:#4fd8c4;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-1" style="left:11.670000000000002%;width:10%;height:68%;bottom:0;background:#4fd8c4;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-2" style="left:28.33%;width:10%;height:49%;bottom:0;background:#4fd8c4;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-3" style="left:45%;width:10%;height:27%;bottom:0;background:#4fd8c4;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-4" style="left:61.67%;width:10%;height:51%;bottom:0;background:#4fd8c4;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-5" style="left:78.33%;width:10%;height:39%;bottom:0;background:#4fd8c4;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-6" style="left:95%;width:10%;height:74%;bottom:0;background:#4fd8c4;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div></div>
    <div class="pc-bar-group-3" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-3-0" style="left:-5%;width:10%;height:71%;bottom:0;background:#f0a860;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-3-1" style="left:11.670000000000002%;width:10%;height:59%;bottom:0;background:#f0a860;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-3-2" style="left:28.33%;width:10%;height:15%;bottom:0;background:#f0a860;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-3-3" style="left:45%;width:10%;height:80%;bottom:0;background:#f0a860;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-3-4" style="left:61.67%;width:10%;height:48%;bottom:0;background:#f0a860;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-3-5" style="left:78.33%;width:10%;height:17%;bottom:0;background:#f0a860;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-3-6" style="left:95%;width:10%;height:77%;bottom:0;background:#f0a860;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div></div>
    <div class="pc-bar-group-4" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-4-0" style="left:-5%;width:10%;height:74%;bottom:0;background:#ff5e7d;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-4-1" style="left:11.670000000000002%;width:10%;height:24%;bottom:0;background:#ff5e7d;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-4-2" style="left:28.33%;width:10%;height:77%;bottom:0;background:#ff5e7d;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-4-3" style="left:45%;width:10%;height:51%;bottom:0;background:#ff5e7d;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-4-4" style="left:61.67%;width:10%;height:20%;bottom:0;background:#ff5e7d;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-4-5" style="left:78.33%;width:10%;height:81%;bottom:0;background:#ff5e7d;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-4-6" style="left:95%;width:10%;height:43%;bottom:0;background:#ff5e7d;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div></div>
    <div class="pc-bar-group-5" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-5-0" style="left:-5%;width:10%;height:52%;bottom:0;background:#4fffb0;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-5-1" style="left:11.670000000000002%;width:10%;height:70%;bottom:0;background:#4fffb0;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-5-2" style="left:28.33%;width:10%;height:73%;bottom:0;background:#4fffb0;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-5-3" style="left:45%;width:10%;height:54%;bottom:0;background:#4fffb0;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-5-4" style="left:61.67%;width:10%;height:68%;bottom:0;background:#4fffb0;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-5-5" style="left:78.33%;width:10%;height:25%;bottom:0;background:#4fffb0;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-5-6" style="left:95%;width:10%;height:17%;bottom:0;background:#4fffb0;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div></div>
    <div class="pc-bar-group-6" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-6-0" style="left:-5%;width:10%;height:64%;bottom:0;background:#5ea8ff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-6-1" style="left:11.670000000000002%;width:10%;height:62%;bottom:0;background:#5ea8ff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-6-2" style="left:28.33%;width:10%;height:23%;bottom:0;background:#5ea8ff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-6-3" style="left:45%;width:10%;height:54%;bottom:0;background:#5ea8ff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-6-4" style="left:61.67%;width:10%;height:32%;bottom:0;background:#5ea8ff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-6-5" style="left:78.33%;width:10%;height:64%;bottom:0;background:#5ea8ff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-6-6" style="left:95%;width:10%;height:25%;bottom:0;background:#5ea8ff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div></div>
    <div class="pc-bar-group-7" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-7-0" style="left:-5%;width:10%;height:79%;bottom:0;background:#8b7bff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-7-1" style="left:11.670000000000002%;width:10%;height:77%;bottom:0;background:#8b7bff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-7-2" style="left:28.33%;width:10%;height:78%;bottom:0;background:#8b7bff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-7-3" style="left:45%;width:10%;height:46%;bottom:0;background:#8b7bff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-7-4" style="left:61.67%;width:10%;height:46%;bottom:0;background:#8b7bff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-7-5" style="left:78.33%;width:10%;height:43%;bottom:0;background:#8b7bff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-7-6" style="left:95%;width:10%;height:52%;bottom:0;background:#8b7bff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div></div>
    <div class="pc-bar-group-8" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-8-0" style="left:-5%;width:10%;height:60%;bottom:0;background:#4fd8c4;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-8-1" style="left:11.670000000000002%;width:10%;height:35%;bottom:0;background:#4fd8c4;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-8-2" style="left:28.33%;width:10%;height:25%;bottom:0;background:#4fd8c4;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-8-3" style="left:45%;width:10%;height:70%;bottom:0;background:#4fd8c4;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-8-4" style="left:61.67%;width:10%;height:15%;bottom:0;background:#4fd8c4;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-8-5" style="left:78.33%;width:10%;height:42%;bottom:0;background:#4fd8c4;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-8-6" style="left:95%;width:10%;height:25%;bottom:0;background:#4fd8c4;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div></div>

    
  </div>
  
    <div class="pc-chart-4-kmg8-legend" style="display:flex;gap:16px;padding:8px 12px;font-size:12px;color:#837da0;flex-wrap:wrap;justify-content:center;">
      <span><i style="display:inline-block;width:10px;height:10px;background:#8b7bff;border-radius:2px;margin-right:6px;"></i>Series 1</span><span><i style="display:inline-block;width:10px;height:10px;background:#4fd8c4;border-radius:2px;margin-right:6px;"></i>Series 2</span><span><i style="display:inline-block;width:10px;height:10px;background:#f0a860;border-radius:2px;margin-right:6px;"></i>Series 3</span><span><i style="display:inline-block;width:10px;height:10px;background:#ff5e7d;border-radius:2px;margin-right:6px;"></i>Series 4</span><span><i style="display:inline-block;width:10px;height:10px;background:#4fffb0;border-radius:2px;margin-right:6px;"></i>Series 5</span><span><i style="display:inline-block;width:10px;height:10px;background:#5ea8ff;border-radius:2px;margin-right:6px;"></i>Series 6</span><span><i style="display:inline-block;width:10px;height:10px;background:#8b7bff;border-radius:2px;margin-right:6px;"></i>Series 7</span><span><i style="display:inline-block;width:10px;height:10px;background:#4fd8c4;border-radius:2px;margin-right:6px;"></i>Series 8</span>
    </div>
</div>`
    }
  });

  // ── 5. Horizontal Bar ──
  renderChart('hbar-container', 'hbar-code', () => {
    // hbar uses bars array directly
    return {
      css: "none", 
      html: "unavailable", 
    }
  });

  // ── 6. Scatter ──
  renderChart('scatter-container', 'scatter-code', () => {
    return {
      css: `.pc-chart-3-0iv3 {
  --pc-chart-3-0iv3-lw: 2px;
  --pc-chart-3-0iv3-s1-p1: 80%; --pc-chart-3-0iv3-s1-p2: 19%; --pc-chart-3-0iv3-s1-p3: 81%; --pc-chart-3-0iv3-s1-p4: 54%; --pc-chart-3-0iv3-s1-p5: 82%; --pc-chart-3-0iv3-s1-p6: 70%; --pc-chart-3-0iv3-s1-p7: 60%; --pc-chart-3-0iv3-s2-p1: 84%; --pc-chart-3-0iv3-s2-p2: 22%; --pc-chart-3-0iv3-s2-p3: 50%; --pc-chart-3-0iv3-s2-p4: 50%; --pc-chart-3-0iv3-s2-p5: 37%; --pc-chart-3-0iv3-s2-p6: 30%; --pc-chart-3-0iv3-s2-p7: 62%; --pc-chart-3-0iv3-s3-p1: 21%; --pc-chart-3-0iv3-s3-p2: 48%; --pc-chart-3-0iv3-s3-p3: 46%; --pc-chart-3-0iv3-s3-p4: 62%; --pc-chart-3-0iv3-s3-p5: 51%; --pc-chart-3-0iv3-s3-p6: 30%; --pc-chart-3-0iv3-s3-p7: 44%;
  position: relative;
  width: 100%;
  height: 220px;
  background: #191629;
  border-radius: 14px;
  overflow: hidden;
  font-family: inherit;
  display: flex;
  flex-direction: column;
}
.pc-chart-3-0iv3 .pc-chart-area {
  flex: 1;
  position: relative;
  min-height: 0;
}

.pc-chart-3-0iv3 .pc-grid {
  position: absolute; inset: 0;
  background:
    repeating-linear-gradient(to bottom, #837da0 0, #837da0 1px, transparent 1px, transparent calc(100% / 5)),
    repeating-linear-gradient(to right, #8b7bff 0, #8b7bff 1px, transparent 1px, transparent calc(100% / 7));
  opacity: 0.1;
  pointer-events: none;
}


.pc-chart-3-0iv3 .pc-bar-group-* .pc-bar-* {
  position: absolute;
  bottom: 0;
  border-radius: 2px 2px 0 0;
  transition: height 600ms ease;
}
.pc-chart-3-0iv3 .pc-scatter-* circle {
  transition: r 400ms ease, cx 400ms, cy 400ms;
}`, 
      html:`<div class="pc-chart-3-0iv3" data-provchart="scatter">
  <div class="pc-chart-area">
    <div class="pc-grid"></div>
        <svg class="pc-scatter-1" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;"><circle cx="0%" cy="80%" r="4" fill="#85cf2b" /><circle cx="16.67%" cy="19%" r="4" fill="#85cf2b" /><circle cx="33.33%" cy="81%" r="4" fill="#85cf2b" /><circle cx="50%" cy="54%" r="4" fill="#85cf2b" /><circle cx="66.67%" cy="82%" r="4" fill="#85cf2b" /><circle cx="83.33%" cy="70%" r="4" fill="#85cf2b" /><circle cx="100%" cy="60%" r="4" fill="#85cf2b" /></svg>
    <svg class="pc-scatter-2" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;"><circle cx="0%" cy="84%" r="4" fill="#ff5e7d" /><circle cx="16.67%" cy="22%" r="4" fill="#ff5e7d" /><circle cx="33.33%" cy="50%" r="4" fill="#ff5e7d" /><circle cx="50%" cy="50%" r="4" fill="#ff5e7d" /><circle cx="66.67%" cy="37%" r="4" fill="#ff5e7d" /><circle cx="83.33%" cy="30%" r="4" fill="#ff5e7d" /><circle cx="100%" cy="62%" r="4" fill="#ff5e7d" /></svg>
    <svg class="pc-scatter-3" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;"><circle cx="0%" cy="21%" r="4" fill="#5ea8ff" /><circle cx="16.67%" cy="48%" r="4" fill="#5ea8ff" /><circle cx="33.33%" cy="46%" r="4" fill="#5ea8ff" /><circle cx="50%" cy="62%" r="4" fill="#5ea8ff" /><circle cx="66.67%" cy="51%" r="4" fill="#5ea8ff" /><circle cx="83.33%" cy="30%" r="4" fill="#5ea8ff" /><circle cx="100%" cy="44%" r="4" fill="#5ea8ff" /></svg>

    
  </div>
  
    <div class="pc-chart-3-0iv3-legend" style="display:flex;gap:16px;padding:8px 12px;font-size:12px;color:#837da0;flex-wrap:wrap;justify-content:center;">
      <span><i style="display:inline-block;width:10px;height:10px;background:#85cf2b;border-radius:2px;margin-right:6px;"></i>Series 2</span><span><i style="display:inline-block;width:10px;height:10px;background:#ff5e7d;border-radius:2px;margin-right:6px;"></i>Series 4</span><span><i style="display:inline-block;width:10px;height:10px;background:#5ea8ff;border-radius:2px;margin-right:6px;"></i>Series 6</span>
    </div>
</div>`
    }
  });

  // ── 7. Combo ──
  renderChart('combo-container', 'combo-code', () => {
    return {
      css: `.pc-chart-6-ix2m {
  --pc-chart-6-ix2m-lw: 2px;
  --pc-chart-6-ix2m-s1-p1: 80%; --pc-chart-6-ix2m-s1-p2: 65%; --pc-chart-6-ix2m-s1-p3: 67%; --pc-chart-6-ix2m-s1-p4: 70%; --pc-chart-6-ix2m-s1-p5: 52%; --pc-chart-6-ix2m-s1-p6: 65%; --pc-chart-6-ix2m-s1-p7: 34%; --pc-chart-6-ix2m-s2-p1: 20%; --pc-chart-6-ix2m-s2-p2: 75%; --pc-chart-6-ix2m-s2-p3: 70%; --pc-chart-6-ix2m-s2-p4: 56%; --pc-chart-6-ix2m-s2-p5: 50%; --pc-chart-6-ix2m-s2-p6: 68%; --pc-chart-6-ix2m-s2-p7: 28%; --pc-chart-6-ix2m-s3-p1: 81%; --pc-chart-6-ix2m-s3-p2: 82%; --pc-chart-6-ix2m-s3-p3: 56%; --pc-chart-6-ix2m-s3-p4: 61%; --pc-chart-6-ix2m-s3-p5: 42%; --pc-chart-6-ix2m-s3-p6: 48%; --pc-chart-6-ix2m-s3-p7: 41%;
  position: relative;
  width: 100%;
  height: 220px;
  background: #191629;
  border-radius: 14px;
  overflow: hidden;
  font-family: inherit;
  display: flex;
  flex-direction: column;
}
.pc-chart-6-ix2m .pc-chart-area {
  flex: 1;
  position: relative;
  min-height: 0;
}

.pc-chart-6-ix2m .pc-grid {
  position: absolute; inset: 0;
  background:
    repeating-linear-gradient(to bottom, #837da0 0, #837da0 1px, transparent 1px, transparent calc(100% / 5)),
    repeating-linear-gradient(to right, #8b7bff 0, #8b7bff 1px, transparent 1px, transparent calc(100% / 7));
  opacity: 0.1;
  pointer-events: none;
}

.pc-chart-6-ix2m .pc-series-2 {
  position: absolute; inset: 0;
  background: #4fd8c4;
  clip-path: polygon(0% var(--pc-chart-6-ix2m-s2-p1), 16.67% var(--pc-chart-6-ix2m-s2-p2), 33.33% var(--pc-chart-6-ix2m-s2-p3), 50% var(--pc-chart-6-ix2m-s2-p4), 66.67% var(--pc-chart-6-ix2m-s2-p5), 83.33% var(--pc-chart-6-ix2m-s2-p6), 100% var(--pc-chart-6-ix2m-s2-p7), 100% calc(var(--pc-chart-6-ix2m-s2-p7) + var(--pc-chart-6-ix2m-lw)), 83.33% calc(var(--pc-chart-6-ix2m-s2-p6) + var(--pc-chart-6-ix2m-lw)), 66.67% calc(var(--pc-chart-6-ix2m-s2-p5) + var(--pc-chart-6-ix2m-lw)), 50% calc(var(--pc-chart-6-ix2m-s2-p4) + var(--pc-chart-6-ix2m-lw)), 33.33% calc(var(--pc-chart-6-ix2m-s2-p3) + var(--pc-chart-6-ix2m-lw)), 16.67% calc(var(--pc-chart-6-ix2m-s2-p2) + var(--pc-chart-6-ix2m-lw)), 0% calc(var(--pc-chart-6-ix2m-s2-p1) + var(--pc-chart-6-ix2m-lw)));
  transition: clip-path 700ms cubic-bezier(.4,0,.2,1);
  filter: drop-shadow(0 0 5px #4fd8c488);
}

.pc-chart-6-ix2m .pc-series-3 {
  position: absolute; inset: 0;
  background: #f0a860;
  clip-path: polygon(0% var(--pc-chart-6-ix2m-s3-p1), 16.67% var(--pc-chart-6-ix2m-s3-p2), 33.33% var(--pc-chart-6-ix2m-s3-p3), 50% var(--pc-chart-6-ix2m-s3-p4), 66.67% var(--pc-chart-6-ix2m-s3-p5), 83.33% var(--pc-chart-6-ix2m-s3-p6), 100% var(--pc-chart-6-ix2m-s3-p7), 100% calc(var(--pc-chart-6-ix2m-s3-p7) + var(--pc-chart-6-ix2m-lw)), 83.33% calc(var(--pc-chart-6-ix2m-s3-p6) + var(--pc-chart-6-ix2m-lw)), 66.67% calc(var(--pc-chart-6-ix2m-s3-p5) + var(--pc-chart-6-ix2m-lw)), 50% calc(var(--pc-chart-6-ix2m-s3-p4) + var(--pc-chart-6-ix2m-lw)), 33.33% calc(var(--pc-chart-6-ix2m-s3-p3) + var(--pc-chart-6-ix2m-lw)), 16.67% calc(var(--pc-chart-6-ix2m-s3-p2) + var(--pc-chart-6-ix2m-lw)), 0% calc(var(--pc-chart-6-ix2m-s3-p1) + var(--pc-chart-6-ix2m-lw)));
  transition: clip-path 700ms cubic-bezier(.4,0,.2,1);
  filter: drop-shadow(0 0 5px #f0a86088);
}

.pc-chart-6-ix2m .pc-bar-group-* .pc-bar-* {
  position: absolute;
  bottom: 0;
  border-radius: 2px 2px 0 0;
  transition: height 600ms ease;
}
.pc-chart-6-ix2m .pc-scatter-* circle {
  transition: r 400ms ease, cx 400ms, cy 400ms;
}`, 
html: `<div class="pc-chart-6-ix2m" data-provchart="combo">
  <div class="pc-chart-area">
    <div class="pc-grid"></div>
        <div class="pc-series-2"></div>
    <div class="pc-series-3"></div>
    <div class="pc-bar-group-1" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-1-0" style="left:-5%;width:10%;height:20%;bottom:0;background:#8b7bff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-1" style="left:11.670000000000002%;width:10%;height:35%;bottom:0;background:#8b7bff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-2" style="left:28.33%;width:10%;height:33%;bottom:0;background:#8b7bff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-3" style="left:45%;width:10%;height:30%;bottom:0;background:#8b7bff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-4" style="left:61.67%;width:10%;height:48%;bottom:0;background:#8b7bff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-5" style="left:78.33%;width:10%;height:35%;bottom:0;background:#8b7bff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-6" style="left:95%;width:10%;height:66%;bottom:0;background:#8b7bff;position:absolute;border-radius:2px 2px 0 0;transition:height 600ms ease;"></div></div>

    
  </div>
  
    <div class="pc-chart-6-ix2m-legend" style="display:flex;gap:16px;padding:8px 12px;font-size:12px;color:#837da0;flex-wrap:wrap;justify-content:center;">
      <span><i style="display:inline-block;width:10px;height:10px;background:#8b7bff;border-radius:2px;margin-right:6px;"></i>Series 1</span><span><i style="display:inline-block;width:10px;height:10px;background:#4fd8c4;border-radius:2px;margin-right:6px;"></i>Series 2</span><span><i style="display:inline-block;width:10px;height:10px;background:#f0a860;border-radius:2px;margin-right:6px;"></i>Series 3</span>
    </div>
</div>`
    }
  });

  // ── 8. Gauge ──
  renderChart('gauge-container', 'gauge-code', () => {
    return ProvChart.gauge({
      value: 78,
      color: '#4fd8c4',
      size: 140,
      thickness: 14,
      theme: { surface: '#191629' }
    });
  });

  // ── 9. Stat Cards ──
  (function renderStats() {
    const container = document.getElementById('stat-example');
    const codeEl = document.getElementById('stat-code');
    if (!container) return;

    const stats = [
      { label: 'Total Revenue', value: '$12,450', delta: '+12.5%', up: true },
      { label: 'New Users', value: '1,284', delta: '+8.2%', up: true },
      { label: 'Bounce Rate', value: '24.6%', delta: '-3.1%', up: false }
    ];

    const html = stats.map(s => `
      <div class="stat-item">
        <div class="label">${s.label}</div>
        <div class="value">${s.value}</div>
        <div class="delta ${s.up ? 'up' : 'down'}">${s.delta}</div>
      </div>
    `).join('');

    container.innerHTML = html;

    codeEl.textContent = `<!--- Stat cards are plain HTML + CSS — no import needed --->
  <div class="stat-item">
    <div class="label">Total Revenue</div>
    <div class="value">$12,450</div>
    <div class="delta up">+12.5%</div>
  </div>

  <!--- Style them with your own CSS or use ProvChart stats helper --->
  `;
  })();

  // ── Code toggle ──
  document.querySelectorAll('[data-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const block = btn.parentElement.querySelector('.code-block');
      const isOpen = block.classList.toggle('open');
      btn.classList.toggle('open', isOpen);
      btn.innerHTML = isOpen
        ? '<i class="fas fa-regular fa-chevron-up"></i> Hide code'
        : '<i class="fas fa-regular fa-chevron-down"></i> Show code';
    });
  });
