// Find the sum of all the multiples of 3 or 5 below 1000.

// For example, if we sum all multiples of 3 or 5 below 10, we would get 3, 5, 6, and 9 and the sum of these multiples is 23.

function sumAllMultiples(num) {
    let sum = 0;
    
    for (let i = 1; i < num; i++) {
        if(i % 3 == 0 || i % 5 == 0) {
            sum+=i;
        }
    }
    
    return sum;
}

sumAllMultiples(1000);