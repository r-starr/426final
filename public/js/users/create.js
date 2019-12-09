window.onload = function () {
    makeUser();
}

async function makeUser() {
    const result = await axios({
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