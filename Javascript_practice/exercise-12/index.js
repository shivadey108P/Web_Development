let boxes = document.querySelectorAll('.box');

let generateColor = ()=>{
    let x = Math.ceil(0 + Math.random() * 255);
    let y = Math.ceil(0 + Math.random() * 255);
    let z = Math.ceil(0 + Math.random() * 255);
    return `rgb(${x},${y},${z})`;
}


Array.from(boxes).forEach(e=>{
    e.style.backgroundColor= generateColor();
    e.style.color = generateColor();
})
