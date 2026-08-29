/**
 * gallery.js — static previews + copyable API examples
 * Previews: paste html/css generated from Pro Dashboard or /api/v1/generate
 * Code panels: what users actually run with their API key
 */

const API = 'https://provchart-api.devtem.org';
const KEY = 'YOUR_API_KEY';

// ── Preview snapshots: fill these once from a successful generate ──
// Keep ONLY html + css here (from API response or dashboard copy).
const PREVIEWS = {
  line: {
    html: `<div class="pc-chart-3-fr0u" data-provchart="line" data-pc-s1="1020,535,1033,1030,2048,1035,1900" data-pc-s2="817,1907,2099,1251,1860,1262,1857" data-pc-s3="994,1374,378,828,1799,589,218">
  <div class="pc-chart-row">
    <div class="pc-chart-3-fr0u-axis-y"><span style="position:absolute;left:0;right:4px;top:0%;transform:translateY(-50%);text-align:right;">2.5k</span><span style="position:absolute;left:0;right:4px;top:20%;transform:translateY(-50%);text-align:right;">2.02k</span><span style="position:absolute;left:0;right:4px;top:40%;transform:translateY(-50%);text-align:right;">1.54k</span><span style="position:absolute;left:0;right:4px;top:60%;transform:translateY(-50%);text-align:right;">1.06k</span><span style="position:absolute;left:0;right:4px;top:80%;transform:translateY(-50%);text-align:right;">580</span><span style="position:absolute;left:0;right:4px;top:100%;transform:translateY(-50%);text-align:right;">100</span></div>
    <div class="pc-chart-area">
      <div class="pc-grid"></div>
          <div class="pc-series-1"></div>
    <div class="pc-series-2"></div>
    <div class="pc-series-3"></div>

      
    </div>
  </div>
  
    <div class="pc-chart-3-fr0u-legend" style="display:flex;gap:16px;padding:8px 12px;font-size:12px;color:#837da0;flex-wrap:wrap;justify-content:center;">
      <span><i style="display:inline-block;width:10px;height:10px;background:#8b7bff;border-radius:2px;margin-right:6px;"></i>Series 1</span><span><i style="display:inline-block;width:10px;height:10px;background:#4fd8c4;border-radius:2px;margin-right:6px;"></i>Series 2</span><span><i style="display:inline-block;width:10px;height:10px;background:#f0a860;border-radius:2px;margin-right:6px;"></i>Series 3</span>
    </div>
</div>`, 
    css: `.pc-chart-3-fr0u {
  --pc-chart-3-fr0u-lw: 2px;
  --pc-chart-3-fr0u-s1-p1: 61.67%; --pc-chart-3-fr0u-s1-p2: 81.88%; --pc-chart-3-fr0u-s1-p3: 61.13%; --pc-chart-3-fr0u-s1-p4: 61.25%; --pc-chart-3-fr0u-s1-p5: 18.83%; --pc-chart-3-fr0u-s1-p6: 61.04%; --pc-chart-3-fr0u-s1-p7: 25%; --pc-chart-3-fr0u-s2-p1: 70.13%; --pc-chart-3-fr0u-s2-p2: 24.71%; --pc-chart-3-fr0u-s2-p3: 16.71%; --pc-chart-3-fr0u-s2-p4: 52.04%; --pc-chart-3-fr0u-s2-p5: 26.67%; --pc-chart-3-fr0u-s2-p6: 51.58%; --pc-chart-3-fr0u-s2-p7: 26.79%; --pc-chart-3-fr0u-s3-p1: 62.75%; --pc-chart-3-fr0u-s3-p2: 46.92%; --pc-chart-3-fr0u-s3-p3: 88.42%; --pc-chart-3-fr0u-s3-p4: 69.67%; --pc-chart-3-fr0u-s3-p5: 29.21%; --pc-chart-3-fr0u-s3-p6: 79.63%; --pc-chart-3-fr0u-s3-p7: 95.08%;
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
.pc-chart-3-fr0u .pc-chart-row {
  flex: 1;
  display: flex;
  min-height: 0;
}
.pc-chart-3-fr0u .pc-chart-area {
  flex: 1;
  position: relative;
  min-height: 0;
  min-width: 0;
}

.pc-chart-3-fr0u-axis-y {
  position: relative;
  width: 38px;
  flex: none;
  font-size: 10px;
  color: #837da0;
  font-variant-numeric: tabular-nums;
}

.pc-chart-3-fr0u .pc-grid {
  position: absolute; inset: 0;
  background:
    repeating-linear-gradient(to bottom, #837da0 0, #837da0 1px, transparent 1px, transparent calc(100% / 5)),
    repeating-linear-gradient(to right, #8b7bff 0, #8b7bff 1px, transparent 1px, transparent calc(100% / 7));
  opacity: 0.1;
  pointer-events: none;
}

.pc-chart-3-fr0u .pc-series-1 {
  position: absolute; inset: 0;
  background: #8b7bff;
  clip-path: polygon(0% var(--pc-chart-3-fr0u-s1-p1), 16.67% var(--pc-chart-3-fr0u-s1-p2), 33.33% var(--pc-chart-3-fr0u-s1-p3), 50% var(--pc-chart-3-fr0u-s1-p4), 66.67% var(--pc-chart-3-fr0u-s1-p5), 83.33% var(--pc-chart-3-fr0u-s1-p6), 100% var(--pc-chart-3-fr0u-s1-p7), 100% calc(var(--pc-chart-3-fr0u-s1-p7) + var(--pc-chart-3-fr0u-lw)), 83.33% calc(var(--pc-chart-3-fr0u-s1-p6) + var(--pc-chart-3-fr0u-lw)), 66.67% calc(var(--pc-chart-3-fr0u-s1-p5) + var(--pc-chart-3-fr0u-lw)), 50% calc(var(--pc-chart-3-fr0u-s1-p4) + var(--pc-chart-3-fr0u-lw)), 33.33% calc(var(--pc-chart-3-fr0u-s1-p3) + var(--pc-chart-3-fr0u-lw)), 16.67% calc(var(--pc-chart-3-fr0u-s1-p2) + var(--pc-chart-3-fr0u-lw)), 0% calc(var(--pc-chart-3-fr0u-s1-p1) + var(--pc-chart-3-fr0u-lw)));
  transition: clip-path 700ms cubic-bezier(.4,0,.2,1);
  filter: drop-shadow(0 0 5px #8b7bff88);
}

.pc-chart-3-fr0u .pc-series-2 {
  position: absolute; inset: 0;
  background: #4fd8c4;
  clip-path: polygon(0% var(--pc-chart-3-fr0u-s2-p1), 16.67% var(--pc-chart-3-fr0u-s2-p2), 33.33% var(--pc-chart-3-fr0u-s2-p3), 50% var(--pc-chart-3-fr0u-s2-p4), 66.67% var(--pc-chart-3-fr0u-s2-p5), 83.33% var(--pc-chart-3-fr0u-s2-p6), 100% var(--pc-chart-3-fr0u-s2-p7), 100% calc(var(--pc-chart-3-fr0u-s2-p7) + var(--pc-chart-3-fr0u-lw)), 83.33% calc(var(--pc-chart-3-fr0u-s2-p6) + var(--pc-chart-3-fr0u-lw)), 66.67% calc(var(--pc-chart-3-fr0u-s2-p5) + var(--pc-chart-3-fr0u-lw)), 50% calc(var(--pc-chart-3-fr0u-s2-p4) + var(--pc-chart-3-fr0u-lw)), 33.33% calc(var(--pc-chart-3-fr0u-s2-p3) + var(--pc-chart-3-fr0u-lw)), 16.67% calc(var(--pc-chart-3-fr0u-s2-p2) + var(--pc-chart-3-fr0u-lw)), 0% calc(var(--pc-chart-3-fr0u-s2-p1) + var(--pc-chart-3-fr0u-lw)));
  transition: clip-path 700ms cubic-bezier(.4,0,.2,1);
  filter: drop-shadow(0 0 5px #4fd8c488);
}

.pc-chart-3-fr0u .pc-series-3 {
  position: absolute; inset: 0;
  background: #f0a860;
  clip-path: polygon(0% var(--pc-chart-3-fr0u-s3-p1), 16.67% var(--pc-chart-3-fr0u-s3-p2), 33.33% var(--pc-chart-3-fr0u-s3-p3), 50% var(--pc-chart-3-fr0u-s3-p4), 66.67% var(--pc-chart-3-fr0u-s3-p5), 83.33% var(--pc-chart-3-fr0u-s3-p6), 100% var(--pc-chart-3-fr0u-s3-p7), 100% calc(var(--pc-chart-3-fr0u-s3-p7) + var(--pc-chart-3-fr0u-lw)), 83.33% calc(var(--pc-chart-3-fr0u-s3-p6) + var(--pc-chart-3-fr0u-lw)), 66.67% calc(var(--pc-chart-3-fr0u-s3-p5) + var(--pc-chart-3-fr0u-lw)), 50% calc(var(--pc-chart-3-fr0u-s3-p4) + var(--pc-chart-3-fr0u-lw)), 33.33% calc(var(--pc-chart-3-fr0u-s3-p3) + var(--pc-chart-3-fr0u-lw)), 16.67% calc(var(--pc-chart-3-fr0u-s3-p2) + var(--pc-chart-3-fr0u-lw)), 0% calc(var(--pc-chart-3-fr0u-s3-p1) + var(--pc-chart-3-fr0u-lw)));
  transition: clip-path 700ms cubic-bezier(.4,0,.2,1);
  filter: drop-shadow(0 0 5px #f0a86088);
}`
  },
  area: {
    html: `<div class="pc-chart-5-bkp0" data-provchart="area" data-pc-s1="817,1907,2099,1251,1860,1262,1857" data-pc-s2="994,1374,378,828,1799,589,218">
  <div class="pc-chart-row">
    <div class="pc-chart-5-bkp0-axis-y"><span style="position:absolute;left:0;right:4px;top:0%;transform:translateY(-50%);text-align:right;">2.5k</span><span style="position:absolute;left:0;right:4px;top:20%;transform:translateY(-50%);text-align:right;">2.02k</span><span style="position:absolute;left:0;right:4px;top:40%;transform:translateY(-50%);text-align:right;">1.54k</span><span style="position:absolute;left:0;right:4px;top:60%;transform:translateY(-50%);text-align:right;">1.06k</span><span style="position:absolute;left:0;right:4px;top:80%;transform:translateY(-50%);text-align:right;">580</span><span style="position:absolute;left:0;right:4px;top:100%;transform:translateY(-50%);text-align:right;">100</span></div>
    <div class="pc-chart-area">
      <div class="pc-grid"></div>
          <div class="pc-series-1"></div>
    <div class="pc-series-2"></div>

      
    </div>
  </div>
  
    <div class="pc-chart-5-bkp0-legend" style="display:flex;gap:16px;padding:8px 12px;font-size:12px;color:#837da0;flex-wrap:wrap;justify-content:center;">
      <span><i style="display:inline-block;width:10px;height:10px;background:#4fd8c4;border-radius:2px;margin-right:6px;"></i>Series 2</span><span><i style="display:inline-block;width:10px;height:10px;background:#f0a860;border-radius:2px;margin-right:6px;"></i>Series 3</span>
    </div>
</div>`, 
    css: `.pc-chart-5-bkp0 {
  --pc-chart-5-bkp0-lw: 2px;
  --pc-chart-5-bkp0-s1-p1: 70.13%; --pc-chart-5-bkp0-s1-p2: 24.71%; --pc-chart-5-bkp0-s1-p3: 16.71%; --pc-chart-5-bkp0-s1-p4: 52.04%; --pc-chart-5-bkp0-s1-p5: 26.67%; --pc-chart-5-bkp0-s1-p6: 51.58%; --pc-chart-5-bkp0-s1-p7: 26.79%; --pc-chart-5-bkp0-s2-p1: 62.75%; --pc-chart-5-bkp0-s2-p2: 46.92%; --pc-chart-5-bkp0-s2-p3: 88.42%; --pc-chart-5-bkp0-s2-p4: 69.67%; --pc-chart-5-bkp0-s2-p5: 29.21%; --pc-chart-5-bkp0-s2-p6: 79.63%; --pc-chart-5-bkp0-s2-p7: 95.08%;
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
.pc-chart-5-bkp0 .pc-chart-row {
  flex: 1;
  display: flex;
  min-height: 0;
}
.pc-chart-5-bkp0 .pc-chart-area {
  flex: 1;
  position: relative;
  min-height: 0;
  min-width: 0;
}

.pc-chart-5-bkp0-axis-y {
  position: relative;
  width: 38px;
  flex: none;
  font-size: 10px;
  color: #837da0;
  font-variant-numeric: tabular-nums;
}

.pc-chart-5-bkp0 .pc-grid {
  position: absolute; inset: 0;
  background:
    repeating-linear-gradient(to bottom, #837da0 0, #837da0 1px, transparent 1px, transparent calc(100% / 5)),
    repeating-linear-gradient(to right, #8b7bff 0, #8b7bff 1px, transparent 1px, transparent calc(100% / 7));
  opacity: 0.1;
  pointer-events: none;
}

.pc-chart-5-bkp0 .pc-series-1 {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, #4fd8c466 0%, #4fd8c405 100%);
  clip-path: polygon(0% var(--pc-chart-5-bkp0-s1-p1), 16.67% var(--pc-chart-5-bkp0-s1-p2), 33.33% var(--pc-chart-5-bkp0-s1-p3), 50% var(--pc-chart-5-bkp0-s1-p4), 66.67% var(--pc-chart-5-bkp0-s1-p5), 83.33% var(--pc-chart-5-bkp0-s1-p6), 100% var(--pc-chart-5-bkp0-s1-p7), 100% 100%, 0% 100%);
  transition: clip-path 700ms cubic-bezier(.4,0,.2,1);
}

.pc-chart-5-bkp0 .pc-series-2 {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, #f0a86066 0%, #f0a86005 100%);
  clip-path: polygon(0% var(--pc-chart-5-bkp0-s2-p1), 16.67% var(--pc-chart-5-bkp0-s2-p2), 33.33% var(--pc-chart-5-bkp0-s2-p3), 50% var(--pc-chart-5-bkp0-s2-p4), 66.67% var(--pc-chart-5-bkp0-s2-p5), 83.33% var(--pc-chart-5-bkp0-s2-p6), 100% var(--pc-chart-5-bkp0-s2-p7), 100% 100%, 0% 100%);
  transition: clip-path 700ms cubic-bezier(.4,0,.2,1);
}`
  },
  bar: {
    html: `<div class="pc-chart-1-sxmx" data-provchart="bar" data-pc-s1="817,1907,2099,1251,1860,1262,1857" data-pc-s2="994,1374,378,828,1799,589,218">
  <div class="pc-chart-row">
    <div class="pc-chart-1-sxmx-axis-y"><span style="position:absolute;left:0;right:4px;top:0%;transform:translateY(-50%);text-align:right;">2.5k</span><span style="position:absolute;left:0;right:4px;top:20%;transform:translateY(-50%);text-align:right;">2.02k</span><span style="position:absolute;left:0;right:4px;top:40%;transform:translateY(-50%);text-align:right;">1.54k</span><span style="position:absolute;left:0;right:4px;top:60%;transform:translateY(-50%);text-align:right;">1.06k</span><span style="position:absolute;left:0;right:4px;top:80%;transform:translateY(-50%);text-align:right;">580</span><span style="position:absolute;left:0;right:4px;top:100%;transform:translateY(-50%);text-align:right;">100</span></div>
    <div class="pc-chart-area">
      <div class="pc-grid"></div>
          <div class="pc-bar-group-1" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-1-0" data-value="817" style="left:-4.285714285714286%;width:8.571428571428571%;height:29.88%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-1" data-value="1907" style="left:12.384285714285717%;width:8.571428571428571%;height:75.29%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-2" data-value="2099" style="left:29.044285714285714%;width:8.571428571428571%;height:83.29%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-3" data-value="1251" style="left:45.714285714285715%;width:8.571428571428571%;height:47.96%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-4" data-value="1860" style="left:62.38428571428572%;width:8.571428571428571%;height:73.33%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-5" data-value="1262" style="left:79.0442857142857%;width:8.571428571428571%;height:48.42%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-6" data-value="1857" style="left:95.71428571428571%;width:8.571428571428571%;height:73.21%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div></div>
    <div class="pc-bar-group-2" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-2-0" data-value="994" style="left:-4.285714285714286%;width:8.571428571428571%;height:37.25%;bottom:0;background:#f0a860;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-1" data-value="1374" style="left:12.384285714285717%;width:8.571428571428571%;height:53.08%;bottom:0;background:#f0a860;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-2" data-value="378" style="left:29.044285714285714%;width:8.571428571428571%;height:11.58%;bottom:0;background:#f0a860;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-3" data-value="828" style="left:45.714285714285715%;width:8.571428571428571%;height:30.33%;bottom:0;background:#f0a860;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-4" data-value="1799" style="left:62.38428571428572%;width:8.571428571428571%;height:70.79%;bottom:0;background:#f0a860;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-5" data-value="589" style="left:79.0442857142857%;width:8.571428571428571%;height:20.38%;bottom:0;background:#f0a860;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-6" data-value="218" style="left:95.71428571428571%;width:8.571428571428571%;height:4.92%;bottom:0;background:#f0a860;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div></div>

      
    </div>
  </div>
  
    <div class="pc-chart-1-sxmx-legend" style="display:flex;gap:16px;padding:8px 12px;font-size:12px;color:#837da0;flex-wrap:wrap;justify-content:center;">
      <span><i style="display:inline-block;width:10px;height:10px;background:#4fd8c4;border-radius:2px;margin-right:6px;"></i>Series 2</span><span><i style="display:inline-block;width:10px;height:10px;background:#f0a860;border-radius:2px;margin-right:6px;"></i>Series 3</span>
    </div>
</div>`, 
    css: `.pc-chart-1-sxmx {
  --pc-chart-1-sxmx-lw: 2px;
  --pc-chart-1-sxmx-s1-p1: 70.13%; --pc-chart-1-sxmx-s1-p2: 24.71%; --pc-chart-1-sxmx-s1-p3: 16.71%; --pc-chart-1-sxmx-s1-p4: 52.04%; --pc-chart-1-sxmx-s1-p5: 26.67%; --pc-chart-1-sxmx-s1-p6: 51.58%; --pc-chart-1-sxmx-s1-p7: 26.79%; --pc-chart-1-sxmx-s2-p1: 62.75%; --pc-chart-1-sxmx-s2-p2: 46.92%; --pc-chart-1-sxmx-s2-p3: 88.42%; --pc-chart-1-sxmx-s2-p4: 69.67%; --pc-chart-1-sxmx-s2-p5: 29.21%; --pc-chart-1-sxmx-s2-p6: 79.63%; --pc-chart-1-sxmx-s2-p7: 95.08%;
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
.pc-chart-1-sxmx .pc-chart-row {
  flex: 1;
  display: flex;
  min-height: 0;
}
.pc-chart-1-sxmx .pc-chart-area {
  flex: 1;
  position: relative;
  min-height: 0;
  min-width: 0;
}

.pc-chart-1-sxmx-axis-y {
  position: relative;
  width: 38px;
  flex: none;
  font-size: 10px;
  color: #837da0;
  font-variant-numeric: tabular-nums;
}

.pc-chart-1-sxmx .pc-grid {
  position: absolute; inset: 0;
  background:
    repeating-linear-gradient(to bottom, #837da0 0, #837da0 1px, transparent 1px, transparent calc(100% / 5)),
    repeating-linear-gradient(to right, #8b7bff 0, #8b7bff 1px, transparent 1px, transparent calc(100% / 7));
  opacity: 0.1;
  pointer-events: none;
}`
  },
  stackedbar: {
    html: `<div class="pc-chart-3-3yvm" data-provchart="bar" data-pc-s1="817,1907,2099,1251,1860,1262,1857" data-pc-s2="994,1374,378,828,1799,589,218">
  <div class="pc-chart-row">
    <div class="pc-chart-3-3yvm-axis-y"><span style="position:absolute;left:0;right:4px;top:0%;transform:translateY(-50%);text-align:right;">2.5k</span><span style="position:absolute;left:0;right:4px;top:20%;transform:translateY(-50%);text-align:right;">2.02k</span><span style="position:absolute;left:0;right:4px;top:40%;transform:translateY(-50%);text-align:right;">1.54k</span><span style="position:absolute;left:0;right:4px;top:60%;transform:translateY(-50%);text-align:right;">1.06k</span><span style="position:absolute;left:0;right:4px;top:80%;transform:translateY(-50%);text-align:right;">580</span><span style="position:absolute;left:0;right:4px;top:100%;transform:translateY(-50%);text-align:right;">100</span></div>
    <div class="pc-chart-area">
      <div class="pc-grid"></div>
          <div class="pc-bar-group-1" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-1-0" data-value="817" style="left:-4.285714285714286%;width:8.571428571428571%;height:34.04%;bottom:0%;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease, bottom 600ms ease;"></div><div class="pc-bar-1-1" data-value="1907" style="left:12.384285714285717%;width:8.571428571428571%;height:79.46%;bottom:0%;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease, bottom 600ms ease;"></div><div class="pc-bar-1-2" data-value="2099" style="left:29.044285714285714%;width:8.571428571428571%;height:87.46%;bottom:0%;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease, bottom 600ms ease;"></div><div class="pc-bar-1-3" data-value="1251" style="left:45.714285714285715%;width:8.571428571428571%;height:52.13%;bottom:0%;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease, bottom 600ms ease;"></div><div class="pc-bar-1-4" data-value="1860" style="left:62.38428571428572%;width:8.571428571428571%;height:77.5%;bottom:0%;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease, bottom 600ms ease;"></div><div class="pc-bar-1-5" data-value="1262" style="left:79.0442857142857%;width:8.571428571428571%;height:52.58%;bottom:0%;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease, bottom 600ms ease;"></div><div class="pc-bar-1-6" data-value="1857" style="left:95.71428571428571%;width:8.571428571428571%;height:77.38%;bottom:0%;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease, bottom 600ms ease;"></div></div>
    <div class="pc-bar-group-2" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-2-0" data-value="994" style="left:-4.285714285714286%;width:8.571428571428571%;height:41.42%;bottom:34.04%;background:#f0a860;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease, bottom 600ms ease;"></div><div class="pc-bar-2-1" data-value="1374" style="left:12.384285714285717%;width:8.571428571428571%;height:20.54%;bottom:79.46%;background:#f0a860;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease, bottom 600ms ease;"></div><div class="pc-bar-2-2" data-value="378" style="left:29.044285714285714%;width:8.571428571428571%;height:12.54%;bottom:87.46%;background:#f0a860;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease, bottom 600ms ease;"></div><div class="pc-bar-2-3" data-value="828" style="left:45.714285714285715%;width:8.571428571428571%;height:34.5%;bottom:52.13%;background:#f0a860;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease, bottom 600ms ease;"></div><div class="pc-bar-2-4" data-value="1799" style="left:62.38428571428572%;width:8.571428571428571%;height:22.5%;bottom:77.5%;background:#f0a860;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease, bottom 600ms ease;"></div><div class="pc-bar-2-5" data-value="589" style="left:79.0442857142857%;width:8.571428571428571%;height:24.54%;bottom:52.58%;background:#f0a860;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease, bottom 600ms ease;"></div><div class="pc-bar-2-6" data-value="218" style="left:95.71428571428571%;width:8.571428571428571%;height:9.08%;bottom:77.38%;background:#f0a860;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease, bottom 600ms ease;"></div></div>

      
    </div>
  </div>
  
    <div class="pc-chart-3-3yvm-legend" style="display:flex;gap:16px;padding:8px 12px;font-size:12px;color:#837da0;flex-wrap:wrap;justify-content:center;">
      <span><i style="display:inline-block;width:10px;height:10px;background:#4fd8c4;border-radius:2px;margin-right:6px;"></i>Series 2</span><span><i style="display:inline-block;width:10px;height:10px;background:#f0a860;border-radius:2px;margin-right:6px;"></i>Series 3</span>
    </div>
</div>`, 
    css: `.pc-chart-3-3yvm {
  --pc-chart-3-3yvm-lw: 2px;
  --pc-chart-3-3yvm-s1-p1: 70.13%; --pc-chart-3-3yvm-s1-p2: 24.71%; --pc-chart-3-3yvm-s1-p3: 16.71%; --pc-chart-3-3yvm-s1-p4: 52.04%; --pc-chart-3-3yvm-s1-p5: 26.67%; --pc-chart-3-3yvm-s1-p6: 51.58%; --pc-chart-3-3yvm-s1-p7: 26.79%; --pc-chart-3-3yvm-s2-p1: 62.75%; --pc-chart-3-3yvm-s2-p2: 46.92%; --pc-chart-3-3yvm-s2-p3: 88.42%; --pc-chart-3-3yvm-s2-p4: 69.67%; --pc-chart-3-3yvm-s2-p5: 29.21%; --pc-chart-3-3yvm-s2-p6: 79.63%; --pc-chart-3-3yvm-s2-p7: 95.08%;
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
.pc-chart-3-3yvm .pc-chart-row {
  flex: 1;
  display: flex;
  min-height: 0;
}
.pc-chart-3-3yvm .pc-chart-area {
  flex: 1;
  position: relative;
  min-height: 0;
  min-width: 0;
}

.pc-chart-3-3yvm-axis-y {
  position: relative;
  width: 38px;
  flex: none;
  font-size: 10px;
  color: #837da0;
  font-variant-numeric: tabular-nums;
}

.pc-chart-3-3yvm .pc-grid {
  position: absolute; inset: 0;
  background:
    repeating-linear-gradient(to bottom, #837da0 0, #837da0 1px, transparent 1px, transparent calc(100% / 5)),
    repeating-linear-gradient(to right, #8b7bff 0, #8b7bff 1px, transparent 1px, transparent calc(100% / 7));
  opacity: 0.1;
  pointer-events: none;
}`
  },
  hbar: {
    html: `<div class="pc-hbar-1-uywh" data-provchart="hbar">
    <div class="pc-hbar-1-uywh-row" data-index="0" data-value="817">
      <span class="pc-hbar-1-uywh-label">Series 2</span>
      <div class="pc-hbar-1-uywh-track">
        <div class="pc-hbar-1-uywh-fill" style="width:29.88%;background:#4fd8c4;"></div>
      </div>
      <span class="pc-hbar-1-uywh-val">817</span>
    </div>
    <div class="pc-hbar-1-uywh-row" data-index="1" data-value="1907">
      <span class="pc-hbar-1-uywh-label">Series 2</span>
      <div class="pc-hbar-1-uywh-track">
        <div class="pc-hbar-1-uywh-fill" style="width:75.29%;background:#4fd8c4;"></div>
      </div>
      <span class="pc-hbar-1-uywh-val">1.91k</span>
    </div>
    <div class="pc-hbar-1-uywh-row" data-index="2" data-value="2099">
      <span class="pc-hbar-1-uywh-label">Series 2</span>
      <div class="pc-hbar-1-uywh-track">
        <div class="pc-hbar-1-uywh-fill" style="width:83.29%;background:#4fd8c4;"></div>
      </div>
      <span class="pc-hbar-1-uywh-val">2.1k</span>
    </div>
    <div class="pc-hbar-1-uywh-row" data-index="3" data-value="1251">
      <span class="pc-hbar-1-uywh-label">Series 2</span>
      <div class="pc-hbar-1-uywh-track">
        <div class="pc-hbar-1-uywh-fill" style="width:47.96%;background:#4fd8c4;"></div>
      </div>
      <span class="pc-hbar-1-uywh-val">1.25k</span>
    </div>
    <div class="pc-hbar-1-uywh-row" data-index="4" data-value="1860">
      <span class="pc-hbar-1-uywh-label">Series 2</span>
      <div class="pc-hbar-1-uywh-track">
        <div class="pc-hbar-1-uywh-fill" style="width:73.33%;background:#4fd8c4;"></div>
      </div>
      <span class="pc-hbar-1-uywh-val">1.86k</span>
    </div>
    <div class="pc-hbar-1-uywh-row" data-index="5" data-value="1262">
      <span class="pc-hbar-1-uywh-label">Series 2</span>
      <div class="pc-hbar-1-uywh-track">
        <div class="pc-hbar-1-uywh-fill" style="width:48.42%;background:#4fd8c4;"></div>
      </div>
      <span class="pc-hbar-1-uywh-val">1.26k</span>
    </div>
    <div class="pc-hbar-1-uywh-row" data-index="6" data-value="1857">
      <span class="pc-hbar-1-uywh-label">Series 2</span>
      <div class="pc-hbar-1-uywh-track">
        <div class="pc-hbar-1-uywh-fill" style="width:73.21%;background:#4fd8c4;"></div>
      </div>
      <span class="pc-hbar-1-uywh-val">1.86k</span>
    </div></div>`, 
    css: `.pc-hbar-1-uywh {
  width: 100%;
  
  background: #191629;
  border-radius: 14px;
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: inherit;
  box-sizing: border-box;
}
.pc-hbar-1-uywh-row {
  display: grid;
  grid-template-columns: minmax(56px, 28%) 1fr auto;
  align-items: center;
  gap: 12px;
}
.pc-hbar-1-uywh-label {
  font-size: 12px;
  color: #eae7f5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.pc-hbar-1-uywh-track {
  height: 10px;
  border-radius: 999px;
  background: #131120;
  overflow: hidden;
}
.pc-hbar-1-uywh-fill {
  height: 100%;
  border-radius: 999px;
  transition: width 600ms ease;
  min-width: 0;
}
.pc-hbar-1-uywh-val {
  font-size: 12px;
  color: #837da0;
  min-width: 3.5ch;
  text-align: right;
  font-variant-numeric: tabular-nums;
}`
  },
  scatter: {
    html: `<div class="pc-chart-1-c4pm" data-provchart="scatter" data-pc-s1="817,1907,2099,1251,1860,1262,1857" data-pc-s2="460,1112,842,1329,1220,269,752">
  <div class="pc-chart-row">
    <div class="pc-chart-1-c4pm-axis-y"><span style="position:absolute;left:0;right:4px;top:0%;transform:translateY(-50%);text-align:right;">2.5k</span><span style="position:absolute;left:0;right:4px;top:20%;transform:translateY(-50%);text-align:right;">2.02k</span><span style="position:absolute;left:0;right:4px;top:40%;transform:translateY(-50%);text-align:right;">1.54k</span><span style="position:absolute;left:0;right:4px;top:60%;transform:translateY(-50%);text-align:right;">1.06k</span><span style="position:absolute;left:0;right:4px;top:80%;transform:translateY(-50%);text-align:right;">580</span><span style="position:absolute;left:0;right:4px;top:100%;transform:translateY(-50%);text-align:right;">100</span></div>
    <div class="pc-chart-area">
      <div class="pc-grid"></div>
          <svg class="pc-scatter-1" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;"><circle cx="0%" cy="70.125%" r="4" fill="#4fd8c4" data-value="817" /><circle cx="16.67%" cy="24.70833333333333%" r="4" fill="#4fd8c4" data-value="1907" /><circle cx="33.33%" cy="16.708333333333343%" r="4" fill="#4fd8c4" data-value="2099" /><circle cx="50%" cy="52.04166666666667%" r="4" fill="#4fd8c4" data-value="1251" /><circle cx="66.67%" cy="26.66666666666667%" r="4" fill="#4fd8c4" data-value="1860" /><circle cx="83.33%" cy="51.58333333333333%" r="4" fill="#4fd8c4" data-value="1262" /><circle cx="100%" cy="26.79166666666667%" r="4" fill="#4fd8c4" data-value="1857" /></svg>
    <svg class="pc-scatter-2" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;"><circle cx="0%" cy="85%" r="4" fill="#f0a860" data-value="460" /><circle cx="16.67%" cy="57.83333333333333%" r="4" fill="#f0a860" data-value="1112" /><circle cx="33.33%" cy="69.08333333333334%" r="4" fill="#f0a860" data-value="842" /><circle cx="50%" cy="48.791666666666664%" r="4" fill="#f0a860" data-value="1329" /><circle cx="66.67%" cy="53.333333333333336%" r="4" fill="#f0a860" data-value="1220" /><circle cx="83.33%" cy="92.95833333333333%" r="4" fill="#f0a860" data-value="269" /><circle cx="100%" cy="72.83333333333333%" r="4" fill="#f0a860" data-value="752" /></svg>

      
    </div>
  </div>
  
    <div class="pc-chart-1-c4pm-legend" style="display:flex;gap:16px;padding:8px 12px;font-size:12px;color:#837da0;flex-wrap:wrap;justify-content:center;">
      <span><i style="display:inline-block;width:10px;height:10px;background:#4fd8c4;border-radius:2px;margin-right:6px;"></i>Series 2</span><span><i style="display:inline-block;width:10px;height:10px;background:#f0a860;border-radius:2px;margin-right:6px;"></i>Series 3</span>
    </div>
</div>`, 
    css: `.pc-chart-1-c4pm {
  --pc-chart-1-c4pm-lw: 2px;
  --pc-chart-1-c4pm-s1-p1: 70.13%; --pc-chart-1-c4pm-s1-p2: 24.71%; --pc-chart-1-c4pm-s1-p3: 16.71%; --pc-chart-1-c4pm-s1-p4: 52.04%; --pc-chart-1-c4pm-s1-p5: 26.67%; --pc-chart-1-c4pm-s1-p6: 51.58%; --pc-chart-1-c4pm-s1-p7: 26.79%; --pc-chart-1-c4pm-s2-p1: 85%; --pc-chart-1-c4pm-s2-p2: 57.83%; --pc-chart-1-c4pm-s2-p3: 69.08%; --pc-chart-1-c4pm-s2-p4: 48.79%; --pc-chart-1-c4pm-s2-p5: 53.33%; --pc-chart-1-c4pm-s2-p6: 92.96%; --pc-chart-1-c4pm-s2-p7: 72.83%;
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
.pc-chart-1-c4pm .pc-chart-row {
  flex: 1;
  display: flex;
  min-height: 0;
}
.pc-chart-1-c4pm .pc-chart-area {
  flex: 1;
  position: relative;
  min-height: 0;
  min-width: 0;
}

.pc-chart-1-c4pm-axis-y {
  position: relative;
  width: 38px;
  flex: none;
  font-size: 10px;
  color: #837da0;
  font-variant-numeric: tabular-nums;
}

.pc-chart-1-c4pm .pc-grid {
  position: absolute; inset: 0;
  background:
    repeating-linear-gradient(to bottom, #837da0 0, #837da0 1px, transparent 1px, transparent calc(100% / 5)),
    repeating-linear-gradient(to right, #8b7bff 0, #8b7bff 1px, transparent 1px, transparent calc(100% / 7));
  opacity: 0.1;
  pointer-events: none;
}`
  },
  combo: {
    html: `<div class="pc-chart-1-hwax" data-provchart="combo" data-pc-s1="817,1907,2099,1251,1860,1262,1857" data-pc-s2="460,1908,2042,1329,1220,269,2052">
  <div class="pc-chart-row">
    <div class="pc-chart-1-hwax-axis-y"><span style="position:absolute;left:0;right:4px;top:0%;transform:translateY(-50%);text-align:right;">2.5k</span><span style="position:absolute;left:0;right:4px;top:20%;transform:translateY(-50%);text-align:right;">2.02k</span><span style="position:absolute;left:0;right:4px;top:40%;transform:translateY(-50%);text-align:right;">1.54k</span><span style="position:absolute;left:0;right:4px;top:60%;transform:translateY(-50%);text-align:right;">1.06k</span><span style="position:absolute;left:0;right:4px;top:80%;transform:translateY(-50%);text-align:right;">580</span><span style="position:absolute;left:0;right:4px;top:100%;transform:translateY(-50%);text-align:right;">100</span></div>
    <div class="pc-chart-area">
      <div class="pc-grid"></div>
          <div class="pc-series-2"></div>
    <div class="pc-bar-group-1" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-1-0" data-value="817" style="left:-4.285714285714286%;width:8.571428571428571%;height:29.88%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-1" data-value="1907" style="left:12.384285714285717%;width:8.571428571428571%;height:75.29%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-2" data-value="2099" style="left:29.044285714285714%;width:8.571428571428571%;height:83.29%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-3" data-value="1251" style="left:45.714285714285715%;width:8.571428571428571%;height:47.96%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-4" data-value="1860" style="left:62.38428571428572%;width:8.571428571428571%;height:73.33%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-5" data-value="1262" style="left:79.0442857142857%;width:8.571428571428571%;height:48.42%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-6" data-value="1857" style="left:95.71428571428571%;width:8.571428571428571%;height:73.21%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div></div>

      
    </div>
  </div>
  
    <div class="pc-chart-1-hwax-legend" style="display:flex;gap:16px;padding:8px 12px;font-size:12px;color:#837da0;flex-wrap:wrap;justify-content:center;">
      <span><i style="display:inline-block;width:10px;height:10px;background:#4fd8c4;border-radius:2px;margin-right:6px;"></i>Series 2</span><span><i style="display:inline-block;width:10px;height:10px;background:#f0a860;border-radius:2px;margin-right:6px;"></i>Series 3</span>
    </div>
</div>`, 
    css: `.pc-chart-1-hwax {
  --pc-chart-1-hwax-lw: 2px;
  --pc-chart-1-hwax-s1-p1: 70.13%; --pc-chart-1-hwax-s1-p2: 24.71%; --pc-chart-1-hwax-s1-p3: 16.71%; --pc-chart-1-hwax-s1-p4: 52.04%; --pc-chart-1-hwax-s1-p5: 26.67%; --pc-chart-1-hwax-s1-p6: 51.58%; --pc-chart-1-hwax-s1-p7: 26.79%; --pc-chart-1-hwax-s2-p1: 85%; --pc-chart-1-hwax-s2-p2: 24.67%; --pc-chart-1-hwax-s2-p3: 19.08%; --pc-chart-1-hwax-s2-p4: 48.79%; --pc-chart-1-hwax-s2-p5: 53.33%; --pc-chart-1-hwax-s2-p6: 92.96%; --pc-chart-1-hwax-s2-p7: 18.67%;
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
.pc-chart-1-hwax .pc-chart-row {
  flex: 1;
  display: flex;
  min-height: 0;
}
.pc-chart-1-hwax .pc-chart-area {
  flex: 1;
  position: relative;
  min-height: 0;
  min-width: 0;
}

.pc-chart-1-hwax-axis-y {
  position: relative;
  width: 38px;
  flex: none;
  font-size: 10px;
  color: #837da0;
  font-variant-numeric: tabular-nums;
}

.pc-chart-1-hwax .pc-grid {
  position: absolute; inset: 0;
  background:
    repeating-linear-gradient(to bottom, #837da0 0, #837da0 1px, transparent 1px, transparent calc(100% / 5)),
    repeating-linear-gradient(to right, #8b7bff 0, #8b7bff 1px, transparent 1px, transparent calc(100% / 7));
  opacity: 0.1;
  pointer-events: none;
}

.pc-chart-1-hwax .pc-series-2 {
  position: absolute; inset: 0;
  background: #f0a860;
  clip-path: polygon(0% var(--pc-chart-1-hwax-s2-p1), 16.67% var(--pc-chart-1-hwax-s2-p2), 33.33% var(--pc-chart-1-hwax-s2-p3), 50% var(--pc-chart-1-hwax-s2-p4), 66.67% var(--pc-chart-1-hwax-s2-p5), 83.33% var(--pc-chart-1-hwax-s2-p6), 100% var(--pc-chart-1-hwax-s2-p7), 100% calc(var(--pc-chart-1-hwax-s2-p7) + var(--pc-chart-1-hwax-lw)), 83.33% calc(var(--pc-chart-1-hwax-s2-p6) + var(--pc-chart-1-hwax-lw)), 66.67% calc(var(--pc-chart-1-hwax-s2-p5) + var(--pc-chart-1-hwax-lw)), 50% calc(var(--pc-chart-1-hwax-s2-p4) + var(--pc-chart-1-hwax-lw)), 33.33% calc(var(--pc-chart-1-hwax-s2-p3) + var(--pc-chart-1-hwax-lw)), 16.67% calc(var(--pc-chart-1-hwax-s2-p2) + var(--pc-chart-1-hwax-lw)), 0% calc(var(--pc-chart-1-hwax-s2-p1) + var(--pc-chart-1-hwax-lw)));
  transition: clip-path 700ms cubic-bezier(.4,0,.2,1);
  filter: drop-shadow(0 0 5px #f0a86088);
}`
  },
  gauge: {
    html: `<div class="pc-gauge-3-vg24" data-provchart="gauge" data-pc-plain-percent="1">
  <svg viewBox="0 0 176 176">
    
      <circle class="pc-gauge-3-vg24-bg-ring" cx="88" cy="88" r="64" stroke="#131120" stroke-width="10" fill="none" />
      <circle class="pc-gauge-3-vg24-ring" data-series="0" data-value="82" cx="88" cy="88" r="64" 
              stroke="#ff5e7d" stroke-width="10" fill="none"
              stroke-dasharray="402.1238596594935" stroke-dashoffset="72.38229473870888"
              stroke-linecap="round"
              style="transform-origin: center; transform: rotate(-90deg); transition: stroke-dashoffset 700ms ease;" />
      <circle class="pc-gauge-3-vg24-bg-ring" cx="88" cy="88" r="50" stroke="#131120" stroke-width="10" fill="none" />
      <circle class="pc-gauge-3-vg24-ring" data-series="1" data-value="64" cx="88" cy="88" r="50" 
              stroke="#4fd8c4" stroke-width="10" fill="none"
              stroke-dasharray="314.1592653589793" stroke-dashoffset="113.09733552923257"
              stroke-linecap="round"
              style="transform-origin: center; transform: rotate(-90deg); transition: stroke-dashoffset 700ms ease;" />
  </svg>
  <div class="pc-gauge-3-vg24-info">
    <span class="pc-gauge-3-vg24-val" data-value="82">82%</span>
    <span class="pc-gauge-3-vg24-lbl">Performance</span>
  </div>
</div>`, 
    css: `.pc-gauge-3-vg24 {
  position: relative;
  width: 190px;
  height: 190px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
}
.pc-gauge-3-vg24 svg {
  width: 100%;
  height: 100%;
}
.pc-gauge-3-vg24-info {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  pointer-events: none;
}
.pc-gauge-3-vg24-val {
  font-size: 31.67px;
  font-weight: 700;
  color: #eae7f5;
  line-height: 1;
}
.pc-gauge-3-vg24-lbl {
  font-size: 11px;
  color: #837da0;
  margin-top: 4px;
}`
  },
};

