// 文字列を1文字ずつ <span> で囲む関数
function wrapCharacters(text) {
  let result = "";
  for (let char of text) {
    result += `<span>${char}</span>`;
  }
  return result;
}

// すべての .target を取得
const targets = document.querySelectorAll(".target");

// 文字を <span> でラップして再設定
targets.forEach((target) => {
  target.innerHTML = wrapCharacters(target.textContent);
});

// IntersectionObserverを使って全ての .target が見えた時にアニメーション
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 交差している要素（.target）
      const t = entry.target;
      const chars = t.querySelectorAll("span");

      // 文字ごとにランダムなタイミングでクラスを付与
      chars.forEach((char) => {
        const delay = Math.floor(Math.random() * 1000); // 0〜999msの乱数
        setTimeout(() => {
          char.classList.add("is-animated");
        }, delay);
      });

      // 1回だけアニメーションしたい場合は監視を解除
      obs.unobserve(t);
    }
  });
});

// それぞれの要素を監視開始
targets.forEach((target) => {
  observer.observe(target);
});