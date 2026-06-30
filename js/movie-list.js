document.addEventListener("DOMContentLoaded", () => {
    const movieGrid = document.querySelector(".movies__grid");

    if (!movieGrid || typeof movies === "undefined") {
        return;
    }

    movieGrid.innerHTML = "";

    movies.forEach((movie) => {
        const card = document.createElement("article");
        card.className = "movie-card";

        card.innerHTML = `
            <div class="movie-card__embed">
                <blockquote class="twitter-tweet">
                    <a href="${movie.url}"></a>
                </blockquote>
            </div>

            <div class="movie-card__body">

                <p class="movie-card__date">
                    ${movie.date}
                </p>

                <h2 class="movie-card__title">
                    ${movie.title}
                </h2>

                <p class="movie-card__description">
                    ${movie.description}
                </p>

            </div>
        `;

        movieGrid.appendChild(card);
    });

    // Xの埋め込みを再描画
    if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load();
    }
});