// ── What users copy (API shapes) ──
const EXAMPLES = {
  line: {
    type: 'line',
    series: [
      { name: 'Revenue', color: '#8b7bff', points: [20, 35, 45, 30, 50, 60, 42] },
      { name: 'Cost', color: '#4fd8c4', points: [15, 28, 30, 22, 40, 45, 35] },
    ],
    axisX: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  },
  area: {
    type: 'area',
    series: [
      { name: 'Traffic', color: '#4fd8c4', points: [20, 55, 40, 85, 60, 70, 50] },
      { name: 'Signups', color: '#f0a860', points: [12, 22, 30, 48, 40, 55, 35] },
    ],
    axisX: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  bar: {
    type: 'bar',
    series: [
      { name: '2025', color: '#8b7bff', points: [40, 55, 48, 70] },
      { name: '2026', color: '#4fd8c4', points: [35, 50, 62, 58] },
    ],
    axisX: ['Q1', 'Q2', 'Q3', 'Q4'],
  },
  stackedbar: {
    type: 'stackedbar',
    series: [
      { name: 'Product', color: '#8b7bff', points: [30, 40, 35, 50] },
      { name: 'Services', color: '#4fd8c4', points: [20, 25, 30, 22] },
    ],
    axisX: ['Jan', 'Feb', 'Mar', 'Apr'],
  },
  hbar: {
    type: 'hbar',
    series: [{ name: 'Score', color: '#8b7bff', points: [95, 88, 90, 72] }],
    axisX: ['HTML', 'CSS', 'JS', 'SVG'],
  },
  scatter: {
    type: 'scatter',
    series: [
      { name: 'A', color: '#85cf2b', points: [20, 81, 19, 46, 18, 30, 40], radius: 4 },
      { name: 'B', color: '#ff5e7d', points: [16, 78, 50, 50, 63, 70, 38], radius: 4 },
    ],
    axisX: ['1', '2', '3', '4', '5', '6', '7'],
  },
  combo: {
    type: 'combo',
    series: [
      { name: 'Sales', type: 'bar', color: '#8b7bff', points: [20, 35, 33, 30, 48, 35, 66] },
      { name: 'Trend', type: 'line', color: '#4fd8c4', points: [80, 25, 30, 44, 50, 32, 72] },
    ],
    axisX: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  gauge: {
    type: 'gauge',
    label: 'Health',
    size: 140,
    thickness: 12,
    series: [
      { name: 'Score', value: 78, color: '#4fd8c4' },
    ],
  },
};

function apiSnippet(body, path = '/api/v1/generate') {
  return `const res = await fetch("${API}${path}", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-API-Key": "${KEY}"
  },
  body: JSON.stringify(${JSON.stringify(body, null, 2)})
});

const data = await res.json();
if (data.error) throw new Error(data.error);

// data.html + data.css  → inject into the page
document.getElementById('chart').innerHTML = data.html;
document.head.insertAdjacentHTML('beforeend', \`<style>\${data.css}</style>\`);`;
}

function svgSnippet(body) {
  return `const res = await fetch("${API}/api/v1/generate-svg", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-API-Key": "${KEY}"
  },
  body: JSON.stringify(${JSON.stringify({ ...body, width: 640, height: 320 }, null, 2)})
});

const data = await res.json();
// Inline: data.svg
// README: ![chart](\${data.dataUri})`;
}

function mount(id) {
  const box = document.getElementById(`${id}-container`);
  const code = document.getElementById(`${id}-code`);
  const prev = PREVIEWS[id];
  const body = EXAMPLES[id];
  
  if (box) {
    if (prev?.html && prev.html.length > 20) {
      box.innerHTML = `<style>${prev.css || ''}</style>${prev.html}`;
    } else {
      box.innerHTML = `<p style="color:var(--muted);font-size:13px;text-align:center;">
        Preview snapshot not set — use the code below with your API key.
      </p>`;
    }
  }
  
  if (code && body) {
    const parts = [
      '// Developer API — HTML + CSS',
      apiSnippet(body),
      '',
      '// SVG export (README / docs)',
      svgSnippet(body),
    ];
    code.textContent = parts.join('\n');
  }
}

['line', 'area', 'bar', 'stackedbar', 'hbar', 'scatter', 'combo', 'gauge'].forEach(mount);

// Stats — pure HTML (no engine)
(function() {
  const container = document.getElementById('stat-example');
  const codeEl = document.getElementById('stat-code');
  if (container) {
    container.innerHTML = `
      <div class="stat-item"><div class="label">Total Revenue</div><div class="value">$12,450</div><div class="delta up">+12.5%</div></div>
      <div class="stat-item"><div class="label">New Users</div><div class="value">1,284</div><div class="delta up">+8.2%</div></div>
      <div class="stat-item"><div class="label">Bounce Rate</div><div class="value">24.6%</div><div class="delta down">-3.1%</div></div>`;
  }
  if (codeEl) {
    codeEl.textContent = `// Stat cards = simple HTML/CSS (or ProvChart.stat via API when supported)
<div class="stat-item">
  <div class="label">Total Revenue</div>
  <div class="value">$12,450</div>
  <div class="delta up">+12.5%</div>
</div>`;
  }
})();

// Toggles
document.querySelectorAll('[data-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const block = btn.parentElement.querySelector('.code-block');
    const open = block.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.innerHTML = open ?
      '<i class="fas fa-chevron-up"></i> Hide code' :
      '<i class="fas fa-chevron-down"></i> Show code';
  });
});
