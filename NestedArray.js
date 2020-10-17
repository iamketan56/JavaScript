let nested =
    [
        [1, 2],
        [3, 4],
        [5, 6]
    ];
console.log(nested)
console.log(nested[0][1])
console.log(nested[1][0])
console.log(nested[2][1])

nested[0][1] = 'D';
console.log(nested[0][1])

nested[1][0] = null;
console.log(nested[1][0])
