const parallaxEl = document.querySelector("#parallax");

window.addEventListener("scroll", () => {
  // スクロール量を取得
  const scrollY = window.scrollY;
  // スクロール量に合わせて、背景の垂直方向の位置を少し動かす(例：0.5倍)
  parallaxEl.style.backgroundPositionY = `${scrollY * 0.5}px`;
});