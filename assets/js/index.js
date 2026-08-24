// ==========================================================================
// Statik — homepage hero chart
// This is the entire "engine" driving the live demo: eight numbers per
// line, written as CSS custom properties. The clip-path math and the
// repaint both happen in CSS — this script never touches the polygon.
// ==========================================================================

(function () {
  const lines = document.querySelectorAll('.chart-line');
  if (!lines.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const datasets = [
    [62, 48, 55, 30, 44, 20, 36, 42],
    [40, 58, 35, 62, 28, 66, 30, 50],
    [55, 32, 60, 25, 70, 34, 58, 20],
  ];

  function apply(el, values) {
    values.forEach((v, i) => {
      el.style.setProperty(`--p${i + 1}`, `${100 - v}%`);
    });
  }

  lines.forEach((el, i) => apply(el, datasets[i % datasets.length]));

  if (reduceMotion) return;

  function randomSeries() {
    return Array.from({ length: 8 }, () => Math.round(20 + Math.random() * 65));
  }

  setInterval(() => {
    lines.forEach((el) => apply(el, randomSeries()));
  }, 2600);
})();




/* == *-*/

const PREVIEWS = {
  line: {
    html: `<div class="pc-chart-3-4efv" data-provchart="line">
  <div class="pc-chart-area">
    <div class="pc-grid"></div>
        <div class="pc-series-1"></div>
    <div class="pc-series-2"></div>
    <div class="pc-series-3"></div>

    
  </div>
  
    <div class="pc-chart-3-4efv-legend" style="display:flex;gap:16px;padding:8px 12px;font-size:12px;color:#837da0;flex-wrap:wrap;justify-content:center;">
      <span><i style="display:inline-block;width:10px;height:10px;background:#8b7bff;border-radius:2px;margin-right:6px;"></i>Series 1</span><span><i style="display:inline-block;width:10px;height:10px;background:#4fd8c4;border-radius:2px;margin-right:6px;"></i>Series 2</span><span><i style="display:inline-block;width:10px;height:10px;background:#f0a860;border-radius:2px;margin-right:6px;"></i>Series 3</span>
    </div>
</div>`,
    css: `.pc-chart-3-4efv {
  --pc-chart-3-4efv-lw: 2px;
  --pc-chart-3-4efv-s1-p1: 80%; --pc-chart-3-4efv-s1-p2: 65%; --pc-chart-3-4efv-s1-p3: 67%; --pc-chart-3-4efv-s1-p4: 70%; --pc-chart-3-4efv-s1-p5: 52%; --pc-chart-3-4efv-s1-p6: 65%; --pc-chart-3-4efv-s1-p7: 34%; --pc-chart-3-4efv-s2-p1: 60%; --pc-chart-3-4efv-s2-p2: 49%; --pc-chart-3-4efv-s2-p3: 74%; --pc-chart-3-4efv-s2-p4: 48%; --pc-chart-3-4efv-s2-p5: 75%; --pc-chart-3-4efv-s2-p6: 17%; --pc-chart-3-4efv-s2-p7: 33%; --pc-chart-3-4efv-s3-p1: 47%; --pc-chart-3-4efv-s3-p2: 34%; --pc-chart-3-4efv-s3-p3: 19%; --pc-chart-3-4efv-s3-p4: 32%; --pc-chart-3-4efv-s3-p5: 42%; --pc-chart-3-4efv-s3-p6: 40%; --pc-chart-3-4efv-s3-p7: 28%;
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
.pc-chart-3-4efv .pc-chart-area {
  flex: 1;
  position: relative;
  min-height: 0;
}

.pc-chart-3-4efv .pc-grid {
  position: absolute; inset: 0;
  background:
    repeating-linear-gradient(to bottom, #837da0 0, #837da0 1px, transparent 1px, transparent calc(100% / 5)),
    repeating-linear-gradient(to right, #8b7bff 0, #8b7bff 1px, transparent 1px, transparent calc(100% / 7));
  opacity: 0.1;
  pointer-events: none;
}

.pc-chart-3-4efv .pc-series-1 {
  position: absolute; inset: 0;
  background: #8b7bff;
  clip-path: polygon(0% var(--pc-chart-3-4efv-s1-p1), 16.67% var(--pc-chart-3-4efv-s1-p2), 33.33% var(--pc-chart-3-4efv-s1-p3), 50% var(--pc-chart-3-4efv-s1-p4), 66.67% var(--pc-chart-3-4efv-s1-p5), 83.33% var(--pc-chart-3-4efv-s1-p6), 100% var(--pc-chart-3-4efv-s1-p7), 100% calc(var(--pc-chart-3-4efv-s1-p7) + var(--pc-chart-3-4efv-lw)), 83.33% calc(var(--pc-chart-3-4efv-s1-p6) + var(--pc-chart-3-4efv-lw)), 66.67% calc(var(--pc-chart-3-4efv-s1-p5) + var(--pc-chart-3-4efv-lw)), 50% calc(var(--pc-chart-3-4efv-s1-p4) + var(--pc-chart-3-4efv-lw)), 33.33% calc(var(--pc-chart-3-4efv-s1-p3) + var(--pc-chart-3-4efv-lw)), 16.67% calc(var(--pc-chart-3-4efv-s1-p2) + var(--pc-chart-3-4efv-lw)), 0% calc(var(--pc-chart-3-4efv-s1-p1) + var(--pc-chart-3-4efv-lw)));
  transition: clip-path 700ms cubic-bezier(.4,0,.2,1);
  filter: drop-shadow(0 0 5px #8b7bff88);
}

.pc-chart-3-4efv .pc-series-2 {
  position: absolute; inset: 0;
  background: #4fd8c4;
  clip-path: polygon(0% var(--pc-chart-3-4efv-s2-p1), 16.67% var(--pc-chart-3-4efv-s2-p2), 33.33% var(--pc-chart-3-4efv-s2-p3), 50% var(--pc-chart-3-4efv-s2-p4), 66.67% var(--pc-chart-3-4efv-s2-p5), 83.33% var(--pc-chart-3-4efv-s2-p6), 100% var(--pc-chart-3-4efv-s2-p7), 100% calc(var(--pc-chart-3-4efv-s2-p7) + var(--pc-chart-3-4efv-lw)), 83.33% calc(var(--pc-chart-3-4efv-s2-p6) + var(--pc-chart-3-4efv-lw)), 66.67% calc(var(--pc-chart-3-4efv-s2-p5) + var(--pc-chart-3-4efv-lw)), 50% calc(var(--pc-chart-3-4efv-s2-p4) + var(--pc-chart-3-4efv-lw)), 33.33% calc(var(--pc-chart-3-4efv-s2-p3) + var(--pc-chart-3-4efv-lw)), 16.67% calc(var(--pc-chart-3-4efv-s2-p2) + var(--pc-chart-3-4efv-lw)), 0% calc(var(--pc-chart-3-4efv-s2-p1) + var(--pc-chart-3-4efv-lw)));
  transition: clip-path 700ms cubic-bezier(.4,0,.2,1);
  filter: drop-shadow(0 0 5px #4fd8c488);
}

.pc-chart-3-4efv .pc-series-3 {
  position: absolute; inset: 0;
  background: #f0a860;
  clip-path: polygon(0% var(--pc-chart-3-4efv-s3-p1), 16.67% var(--pc-chart-3-4efv-s3-p2), 33.33% var(--pc-chart-3-4efv-s3-p3), 50% var(--pc-chart-3-4efv-s3-p4), 66.67% var(--pc-chart-3-4efv-s3-p5), 83.33% var(--pc-chart-3-4efv-s3-p6), 100% var(--pc-chart-3-4efv-s3-p7), 100% calc(var(--pc-chart-3-4efv-s3-p7) + var(--pc-chart-3-4efv-lw)), 83.33% calc(var(--pc-chart-3-4efv-s3-p6) + var(--pc-chart-3-4efv-lw)), 66.67% calc(var(--pc-chart-3-4efv-s3-p5) + var(--pc-chart-3-4efv-lw)), 50% calc(var(--pc-chart-3-4efv-s3-p4) + var(--pc-chart-3-4efv-lw)), 33.33% calc(var(--pc-chart-3-4efv-s3-p3) + var(--pc-chart-3-4efv-lw)), 16.67% calc(var(--pc-chart-3-4efv-s3-p2) + var(--pc-chart-3-4efv-lw)), 0% calc(var(--pc-chart-3-4efv-s3-p1) + var(--pc-chart-3-4efv-lw)));
  transition: clip-path 700ms cubic-bezier(.4,0,.2,1);
  filter: drop-shadow(0 0 5px #f0a86088);
}`,
  },
  area: { html: `<div class="pc-chart-2-qqle" data-provchart="area">
  <div class="pc-chart-area">
    <div class="pc-grid"></div>
        <div class="pc-series-1"></div>
    <div class="pc-series-2"></div>

    
  </div>
  
    <div class="pc-chart-2-qqle-legend" style="display:flex;gap:16px;padding:8px 12px;font-size:12px;color:#837da0;flex-wrap:wrap;justify-content:center;">
      <span><i style="display:inline-block;width:10px;height:10px;background:#4fd8c4;border-radius:2px;margin-right:6px;"></i>Series 2</span><span><i style="display:inline-block;width:10px;height:10px;background:#f0a860;border-radius:2px;margin-right:6px;"></i>Series 3</span>
    </div>
</div>`, css: `.pc-chart-2-qqle {
  --pc-chart-2-qqle-lw: 2px;
  --pc-chart-2-qqle-s1-p1: 60%; --pc-chart-2-qqle-s1-p2: 49%; --pc-chart-2-qqle-s1-p3: 74%; --pc-chart-2-qqle-s1-p4: 48%; --pc-chart-2-qqle-s1-p5: 75%; --pc-chart-2-qqle-s1-p6: 17%; --pc-chart-2-qqle-s1-p7: 33%; --pc-chart-2-qqle-s2-p1: 47%; --pc-chart-2-qqle-s2-p2: 34%; --pc-chart-2-qqle-s2-p3: 19%; --pc-chart-2-qqle-s2-p4: 32%; --pc-chart-2-qqle-s2-p5: 42%; --pc-chart-2-qqle-s2-p6: 40%; --pc-chart-2-qqle-s2-p7: 28%;
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
.pc-chart-2-qqle .pc-chart-area {
  flex: 1;
  position: relative;
  min-height: 0;
}

.pc-chart-2-qqle .pc-grid {
  position: absolute; inset: 0;
  background:
    repeating-linear-gradient(to bottom, #837da0 0, #837da0 1px, transparent 1px, transparent calc(100% / 5)),
    repeating-linear-gradient(to right, #8b7bff 0, #8b7bff 1px, transparent 1px, transparent calc(100% / 7));
  opacity: 0.1;
  pointer-events: none;
}

.pc-chart-2-qqle .pc-series-1 {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, #4fd8c466 0%, #4fd8c405 100%);
  clip-path: polygon(0% var(--pc-chart-2-qqle-s1-p1), 16.67% var(--pc-chart-2-qqle-s1-p2), 33.33% var(--pc-chart-2-qqle-s1-p3), 50% var(--pc-chart-2-qqle-s1-p4), 66.67% var(--pc-chart-2-qqle-s1-p5), 83.33% var(--pc-chart-2-qqle-s1-p6), 100% var(--pc-chart-2-qqle-s1-p7), 100% 100%, 0% 100%);
  transition: clip-path 700ms cubic-bezier(.4,0,.2,1);
}

.pc-chart-2-qqle .pc-series-2 {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, #f0a86066 0%, #f0a86005 100%);
  clip-path: polygon(0% var(--pc-chart-2-qqle-s2-p1), 16.67% var(--pc-chart-2-qqle-s2-p2), 33.33% var(--pc-chart-2-qqle-s2-p3), 50% var(--pc-chart-2-qqle-s2-p4), 66.67% var(--pc-chart-2-qqle-s2-p5), 83.33% var(--pc-chart-2-qqle-s2-p6), 100% var(--pc-chart-2-qqle-s2-p7), 100% 100%, 0% 100%);
  transition: clip-path 700ms cubic-bezier(.4,0,.2,1);
}` },
  bar: { html: `<div class="pc-chart-2-wiig" data-provchart="bar">
  <div class="pc-chart-area">
    <div class="pc-grid"></div>
        <div class="pc-bar-group-1" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-1-0" style="left:-4.285714285714286%;width:8.571428571428571%;height:40%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-1" style="left:12.384285714285717%;width:8.571428571428571%;height:51%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-2" style="left:29.044285714285714%;width:8.571428571428571%;height:26%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-3" style="left:45.714285714285715%;width:8.571428571428571%;height:52%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-4" style="left:62.38428571428572%;width:8.571428571428571%;height:25%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-5" style="left:79.0442857142857%;width:8.571428571428571%;height:83%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-6" style="left:95.71428571428571%;width:8.571428571428571%;height:67%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div></div>
    <div class="pc-bar-group-2" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-2-0" style="left:-4.285714285714286%;width:8.571428571428571%;height:32%;bottom:0;background:#f0a860;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-1" style="left:12.384285714285717%;width:8.571428571428571%;height:85%;bottom:0;background:#f0a860;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-2" style="left:29.044285714285714%;width:8.571428571428571%;height:30%;bottom:0;background:#f0a860;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-3" style="left:45.714285714285715%;width:8.571428571428571%;height:33%;bottom:0;background:#f0a860;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-4" style="left:62.38428571428572%;width:8.571428571428571%;height:82%;bottom:0;background:#f0a860;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-5" style="left:79.0442857142857%;width:8.571428571428571%;height:37%;bottom:0;background:#f0a860;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-6" style="left:95.71428571428571%;width:8.571428571428571%;height:44%;bottom:0;background:#f0a860;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div></div>
    <div class="pc-bar-group-3" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-3-0" style="left:-4.285714285714286%;width:8.571428571428571%;height:27%;bottom:0;background:#ff5e7d;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-3-1" style="left:12.384285714285717%;width:8.571428571428571%;height:50%;bottom:0;background:#ff5e7d;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-3-2" style="left:29.044285714285714%;width:8.571428571428571%;height:50%;bottom:0;background:#ff5e7d;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-3-3" style="left:45.714285714285715%;width:8.571428571428571%;height:17%;bottom:0;background:#ff5e7d;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-3-4" style="left:62.38428571428572%;width:8.571428571428571%;height:39%;bottom:0;background:#ff5e7d;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-3-5" style="left:79.0442857142857%;width:8.571428571428571%;height:21%;bottom:0;background:#ff5e7d;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-3-6" style="left:95.71428571428571%;width:8.571428571428571%;height:18%;bottom:0;background:#ff5e7d;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div></div>
    <div class="pc-bar-group-4" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-4-0" style="left:-4.285714285714286%;width:8.571428571428571%;height:57%;bottom:0;background:#4fffb0;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-4-1" style="left:12.384285714285717%;width:8.571428571428571%;height:36%;bottom:0;background:#4fffb0;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-4-2" style="left:29.044285714285714%;width:8.571428571428571%;height:74%;bottom:0;background:#4fffb0;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-4-3" style="left:45.714285714285715%;width:8.571428571428571%;height:78%;bottom:0;background:#4fffb0;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-4-4" style="left:62.38428571428572%;width:8.571428571428571%;height:21%;bottom:0;background:#4fffb0;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-4-5" style="left:79.0442857142857%;width:8.571428571428571%;height:31%;bottom:0;background:#4fffb0;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-4-6" style="left:95.71428571428571%;width:8.571428571428571%;height:32%;bottom:0;background:#4fffb0;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div></div>

    
  </div>
  
    <div class="pc-chart-2-wiig-legend" style="display:flex;gap:16px;padding:8px 12px;font-size:12px;color:#837da0;flex-wrap:wrap;justify-content:center;">
      <span><i style="display:inline-block;width:10px;height:10px;background:#4fd8c4;border-radius:2px;margin-right:6px;"></i>Series 2</span><span><i style="display:inline-block;width:10px;height:10px;background:#f0a860;border-radius:2px;margin-right:6px;"></i>Series 3</span><span><i style="display:inline-block;width:10px;height:10px;background:#ff5e7d;border-radius:2px;margin-right:6px;"></i>Series 4</span><span><i style="display:inline-block;width:10px;height:10px;background:#4fffb0;border-radius:2px;margin-right:6px;"></i>Series 5</span>
    </div>
</div>`, css: `.pc-chart-2-wiig {
  --pc-chart-2-wiig-lw: 2px;
  --pc-chart-2-wiig-s1-p1: 60%; --pc-chart-2-wiig-s1-p2: 49%; --pc-chart-2-wiig-s1-p3: 74%; --pc-chart-2-wiig-s1-p4: 48%; --pc-chart-2-wiig-s1-p5: 75%; --pc-chart-2-wiig-s1-p6: 17%; --pc-chart-2-wiig-s1-p7: 33%; --pc-chart-2-wiig-s2-p1: 68%; --pc-chart-2-wiig-s2-p2: 15%; --pc-chart-2-wiig-s2-p3: 70%; --pc-chart-2-wiig-s2-p4: 67%; --pc-chart-2-wiig-s2-p5: 18%; --pc-chart-2-wiig-s2-p6: 63%; --pc-chart-2-wiig-s2-p7: 56%; --pc-chart-2-wiig-s3-p1: 73%; --pc-chart-2-wiig-s3-p2: 50%; --pc-chart-2-wiig-s3-p3: 50%; --pc-chart-2-wiig-s3-p4: 83%; --pc-chart-2-wiig-s3-p5: 61%; --pc-chart-2-wiig-s3-p6: 79%; --pc-chart-2-wiig-s3-p7: 82%; --pc-chart-2-wiig-s4-p1: 43%; --pc-chart-2-wiig-s4-p2: 64%; --pc-chart-2-wiig-s4-p3: 26%; --pc-chart-2-wiig-s4-p4: 22%; --pc-chart-2-wiig-s4-p5: 79%; --pc-chart-2-wiig-s4-p6: 69%; --pc-chart-2-wiig-s4-p7: 68%;
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
.pc-chart-2-wiig .pc-chart-area {
  flex: 1;
  position: relative;
  min-height: 0;
}

.pc-chart-2-wiig .pc-grid {
  position: absolute; inset: 0;
  background:
    repeating-linear-gradient(to bottom, #837da0 0, #837da0 1px, transparent 1px, transparent calc(100% / 5)),
    repeating-linear-gradient(to right, #8b7bff 0, #8b7bff 1px, transparent 1px, transparent calc(100% / 7));
  opacity: 0.1;
  pointer-events: none;
}` },
  stackedbar: { html: `<div class="pc-chart-2-g9ww" data-provchart="bar">
  <div class="pc-chart-area">
    <div class="pc-grid"></div>
        <div class="pc-bar-group-1" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-1-0" style="left:-4.285714285714286%;width:8.571428571428571%;height:40%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-1" style="left:12.384285714285717%;width:8.571428571428571%;height:51%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-2" style="left:29.044285714285714%;width:8.571428571428571%;height:26%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-3" style="left:45.714285714285715%;width:8.571428571428571%;height:52%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-4" style="left:62.38428571428572%;width:8.571428571428571%;height:25%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-5" style="left:79.0442857142857%;width:8.571428571428571%;height:83%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-6" style="left:95.71428571428571%;width:8.571428571428571%;height:67%;bottom:0;background:#4fd8c4;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div></div>
    <div class="pc-bar-group-2" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-2-0" style="left:-4.285714285714286%;width:8.571428571428571%;height:27%;bottom:0;background:#ff5e7d;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-1" style="left:12.384285714285717%;width:8.571428571428571%;height:50%;bottom:0;background:#ff5e7d;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-2" style="left:29.044285714285714%;width:8.571428571428571%;height:50%;bottom:0;background:#ff5e7d;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-3" style="left:45.714285714285715%;width:8.571428571428571%;height:17%;bottom:0;background:#ff5e7d;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-4" style="left:62.38428571428572%;width:8.571428571428571%;height:39%;bottom:0;background:#ff5e7d;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-5" style="left:79.0442857142857%;width:8.571428571428571%;height:21%;bottom:0;background:#ff5e7d;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-2-6" style="left:95.71428571428571%;width:8.571428571428571%;height:18%;bottom:0;background:#ff5e7d;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div></div>
    <div class="pc-bar-group-3" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-3-0" style="left:-4.285714285714286%;width:8.571428571428571%;height:57%;bottom:0;background:#4fffb0;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-3-1" style="left:12.384285714285717%;width:8.571428571428571%;height:36%;bottom:0;background:#4fffb0;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-3-2" style="left:29.044285714285714%;width:8.571428571428571%;height:74%;bottom:0;background:#4fffb0;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-3-3" style="left:45.714285714285715%;width:8.571428571428571%;height:78%;bottom:0;background:#4fffb0;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-3-4" style="left:62.38428571428572%;width:8.571428571428571%;height:21%;bottom:0;background:#4fffb0;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-3-5" style="left:79.0442857142857%;width:8.571428571428571%;height:31%;bottom:0;background:#4fffb0;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-3-6" style="left:95.71428571428571%;width:8.571428571428571%;height:32%;bottom:0;background:#4fffb0;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div></div>
    <div class="pc-bar-group-4" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-4-0" style="left:-4.285714285714286%;width:8.571428571428571%;height:36%;bottom:0;background:#5ea8ff;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-4-1" style="left:12.384285714285717%;width:8.571428571428571%;height:54%;bottom:0;background:#5ea8ff;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-4-2" style="left:29.044285714285714%;width:8.571428571428571%;height:42%;bottom:0;background:#5ea8ff;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-4-3" style="left:45.714285714285715%;width:8.571428571428571%;height:63%;bottom:0;background:#5ea8ff;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-4-4" style="left:62.38428571428572%;width:8.571428571428571%;height:67%;bottom:0;background:#5ea8ff;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-4-5" style="left:79.0442857142857%;width:8.571428571428571%;height:69%;bottom:0;background:#5ea8ff;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-4-6" style="left:95.71428571428571%;width:8.571428571428571%;height:57%;bottom:0;background:#5ea8ff;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div></div>

    
  </div>
  
    <div class="pc-chart-2-g9ww-legend" style="display:flex;gap:16px;padding:8px 12px;font-size:12px;color:#837da0;flex-wrap:wrap;justify-content:center;">
      <span><i style="display:inline-block;width:10px;height:10px;background:#4fd8c4;border-radius:2px;margin-right:6px;"></i>Series 2</span><span><i style="display:inline-block;width:10px;height:10px;background:#ff5e7d;border-radius:2px;margin-right:6px;"></i>Series 4</span><span><i style="display:inline-block;width:10px;height:10px;background:#4fffb0;border-radius:2px;margin-right:6px;"></i>Series 5</span><span><i style="display:inline-block;width:10px;height:10px;background:#5ea8ff;border-radius:2px;margin-right:6px;"></i>Series 6</span>
    </div>
</div>`, css: `.pc-chart-2-g9ww {
  --pc-chart-2-g9ww-lw: 2px;
  --pc-chart-2-g9ww-s1-p1: 60%; --pc-chart-2-g9ww-s1-p2: 49%; --pc-chart-2-g9ww-s1-p3: 74%; --pc-chart-2-g9ww-s1-p4: 48%; --pc-chart-2-g9ww-s1-p5: 75%; --pc-chart-2-g9ww-s1-p6: 17%; --pc-chart-2-g9ww-s1-p7: 33%; --pc-chart-2-g9ww-s2-p1: 73%; --pc-chart-2-g9ww-s2-p2: 50%; --pc-chart-2-g9ww-s2-p3: 50%; --pc-chart-2-g9ww-s2-p4: 83%; --pc-chart-2-g9ww-s2-p5: 61%; --pc-chart-2-g9ww-s2-p6: 79%; --pc-chart-2-g9ww-s2-p7: 82%; --pc-chart-2-g9ww-s3-p1: 43%; --pc-chart-2-g9ww-s3-p2: 64%; --pc-chart-2-g9ww-s3-p3: 26%; --pc-chart-2-g9ww-s3-p4: 22%; --pc-chart-2-g9ww-s3-p5: 79%; --pc-chart-2-g9ww-s3-p6: 69%; --pc-chart-2-g9ww-s3-p7: 68%; --pc-chart-2-g9ww-s4-p1: 64%; --pc-chart-2-g9ww-s4-p2: 46%; --pc-chart-2-g9ww-s4-p3: 58%; --pc-chart-2-g9ww-s4-p4: 37%; --pc-chart-2-g9ww-s4-p5: 33%; --pc-chart-2-g9ww-s4-p6: 31%; --pc-chart-2-g9ww-s4-p7: 43%;
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
.pc-chart-2-g9ww .pc-chart-area {
  flex: 1;
  position: relative;
  min-height: 0;
}

.pc-chart-2-g9ww .pc-grid {
  position: absolute; inset: 0;
  background:
    repeating-linear-gradient(to bottom, #837da0 0, #837da0 1px, transparent 1px, transparent calc(100% / 5)),
    repeating-linear-gradient(to right, #8b7bff 0, #8b7bff 1px, transparent 1px, transparent calc(100% / 7));
  opacity: 0.1;
  pointer-events: none;
}` },
  hbar: { html: `<div class="pc-hbar-1-ahkj" data-provchart="hbar">
    <div class="pc-hbar-1-ahkj-row" data-index="0">
      <span class="pc-hbar-1-ahkj-label">Series 2</span>
      <div class="pc-hbar-1-ahkj-track">
        <div class="pc-hbar-1-ahkj-fill" style="width:40%;background:#4fd8c4;"></div>
      </div>
      <span class="pc-hbar-1-ahkj-val">40</span>
    </div>
    <div class="pc-hbar-1-ahkj-row" data-index="1">
      <span class="pc-hbar-1-ahkj-label">Series 2</span>
      <div class="pc-hbar-1-ahkj-track">
        <div class="pc-hbar-1-ahkj-fill" style="width:51%;background:#4fd8c4;"></div>
      </div>
      <span class="pc-hbar-1-ahkj-val">51</span>
    </div>
    <div class="pc-hbar-1-ahkj-row" data-index="2">
      <span class="pc-hbar-1-ahkj-label">Series 2</span>
      <div class="pc-hbar-1-ahkj-track">
        <div class="pc-hbar-1-ahkj-fill" style="width:26%;background:#4fd8c4;"></div>
      </div>
      <span class="pc-hbar-1-ahkj-val">26</span>
    </div>
    <div class="pc-hbar-1-ahkj-row" data-index="3">
      <span class="pc-hbar-1-ahkj-label">Series 2</span>
      <div class="pc-hbar-1-ahkj-track">
        <div class="pc-hbar-1-ahkj-fill" style="width:52%;background:#4fd8c4;"></div>
      </div>
      <span class="pc-hbar-1-ahkj-val">52</span>
    </div>
    <div class="pc-hbar-1-ahkj-row" data-index="4">
      <span class="pc-hbar-1-ahkj-label">Series 2</span>
      <div class="pc-hbar-1-ahkj-track">
        <div class="pc-hbar-1-ahkj-fill" style="width:25%;background:#4fd8c4;"></div>
      </div>
      <span class="pc-hbar-1-ahkj-val">25</span>
    </div>
    <div class="pc-hbar-1-ahkj-row" data-index="5">
      <span class="pc-hbar-1-ahkj-label">Series 2</span>
      <div class="pc-hbar-1-ahkj-track">
        <div class="pc-hbar-1-ahkj-fill" style="width:83%;background:#4fd8c4;"></div>
      </div>
      <span class="pc-hbar-1-ahkj-val">83</span>
    </div>
    <div class="pc-hbar-1-ahkj-row" data-index="6">
      <span class="pc-hbar-1-ahkj-label">Series 2</span>
      <div class="pc-hbar-1-ahkj-track">
        <div class="pc-hbar-1-ahkj-fill" style="width:67%;background:#4fd8c4;"></div>
      </div>
      <span class="pc-hbar-1-ahkj-val">67</span>
    </div></div>`, css: `.pc-hbar-1-ahkj {
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
.pc-hbar-1-ahkj-row {
  display: grid;
  grid-template-columns: minmax(56px, 28%) 1fr auto;
  align-items: center;
  gap: 12px;
}
.pc-hbar-1-ahkj-label {
  font-size: 12px;
  color: #eae7f5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.pc-hbar-1-ahkj-track {
  height: 10px;
  border-radius: 999px;
  background: #131120;
  overflow: hidden;
}
.pc-hbar-1-ahkj-fill {
  height: 100%;
  border-radius: 999px;
  transition: width 600ms ease;
  min-width: 0;
}
.pc-hbar-1-ahkj-val {
  font-size: 12px;
  color: #837da0;
  min-width: 2.5ch;
  text-align: right;
  font-variant-numeric: tabular-nums;
}` },
  scatter: { html: `<div class="pc-chart-3-ylob" data-provchart="scatter">
  <div class="pc-chart-area">
    <div class="pc-grid"></div>
        <svg class="pc-scatter-1" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;"><circle cx="0%" cy="20%" r="4" fill="#ff5e7d" /><circle cx="16.67%" cy="44%" r="4" fill="#ff5e7d" /><circle cx="33.33%" cy="39%" r="4" fill="#ff5e7d" /><circle cx="50%" cy="67%" r="4" fill="#ff5e7d" /><circle cx="66.67%" cy="46%" r="4" fill="#ff5e7d" /><circle cx="83.33%" cy="61%" r="4" fill="#ff5e7d" /><circle cx="100%" cy="32%" r="4" fill="#ff5e7d" /></svg>
    <svg class="pc-scatter-2" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;"><circle cx="0%" cy="85%" r="4" fill="#4fffb0" /><circle cx="16.67%" cy="69%" r="4" fill="#4fffb0" /><circle cx="33.33%" cy="26%" r="4" fill="#4fffb0" /><circle cx="50%" cy="76%" r="4" fill="#4fffb0" /><circle cx="66.67%" cy="45%" r="4" fill="#4fffb0" /><circle cx="83.33%" cy="51%" r="4" fill="#4fffb0" /><circle cx="100%" cy="56%" r="4" fill="#4fffb0" /></svg>
    <svg class="pc-scatter-3" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;"><circle cx="0%" cy="41%" r="4" fill="#5ea8ff" /><circle cx="16.67%" cy="36%" r="4" fill="#5ea8ff" /><circle cx="33.33%" cy="54%" r="4" fill="#5ea8ff" /><circle cx="50%" cy="76%" r="4" fill="#5ea8ff" /><circle cx="66.67%" cy="29%" r="4" fill="#5ea8ff" /><circle cx="83.33%" cy="32%" r="4" fill="#5ea8ff" /><circle cx="100%" cy="51%" r="4" fill="#5ea8ff" /></svg>

    
  </div>
  
    <div class="pc-chart-3-ylob-legend" style="display:flex;gap:16px;padding:8px 12px;font-size:12px;color:#837da0;flex-wrap:wrap;justify-content:center;">
      <span><i style="display:inline-block;width:10px;height:10px;background:#ff5e7d;border-radius:2px;margin-right:6px;"></i>Series 4</span><span><i style="display:inline-block;width:10px;height:10px;background:#4fffb0;border-radius:2px;margin-right:6px;"></i>Series 5</span><span><i style="display:inline-block;width:10px;height:10px;background:#5ea8ff;border-radius:2px;margin-right:6px;"></i>Series 6</span>
    </div>
</div>`, css: `.pc-chart-3-ylob {
  --pc-chart-3-ylob-lw: 2px;
  --pc-chart-3-ylob-s1-p1: 20%; --pc-chart-3-ylob-s1-p2: 44%; --pc-chart-3-ylob-s1-p3: 39%; --pc-chart-3-ylob-s1-p4: 67%; --pc-chart-3-ylob-s1-p5: 46%; --pc-chart-3-ylob-s1-p6: 61%; --pc-chart-3-ylob-s1-p7: 32%; --pc-chart-3-ylob-s2-p1: 85%; --pc-chart-3-ylob-s2-p2: 69%; --pc-chart-3-ylob-s2-p3: 26%; --pc-chart-3-ylob-s2-p4: 76%; --pc-chart-3-ylob-s2-p5: 45%; --pc-chart-3-ylob-s2-p6: 51%; --pc-chart-3-ylob-s2-p7: 56%; --pc-chart-3-ylob-s3-p1: 41%; --pc-chart-3-ylob-s3-p2: 36%; --pc-chart-3-ylob-s3-p3: 54%; --pc-chart-3-ylob-s3-p4: 76%; --pc-chart-3-ylob-s3-p5: 29%; --pc-chart-3-ylob-s3-p6: 32%; --pc-chart-3-ylob-s3-p7: 51%;
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
.pc-chart-3-ylob .pc-chart-area {
  flex: 1;
  position: relative;
  min-height: 0;
}

.pc-chart-3-ylob .pc-grid {
  position: absolute; inset: 0;
  background:
    repeating-linear-gradient(to bottom, #837da0 0, #837da0 1px, transparent 1px, transparent calc(100% / 5)),
    repeating-linear-gradient(to right, #8b7bff 0, #8b7bff 1px, transparent 1px, transparent calc(100% / 7));
  opacity: 0.1;
  pointer-events: none;
}` },
  combo: { html: `<div class="pc-chart-2-a7zt" data-provchart="combo">
  <div class="pc-chart-area">
    <div class="pc-grid"></div>
        <div class="pc-series-2"></div>
    <div class="pc-series-3"></div>
    <div class="pc-bar-group-1" style="position:absolute;inset:0;pointer-events:none;"><div class="pc-bar-1-0" style="left:-4.285714285714286%;width:8.571428571428571%;height:80%;bottom:0;background:#ff5e7d;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-1" style="left:12.384285714285717%;width:8.571428571428571%;height:56%;bottom:0;background:#ff5e7d;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-2" style="left:29.044285714285714%;width:8.571428571428571%;height:61%;bottom:0;background:#ff5e7d;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-3" style="left:45.714285714285715%;width:8.571428571428571%;height:33%;bottom:0;background:#ff5e7d;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-4" style="left:62.38428571428572%;width:8.571428571428571%;height:54%;bottom:0;background:#ff5e7d;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-5" style="left:79.0442857142857%;width:8.571428571428571%;height:39%;bottom:0;background:#ff5e7d;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div><div class="pc-bar-1-6" style="left:95.71428571428571%;width:8.571428571428571%;height:68%;bottom:0;background:#ff5e7d;position:absolute;border-radius:3px 3px 0 0;transition:height 600ms ease;"></div></div>

    
  </div>
  
    <div class="pc-chart-2-a7zt-legend" style="display:flex;gap:16px;padding:8px 12px;font-size:12px;color:#837da0;flex-wrap:wrap;justify-content:center;">
      <span><i style="display:inline-block;width:10px;height:10px;background:#ff5e7d;border-radius:2px;margin-right:6px;"></i>Series 4</span><span><i style="display:inline-block;width:10px;height:10px;background:#4fffb0;border-radius:2px;margin-right:6px;"></i>Series 5</span><span><i style="display:inline-block;width:10px;height:10px;background:#5ea8ff;border-radius:2px;margin-right:6px;"></i>Series 6</span>
    </div>
</div>`, css: `.pc-chart-2-a7zt {
  --pc-chart-2-a7zt-lw: 2px;
  --pc-chart-2-a7zt-s1-p1: 20%; --pc-chart-2-a7zt-s1-p2: 44%; --pc-chart-2-a7zt-s1-p3: 39%; --pc-chart-2-a7zt-s1-p4: 67%; --pc-chart-2-a7zt-s1-p5: 46%; --pc-chart-2-a7zt-s1-p6: 61%; --pc-chart-2-a7zt-s1-p7: 32%; --pc-chart-2-a7zt-s2-p1: 85%; --pc-chart-2-a7zt-s2-p2: 69%; --pc-chart-2-a7zt-s2-p3: 26%; --pc-chart-2-a7zt-s2-p4: 76%; --pc-chart-2-a7zt-s2-p5: 45%; --pc-chart-2-a7zt-s2-p6: 51%; --pc-chart-2-a7zt-s2-p7: 56%; --pc-chart-2-a7zt-s3-p1: 41%; --pc-chart-2-a7zt-s3-p2: 36%; --pc-chart-2-a7zt-s3-p3: 54%; --pc-chart-2-a7zt-s3-p4: 76%; --pc-chart-2-a7zt-s3-p5: 29%; --pc-chart-2-a7zt-s3-p6: 32%; --pc-chart-2-a7zt-s3-p7: 51%;
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
.pc-chart-2-a7zt .pc-chart-area {
  flex: 1;
  position: relative;
  min-height: 0;
}

.pc-chart-2-a7zt .pc-grid {
  position: absolute; inset: 0;
  background:
    repeating-linear-gradient(to bottom, #837da0 0, #837da0 1px, transparent 1px, transparent calc(100% / 5)),
    repeating-linear-gradient(to right, #8b7bff 0, #8b7bff 1px, transparent 1px, transparent calc(100% / 7));
  opacity: 0.1;
  pointer-events: none;
}

.pc-chart-2-a7zt .pc-series-2 {
  position: absolute; inset: 0;
  background: #4fffb0;
  clip-path: polygon(0% var(--pc-chart-2-a7zt-s2-p1), 16.67% var(--pc-chart-2-a7zt-s2-p2), 33.33% var(--pc-chart-2-a7zt-s2-p3), 50% var(--pc-chart-2-a7zt-s2-p4), 66.67% var(--pc-chart-2-a7zt-s2-p5), 83.33% var(--pc-chart-2-a7zt-s2-p6), 100% var(--pc-chart-2-a7zt-s2-p7), 100% calc(var(--pc-chart-2-a7zt-s2-p7) + var(--pc-chart-2-a7zt-lw)), 83.33% calc(var(--pc-chart-2-a7zt-s2-p6) + var(--pc-chart-2-a7zt-lw)), 66.67% calc(var(--pc-chart-2-a7zt-s2-p5) + var(--pc-chart-2-a7zt-lw)), 50% calc(var(--pc-chart-2-a7zt-s2-p4) + var(--pc-chart-2-a7zt-lw)), 33.33% calc(var(--pc-chart-2-a7zt-s2-p3) + var(--pc-chart-2-a7zt-lw)), 16.67% calc(var(--pc-chart-2-a7zt-s2-p2) + var(--pc-chart-2-a7zt-lw)), 0% calc(var(--pc-chart-2-a7zt-s2-p1) + var(--pc-chart-2-a7zt-lw)));
  transition: clip-path 700ms cubic-bezier(.4,0,.2,1);
  filter: drop-shadow(0 0 5px #4fffb088);
}

.pc-chart-2-a7zt .pc-series-3 {
  position: absolute; inset: 0;
  background: #5ea8ff;
  clip-path: polygon(0% var(--pc-chart-2-a7zt-s3-p1), 16.67% var(--pc-chart-2-a7zt-s3-p2), 33.33% var(--pc-chart-2-a7zt-s3-p3), 50% var(--pc-chart-2-a7zt-s3-p4), 66.67% var(--pc-chart-2-a7zt-s3-p5), 83.33% var(--pc-chart-2-a7zt-s3-p6), 100% var(--pc-chart-2-a7zt-s3-p7), 100% calc(var(--pc-chart-2-a7zt-s3-p7) + var(--pc-chart-2-a7zt-lw)), 83.33% calc(var(--pc-chart-2-a7zt-s3-p6) + var(--pc-chart-2-a7zt-lw)), 66.67% calc(var(--pc-chart-2-a7zt-s3-p5) + var(--pc-chart-2-a7zt-lw)), 50% calc(var(--pc-chart-2-a7zt-s3-p4) + var(--pc-chart-2-a7zt-lw)), 33.33% calc(var(--pc-chart-2-a7zt-s3-p3) + var(--pc-chart-2-a7zt-lw)), 16.67% calc(var(--pc-chart-2-a7zt-s3-p2) + var(--pc-chart-2-a7zt-lw)), 0% calc(var(--pc-chart-2-a7zt-s3-p1) + var(--pc-chart-2-a7zt-lw)));
  transition: clip-path 700ms cubic-bezier(.4,0,.2,1);
  filter: drop-shadow(0 0 5px #5ea8ff88);
}` },
  gauge: { html: `<div class="pc-gauge-1-7h2d" data-provchart="gauge">
  <svg viewBox="0 0 204 204">
    
      <circle class="pc-gauge-1-7h2d-bg-ring" cx="102" cy="102" r="78" stroke="#131120" stroke-width="10" fill="none" />
      <circle class="pc-gauge-1-7h2d-ring" data-series="0" cx="102" cy="102" r="78" 
              stroke="#ff5e7d" stroke-width="10" fill="none"
              stroke-dasharray="490.0884539600077" stroke-dashoffset="88.21592171280139"
              stroke-linecap="round"
              style="transform-origin: center; transform: rotate(-90deg); transition: stroke-dashoffset 700ms ease;" />
      <circle class="pc-gauge-1-7h2d-bg-ring" cx="102" cy="102" r="64" stroke="#131120" stroke-width="10" fill="none" />
      <circle class="pc-gauge-1-7h2d-ring" data-series="1" cx="102" cy="102" r="64" 
              stroke="#4fd8c4" stroke-width="10" fill="none"
              stroke-dasharray="402.1238596594935" stroke-dashoffset="144.76458947741764"
              stroke-linecap="round"
              style="transform-origin: center; transform: rotate(-90deg); transition: stroke-dashoffset 700ms ease;" />
      <circle class="pc-gauge-1-7h2d-bg-ring" cx="102" cy="102" r="50" stroke="#131120" stroke-width="10" fill="none" />
      <circle class="pc-gauge-1-7h2d-ring" data-series="2" cx="102" cy="102" r="50" 
              stroke="#8b7bff" stroke-width="10" fill="none"
              stroke-dasharray="314.1592653589793" stroke-dashoffset="172.78759594743863"
              stroke-linecap="round"
              style="transform-origin: center; transform: rotate(-90deg); transition: stroke-dashoffset 700ms ease;" />
  </svg>
  <div class="pc-gauge-1-7h2d-info">
    <span class="pc-gauge-1-7h2d-val">82%</span>
    <span class="pc-gauge-1-7h2d-lbl">Performance</span>
  </div>
</div>`, css: `.pc-gauge-1-7h2d {
  position: relative;
  width: 190px;
  height: 190px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
}
.pc-gauge-1-7h2d svg {
  width: 100%;
  height: 100%;
}
.pc-gauge-1-7h2d-info {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  pointer-events: none;
}
.pc-gauge-1-7h2d-val {
  font-size: 31.67px;
  font-weight: 700;
  color: #eae7f5;
  line-height: 1;
}
.pc-gauge-1-7h2d-lbl {
  font-size: 11px;
  color: #837da0;
  margin-top: 4px;
}` },
};


// index.js — after PREVIEWS is defined/imported
(function mountHomeChartTypes() {
  const map = {
    line: 'home-line',
    area: 'home-area',
    bar: 'home-bar',
    hbar: 'home-hbar',
    stackedbar: 'home-stackedbar',
    scatter: 'home-scatter',
    combo: 'home-combo',
    gauge: 'home-gauge',
  };

  Object.entries(map).forEach(([key, elId]) => {
    const el = document.getElementById(elId);
    const snap = typeof PREVIEWS !== 'undefined' ? PREVIEWS[key] : null;
    if (!el) return;
    if (snap?.html) {
      el.innerHTML = `<style>${snap.css || ''}</style>${snap.html}`;
    } else {
      el.innerHTML = `<p style="color:var(--muted);font-size:12px;text-align:center;">Preview</p>`;
    }
  });
})();
