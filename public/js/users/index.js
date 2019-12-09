window.onload = function () 
{
    //renderUsers();
}

async function renderUsers() 
{
    const result = await axios({
        method: 'get',
        url: '/api/users'
    });
    console.log(result);
}