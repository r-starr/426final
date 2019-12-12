window.onload = function () {
    $(document).on("click", "#toHome", toHome);

    renderReviewFeed();

    welcome();
}

function welcome() {
    let wCard = document.getElementById("userNameHere");
    wCard.innerHTML = getCurrentUser().first_name + "!";
}


async function renderReviewCard(review) {
    let game = await getGame(review.game_id);
    let user = await getUser(review.user_id);
    let reviewElement = $(`
    <div id="${review.id}" class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-128x128">
                        <img src="/public/img/game_thumbs/${game.thumbnail}" alt="${game.name} Thumbnail">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="subtitle">@${user.username} reviewed:</p>
                    <p class="title">${game.name}</p>
                    <p class="rating"></p>
                </div>
            </div>
            <div class="content" id = ${review.id}_content>
                ${review.text}
            </div>
        </div>
    </div>`);

    reviewElement.append(renderReviewFooter(review));

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

function renderReviewFooter(review) {
    let footer = $(`<footer class="review-footer">
    <p class="review-footer-item">Reviewed on ${review.date_created}</p>
  </footer>`);

    // if (review.user_id === getCurrentUserID()) {
    //     let editButton = $(`<button class="review-footer-button button is-primary" reviewID="${review.id}">Edit</button>`);
    //     editButton.on("click", null, review, renderEditForm);
    //     let deleteButton = $(`<button class="review-footer-button button is-primary" reviewID=${review.id}>Remove</button>`);
    //     deleteButton.on("click", null, null, removeReview);
    //     footer.append(editButton, deleteButton);
    // }
    return footer;
}

async function renderReviewFeed() {
    console.log("in renderReviewFeeds");
const reviews = await getReviewFeed();
    for (let i = 0; i < reviews.length; i++) {
        console.log(reviews[i].user_id);
        if (getCurrentUserID() === reviews[i].user_id) {
            renderReviewCard(reviews[i]);
        }
    }
}

function parseJWT(token) {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
}

function getCurrentUserID() {
    return parseJWT(localStorage.getItem('jwt')).id;
}

function getCurrentUser() {
    return parseJWT(localStorage.getItem('jwt'));
}

function toHome() {
    window.location.href = '/home';
}