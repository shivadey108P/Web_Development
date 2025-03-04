let n = 5;
let arr = [];

for(let i=1; i<=n ; i++){
    arr.push(i);
}

let factorial = arr.reduce((a,b)=>{
    return a*b;
});

console.log(factorial);

let fact = (num) =>{
    let prod = 1;
    for(let i=1; i<=num; i++){
        prod *= i;
    }
    return prod;
}

console.log(fact(n));