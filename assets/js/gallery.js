
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
    html: `<div class="pc-chart-7-i6yx" data-provchart="line" data-pc-s1="1020,535,1033,1030,2048,1035,1900" data-pc-s2="2043,1983,1628,531,720,1454,790">
  <div class="pc-chart-row">
    <div class="pc-chart-7-i6yx-axis-y"><span style="position:absolute;left:0;right:4px;top:0%;transform:translateY(-50%);text-align:right;">2.1k</span><span style="position:absolute;left:0;right:4px;top:20%;transform:translateY(-50%);text-align:right;">1.68k</span><span style="position:absolute;left:0;right:4px;top:40%;transform:translateY(-50%);text-align:right;">1.26k</span><span style="position:absolute;left:0;right:4px;top:60%;transform:translateY(-50%);text-align:right;">840</span><span style="position:absolute;left:0;right:4px;top:80%;transform:translateY(-50%);text-align:right;">420</span><span style="position:absolute;left:0;right:4px;top:100%;transform:translateY(-50%);text-align:right;">0</span></div>
    <div class="pc-chart-area">
      <div class="pc-grid"></div>
          <div class="pc-series-1"></div>
    <div class="pc-series-2"></div>

      
    <div class="pc-chart-7-i6yx-axis-x">
      <span>2020</span><span>2021</span><span>2022</span><span>2023</span><span>2024</span><span>2025</span><span>2026</span>
    </div>
    </div>
  </div>
  
    <div class="pc-chart-7-i6yx-legend" style="display:flex;gap:16px;padding:8px 12px;font-size:12px;color:#837da0;flex-wrap:wrap;justify-content:center;">
      <span><i style="display:inline-block;width:10px;height:10px;background:#8b7bff;border-radius:2px;margin-right:6px;"></i>connections</span><span><i style="display:inline-block;width:10px;height:10px;background:#4fd8c4;border-radius:2px;margin-right:6px;"></i>subscribers</span>
    </div>
</div>`, 
    css: `.pc-chart-7-i6yx {
  --pc-chart-7-i6yx-lw: 2px;
  --pc-chart-7-i6yx-s1-p1: 51.43%; --pc-chart-7-i6yx-s1-p2: 74.52%; --pc-chart-7-i6yx-s1-p3: 50.81%; --pc-chart-7-i6yx-s1-p4: 50.95%; --pc-chart-7-i6yx-s1-p5: 2.48%; --pc-chart-7-i6yx-s1-p6: 50.71%; --pc-chart-7-i6yx-s1-p7: 9.52%; --pc-chart-7-i6yx-s2-p1: 2.71%; --pc-chart-7-i6yx-s2-p2: 5.57%; --pc-chart-7-i6yx-s2-p3: 22.48%; --pc-chart-7-i6yx-s2-p4: 74.71%; --pc-chart-7-i6yx-s2-p5: 65.71%; --pc-chart-7-i6yx-s2-p6: 30.76%; --pc-chart-7-i6yx-s2-p7: 62.38%;
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
.pc-chart-7-i6yx .pc-chart-row {
  flex: 1;
  display: flex;
  min-height: 0;
}
.pc-chart-7-i6yx .pc-chart-area {
  flex: 1;
  position: relative;
  min-height: 0;
  min-width: 0;
}

.pc-chart-7-i6yx-axis-y {
  position: relative;
  width: 38px;
  flex: none;
  font-size: 10px;
  color: #837da0;
  font-variant-numeric: tabular-nums;
}

.pc-chart-7-i6yx .pc-grid {
  position: absolute; inset: 0;
  background:
    repeating-linear-gradient(to bottom, #837da0 0, #837da0 1px, transparent 1px, transparent calc(100% / 5)),
    repeating-linear-gradient(to right, #8b7bff 0, #8b7bff 1px, transparent 1px, transparent calc(100% / 7));
  opacity: 0.1;
  pointer-events: none;
}

.pc-chart-7-i6yx .pc-series-1 {
  position: absolute; inset: 0;
  background: #8b7bff;
  clip-path: polygon(0% var(--pc-chart-7-i6yx-s1-p1), 16.67% var(--pc-chart-7-i6yx-s1-p2), 33.33% var(--pc-chart-7-i6yx-s1-p3), 50% var(--pc-chart-7-i6yx-s1-p4), 66.67% var(--pc-chart-7-i6yx-s1-p5), 83.33% var(--pc-chart-7-i6yx-s1-p6), 100% var(--pc-chart-7-i6yx-s1-p7), 100% calc(var(--pc-chart-7-i6yx-s1-p7) + var(--pc-chart-7-i6yx-lw)), 83.33% calc(var(--pc-chart-7-i6yx-s1-p6) + var(--pc-chart-7-i6yx-lw)), 66.67% calc(var(--pc-chart-7-i6yx-s1-p5) + var(--pc-chart-7-i6yx-lw)), 50% calc(var(--pc-chart-7-i6yx-s1-p4) + var(--pc-chart-7-i6yx-lw)), 33.33% calc(var(--pc-chart-7-i6yx-s1-p3) + var(--pc-chart-7-i6yx-lw)), 16.67% calc(var(--pc-chart-7-i6yx-s1-p2) + var(--pc-chart-7-i6yx-lw)), 0% calc(var(--pc-chart-7-i6yx-s1-p1) + var(--pc-chart-7-i6yx-lw)));
  transition: clip-path 700ms cubic-bezier(.4,0,.2,1);
  filter: drop-shadow(0 0 5px #8b7bff88);
}

.pc-chart-7-i6yx .pc-series-2 {
  position: absolute; inset: 0;
  background: #4fd8c4;
  clip-path: polygon(0% var(--pc-chart-7-i6yx-s2-p1), 16.67% var(--pc-chart-7-i6yx-s2-p2), 33.33% var(--pc-chart-7-i6yx-s2-p3), 50% var(--pc-chart-7-i6yx-s2-p4), 66.67% var(--pc-chart-7-i6yx-s2-p5), 83.33% var(--pc-chart-7-i6yx-s2-p6), 100% var(--pc-chart-7-i6yx-s2-p7), 100% calc(var(--pc-chart-7-i6yx-s2-p7) + var(--pc-chart-7-i6yx-lw)), 83.33% calc(var(--pc-chart-7-i6yx-s2-p6) + var(--pc-chart-7-i6yx-lw)), 66.67% calc(var(--pc-chart-7-i6yx-s2-p5) + var(--pc-chart-7-i6yx-lw)), 50% calc(var(--pc-chart-7-i6yx-s2-p4) + var(--pc-chart-7-i6yx-lw)), 33.33% calc(var(--pc-chart-7-i6yx-s2-p3) + var(--pc-chart-7-i6yx-lw)), 16.67% calc(var(--pc-chart-7-i6yx-s2-p2) + var(--pc-chart-7-i6yx-lw)), 0% calc(var(--pc-chart-7-i6yx-s2-p1) + var(--pc-chart-7-i6yx-lw)));
  transition: clip-path 700ms cubic-bezier(.4,0,.2,1);
  filter: drop-shadow(0 0 5px #4fd8c488);
}

.pc-chart-7-i6yx-axis-x {
  position: absolute; left: 0; right: 0; bottom: 6px;
  display: flex; justify-content: space-between;
  padding-inline: 12px;
  font-size: 11px; color: #837da0;
}`
  },
  area: {
    html: `<div class="pc-chart-1-js1u" data-provchart="area" data-pc-s1="1020,535,1033,1030,2048,1035,1900" data-pc-s2="2043,1983,1628,531,720,1454,790">
  <div class="pc-chart-row">
    <div class="pc-chart-1-js1u-axis-y"><span style="position:absolute;left:0;right:4px;top:0%;transform:translateY(-50%);text-align:right;">2.1k</span><span style="position:absolute;left:0;right:4px;top:20%;transform:translateY(-50%);text-align:right;">1.68k</span><span style="position:absolute;left:0;right:4px;top:40%;transform:translateY(-50%);text-align:right;">1.26k</span><span style="position:absolute;left:0;right:4px;top:60%;transform:translateY(-50%);text-align:right;">840</span><span style="position:absolute;left:0;right:4px;top:80%;transform:translateY(-50%);text-align:right;">420</span><span style="position:absolute;left:0;right:4px;top:100%;transform:translateY(-50%);text-align:right;">0</span></div>
    <div class="pc-chart-area">
      <div class="pc-grid"></div>
          <div class="pc-series-1"></div>
    <div class="pc-series-2"></div>

      
    <div class="pc-chart-1-js1u-axis-x">
      <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
    </div>
    </div>
  </div>
  
    <div class="pc-chart-1-js1u-legend" style="display:flex;gap:16px;padding:8px 12px;font-size:12px;color:#837da0;flex-wrap:wrap;justify-content:center;">
      <span><i style="display:inline-block;width:10px;height:10px;background:#8b7bff;border-radius:2px;margin-right:6px;"></i>AI handoff</span><span><i style="display:inline-block;width:10px;height:10px;background:#4fd8c4;border-radius:2px;margin-right:6px;"></i>AI responding</span>
    </div>
</div>`, 
    css: `.pc-chart-1-js1u {
  --pc-chart-1-js1u-lw: 2px;
  --pc-chart-1-js1u-s1-p1: 51.43%; --pc-chart-1-js1u-s1-p2: 74.52%; --pc-chart-1-js1u-s1-p3: 50.81%; --pc-chart-1-js1u-s1-p4: 50.95%; --pc-chart-1-js1u-s1-p5: 2.48%; --pc-chart-1-js1u-s1-p6: 50.71%; --pc-chart-1-js1u-s1-p7: 9.52%; --pc-chart-1-js1u-s2-p1: 2.71%; --pc-chart-1-js1u-s2-p2: 5.57%; --pc-chart-1-js1u-s2-p3: 22.48%; --pc-chart-1-js1u-s2-p4: 74.71%; --pc-chart-1-js1u-s2-p5: 65.71%; --pc-chart-1-js1u-s2-p6: 30.76%; --pc-chart-1-js1u-s2-p7: 62.38%;
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
.pc-chart-1-js1u .pc-chart-row {
  flex: 1;
  display: flex;
  min-height: 0;
}
.pc-chart-1-js1u .pc-chart-area {
  flex: 1;
  position: relative;
  min-height: 0;
  min-width: 0;
}

.pc-chart-1-js1u-axis-y {
  position: relative;
  width: 38px;
  flex: none;
  font-size: 10px;
  color: #837da0;
  font-variant-numeric: tabular-nums;
}

.pc-chart-1-js1u .pc-grid {
  position: absolute; inset: 0;
  background:
    repeating-linear-gradient(to bottom, #837da0 0, #837da0 1px, transparent 1px, transparent calc(100% / 5)),
    repeating-linear-gradient(to right, #8b7bff 0, #8b7bff 1px, transparent 1px, transparent calc(100% / 7));
  opacity: 0.1;
  pointer-events: none;
}

.pc-chart-1-js1u .pc-series-1 {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, #8b7bff66 0%, #8b7bff05 100%);
  clip-path: polygon(0% var(--pc-chart-1-js1u-s1-p1), 16.67% var(--pc-chart-1-js1u-s1-p2), 33.33% var(--pc-chart-1-js1u-s1-p3), 50% var(--pc-chart-1-js1u-s1-p4), 66.67% var(--pc-chart-1-js1u-s1-p5), 83.33% var(--pc-chart-1-js1u-s1-p6), 100% var(--pc-chart-1-js1u-s1-p7), 100% 100%, 0% 100%);
  transition: clip-path 700ms cubic-bezier(.4,0,.2,1);
}

.pc-chart-1-js1u .pc-series-2 {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, #4fd8c466 0%, #4fd8c405 100%);
  clip-path: polygon(0% var(--pc-chart-1-js1u-s2-p1), 16.67% var(--pc-chart-1-js1u-s2-p2), 33.33% var(--pc-chart-1-js1u-s2-p3), 50% var(--pc-chart-1-js1u-s2-p4), 66.67% var(--pc-chart-1-js1u-s2-p5), 83.33% var(--pc-chart-1-js1u-s2-p6), 100% var(--pc-chart-1-js1u-s2-p7), 100% 100%, 0% 100%);
  transition: clip-path 700ms cubic-bezier(.4,0,.2,1);
}

.pc-chart-1-js1u-axis-x {
  position: absolute; left: 0; right: 0; bottom: 6px;
  display: flex; justify-content: space-between;
  padding-inline: 12px;
  font-size: 11px; color: #837da0;
}`
  },
  bar: {
    html: `<div class="pc-chart-1-4dli" data-provchart="bar" data-pc-s1="1020,535,1033,1030,2048,1035,1900" data-pc-s2="825,1222,1197,1633,1115,111,1452" data-pc-s3="1332,2064,727,848,1645,183,1162" data-pc-s4="1992,1035,969,137,123,1705,637" data-pc-s5="1739,687,507,519,1704,1900,1200">
  <div class="pc-chart-row">
    <div class="pc-chart-1-4dli-axis-y"><span style="position:absolute;left:0;right:4px;top:0%;transform:translateY(-50%);text-align:right;">2.06k</span><span style="position:absolute;left:0;right:4px;top:20%;transform:translateY(-50%);text-align:right;">1.65k</span><span style="position:absolute;left:0;right:4px;top:40%;transform:translateY(-50%);text-align:right;">1.24k</span><span style="position:absolute;left:0;right:4px;top:60%;transform:translateY(-50%);text-align:right;">825.6</span><span style="position:absolute;left:0;right:4px;top:80%;transform:translateY(-50%);text-align:right;">412.8</span><span style="position:absolute;left:0;right:4px;top:100%;transform:translateY(-50%);text-align:right;">0</span></div>
    <div class="pc-chart-area">
      <div class="pc-grid"></div>
          <div class="pc-bar-group-1" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-1-0" data-value="1020" style="left:2.854285714285714%;width:8.571428571428571%;height:49.42%;bottom:0;background:#8b7bff;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-1" data-value="535" style="left:17.144285714285715%;width:8.571428571428571%;height:25.92%;bottom:0;background:#8b7bff;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-2" data-value="1033" style="left:31.424285714285716%;width:8.571428571428571%;height:50.05%;bottom:0;background:#8b7bff;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-3" data-value="1030" style="left:45.714285714285715%;width:8.571428571428571%;height:49.9%;bottom:0;background:#8b7bff;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-4" data-value="2048" style="left:60.00428571428572%;width:8.571428571428571%;height:99.22%;bottom:0;background:#8b7bff;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-5" data-value="1035" style="left:74.2842857142857%;width:8.571428571428571%;height:50.15%;bottom:0;background:#8b7bff;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-6" data-value="1900" style="left:88.57428571428571%;width:8.571428571428571%;height:92.05%;bottom:0;background:#8b7bff;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div></div>
    <div class="pc-bar-group-2" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-2-0" data-value="825" style="left:2.854285714285714%;width:8.571428571428571%;height:39.97%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-1" data-value="1222" style="left:17.144285714285715%;width:8.571428571428571%;height:59.21%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-2" data-value="1197" style="left:31.424285714285716%;width:8.571428571428571%;height:57.99%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-3" data-value="1633" style="left:45.714285714285715%;width:8.571428571428571%;height:79.12%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-4" data-value="1115" style="left:60.00428571428572%;width:8.571428571428571%;height:54.02%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-5" data-value="111" style="left:74.2842857142857%;width:8.571428571428571%;height:5.38%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-6" data-value="1452" style="left:88.57428571428571%;width:8.571428571428571%;height:70.35%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div></div>
    <div class="pc-bar-group-3" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-3-0" data-value="1332" style="left:2.854285714285714%;width:8.571428571428571%;height:64.53%;bottom:0;background:#f0a860;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-3-1" data-value="2064" style="left:17.144285714285715%;width:8.571428571428571%;height:100%;bottom:0;background:#f0a860;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-3-2" data-value="727" style="left:31.424285714285716%;width:8.571428571428571%;height:35.22%;bottom:0;background:#f0a860;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-3-3" data-value="848" style="left:45.714285714285715%;width:8.571428571428571%;height:41.09%;bottom:0;background:#f0a860;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-3-4" data-value="1645" style="left:60.00428571428572%;width:8.571428571428571%;height:79.7%;bottom:0;background:#f0a860;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-3-5" data-value="183" style="left:74.2842857142857%;width:8.571428571428571%;height:8.87%;bottom:0;background:#f0a860;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-3-6" data-value="1162" style="left:88.57428571428571%;width:8.571428571428571%;height:56.3%;bottom:0;background:#f0a860;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div></div>
    <div class="pc-bar-group-4" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-4-0" data-value="1992" style="left:2.854285714285714%;width:8.571428571428571%;height:96.51%;bottom:0;background:#ff5e7d;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-4-1" data-value="1035" style="left:17.144285714285715%;width:8.571428571428571%;height:50.15%;bottom:0;background:#ff5e7d;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-4-2" data-value="969" style="left:31.424285714285716%;width:8.571428571428571%;height:46.95%;bottom:0;background:#ff5e7d;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-4-3" data-value="137" style="left:45.714285714285715%;width:8.571428571428571%;height:6.64%;bottom:0;background:#ff5e7d;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-4-4" data-value="123" style="left:60.00428571428572%;width:8.571428571428571%;height:5.96%;bottom:0;background:#ff5e7d;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-4-5" data-value="1705" style="left:74.2842857142857%;width:8.571428571428571%;height:82.61%;bottom:0;background:#ff5e7d;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-4-6" data-value="637" style="left:88.57428571428571%;width:8.571428571428571%;height:30.86%;bottom:0;background:#ff5e7d;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div></div>
    <div class="pc-bar-group-5" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-5-0" data-value="1739" style="left:2.854285714285714%;width:8.571428571428571%;height:84.25%;bottom:0;background:#4fffb0;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-5-1" data-value="687" style="left:17.144285714285715%;width:8.571428571428571%;height:33.28%;bottom:0;background:#4fffb0;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-5-2" data-value="507" style="left:31.424285714285716%;width:8.571428571428571%;height:24.56%;bottom:0;background:#4fffb0;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-5-3" data-value="519" style="left:45.714285714285715%;width:8.571428571428571%;height:25.15%;bottom:0;background:#4fffb0;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-5-4" data-value="1704" style="left:60.00428571428572%;width:8.571428571428571%;height:82.56%;bottom:0;background:#4fffb0;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-5-5" data-value="1900" style="left:74.2842857142857%;width:8.571428571428571%;height:92.05%;bottom:0;background:#4fffb0;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-5-6" data-value="1200" style="left:88.57428571428571%;width:8.571428571428571%;height:58.14%;bottom:0;background:#4fffb0;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div></div>

      
    </div>
  </div>
  
    <div class="pc-chart-1-4dli-legend" style="display:flex;gap:16px;padding:8px 12px;font-size:12px;color:#837da0;flex-wrap:wrap;justify-content:center;">
      <span><i style="display:inline-block;width:10px;height:10px;background:#8b7bff;border-radius:2px;margin-right:6px;"></i>Series 1</span><span><i style="display:inline-block;width:10px;height:10px;background:#4fd8c4;border-radius:2px;margin-right:6px;"></i>Series 2</span><span><i style="display:inline-block;width:10px;height:10px;background:#f0a860;border-radius:2px;margin-right:6px;"></i>Series 3</span><span><i style="display:inline-block;width:10px;height:10px;background:#ff5e7d;border-radius:2px;margin-right:6px;"></i>Series 4</span><span><i style="display:inline-block;width:10px;height:10px;background:#4fffb0;border-radius:2px;margin-right:6px;"></i>Series 5</span>
    </div>
</div>`, 
    css: `.pc-chart-1-4dli {
  --pc-chart-1-4dli-lw: 2px;
  --pc-chart-1-4dli-s1-p1: 50.58%; --pc-chart-1-4dli-s1-p2: 74.08%; --pc-chart-1-4dli-s1-p3: 49.95%; --pc-chart-1-4dli-s1-p4: 50.1%; --pc-chart-1-4dli-s1-p5: 0.78%; --pc-chart-1-4dli-s1-p6: 49.85%; --pc-chart-1-4dli-s1-p7: 7.95%; --pc-chart-1-4dli-s2-p1: 60.03%; --pc-chart-1-4dli-s2-p2: 40.79%; --pc-chart-1-4dli-s2-p3: 42.01%; --pc-chart-1-4dli-s2-p4: 20.88%; --pc-chart-1-4dli-s2-p5: 45.98%; --pc-chart-1-4dli-s2-p6: 94.62%; --pc-chart-1-4dli-s2-p7: 29.65%; --pc-chart-1-4dli-s3-p1: 35.47%; --pc-chart-1-4dli-s3-p2: 0%; --pc-chart-1-4dli-s3-p3: 64.78%; --pc-chart-1-4dli-s3-p4: 58.91%; --pc-chart-1-4dli-s3-p5: 20.3%; --pc-chart-1-4dli-s3-p6: 91.13%; --pc-chart-1-4dli-s3-p7: 43.7%; --pc-chart-1-4dli-s4-p1: 3.49%; --pc-chart-1-4dli-s4-p2: 49.85%; --pc-chart-1-4dli-s4-p3: 53.05%; --pc-chart-1-4dli-s4-p4: 93.36%; --pc-chart-1-4dli-s4-p5: 94.04%; --pc-chart-1-4dli-s4-p6: 17.39%; --pc-chart-1-4dli-s4-p7: 69.14%; --pc-chart-1-4dli-s5-p1: 15.75%; --pc-chart-1-4dli-s5-p2: 66.72%; --pc-chart-1-4dli-s5-p3: 75.44%; --pc-chart-1-4dli-s5-p4: 74.85%; --pc-chart-1-4dli-s5-p5: 17.44%; --pc-chart-1-4dli-s5-p6: 7.95%; --pc-chart-1-4dli-s5-p7: 41.86%;
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
.pc-chart-1-4dli .pc-chart-row {
  flex: 1;
  display: flex;
  min-height: 0;
}
.pc-chart-1-4dli .pc-chart-area {
  flex: 1;
  position: relative;
  min-height: 0;
  min-width: 0;
}

.pc-chart-1-4dli-axis-y {
  position: relative;
  width: 38px;
  flex: none;
  font-size: 10px;
  color: #837da0;
  font-variant-numeric: tabular-nums;
}

.pc-chart-1-4dli .pc-grid {
  position: absolute; inset: 0;
  background:
    repeating-linear-gradient(to bottom, #837da0 0, #837da0 1px, transparent 1px, transparent calc(100% / 5)),
    repeating-linear-gradient(to right, #8b7bff 0, #8b7bff 1px, transparent 1px, transparent calc(100% / 7));
  opacity: 0.1;
  pointer-events: none;
}`
  },
  stackedbar: {
    html: `<div class="pc-chart-7-rix7" data-provchart="bar" data-pc-s1="1020,535,1033,1030,2048,1035,1900" data-pc-s2="1027,601,1050,1226,1080,600,254">
  <div class="pc-chart-row">
    <div class="pc-chart-7-rix7-axis-y"><span style="position:absolute;left:0;right:4px;top:0%;transform:translateY(-50%);text-align:right;">3.13k</span><span style="position:absolute;left:0;right:4px;top:20%;transform:translateY(-50%);text-align:right;">2.5k</span><span style="position:absolute;left:0;right:4px;top:40%;transform:translateY(-50%);text-align:right;">1.88k</span><span style="position:absolute;left:0;right:4px;top:60%;transform:translateY(-50%);text-align:right;">1.25k</span><span style="position:absolute;left:0;right:4px;top:80%;transform:translateY(-50%);text-align:right;">625.6</span><span style="position:absolute;left:0;right:4px;top:100%;transform:translateY(-50%);text-align:right;">0</span></div>
    <div class="pc-chart-area">
      <div class="pc-grid"></div>
          <div class="pc-bar-group-1" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-1-0" data-value="1020" style="left:2.854285714285714%;width:8.571428571428571%;height:32.61%;bottom:0%;background:#8b7bff;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease, bottom 600ms ease;"></div><div class="pc-bar-1-1" data-value="535" style="left:17.144285714285715%;width:8.571428571428571%;height:17.1%;bottom:0%;background:#8b7bff;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease, bottom 600ms ease;"></div><div class="pc-bar-1-2" data-value="1033" style="left:31.424285714285716%;width:8.571428571428571%;height:33.02%;bottom:0%;background:#8b7bff;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease, bottom 600ms ease;"></div><div class="pc-bar-1-3" data-value="1030" style="left:45.714285714285715%;width:8.571428571428571%;height:32.93%;bottom:0%;background:#8b7bff;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease, bottom 600ms ease;"></div><div class="pc-bar-1-4" data-value="2048" style="left:60.00428571428572%;width:8.571428571428571%;height:65.47%;bottom:0%;background:#8b7bff;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease, bottom 600ms ease;"></div><div class="pc-bar-1-5" data-value="1035" style="left:74.2842857142857%;width:8.571428571428571%;height:33.09%;bottom:0%;background:#8b7bff;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease, bottom 600ms ease;"></div><div class="pc-bar-1-6" data-value="1900" style="left:88.57428571428571%;width:8.571428571428571%;height:60.74%;bottom:0%;background:#8b7bff;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease, bottom 600ms ease;"></div></div>
    <div class="pc-bar-group-2" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-2-0" data-value="1027" style="left:2.854285714285714%;width:8.571428571428571%;height:32.83%;bottom:32.61%;background:#4fffb0;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease, bottom 600ms ease;"></div><div class="pc-bar-2-1" data-value="601" style="left:17.144285714285715%;width:8.571428571428571%;height:19.21%;bottom:17.1%;background:#4fffb0;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease, bottom 600ms ease;"></div><div class="pc-bar-2-2" data-value="1050" style="left:31.424285714285716%;width:8.571428571428571%;height:33.57%;bottom:33.02%;background:#4fffb0;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease, bottom 600ms ease;"></div><div class="pc-bar-2-3" data-value="1226" style="left:45.714285714285715%;width:8.571428571428571%;height:39.19%;bottom:32.93%;background:#4fffb0;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease, bottom 600ms ease;"></div><div class="pc-bar-2-4" data-value="1080" style="left:60.00428571428572%;width:8.571428571428571%;height:34.53%;bottom:65.47%;background:#4fffb0;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease, bottom 600ms ease;"></div><div class="pc-bar-2-5" data-value="600" style="left:74.2842857142857%;width:8.571428571428571%;height:19.18%;bottom:33.09%;background:#4fffb0;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease, bottom 600ms ease;"></div><div class="pc-bar-2-6" data-value="254" style="left:88.57428571428571%;width:8.571428571428571%;height:8.12%;bottom:60.74%;background:#4fffb0;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease, bottom 600ms ease;"></div></div>

      
    </div>
  </div>
  
    <div class="pc-chart-7-rix7-legend" style="display:flex;gap:16px;padding:8px 12px;font-size:12px;color:#837da0;flex-wrap:wrap;justify-content:center;">
      <span><i style="display:inline-block;width:10px;height:10px;background:#8b7bff;border-radius:2px;margin-right:6px;"></i>Series 1</span><span><i style="display:inline-block;width:10px;height:10px;background:#4fffb0;border-radius:2px;margin-right:6px;"></i>Series 5</span>
    </div>
</div>`, 
    css: `.pc-chart-7-rix7 {
  --pc-chart-7-rix7-lw: 2px;
  --pc-chart-7-rix7-s1-p1: 67.39%; --pc-chart-7-rix7-s1-p2: 82.9%; --pc-chart-7-rix7-s1-p3: 66.98%; --pc-chart-7-rix7-s1-p4: 67.07%; --pc-chart-7-rix7-s1-p5: 34.53%; --pc-chart-7-rix7-s1-p6: 66.91%; --pc-chart-7-rix7-s1-p7: 39.26%; --pc-chart-7-rix7-s2-p1: 67.17%; --pc-chart-7-rix7-s2-p2: 80.79%; --pc-chart-7-rix7-s2-p3: 66.43%; --pc-chart-7-rix7-s2-p4: 60.81%; --pc-chart-7-rix7-s2-p5: 65.47%; --pc-chart-7-rix7-s2-p6: 80.82%; --pc-chart-7-rix7-s2-p7: 91.88%;
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
.pc-chart-7-rix7 .pc-chart-row {
  flex: 1;
  display: flex;
  min-height: 0;
}
.pc-chart-7-rix7 .pc-chart-area {
  flex: 1;
  position: relative;
  min-height: 0;
  min-width: 0;
}

.pc-chart-7-rix7-axis-y {
  position: relative;
  width: 38px;
  flex: none;
  font-size: 10px;
  color: #837da0;
  font-variant-numeric: tabular-nums;
}

.pc-chart-7-rix7 .pc-grid {
  position: absolute; inset: 0;
  background:
    repeating-linear-gradient(to bottom, #837da0 0, #837da0 1px, transparent 1px, transparent calc(100% / 5)),
    repeating-linear-gradient(to right, #8b7bff 0, #8b7bff 1px, transparent 1px, transparent calc(100% / 7));
  opacity: 0.1;
  pointer-events: none;
}`
  },
  hbar: {
    html: `<div class="pc-hbar-2-amcu" data-provchart="hbar">
    <div class="pc-hbar-2-amcu-row" data-index="0" data-value="2220">
      <span class="pc-hbar-2-amcu-label">JAVASCRIPT</span>
      <div class="pc-hbar-2-amcu-track">
        <div class="pc-hbar-2-amcu-fill" style="width:100%;background:#8b7bff;"></div>
      </div>
      <span class="pc-hbar-2-amcu-val">2.22k</span>
    </div>
    <div class="pc-hbar-2-amcu-row" data-index="1" data-value="2012">
      <span class="pc-hbar-2-amcu-label">PYTHON</span>
      <div class="pc-hbar-2-amcu-track">
        <div class="pc-hbar-2-amcu-fill" style="width:90.63%;background:#8b7bff;"></div>
      </div>
      <span class="pc-hbar-2-amcu-val">2.01k</span>
    </div>
    <div class="pc-hbar-2-amcu-row" data-index="2" data-value="1233">
      <span class="pc-hbar-2-amcu-label">JAVA</span>
      <div class="pc-hbar-2-amcu-track">
        <div class="pc-hbar-2-amcu-fill" style="width:55.54%;background:#8b7bff;"></div>
      </div>
      <span class="pc-hbar-2-amcu-val">1.23k</span>
    </div>
    <div class="pc-hbar-2-amcu-row" data-index="3" data-value="1230">
      <span class="pc-hbar-2-amcu-label">RUBY</span>
      <div class="pc-hbar-2-amcu-track">
        <div class="pc-hbar-2-amcu-fill" style="width:55.41%;background:#8b7bff;"></div>
      </div>
      <span class="pc-hbar-2-amcu-val">1.23k</span>
    </div>
    <div class="pc-hbar-2-amcu-row" data-index="4" data-value="2008">
      <span class="pc-hbar-2-amcu-label">GO</span>
      <div class="pc-hbar-2-amcu-track">
        <div class="pc-hbar-2-amcu-fill" style="width:90.45%;background:#8b7bff;"></div>
      </div>
      <span class="pc-hbar-2-amcu-val">2.01k</span>
    </div>
    <div class="pc-hbar-2-amcu-row" data-index="5" data-value="1035">
      <span class="pc-hbar-2-amcu-label">C#</span>
      <div class="pc-hbar-2-amcu-track">
        <div class="pc-hbar-2-amcu-fill" style="width:46.62%;background:#8b7bff;"></div>
      </div>
      <span class="pc-hbar-2-amcu-val">1.03k</span>
    </div>
    <div class="pc-hbar-2-amcu-row" data-index="6" data-value="1900">
      <span class="pc-hbar-2-amcu-label">C++</span>
      <div class="pc-hbar-2-amcu-track">
        <div class="pc-hbar-2-amcu-fill" style="width:85.59%;background:#8b7bff;"></div>
      </div>
      <span class="pc-hbar-2-amcu-val">1.9k</span>
    </div></div>`, 
    css:`.pc-hbar-2-amcu {
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
.pc-hbar-2-amcu-row {
  display: grid;
  grid-template-columns: minmax(56px, 28%) 1fr auto;
  align-items: center;
  gap: 12px;
}
.pc-hbar-2-amcu-label {
  font-size: 12px;
  color: #eae7f5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.pc-hbar-2-amcu-track {
  height: 10px;
  border-radius: 999px;
  background: #131120;
  overflow: hidden;
}
.pc-hbar-2-amcu-fill {
  height: 100%;
  border-radius: 999px;
  transition: width 600ms ease;
  min-width: 0;
}
.pc-hbar-2-amcu-val {
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
    html: `<div class="pc-chart-4-mkhv" data-provchart="combo" data-pc-s1="1020,535,1033,1030,2048,1035,1900" data-pc-s2="1025,541,1034,1085,2057,1025,1870">
  <div class="pc-chart-row">
    <div class="pc-chart-4-mkhv-axis-y"><span style="position:absolute;left:0;right:4px;top:0%;transform:translateY(-50%);text-align:right;">2.06k</span><span style="position:absolute;left:0;right:4px;top:20%;transform:translateY(-50%);text-align:right;">1.65k</span><span style="position:absolute;left:0;right:4px;top:40%;transform:translateY(-50%);text-align:right;">1.23k</span><span style="position:absolute;left:0;right:4px;top:60%;transform:translateY(-50%);text-align:right;">822.8</span><span style="position:absolute;left:0;right:4px;top:80%;transform:translateY(-50%);text-align:right;">411.4</span><span style="position:absolute;left:0;right:4px;top:100%;transform:translateY(-50%);text-align:right;">0</span></div>
    <div class="pc-chart-area">
      <div class="pc-grid"></div>
          <div class="pc-series-2"></div>
    <div class="pc-bar-group-1" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-1-0" data-value="1020" style="left:2.854285714285714%;width:8.571428571428571%;height:49.59%;bottom:0;background:#8b7bff;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-1" data-value="535" style="left:17.144285714285715%;width:8.571428571428571%;height:26.01%;bottom:0;background:#8b7bff;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-2" data-value="1033" style="left:31.424285714285716%;width:8.571428571428571%;height:50.22%;bottom:0;background:#8b7bff;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-3" data-value="1030" style="left:45.714285714285715%;width:8.571428571428571%;height:50.07%;bottom:0;background:#8b7bff;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-4" data-value="2048" style="left:60.00428571428572%;width:8.571428571428571%;height:99.56%;bottom:0;background:#8b7bff;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-5" data-value="1035" style="left:74.2842857142857%;width:8.571428571428571%;height:50.32%;bottom:0;background:#8b7bff;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-6" data-value="1900" style="left:88.57428571428571%;width:8.571428571428571%;height:92.37%;bottom:0;background:#8b7bff;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div></div>

      
    </div>
  </div>
  
    <div class="pc-chart-4-mkhv-legend" style="display:flex;gap:16px;padding:8px 12px;font-size:12px;color:#837da0;flex-wrap:wrap;justify-content:center;">
      <span><i style="display:inline-block;width:10px;height:10px;background:#8b7bff;border-radius:2px;margin-right:6px;"></i>Series 1</span><span><i style="display:inline-block;width:10px;height:10px;background:#00ffff;border-radius:2px;margin-right:6px;"></i>Series 3</span>
    </div>
</div>`, 
    css: `.pc-chart-4-mkhv {
  --pc-chart-4-mkhv-lw: 2px;
  --pc-chart-4-mkhv-s1-p1: 50.41%; --pc-chart-4-mkhv-s1-p2: 73.99%; --pc-chart-4-mkhv-s1-p3: 49.78%; --pc-chart-4-mkhv-s1-p4: 49.93%; --pc-chart-4-mkhv-s1-p5: 0.44%; --pc-chart-4-mkhv-s1-p6: 49.68%; --pc-chart-4-mkhv-s1-p7: 7.63%; --pc-chart-4-mkhv-s2-p1: 50.17%; --pc-chart-4-mkhv-s2-p2: 73.7%; --pc-chart-4-mkhv-s2-p3: 49.73%; --pc-chart-4-mkhv-s2-p4: 47.25%; --pc-chart-4-mkhv-s2-p5: 0%; --pc-chart-4-mkhv-s2-p6: 50.17%; --pc-chart-4-mkhv-s2-p7: 9.09%;
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
.pc-chart-4-mkhv .pc-chart-row {
  flex: 1;
  display: flex;
  min-height: 0;
}
.pc-chart-4-mkhv .pc-chart-area {
  flex: 1;
  position: relative;
  min-height: 0;
  min-width: 0;
}

.pc-chart-4-mkhv-axis-y {
  position: relative;
  width: 38px;
  flex: none;
  font-size: 10px;
  color: #837da0;
  font-variant-numeric: tabular-nums;
}

.pc-chart-4-mkhv .pc-grid {
  position: absolute; inset: 0;
  background:
    repeating-linear-gradient(to bottom, #837da0 0, #837da0 1px, transparent 1px, transparent calc(100% / 5)),
    repeating-linear-gradient(to right, #8b7bff 0, #8b7bff 1px, transparent 1px, transparent calc(100% / 7));
  opacity: 0.1;
  pointer-events: none;
}

.pc-chart-4-mkhv .pc-series-2 {
  position: absolute; inset: 0;
  background: #00ffff;
  clip-path: polygon(7.14% var(--pc-chart-4-mkhv-s2-p1), 21.43% var(--pc-chart-4-mkhv-s2-p2), 35.71% var(--pc-chart-4-mkhv-s2-p3), 50% var(--pc-chart-4-mkhv-s2-p4), 64.29% var(--pc-chart-4-mkhv-s2-p5), 78.57% var(--pc-chart-4-mkhv-s2-p6), 92.86% var(--pc-chart-4-mkhv-s2-p7), 92.86% calc(var(--pc-chart-4-mkhv-s2-p7) + var(--pc-chart-4-mkhv-lw)), 78.57% calc(var(--pc-chart-4-mkhv-s2-p6) + var(--pc-chart-4-mkhv-lw)), 64.29% calc(var(--pc-chart-4-mkhv-s2-p5) + var(--pc-chart-4-mkhv-lw)), 50% calc(var(--pc-chart-4-mkhv-s2-p4) + var(--pc-chart-4-mkhv-lw)), 35.71% calc(var(--pc-chart-4-mkhv-s2-p3) + var(--pc-chart-4-mkhv-lw)), 21.43% calc(var(--pc-chart-4-mkhv-s2-p2) + var(--pc-chart-4-mkhv-lw)), 7.14% calc(var(--pc-chart-4-mkhv-s2-p1) + var(--pc-chart-4-mkhv-lw)));
  transition: clip-path 700ms cubic-bezier(.4,0,.2,1);
  filter: drop-shadow(0 0 5px #00ffff88);
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




