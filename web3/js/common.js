// 헤더

let header1 = document.querySelector(".nav-container");
let header2 = document.querySelector(".h1-wrap");

let sideHeight = header2.offsetHeight;
let headerHeight = header1.offsetHeight;

window.onscroll = function () {
    let windowTop = window.scrollY;
    let height2 = 2040;
    let sideWrap = document.querySelector(".sideWrap");

    // 스크롤 세로값이 헤더높이보다 크거나 같으면
    // 헤더에 클래스 'drop'을 추가한다
    if (windowTop >= headerHeight) {
        header1.classList.add("drop");
    }else{
        header1.classList.remove("drop");
     }

    if(windowTop >= sideHeight && windowTop < height2){
        sideWrap.classList.add("drop");
    }else{
        sideWrap.classList.remove('drop');
    }


    if(windowTop > height2){
        sideWrap.classList.add('white');
    }else{
        sideWrap.classList.remove('white');
    }


//코스 사이드바

    if(windowTop >= 0 && windowTop <= 500){
        scroll1.classList.add('active');
    }else{
        scroll1.classList.remove('active');
    }

    if(windowTop >= 500 && windowTop <= 1500){
        scroll2.classList.add('active');
    }else{
        scroll2.classList.remove('active');
    }

    if(windowTop >= 1500 && windowTop <= 2200){
        scroll3.classList.add('active');
    }else{
        scroll3.classList.remove('active');
    }


    if(windowTop >= 2200){
        scroll4.classList.add('active');
    }else{
        scroll4.classList.remove('active');
    }


};
// window.onscroll 끝

//사이드메뉴
let scroll1 = document.querySelector('.arrow1');
let scroll2 = document.querySelector('.arrow2');
let scroll3 = document.querySelector('.arrow3');
let scroll4 = document.querySelector('.arrow4');
let windowTop = window.scrollY;

    scroll1.addEventListener('click',e=>{
            document.querySelector('.h1-wrap').scrollIntoView({behavior:'smooth'});
            });
    scroll2.addEventListener('click',e=>{
            document.querySelector('.map-content').scrollIntoView({behavior:'smooth'});
            });
    scroll3.addEventListener('click',e=>{
            document.querySelector('.bull-wrap.third').scrollIntoView({behavior:'smooth'});
            });
    scroll4.addEventListener('click',e=>{
        document.querySelector('.background-color').scrollIntoView({behavior:'smooth'});
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




// 메뉴바 화살표

function on(){
    let icon = document.querySelector('#course i');
        icon.className = 'fa-solid fa-caret-up';
}
function off(){
    let icon = document.querySelector('#course i');
    icon.className = 'fa-solid fa-caret-down';
}
