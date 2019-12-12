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

    if (review.user_id === getCurrentUserID()) {
        let editButton = $(`<button class="review-footer-button button is-primary" reviewID="${review.id}">Edit</button>`);
        editButton.on("click", null, review, renderEditForm);
        let deleteButton = $(`<button class="review-footer-button button is-primary" reviewID=${review.id}>Remove</button>`);
        deleteButton.on("click", null, null, removeReview);
        footer.append(editButton, deleteButton);
    }
    return footer;
}

async function renderReviewFeed() {
    const reviews = await getReviewFeed();
    for (let i = 0; i < reviews.length; i++) {
        renderReviewCard(reviews[i]);
    }
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
                                    <textarea id="reviewBody" class="textarea is-hovered" placeholder="Review text"></textarea>
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
    } catch (error) {
        success = false;
    }

    let successMessage = `<article id="reviewEditSuccess" class="message is-success">
                            <div class="message-header">
                                <p>Success</p>
                                <button class="delete closeButton" aria-label="delete"></button>
                            </div>
                            <div class="message-body">
                            Review submitted sucessfully!
                            </div>
                        </article>`

    let errorMessage = `<article id="reviewEditError" class="message is-danger">
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
            $("#reviewEditSuccess").remove();
        });
    } else {
        $("#userContent").append($(errorMessage));
        $(".closeButton").on("click", null, null, event => {
            $("#reviewEditError").remove();
        });
    }
    resetReviewForm();
    $("#newReview").removeClass("is-active")
}

//renders edit form
async function renderEditForm(event) {
    let review = event.data;
    event.preventDefault();
    $("#editForm").addClass("is-active");
    let formFields = `<div class="field">
                                <label class="label">Your rating:</label>
                                <div class="control">
                                    <input id="editRatingSlider" type="range" min="0" max="5" step="1" value="${review.rating}" class="slider">
                                    <span id="editRatingNum" class="subtitle">${review.rating}/5</span>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Your review:</label>
                                <div class="control">
                                    <textarea id="editReviewBody" class="textarea is-hovered" reviewID=${review.id} placeholder="Review text">${review.text}</textarea>
                                </div>
                            </div>`
    let form = $("#newEditForm");
    if (form.find("#editRatingSlider").length == 0) {
        form.append($(formFields));
        $("#editRatingSlider").on("input", null, null, e => {
            let val = $(e.target).val();
            $("#editRatingNum").text(`${val}/5`);
        });
    }
}

//submits edit
async function onEditSubmit(event) {
    let rating = $("#editRatingSlider").val();
    let text = $("#editReviewBody").val();
    let id = $("#editReviewBody").attr("reviewID");

    let success = true;
    try {
        await editReview(id, rating, text);
    } catch (error) {
        success = false;
    }

    let successMessage = `<article id="reviewSuccess" class="message is-success">
                            <div class="message-header">
                                <p>Success</p>
                                <button class="delete closeButton" aria-label="delete"></button>
                            </div>
                            <div class="message-body">
                            Review edit submitted sucessfully!
                            </div>
                        </article>`

    let errorMessage = `<article id="reviewError" class="message is-danger">
                            <div class="message-header">
                                <p>Error</p>
                                <button class="delete closeButton" aria-label="delete"></button>
                            </div>
                            <div class="message-body">
                            There was an error while submitting your review edit.
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
    $("#newEditForm").empty()
    $("#editForm").removeClass("is-active")
    $("#feedContent").empty();
    renderReviewFeed();

}

//deletes review
async function removeReview(event) {
    let id = $(event.target).attr("reviewID");
    await deleteReview(id);
    $(`#${id}`).remove();
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

$(document).ready(() => {
    welcome();

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

    $("#submitEdit").on("click", null, null, onEditSubmit);

    $("#cancelEdit").on("click", null, null, e => {
        e.preventDefault();
        $("#editForm").removeClass("is-active");
    });

    // $(document).on("click", "#editReview", renderEditForm);
    // $(document).on("click", "#submitEdit", onEditSubmit);
    // $(document).on("click", "#cancelEdit", resetEditForm);
    // $(document).on("click", "#deleteReview", deleteReview);
    $("#logout").on("click", null, null, e => {
        e.preventDefault();
        localStorage.removeItem('jwt');
        window.location.href = "/";
    });

    $("#toProfile").on("click", null, null, e => {
        e.preventDefault;
        window.location.href = "/profile";
    });

    $("#gameSelect > select").on("change", null, null, renderReviewForm);
    populateGameOptions();
    renderReviewFeed();

});