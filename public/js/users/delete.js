window.onload = function () {
    //deleteUser();
}

async function deleteUser(id) {
    const result = await axios({
        method: 'delete',
        url: '/api/users/' + 1,
    });
}