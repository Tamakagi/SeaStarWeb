fetch("./header.html")
  .then(response => response.text())
  .then(html => {

    document.getElementById("header").innerHTML = html;


    // ====================
    // ハンバーガーメニュー
    // ====================

    const menuButton = document.querySelector(".header__menu");
    const nav = document.querySelector(".header__nav");


    if (!menuButton || !nav) return;


    menuButton.addEventListener("click", () => {

      nav.classList.toggle("is-open");
      menuButton.classList.toggle("is-active");

    });


    // メニュークリックで閉じる
    const menuLinks = document.querySelectorAll(".header__nav a");

    menuLinks.forEach(link => {

      link.addEventListener("click", () => {

        nav.classList.remove("is-open");
        menuButton.classList.remove("is-active");

      });

    });

  });