window.onload = function () {
    //editReview();
};

async function editReview(id) {
    const result = await axios({
        method: 'put',
        url: '/api/reviews/'+37,
        data: {
            "text": "No me gusta",
            "rating": "2"
        },
    });
}
