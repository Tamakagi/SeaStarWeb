const menuButton = document.querySelector(".header__menu");
const nav = document.querySelector(".header__nav");


menuButton.addEventListener("click", () => {

    // メニュー表示切替
    nav.classList.toggle("is-open");

    // ハンバーガーの×変形
    menuButton.classList.toggle("is-active");

});

const menuLinks = document.querySelectorAll(".header__nav a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("is-open");
        menuButton.classList.remove("is-active");

    });

});