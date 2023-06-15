
function showInfo(i) {
    var infoContents = document.getElementsByClassName("info-content");
    var tabButtons = document.getElementsByClassName("tab-button");
    for (var j = 0; j < infoContents.length; j++) {
        infoContents[j].style.display = "none";  // hide all info contents
        tabButtons[j].classList.remove("clicked");
    }
    document.getElementById("info" + i).style.display = "block";
    document.getElementById("button" + i).classList.add("clicked");  // show the selected info content
}


function sendEmail() {
    window.location.href = "mailto:example@example.com?subject=Job Application&body=Your message here";
}

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        let header = document.querySelector('.news-header');
        let h1 = header.querySelector('h1');
        let subheading = header.querySelector('.subheading');
        let announcement = header.querySelector('.announcement');

        let headerPos = header.getBoundingClientRect().top;
        let windowH = window.innerHeight / 1.3;
      
        if (headerPos < windowH) {
          h1.classList.add('show1');
          subheading.classList.add('show1');
          announcement.classList.add('show1');
        }
      });


      document.getElementById("nav-icon").addEventListener("click", function() {
        var nav = document.querySelector(".nav-menu");
        var logo = document.querySelector(".logo");
        var icon = document.getElementById("nav-icon");
        if (nav.style.display === "none") {
          nav.style.display = "block";
          nav.classList.add("active");
          logo.style.position = "absolute";
          logo.style.top = "0";
          icon.style.display = "none";
        } else {
          nav.style.display = "none";
          nav.classList.remove("active");
          logo.style.position = "relative";
          icon.style.display = "block";
        }
    });
        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('.nav-menu');

        document.addEventListener('DOMContentLoaded', (event) => {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('open');
       
    })
    })
     
})
