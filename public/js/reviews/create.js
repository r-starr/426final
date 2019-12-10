window.onload = function () {
    //makeReview();
};

async function makeReview() {
    //  will need to fix the user_id and game_id to make sure we're not hardcoding reviews
    const result = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "1",
            "game_id": "4",
            "text": "one of my favorites",
            "rating": "5",
        },
    });
}