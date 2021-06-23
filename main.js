fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(response => response.json())
    .then(data =>{
        let output = '<h2>Crypto</h2>'
       data.forEach(function(user){
           console.log(user)
           output += `
            <ul>
            <div><img src='${user.image}'></img><li>  ${user.id} </li></div><b>Market Cap  ${user.market_cap}</b>
            </ul>
           `
           
       })
       document.getElementById('prostor').innerHTML = output;

    })
    