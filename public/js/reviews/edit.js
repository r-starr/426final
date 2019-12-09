window.onload = function () {
    //editReview();
};

async function editReview(id) {
    var d = new Date();
    let date = d.getFullYear() + '-' + (d.getMonth() +1) +  '-' + d.getDate();

    const result = await axios({
        method: 'put',
        url: '/api/games/'+1,
        data: {
            "user_id": "2",
            "text": "edited text",
            "rating": "4",
            "date_updated": date
        },
    });
}
