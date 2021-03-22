function fundation(day, chef, cakebr, gofretibr, penkeyksbr)
{
    let cake = 45;
    let gofreti = 5.80;
    let penkeyks = 3.20;

let chefMoneyDay = (cakebr * cake) + (gofretibr * gofreti) + (penkeyksbr * penkeyks);
let allChef =  (chef * chefMoneyDay) * day;
let money = allChef - (allChef / 8);


console.log(money);
}
fundation(23, 8, 14, 30, 16);