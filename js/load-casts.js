// casts.json を読み込み、cast.html のカードに反映する JavaScript
fetch("data/casts-data.json")
  .then((response) => response.json())
  .then((data) => {
    const castGrid = document.querySelector(".cast-grid");

    data.casts.forEach((cast) => {
      const card = document.createElement("div");
      card.className = "cast-card";

      card.innerHTML = `
        <div class="cast-card__image-wrapper">
          <img
            src="./assets/cast/${cast.image}"
            alt="${cast.name}（${cast.role}）"
            class="cast-card__image"
            loading="lazy"
          />
        </div>

        <div class="cast-card__body">
          <h2 class="cast-card__name">${cast.name}</h2>
          <p class="cast-card__role">${cast.role}</p>
          <p class="cast-card__description">${cast.description}</p>
        </div>
      `;
      //キャストカードにクリックイベントを追加
      card.addEventListener("click", () => {
        showModal(cast);
      });
      castGrid.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("casts-data.json の読み込みに失敗:", error);
  });

// モーダル要素を取得
const modal = document.getElementById("cast-modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.querySelector(".close");

// モーダルを閉じる関数
function closeModalHandler() {
  modal.classList.remove("is-open");
}

// モーダルを表示する関数
function showModal(cast) {
  modalImage.onload = () => {
    modal.classList.add("is-open");
  };

  modalImage.src = `./assets/cast-detail/${cast.image}`;
}
// クロスボタンでモーダルを閉じる
closeModal.addEventListener("click", closeModalHandler);

// モーダル外をクリックしたときにも閉じる
modal.addEventListener("pointerdown", (event) => {
  if (event.target === modal) {
    event.preventDefault();
    event.stopPropagation();
    closeModalHandler();
  }
});
