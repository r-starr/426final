window.onload = function ()
{
    //editUsers();
};

async function editGame() {
    const result = await axios({
        method: 'put',
        url: '/api/users',
        data: {
            "first_name": "Hunter 2",
            "last_name": "Jamison 2",
            "email": "hunterrjamison@gmail.com 2",
            "username": "hunna2",
            "password": "resNET_2k19_2"
        },
    });
}
