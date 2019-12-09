window.onload = function () {
    //makeReview();
};

async function makeReview() {
    const result = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "2", //rachel
            "game_id": "16", //breath of the wild
            "text": "Really cool game, liked the graphics",
            "rating": "4",
            "dateCreated": "2019",
            "dateUpdated": "2019"
        },
    });
}