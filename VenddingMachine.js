const drinkData=[
    {
        name:"ocha",
        price:150,
        zaiko:10,
    },
    {
        name:"coffe",
        price:120,
        zaiko:10,
    },
    {
        name:"water",
        price:100,
        zaiko:10,
    }
]

function getmoney(money){
 
}
function select(name){
    let price = 0;
    for (var item of Object.keys(drinkData)){
        if(name == drinkData[item].name){
            console.log(drinkData[item].price);
            price = drinkData[item].price;
        }
    }
    if (price ==0 ){
        return err;
    }else{
        return price;
    }
}
select("och");
