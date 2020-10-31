function rollDie()
{
    let roll = Math.floor(Math.random() * 6)
    console.log(`Rolled: ${roll}`)
}
console.log("Random number is:")
/*for (let i = 0; i < 5; i++)
{
    rollDie()
}*/
function throwdice()
{
    rollDie();
    rollDie();
    rollDie();
}
throwdice()