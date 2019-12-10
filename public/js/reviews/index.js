window.onload = function () 
{
    //renderReviews();
}

async function renderReviews() 
{
    const result = await axios({
        method: 'get',
        url: '/api/reviews'
    });
    console.log(result);
}