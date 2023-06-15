
document.addEventListener("DOMContentLoaded", function() {
const imageWrapper = document.querySelector('.image-wrapper');
const imageItems = document.querySelectorAll('.image-wrapper > *');
const imageLength = imageItems.length;
const perView = 3; // 一度に表示する写真の数
let totalScroll = 0; // 現在のスクロール位置
const delay = 3000; // 自動スクロール間隔
let widthEl = 0; // 画像アイテムの幅

// CSS変数を設定して、表示する写真の数を指定
imageWrapper.style.setProperty('--per-view', perView);

// 初期スライドの設定
for (let i = 0; i < perView; i++) {
  // imageWrapper内に初期の表示写真を追加
  imageWrapper.insertAdjacentHTML('beforeend', imageItems[i].outerHTML);
}

// 自動スクロール設定
let autoScroll = setInterval(scrolling, delay);

function scrolling() {
  totalScroll++;
  if (totalScroll == imageLength + 1) {
    // 画像グループが最後までスクロールされたら初期化
    clearInterval(autoScroll);
    totalScroll = 1;
    // スクロールのアニメーションを無効化、左側に戻す
    imageWrapper.style.transition = '0s';
    imageWrapper.style.left = '0';
    autoScroll = setInterval(scrolling, delay);
  }
  // 画像アイテムの幅を計算
  widthEl = document.querySelector('.image-wrapper > :first-child').offsetWidth + 24; 
  imageWrapper.style.left = `-${totalScroll * widthEl}px`; // スクロール移動
  imageWrapper.style.transition = '.3s'; // スクロールアニメーション設定
}

//写真をクリックした時、指定ページに移動
const imageContainer = document.querySelectorAll('.image-container');

imageContainer.forEach((container) => {
  container.addEventListener('click', (event) => {
    event.preventDefault();

    const link = 'https://trucvuong1503.github.io/recruitpage/interview2.html'; 

    window.location.href = link;
  });
})
});
