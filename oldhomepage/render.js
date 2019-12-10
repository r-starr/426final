
async function renderReviewCard(review) {
    let reviewElement = $(`<div id="${review.id}" class="card"></div>`);
    reviewElement.append($(`<p>${review.user_id}</p>`));
    reviewElement.append($(`<p>${review.game_id}</p>`));
    reviewElement.append($(`<p>${review.body}</p>`));
    reviewElement.append($(`<p>${review.rating}</p>`));
    reviewElement.append($(`<p>${review.date_created}</p>`));
    reviewElement.append($(`<p>${review.date_updated}</p>`));
    $("#feedContent").append(reviewElement);
}

async function renderReviewFeed() {
    const reviews = await getReviewFeed();
    for (let i = 0; i < reviews.length; i++) {
        renderReviewCard(reviews[i]);
    }
}

async function renderGameCard(game) {
    let gameElement = $(`<div id="${game.id}" class="card"></div>`);
    gameElement.append($(`<p>${game.id}</p>`));
    gameElement.append($(`<p>${game.name}</p>`));
    gameElement.append($(`<p>${game.developer}</p>`));
    gameElement.append($(`<p>${game.platform}</p>`));
    gameElement.append($(`<p>${game.device}</p>`));
    gameElement.append($(`<p>${game.releaseYear}</p>`));
    $("#feedContent").append(gameElement);
}

async function renderFullGameList() {
    let games = await getFullGameList();
    for (let i = 0; i < games.length; i++) {
        renderGameCard(games[i]);
    }
}

$(document).ready(() => {
    renderFullGameList();
});