$(document).ready(() => {
    let jwt = localStorage.getItem('jwt');
    renderReviewFeed();
});

async function renderReviewCard(review) {
    let game = await getGame(review.game_id);
    let user = await getUser(review.user_id);
    let reviewElement = $(`
    <div id="review_${review.id}" class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-128x128">
                        <img src="/public/img/game_thumbs/${game.thumbnail}" alt="${game.name} Thumbnail">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="subtitle">${user.first_name} ${user.last_name} reviewed:</p>
                    <p class="title">${game.name}</p>
                    <p class="rating"></p>
                </div>
            </div>
            <div class="content">
                ${review.text}
            </div>
        </div>
    </div>`);
    reviewElement.find(".rating").append(renderHeartCount(review.rating));
    $("#feedContent").append(reviewElement);
}

function renderHeartCount(count) {
    let heartContainer = $('<div class="ratingContainer"></div>');
    for(let i = 0; i < count; i++) {
        heartContainer.append($('<img class="heartRating" src="/public/img/heart_full.png"></img>'));
    }
    for(let i = 0; i < 5-count; i++) {
        heartContainer.append($('<img class="heartRating" src="/public/img/heart_empty.png"></img>'))
    }
    return heartContainer;
}

async function renderReviewFeed() {
    const reviews = await getReviewFeed();
    let reviewList = [];
    for (let i = 0; i < reviews.length; i++) {
        renderReviewCard(reviews[i]);
    }
}

function generateGameCard(game) {
    let cardContainer = $(`<div id='game_${game.id}' class='card'><div class='card-content'></div></div>`);
    let cardContent = $(cardContainer.find(".card-content")[0]);
    let gameInfo = `<h1 class="title">${game.name}</h1><h2 class="title">`;
    cardContent.append(content);
    return cardContainer;
}

async function renderFullGameList() {
    let games = await getFullGameList();
    for (let i = 0; i < games.length; i++) {
        renderGameCard(games[i]);
    }
}