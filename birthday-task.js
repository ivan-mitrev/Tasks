function birthday(arg)
{
    let hall = Number(arg);
    let cake = Number (hall * 0.2);
    let drink = Number (cake * 0.55);
    let animator = Number (arg / 3);
    let result = hall + cake + drink + animator;


console.log(result);
}
birthday(3720);