window.onload = function ()
{
    //editReview();
};

async function editReview() {
    const result = await axios({
        method: 'post',
        url: '/api/games',
        data: {
            "user_id": "",
            "game_id": "",
            "text": "",
            "rating": "",
            "dateCreated": "",
            "dateUpdated": ""
        },
    });
}
