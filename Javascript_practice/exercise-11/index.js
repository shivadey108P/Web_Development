let n = 6;

function generate_fact(num){
    let arr = (Array.from(Array(num+1).keys())).slice(1,);
    return arr.reduce((a,b)=> a*b);
}

console.log(generate_fact(n));

let fact = (num) =>{
    let prod = 1;
    for(let i=1; i<=num; i++){
        prod *= i;
    }
    return prod;
}

console.log(fact(n));