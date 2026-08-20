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
