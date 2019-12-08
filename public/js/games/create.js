window.onload = function ()
{
    //makeGame();
};

async function makeGame() {
    const result = await axios({
        method: 'post',
        url: '/api/games',
        data: {
            "name": "test game 1",
            "developer": "test developer 1",
            "platform": "test platform 1",
            "device": "test device 1",
            "releaseYear": "2018-03-23",
            "thumbnail": "test thumbnail 1"
        },
    });
}
