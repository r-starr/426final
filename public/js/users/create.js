window.onload = function () {
    //makeUser();
}

async function makeUser() {
    const result = await axios({
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
}