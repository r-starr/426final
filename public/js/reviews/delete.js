window.onload = function () {
    //deleteReview();
};

async function deleteReview(id) {
    const result = await axios({
        method: 'delete',
        url: '/api/review/' + id,
    });
}
