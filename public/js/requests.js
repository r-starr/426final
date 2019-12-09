async function getReview(reviewId) {
    const reply = await axios({
        method: 'get',
        url: `/api/reviews/${reviewId}`
    });
    return reply.data;
}

async function getReviewFeed() {
    const reply = await axios({
        method: 'get',
        url: "http://localhost:3000/reviews/"
    });
    return reply.data;
}

async function getGame(gameId) {
    const reply = await axios({
        method: 'get',
        url: `/api/games/${gameId}`
    });
    return reply.data;
}

async function getFullGameList() {
    const reply = await axios({
        method: 'get',
        url: '/api/games/'
    });
    return reply.data;
}