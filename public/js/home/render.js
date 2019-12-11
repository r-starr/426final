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
    for (let i = 0; i < count; i++) {
        heartContainer.append($('<img class="heartRating" src="/public/img/heart_full.png"></img>'));
    }
    for (let i = 0; i < 5 - count; i++) {
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

async function populateGameOptions() {
    let gameList = await getFullGameList();
    let selectField = $("#gameSelect > select");
    for (let i = 0; i < gameList.length; i++) {
        const current = gameList[i];
        selectField.append($(`<option value="${current.id}">${current.name}</option>`));
    }
}

async function renderReviewForm(event) {
    event.preventDefault();
    let optionVal = $($("#gameSelect option:selected")[0]).attr("value");
    if (optionVal != "default") {
        let formFields = `<div class="field">
                                <label class="label">Your rating:</label>
                                <div class="control">
                                    <input id="ratingSlider" type="range" min="0" max="5" step="1" value="3" class="slider">
                                    <span id="ratingNum" class="subtitle">3/5</span>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Your review:</label>
                                <div class="control">
                                    <textarea id="reviewBody" class="textarea" placeholder="Review text"></textarea>
                                </div>
                            </div>`
        let form = $("#newReviewForm");
        if (form.find("#ratingSlider").length == 0) {
            form.append($(formFields));
            $("#ratingSlider").on("input", null, null, e => {
                let val = $(e.target).val();
                $("#ratingNum").text(`${val}/5`);
            });
        }
    } else {
        resetReviewForm();
    }
}

async function resetReviewForm() {
    let formInfo = $(`<div class="field">
                    <div class="control">
                        <div id="gameSelect" class="select">
                            <select>
                                <option value="default">Select a game to review</option>
                            </select>
                        </div>
                    </div>
                </div>`);
    $("#newReviewForm").empty().append(formInfo);
    populateGameOptions();
    $("#gameSelect > select").on("change", null, null, renderReviewForm);
}

async function onReviewSubmit(event) {    
    let gameId = $($("#gameSelect option:selected")[0]).attr("value");
    let reviewBody = $("#reviewBody").val();
    let rating = $("#ratingSlider").val();
    let success = true;
    try {
        await submitReview(gameId, reviewBody, rating);
        location.reload();
    } catch (error) {
        success = false;
    }
    console.log(`Game: ${gameId}, Review: ${reviewBody}, Rating: ${rating}`);

    let successMessage = `<article id="reviewSuccess" class="message is-success">
                            <div class="message-header">
                                <p>Success</p>
                                <button class="delete closeButton" aria-label="delete"></button>
                            </div>
                            <div class="message-body">
                            Review submitted sucessfully!
                            </div>
                        </article>`

    let errorMessage = `<article id="reviewError" class="message is-danger">
                            <div class="message-header">
                                <p>Error</p>
                                <button class="delete closeButton" aria-label="delete"></button>
                            </div>
                            <div class="message-body">
                            There was an error while submitting your review.
                            </div>
                        </article>`

    if (success) {
        $("#userContent").append($(successMessage));
        $(".closeButton").on("click", null, null, event => {
            $("#reviewSuccess").remove();
        });
    } else {
        $("#userContent").append($(errorMessage));
        $(".closeButton").on("click", null, null, event => {
            $("#reviewError").remove();
        });
    }
    resetReviewForm();
    $("#newReview").removeClass("is-active");
}

$(document).ready(() => {
    $("#newReviewButton").on("click", null, null, e => {
        e.preventDefault();
        $("#newReview").addClass("is-active");
    });

    $("#submitReview").on("click", null, null, onReviewSubmit);

    $("#cancelReview").on("click", null, null, e => {
        e.preventDefault();
        resetReviewForm();
        $("#newReview").removeClass("is-active");
    });

    $("#logout").on("click", null, null, e => {
        e.preventDefault();
        localStorage.removeItem('jwt');
        window.location.href = "/";
    });

    $("#gameSelect > select").on("change", null, null, renderReviewForm);

    populateGameOptions();

    renderReviewFeed();
});
