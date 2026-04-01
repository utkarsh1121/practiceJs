let heading = document.createElement('h1');

heading.textContent = "AppendChild";

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
    if (chai.data !== null) {

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
    if (e.key === " ") {
        keyb.textContent = "SPC KEY";
    } else {
        keyb.textContent = e.key;
    }
})

let fileInput = document.querySelector('.file-upload-btn');
let fileName = document.getElementById('input2');

// fileInput.addEventListener('click',()=>{
//     fileName.click();
// })

fileName.addEventListener("click", (e) => {
    console.log(e)
})

fileName.addEventListener("change", (e) => {
    if (e.target.files && e.target.files.length > 0) {
        const selectedFile = e.target.files[0].name;
        console.log("File Selected:", selectedFile);
        fileInput.textContent = selectedFile;
    } else {
        // This handles cases where the input is cleared
        fileInput.textContent = "File not selected";
    }
});

fileName.addEventListener("cancel", () => {
    console.log("No file selected (user cancelled)");
    fileInput.textContent = "File not selected";
});


let form = document.querySelector('form');
let inp = document.querySelectorAll('.input');
let card = document.querySelectorAll('.card h4');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    // prompt("Form submitted");
    console.log(inp)
    // console.log(inp[0].value);
    // console.log(inp[1].value);
    // console.log(inp[2].value);
    // console.log(card[0].textContent);
    // console.log(card[1].textContent);
    // console.log(card[2].textContent);
    card[0].textContent = "Name : " + inp[0].value;
    card[1].textContent = "Email : " + inp[1].value;
    card[2].textContent = "Phone No. : " + inp[2].value;
})

let mouseBox = document.querySelector('.mouse-position');
let mousePosition = document.querySelector('.mouse-position h4');

mouseBox.addEventListener('mousemove', (e) => {
    // console.log(e);
    mousePosition.style.top = e.offsetY + "px";
    mousePosition.style.left = e.offsetX + "px";
});

let characterInput = document.querySelector('#character-input');
let characterCount = document.querySelector('#character-count span');

characterInput.addEventListener('input', (e) => {
    // console.log(e.target.value.length);
    characterCount.textContent = e.target.value.length;
});