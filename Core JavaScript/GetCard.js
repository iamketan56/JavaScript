//First approach
/*function getcard()
{
    const values = [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'
    ];
    const idx = Math.floor(Math.random() * values.length);
    value = values[idx]

    const suits = ['Heart', 'Spade', 'Clubs', 'Diamond'];
    const suitidx = Math.floor(Math.random() * suits.length);
    suit = suits[suitidx]

    console.log(value,suit)
}
getcard()*/

//second approach
function pick(arr)
{
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx]
}
function getcard() {
    const values = [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const value = pick(values)
    
    const suits = ['Heart', 'Spade', 'Clubs', 'Diamond'];
    const suit = pick(suits)

    return {
        value : value,
        suit : suit
    }
}
 console.log(getcard())

