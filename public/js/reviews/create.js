window.onload = function () {
    makeReview();
};

async function makeReview() {
    var d = new Date();
    let date = d.getFullYear() + '-' + (d.getMonth() +1) +  '-' + d.getDate();

    const result = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "1",
            "game_id": "4",
            "text": "one of my favorites",
            "rating": "5",
            "date_created": date,
            "date_updated": date
        },
    });
}