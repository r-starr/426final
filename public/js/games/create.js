window.onload = function ()
{
    //makeGame();
};

async function makeGame() {
    const result = await axios({
        method: 'post',
        url: '/api/games',
        data: {
            "name": "Dark Souls",
            "developer": "Bandai Namco",
            "platform": "Steam",
            "device": "PC",
            "releaseYear": "2011",
            "thumbnail": "NA"
        },
    });
}
