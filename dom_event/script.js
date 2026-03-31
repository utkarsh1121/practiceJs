let heading = document.createElement('h1');

heading.textContent = "my name is utkarsh";

let btag = document.querySelector('body');

btag.appendChild(heading);

let para = document.querySelector('p');

console.dir(para);
// console.log(para.textContent)

para.textContent = "this is my first dom manipulation Press me to go the url linked to me";

console.log(document.getElementById('title'));

document.getElementById('title').style.color = "yellow";

document.getElementById('text').textContent = "hello it is new text"

let boxVal = document.createElement('p');

boxVal.textContent = "the name of the id is box"

let box = document.getElementById('box');

box.appendChild(boxVal);

let litems = document.querySelectorAll('li');

litems.forEach(lis => {
    console.log(lis.textContent)
})

// document.querySelector('img').setAttribute("src", "https://www.cdn.travejar.com/storage/india_attraction_tour_image/16806077340.webp");

//events handling

let paragraph = document.querySelector('p');

paragraph.addEventListener('click', () => {
    paragraph.style.color = "red";
})

// hwo many event listeners are there in the page

// paragraph.addEventListener('mouseover',()=>{
//     paragraph.style.color = "blue";
// })

const linkurl = () => {
    window.open("https://www.google.com", "_blank", "noopener,noreferrer");
}

const handleDoubleClick = () => {
    paragraph.style.color = "green";
    linkurl();
};

paragraph.addEventListener('dblclick', handleDoubleClick);

// When you really want to remove it:
// paragraph.removeEventListener('dblclick', handleDoubleClick);

let input = document.getElementById('input');

input.addEventListener('input', (chai) => {
    if(chai.data !== null){

        console.log(chai.data);
    }
})

let selectDeviceHeading = document.querySelector('.select-device');
let selectDevice = document.querySelector('select');

selectDevice.addEventListener('change', () => {
    selectDeviceHeading.textContent = "DEVICE SELECTED: " + selectDevice.value.toUpperCase();
})

let keyb = document.querySelector('.keyword');



window.addEventListener('keydown', (e) => {
    // console.log(e.key);
    if (e.key === " "){
        keyb.textContent = "SPC KEY";
    }else{
    keyb.textContent = e.key;}
})

let fileInput = document.querySelector('.file-upload-btn');
let fileName = document.getElementById('input2');

// fileInput.addEventListener('click',()=>{
//     fileName.click();
// })

fileName.addEventListener("click",(e)=>{
    console.log(e)
})

fileName.addEventListener("change",(e)=>{
    console.log(e.target.files[0].name)
    fileInput.textContent = e.target.files[0].name;
})

