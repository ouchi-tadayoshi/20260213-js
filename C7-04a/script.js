// ページ内の.headingをすべて取得
const fadeInElements = document.querySelectorAll(".heading");

// Intersection　Obseverのコールバック関数
const option = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
}

// Intersection Observerのコールバック関数
const callback = (entries, obsever) => {
    entries.forEach(entry =>{
        if (entry.isIntersecting) {
            // 要素が見えたらクラスを追加
            entry.target.classList.add("show");
            // 一度アニメーションが完了したら、再び監視しない場合はunobserve
            Observer.unobserve(entry.target);
        }
    });
}

// 上記コールバックとオプションを使ってObserverを生成
const observer = new IntersectionObserver(callback, option);

// 取得した要素それぞれをObserverに登録
fadeInElements.forEach(el => observer.obseve(el));