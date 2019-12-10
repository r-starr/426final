window.onload = function () {
    //makeReview();
};

async function makeReview() {
    // const result = await axios({
    //     method: 'post',
    //     url: '/api/reviews',
    //     data: {
    //         "user_id": "1",
    //         "game_id": "4",
    //         "text": "one of my favorites",
    //         "rating": "5"
    //     },
    // });

    const result = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "1",
            "game_id": "1",
            "text": "A return after a decade-long wait, Halo: Reach is as good as you remember it being. The return of classic, decade longed halo multiplayer is back and better than ever on the PC. With higher resoltuions than we've ever been able to see and improved input, I've been obsessed with this remaster like nothing else.",
            "rating": "4"
        },
    });

    const result2 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "2",
            "game_id": "1",
            "text": "No me gusta. Podria ser mejor.",
            "rating": "5"
        },
    });

    const result3 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "1",
            "game_id": "1",
            "text": "I can't aim and so this game is bad. ",
            "rating": "0"
        },
    });

    const result4 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "2",
            "game_id": "2",
            "text": "A challenging and yet extremely engaging fantasy game. Theres not much like it. Its perhaps my favorite franchise I've played in years.",
            "rating": "5"
        },
    });

    const result5 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "1",
            "game_id": "2",
            "text": "Este video juego es bastante dificil. Nunca podré completarlo. 3/5.",
            "rating": "3"
        },
    });

    const result6 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "2",
            "game_id": "2",
            "text": "Just you try and parry me you casual.",
            "rating": "5"
        },
    });

    const result7 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "1",
            "game_id": "3",
            "text": "If you haven't already bought Skyrim. Don't worry about it, it will be available on your smart fridge soon. Also running now on your Apple Watch, your alarm clock, and you eye ball itself. All of capable of buying skyrim again. So buy Skyrim again. You only own 5 copies of Skyrim as it is whats a 6th gonna hurt? 5/5 Skyrims.",
            "rating": "5"
        },
    });

    const result8 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "2",
            "game_id": "3",
            "text": "Im still waiting for The Elder Scrolls VI...Todd.",
            "rating": "2"
        },
    });

    const result9 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "1",
            "game_id": "3",
            "text": "Perfecto.",
            "rating": "5"
        },
    });

    const result10 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "2",
            "game_id": "4",
            "text": "One of the best games ever made I dont even need to tell you this you already know it is ok?",
            "rating": "5"
        },
    });

    const result11 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "1",
            "game_id": "4",
            "text": "I refuse to collect every Korok seed why is this a requirement for 100%?",
            "rating": "1"
        },
    });

    const result12 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "2",
            "game_id": "4",
            "text": "The Legend of Zelda? More like, the legend of Zero/5. ",
            "rating": "0"
        },
    });

    const result13 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "1",
            "game_id": "5",
            "text": "Super Smash Bros can be fun but I wont play with you if you havent showered in a week and you show up to my house to show off your new main. Please put on some deodorant.",
            "rating": "2"
        },
    });

    const result14 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "2",
            "game_id": "5",
            "text": "A good game but not a game I'm very good at.",
            "rating": "4"
        },
    });

    const result15 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "1",
            "game_id": "5",
            "text": "No. Please. Not again Smash game.",
            "rating": "1"
        },
    });

    const result16 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "2",
            "game_id": "6",
            "text": "I liked Spyro when I was young. I still do too.",
            "rating": "5"
        },
    });

    const result17 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "1",
            "game_id": "6",
            "text": "Very nice.",
            "rating": "5"
        },
    });

    const result18 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "2",
            "game_id": "6",
            "text": "Very niiiiiiiiiiiiiiiiiiiiiiiiiiice.",
            "rating": "5"
        },
    });

    const result19 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "1",
            "game_id": "7",
            "text": "LoL is bad.",
            "rating": "1"
        },
    });

    const result20 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "2",
            "game_id": "7",
            "text": "0/0/0? Lol. And you call yourself ~challenger~? Don't make me laugh. There's a reason Europe never wanted you. Because you're bad. Your silver fanboys might like you, but I'd fuck you up on the rift. I'm only plat and I already get much better scores. Drop your smug little smile, kid.",
            "rating": "1"
        },
    });

    const result21 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "1",
            "game_id": "7",
            "text": "A ver niño meco, que tu tengas dinero para comprarte mil mamadas de tus motos no te da el derecho de burlarte de gente que tiene que acceder a cosas más económicas debido a que no tienen lo suficiente para vivir. Ves que alguien tiene un accidente en una moto y tu respuesta al hecho es ~Hahaha que pe***jo eso le pasa por comprar motos chafas~. Tu no mueves ni un dedo para ganar tu dinero, felicidades, que vida tan chida, pero hay gente que se la tiene que partir todo el día trabajando y apenas pueden vivir. Hay algo que se llama respeto y tus toneladas de dinero me cae de a madres que no te lo dan.",
            "rating": "5"
        },
    });

    const result22 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "2",
            "game_id": "8",
            "text": "Ohhh yes. Red Dead Redemption 2.",
            "rating": "5"
        },
    });

    const result23 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "1",
            "game_id": "8",
            "text": "Perfection. 0/5",
            "rating": "2"
        },
    });

    const result24 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "2",
            "game_id": "8",
            "text": "Soy un vaquero. ",
            "rating": "5"
        },
    });

    const result25 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "1",
            "game_id": "9",
            "text": "Stardew Valley is the best farming sim that I've ever played and that has probably ever existed. If I could wipe it from my mind and play it for the first time all over again, I'd do so. Please make another Stardew Valley Im begging you I NEED it.",
            "rating": "5"
        },
    });

    const result26 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "2",
            "game_id": "9",
            "text": "YES!!!",
            "rating": "3"
        },
    });

    const result27 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "1",
            "game_id": "9",
            "text": "Uno de mis favoritos.",
            "rating": "5"
        },
    });

    const result28 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "2",
            "game_id": "10",
            "text": "Stellaris is a fun game if you've played a lot of stardew valley and want even more.",
            "rating": "4"
        },
    });

    const result29 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "1",
            "game_id": "10",
            "text": "I'm commander Sheppard and this is my favorite game on Steam.",
            "rating": "4"
        },
    });

    const result30 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "2",
            "game_id": "10",
            "text": "Que raro.",
            "rating": "2"
        },
    });
    const result31 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "1",
            "game_id": "11",
            "text": "Grand Theft Auto is a very neat Rockstar Game. But its not Red Dead Redemption. 2/5.",
            "rating": "2"
        },
    });
    const result32 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "2",
            "game_id": "11",
            "text": "I will NOT buy your shark cards.",
            "rating": "3"
        },
    });
    const result33 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "1",
            "game_id": "11",
            "text": "Todavia no puedo comparar una tarjeta de Shark. Por qué?",
            "rating": "2"
        },
    });

    const result34 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "2",
            "game_id": "12",
            "text": "Mario Kart is a real pain and it pains me to turn it on even to write this review. Avoid at all costs.",
            "rating": "1"
        },
    });

    const result35 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "1",
            "game_id": "12",
            "text": "Vrooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom.",
            "rating": "2"
        },
    });

    const result36 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "2",
            "game_id": "12",
            "text": "Vrooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom.",
            "rating": "2"
        },
    });

    const result37 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "1",
            "game_id": "13",
            "text": "Its Minecraft. What more do I need to say?",
            "rating": "5"
        },
    });

    const result38 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "2",
            "game_id": "13",
            "text": "Minecraft be like ~hmmmmmm~",
            "rating": "5"
        },
    });

    const result39 = await axios({
        method: 'post',
        url: '/api/reviews',
        data: {
            "user_id": "1",
            "game_id": "13",
            "text": "Qué pasó con este juego?",
            "rating": "1"
        },
    });

}