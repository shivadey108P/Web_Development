let colors = [
    'red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black', 'cyan', 
    'antiquewhite', 'aqua', 'aquamarine', 'beige', 
    'lavender', 'coral', 'crimson', 'teal', 'magenta', 'indigo', 
    'turquoise', 'gold', 'silver', 'bronze', 'navy', 'maroon', 
    'lime', 'ivory', 'salmon', 'khaki', 'peachpuff', 'plum', 
    'orchid', 'slateblue', 'seagreen', 'peru', 'midnightblue'
  ];
  

let boxes = document.querySelectorAll('.box');

length_of_colors = colors.length;

let generateColor = ()=>{
    return Math.round(Math.random()*(length_of_colors-1)+1);
}

boxes.forEach((box)=>{
    box.style.backgroundColor = colors[generateColor()]
});

boxes.forEach((box)=>{
    box.style.color = colors[generateColor()]
});