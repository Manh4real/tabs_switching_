export function animate(title, para) {
  let duration = 500;
  let timing = (timeFraction) => timeFraction;

  let draw = function (progress) {
    title.style.transform = `translateX(-${(1 - progress) * 20}%)`;
    para.style.transform = `translateY(${(1 - progress) * 50}%)`;
  };

  let start = performance.now();
  requestAnimationFrame(function runAnimation(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) {
      timeFraction = 1;
      cancelAnimationFrame(runAnimation);
    }
    let progress = timing(timeFraction);
    draw(progress);

    if (timeFraction < 1) requestAnimationFrame(runAnimation);
  });
  return 1;
}
