window.onload = function () {
    editReview();
};

async function editReview(id) {
    const result = await axios({
        method: 'put',
        url: '/api/games/'+1,
        data: {
            "user_id": "2",
            "text": "edited text",
            "rating": "4",
            "dateUpdated": "2020"
        },
    });
}
