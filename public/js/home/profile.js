window.onload = function() {
    $(document).on("click", "#toHome", toHome);

    $("#submitEdit").on("click", null, null, onEditSubmit);

    $("#cancelEdit").on("click", null, null, e => {
        e.preventDefault();
        $("#editForm").removeClass("is-active");
    });

    $("#logout").on("click", null, null, e => {
        e.preventDefault();
        localStorage.removeItem('jwt');
        window.location.href = "/";
    });

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
    let editButton = $(`<button class="review-footer-button button is-primary" reviewID="${review.id}">Edit</button>`);
    editButton.on("click", null, review, renderEditForm);
    let deleteButton = $(`<button class="review-footer-button button is-primary" reviewID=${review.id}>Remove</button>`);
    deleteButton.on("click", null, null, removeReview);
    footer.append(editButton, deleteButton);
    return footer;
}

//renders edit form
async function renderEditForm(event) {
    let review = event.data;
    console.log("COME ON");
    console.log($("#editForm"));
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
    form.append($(formFields));
    $("#editRatingSlider").on("input", null, null, e => {
        let val = $(e.target).val();
        $("#editRatingNum").text(`${val}/5`);
    });
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


async function renderReviewFeed() {
    const reviews = await getReviewFeed();
    for (let i = 0; i < reviews.length; i++) {
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