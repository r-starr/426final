window.onload = function () {
    //deleteGame();
};

async function deleteGame(id) {
    const result = await axios({
        method: 'delete',
        url: '/api/games/' + id,
    });
}
