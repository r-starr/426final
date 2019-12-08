window.onload = function ()
{
    //editGame();
};

async function editGame() {
    const result = await axios({
        method: 'put',
        url: '/api/games',
        data: {
            "name": "edit test game 1",
            "developer": "edit test developer 1",
            "platform": "edit test platform 1",
            "device": "edit test device 1",
            "releaseYear": "2018-03-24",
            "thumbnail": "edit test thumbnail 1"
        },
    });
}
