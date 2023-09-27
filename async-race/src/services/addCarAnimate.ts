export default function addAnimate(
  car: HTMLElement,
  distancePx: number,
  timeMs: number
): Animation {
  const animate = car.animate(
    [
      { transform: `translateX(0)` },
      { transform: `translateX(${distancePx}px)` },
    ],
    {
      duration: timeMs,
      fill: 'forwards',
    }
  );
  animate.id = `animate-${car.id}`;

  return animate;
}
