let heading = document.createElement('h1');

heading.textContent= "my name is utkarsh";

let btag = document.querySelector('body');

btag.appendChild(heading); 

let para = document.querySelector('p');

console.dir(para);
// console.log(para.textContent)

para.textContent = "this is my first dom manipulation";

console.log(document.getElementById('title'));

document.getElementById('title').style.color="yellow";

document.getElementById('text').textContent="hello it is new text"

let boxVal=document.createElement('p');

boxVal.textContent="the name of the id is box"

let box= document.getElementById('box');

box.appendChild(boxVal);


