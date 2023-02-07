// 헤더

let header = document.querySelector(".mainList");
let headerHeight = header.offsetHeight;

window.onscroll = function () {
  let windowTop = window.scrollY;
  // 스크롤 세로값이 헤더높이보다 크거나 같으면
  // 헤더에 클래스 'drop'을 추가한다
  if (windowTop >= headerHeight * 6) {
    header.classList.add("drop");
  }
  // 아니면 클래스 'drop'을 제거
  else {
    header.classList.remove("drop");
  }
};

//슬라이드

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

//

// Scroll Animation (sa, 스크롤 애니메이션)
const saDefaultMargin = 300;
let saTriggerMargin = 0;
let saTriggerHeight = 0;
const saElementList = document.querySelectorAll(".sa");

const saFunc = function () {
  for (const element of saElementList) {
    if (!element.classList.contains("show")) {
      if (element.dataset.saMargin) {
        saTriggerMargin = parseInt(element.dataset.saMargin);
      } else {
        saTriggerMargin = saDefaultMargin;
      }

      if (element.dataset.saTrigger) {
        saTriggerHeight =
          document
            .querySelector(element.dataset.saTrigger)
            .getBoundingClientRect().top + saTriggerMargin;
      } else {
        saTriggerHeight = element.getBoundingClientRect().top + saTriggerMargin;
      }

      if (window.innerHeight > saTriggerHeight) {
        let delay = element.dataset.saDelay ? element.dataset.saDelay : 0;
        setTimeout(function () {
          element.classList.add("show");
        }, delay);
      }
    }
  }
};

window.addEventListener("load", saFunc);
window.addEventListener("scroll", saFunc);

// background1~4

let mainText = document.querySelector(".background1 h1");
let mainText2 = document.querySelector(".background1 p");
let mainText3 = document.querySelector(".background2 h1");
let mainText4 = document.querySelector(".background2 div:last-child");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("value");

  if (value > 600) {
    mainText.style.animation = "disappear 1s forwards";
  } else {
    mainText.style.animation = `slide_background 1s`;
  }
});

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  if (value > 700) {
    mainText2.style.animation = "disappear2 1s forwards";
  } else {
    mainText2.style.animation = `slide_background2 1s`;
  }
});

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  if (value > 1900) {
    mainText3.style.animation = "slide_background3 1.5s";
  } else {
    mainText3.style.animation = `disappear3 1s forwards`;
  }
});

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  if (value > 2000) {
    mainText4.style.animation = "slide_background4 2s";
  } else {
    mainText4.style.animation = `disappear4 1s forwards`;
  }
});

//로그인

function doDisplay() {
  let con = document.getElementById("myDIV");

  if (con.style.display == "none") {
    con.style.display = "block";
  } else {
    con.style.display = "none";
  }
}

//팝업창


    function pop() {
          window.open("/pop", "pop", "width=496,height=496,history=no,resizable=no,status=no,scrollbars=yes");
        }