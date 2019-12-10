window.onload = function (){
    //editGame();
};

async function editGame(id) {
    const result = await axios({
        method: 'put',
        url: '/api/games/'+1,
        data: {
<<<<<<< HEAD
            "name": "Halo: Reach",
            "developer": "Bunjie",
            "platform": "Steam",
            "device": "XBox, PC",
            "releaseYear": "2001-02-02",
            "thumbnail": "NA"
=======
            "name": "edit test game 1",
            "developer": "edit test developer 1",
            "platform": "edit test platform 1",
            "device": "edit test device 1",
            "releaseYear": "2018-03-24",
            "thumbnail": "edit test thumbnail 1"
>>>>>>> 11c3815f3b4320ba403d73576939ab5f1e536b0e
        },
    });
}
