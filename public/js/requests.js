async function getReview(reviewId) {
    const reply = await axios({
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('jwt'),
          },
        method: 'get',
        url: `/api/reviews/${reviewId}`
    });
    return reply.data;
}

async function getGame(gameId) {
    const reply = await axios({
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('jwt'),
          },
        method: 'get',
        url: `/api/games/${gameId}`
    });
    return reply.data;
}

async function getUser(userId) {
    const reply = await axios({
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('jwt'),
          },
        method: 'get',
        url: `/api/users/${userId}`
    });
    return reply.data;
}

async function getReviewFeed() {
    const reply = await axios({
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('jwt'),
          },
        method: 'get',
        url: "/api/reviews/"
    });
    return reply.data;
}

async function getFullGameList() {
    const reply = await axios({
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('jwt'),
          },
        method: 'get',
        url: '/api/games/'
    });
    return reply.data;
}

async function submitReview(gameId, reviewBody, rating) {
    const result = await axios({
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('jwt'),
          },
        method: 'post',
        url: '/api/reviews',
        data: {
            "game_id": gameId,
            "text": reviewBody,
            "rating": rating
        },
    });
    return result;
}

async function editReview(id) {
    const result = await axios({
        method: 'put',
        url: '/api/reviews/'+id,
        data: {
            "text": "edited text",
            "rating": "4"
        },
    });
    return result;
}

async function deleteReview(id) {
    const result = await axios({
        method: 'delete',
        url: '/api/review/' + id,
    });
    return result;
}