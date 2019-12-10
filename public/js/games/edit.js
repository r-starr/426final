window.onload = function (){
    //editGame();
};

async function editGame() {
    const result = await axios({
        method: 'put',
        url: '/api/games/'+1,
        data: {
            "name": "Halo: Reach 2",
            "developer": "Bunjie 2",
            "platform": "Steam 2",
            "device": "XBox, PC 2",
            "releaseYear": "2001-02-02",
            "thumbnail": "NA 2"
        },
    });
}
