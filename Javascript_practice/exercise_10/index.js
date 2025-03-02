let adjectives = 
{
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
}

let shop_name = 
{
    1: "Engine",
    2: "Foods",
    3: "Garments"
}

let another_word = 
{
    1: "Bros",
    2: "Limited",
    3: "Hub",
}

let random_number = (min, max)=> Math.round(Math.random()*(max-min)+min);

function count_length(object_variable)
{
    let count = 0;

    for(obj in object_variable){
        count++;
    }

    return count;
}

let business_name = (obj1, obj2, obj3) =>
{
    let len1 = count_length(obj1);
    let len2 = count_length(obj2);
    let len3 = count_length(obj3);

    return `${obj1[random_number(1,len1)]} ${obj2[random_number(1,len2)]} ${obj3[random_number(1,len3)]}`;
}

console.log(business_name(adjectives, shop_name, another_word));