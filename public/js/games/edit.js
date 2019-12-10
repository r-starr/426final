window.onload = function (){
    //editGame();
};

async function editGame(id) {
    const result = await axios({
        method: 'put',
        url: '/api/games/'+4,
        data: {
            "name": "Super Smash Bros Ultimate",
            "developer": "Nintendo Bandai Namco",
            "platform": "NA",
            "device": "Wii, Nintendo Switch",
            "releaseYear": "2018",
            "thumbnail": "NA"
        },
    });
}
