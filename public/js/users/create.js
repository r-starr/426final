window.onload = function () {
    //makeUser();
}

async function makeUser() {
    const result1 = await axios({
        method: 'post',
        url: '/api/users',
        data: {
            "first_name": "Rachel",
            "last_name": "Starr",
            "email": "starr.raylin@gmail.com",
            "username": "rstarr",
            "password": "resNET_2k19"
        },
    });

    const result2 = await axios({
        method: 'post',
        url: '/api/users',
        data: {
            "first_name": "Hunter",
            "last_name": "Jamison",
            "email": "hunterrjamison@gmail.com",
            "username": "hunna",
            "password": "resNET_2k19"
        },
    });
}