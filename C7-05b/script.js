const layerBack = document.querySelector(".layer-back");
const layerFront = document.querySelector(".layer-front");

// スクロール時に呼び出されるイベント
window.addEventListener("scroll", () => {
  // 現在のスクロール量を取得
  const scrollY = window.scrollY;

  /**
   * ここでは、要素ごとに異なるスピード係数を掛けています。
   * - 奥のレイヤー (layerBack) は 0.4 の速度でスクロール
   * - 手前のレイヤー (layerFront) は 0.8 の速度でスクロール
   * 値を調整することで奥行きの度合いを変化させられます。
   */
  layerBack.style.translate = `0 ${scrollY * 0.4}px`;
  layerFront.style.translate = `0 ${scrollY * 0.8}px`;
});