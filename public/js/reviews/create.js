window.onload = function () {
    //makeReview();
};

async function makeReview() {
    const result = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "1", //rachel
            "game_id": "4", //breath of the wild
            "text": "rlly lit, u can climb everything",
            "rating": "5",
            "dateCreated": "2019",
            "dateUpdated": "2019"
        },
    });
}