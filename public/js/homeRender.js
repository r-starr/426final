async function getReview(reviewId) {
    const reply = await axios({
        method: 'get',
        url: `/api/reviews/${reviewId}`
    });
    return reply;
}

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

async function getReviewFeed() {
    const reply = await axios({
        method: 'get',
        url: "http://localhost:3000/reviews/"
    });
    return reply;
}



async function renderReviewFeed() {
    const reviews = await getReviewFeed();
    for(let i = 0; i < reviews.length; i++) {
        renderReviewCard(reviews[i]);
    }
}


$(document).ready(() => {
    renderReviewFeed();
});