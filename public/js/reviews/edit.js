window.onload = function () {
    //editReview();
};

async function editReview(id) {
    const result = await axios({
        method: 'put',
        url: '/api/reviews/'+id,
        data: {
            "text": "edited text",
            "rating": "4"
        },
    });
}
