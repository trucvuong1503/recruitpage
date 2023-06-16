
// recruitサイトの機能
function showInfo(i) {
  var infoContents = document.getElementsByClassName("info-content");
  var tabButtons = document.getElementsByClassName("tab-button");
  for (var j = 0; j < infoContents.length; j++) {
      infoContents[j].style.display = "none"; 
      tabButtons[j].classList.remove("clicked");
  }
  document.getElementById("info" + i).style.display = "block";
  document.getElementById("button" + i).classList.add("clicked");
}
// メーラー機能

function sendEmail() {
  let body = `
  日発株式会社
  採用担当　様
  内容
  ex)簡単な自己紹介・応募職種・問い合わせなど
  ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  「氏名」
  「連絡先」
  「メールアドレス」などの署名
  ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝`;
  body = encodeURIComponent(body);

  let subject = `応募に関する問合せ`;
  subject = encodeURIComponent(subject);
  window.location.href = `mailto:saiyo@hihatu.com?subject=${subject}&body=${body}`;
}

// ヘッダーの機能
document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener('scroll', function() {
      let headers = document.querySelectorAll('.news-header');
      let windowH = window.innerHeight / 1.3;

      headers.forEach(header => {
          let h1 = header.querySelector('h1');
          let subheading = header.querySelector('.subheading');
          let announcement = header.querySelector('.announcement');

          let headerPos = header.getBoundingClientRect().top;

          if (headerPos < windowH) {
              h1.classList.add('show1');
              subheading.classList.add('show1');
              announcement.classList.add('show1');
          }
      });
  });




    const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const navLinks = document.querySelectorAll('.nav-links');  // Selecting all the nav links

function closeMenu() {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    cancelBtn.classList.remove("show1");
    body.classList.remove("disabledScroll");
}

menuBtn.onclick = () => {
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    cancelBtn.classList.add("show1");
    body.classList.add("disabledScroll");
}

cancelBtn.onclick = closeMenu;

navLinks.forEach(link => {
    link.onclick = closeMenu;
})

window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

   
})