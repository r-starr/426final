window.onload = function (){
    //editGame();
};

async function editGame(id) {
    const result1 = await axios({
        method: 'put',
        url: '/api/games/'+1,
        data: {
            "name": "Halo: Reach",
            "developer": "Bunjie",
            "platform": "Steam",
            "device": "XBox, PC",
            "releaseYear": "2019",
            "thumbnail": "halo.png"
        },
    });
    const result2 = await axios({
        method: 'put',
        url: '/api/games/'+2,
        data: {
            "name": "Dark Souls",
            "developer": "Bandai Namco",
            "platform": "Steam",
            "device": "Playstation, PC",
            "releaseYear": "2011",
            "thumbnail": "darksouls.png"
        },
    });
    const result3 = await axios({
        method: 'put',
        url: '/api/games/'+3,
        data: {
            "name": "The Elder Scrolls V: Skyrim",
            "developer": "Bethesda",
            "platform": "NA",
            "device": "PC, Playstation, Nintendo Switch",
            "releaseYear": "2011",
            "thumbnail": "skyrim.png"
        },
    });
    const result4 = await axios({
        method: 'put',
        url: '/api/games/'+4,
        data: {
            "name": "The Legend of Zelda: Breath of the Wild",
            "developer": "Nintendo EPD",
            "platform": "NA",
            "device": "Nintendo Switch",
            "releaseYear": "2017",
            "thumbnail": "botw.png"
        },
    });

    const result13 = await axios({
        method: 'put',
        url: '/api/games/'+5,
        data: {
            "name": "Super Smash Bros Ultimate",
            "developer": "Nintendo Bandai Namco",
            "platform": "NA",
            "device": "Wii, Nintendo Switch",
            "releaseYear": "2018",
            "thumbnail": "smash.png"
        },
    });

    const result5 = await axios({
        method: 'put',
        url: '/api/games/'+6,
        data: {
            "name": "Spyro Reignited Trilogy",
            "developer": "Toys for Bob",
            "platform": "Steam",
            "device": "Playstation, XBox, Nintendo Switch",
            "releaseYear": "2019",
            "thumbnail": "spyro.png"
        },
    });
    const result6 = await axios({
        method: 'put',
        url: '/api/games/'+7,
        data: {
            "name": "League of Legends",
            "developer": "Riot Games",
            "platform": "Riot Launcher",
            "device": "PC",
            "releaseYear": "2009",
            "thumbnail": "league.png"
        },
    });
    const result7 = await axios({
        method: 'put',
        url: '/api/games/'+8,
        data: {
            "name": "Red Dead Redemption",
            "developer": "Rockstar Games",
            "platform": "Steam",
            "device": "PC, XBox, Playstation",
            "releaseYear": "2011",
            "thumbnail": "reddead.png"
        },
    });
    const result8 = await axios({
        method: 'put',
        url: '/api/games/'+9,
        data: {
            "name": "Stardew Valley",
            "developer": "Concerned Ape",
            "platform": "Steam",
            "device": "Nintendo Switch, PC, XBox, Playstation",
            "releaseYear": "2016",
            "thumbnail": "stardew.png"
        },
    });
    const result9 = await axios({
        method: 'put',
        url: '/api/games/'+10,
        data: {
            "name": "Stellaris",
            "developer": "Paradox Development Studios",
            "platform": "Steam",
            "device": "PC, Playstation, XBox",
            "releaseYear": "2016",
            "thumbnail": "setllaris.png"
        },
    });
    const result10 = await axios({
        method: 'put',
        url: '/api/games/'+11,
        data: {
            "name": "Grand Theft Auto",
            "developer": "Rockstar North",
            "platform": "Steam",
            "device": "Playstation, XBox",
            "releaseYear": "2013",
            "thumbnail": "gta.png"
        },
    });
    const result11 = await axios({
        method: 'put',
        url: '/api/games/'+12,
        data: {
            "name": "Mario Kart",
            "developer": "Nintendo EAD",
            "platform": "NA",
            "device": "Nintendo Switch, Wii",
            "releaseYear": "2019",
            "thumbnail": "mariokart.png"
        },
    });
    const result12 = await axios({
        method: 'put',
        url: '/api/games/'+13,
        data: {
            "name": "Minecraft",
            "developer": "Mojang",
            "platform": "NA",
            "device": "PC",
            "releaseYear": "2011",
            "thumbnail": "minecraft.png"
        },
    });
}
