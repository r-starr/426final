window.onload = function () 
{
    renderGames();
}

async function renderGames() 
{
    const result = await axios({
        method: 'get',
        url: '/api/games'
    });
    console.log(result);
}