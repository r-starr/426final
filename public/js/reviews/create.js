window.onload = function ()
{
    //makeReview();
};

async function makeReview() {
    const result = await axios({
        method: 'post',
        url: '/api/games',
        data: {
            "user_id": "",
            "game_id": "Bandai Namco",
            "text": "Steam",
            "rating": "PC",
            "dateCreated": "2011",
            "dateUpdated": "NA"
        },
    });
}
