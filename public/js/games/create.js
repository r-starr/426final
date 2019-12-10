window.onload = function () {
    //makeGame();
};

async function makeGame() {
    const result1 = await axios({
        method: 'post',
        url: '/api/games',
        data: {
            "name": "Halo: Reach",
            "developer": "Bunjie",
            "platform": "Steam",
            "device": "XBox, PC",
            "releaseYear": "2019",
            "thumbnail": "NA"
        },
    });
    const result2 = await axios({
        method: 'post',
        url: '/api/games',
        data: {
            "name": "Dark Souls",
            "developer": "Bandai Namco",
            "platform": "Steam",
            "device": "Playstation, PC",
            "releaseYear": "2011",
            "thumbnail": "NA"
        },
    });
    const result3 = await axios({
        method: 'post',
        url: '/api/games',
        data: {
            "name": "The Elder Scrolls V: Skyrim",
            "developer": "Bethesda",
            "platform": "NA",
            "device": "PC, Playstation, Nintendo Switch",
            "releaseYear": "2011",
            "thumbnail": "NA"
        },
    });
    const result4 = await axios({
        method: 'post',
        url: '/api/games',
        data: {
            "name": "The Legend of Zelda: Breath of the Wild",
            "developer": "Nintendo EPD",
            "platform": "NA",
            "device": "Nintendo Switch",
            "releaseYear": "2017",
            "thumbnail": "NA"
        },
    });

    const result13 = await axios({
        method: 'post',
        url: '/api/games',
        data: {
            "name": "Super Smash Bros Ultimate",
            "developer": "Nintendo Bandai Namco",
            "platform": "NA",
            "device": "Wii, Nintendo Switch",
            "releaseYear": "2018",
            "thumbnail": "NA"
        },
    });

    const result5 = await axios({
        method: 'post',
        url: '/api/games',
        data: {
            "name": "Spyro Reignited Trilogy",
            "developer": "Toys for Bob",
            "platform": "Steam",
            "device": "Playstation, XBox, Nintendo Switch",
            "releaseYear": "2019",
            "thumbnail": "NA"
        },
    });
    const result6 = await axios({
        method: 'post',
        url: '/api/games',
        data: {
            "name": "League of Legends",
            "developer": "Riot Games",
            "platform": "Riot Launcher",
            "device": "PC",
            "releaseYear": "2009",
            "thumbnail": "NA"
        },
    });
    const result7 = await axios({
        method: 'post',
        url: '/api/games',
        data: {
            "name": "Red Dead Redemption",
            "developer": "Rockstar Games",
            "platform": "Steam",
            "device": "PC, XBox, Playstation",
            "releaseYear": "2011",
            "thumbnail": "NA"
        },
    });
    const result8 = await axios({
        method: 'post',
        url: '/api/games',
        data: {
            "name": "Stardew Valley",
            "developer": "Concerned Ape",
            "platform": "Steam",
            "device": "Nintendo Switch, PC, XBox, Playstation",
            "releaseYear": "2016",
            "thumbnail": "NA"
        },
    });
    const result9 = await axios({
        method: 'post',
        url: '/api/games',
        data: {
            "name": "Stellaris",
            "developer": "Paradox Development Studios",
            "platform": "Steam",
            "device": "PC, Playstation, XBox",
            "releaseYear": "2016",
            "thumbnail": "NA"
        },
    });
    const result10 = await axios({
        method: 'post',
        url: '/api/games',
        data: {
            "name": "Grand Theft Auto",
            "developer": "Rockstar North",
            "platform": "Steam",
            "device": "Playstation, XBox",
            "releaseYear": "2013",
            "thumbnail": "NA"
        },
    });
    const result11 = await axios({
        method: 'post',
        url: '/api/games',
        data: {
            "name": "Mario Kart",
            "developer": "Nintendo EAD",
            "platform": "NA",
            "device": "Nintendo Switch, Wii",
            "releaseYear": "2019",
            "thumbnail": "NA"
        },
    });
    const result12 = await axios({
        method: 'post',
        url: '/api/games',
        data: {
            "name": "Minecraft",
            "developer": "Mojang",
            "platform": "NA",
            "device": "PC",
            "releaseYear": "2011",
            "thumbnail": "NA"
        },
    });
}
