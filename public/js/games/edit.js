window.onload = function (){
    //editGame();
};

async function editGame(id) {
    const result = await axios({
        method: 'put',
        url: '/api/games/'+1,
        data: {
            "name": "Halo: Reach",
            "developer": "Bunjie",
            "platform": "Steam",
            "device": "XBox, PC",
            "releaseYear": "2001-02-02",
            "thumbnail": "NA"
        },
    });
}
