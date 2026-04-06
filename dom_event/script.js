let heading = document.createElement('h1');

heading.textContent = "The End !!!!";

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


// form validation

let submitBtn = document.querySelector('.form-validation form');
let nm = document.querySelector('#name');
let em = document.querySelector('#email');
let phone = document.querySelector('#phone');
let ps = document.querySelector('#password');
let selectGender = document.querySelector('#select-gender');

submitBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const nameRegex = /^[a-zA-Z\s]{3,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!nameRegex.test(nm.value)) {
        nm.style.border = "1px solid red";
        document.getElementById('name-error').style.display = "block";
    } else {
        nm.style.border = "2px solid green";
        document.getElementById('name-error').style.display = "none";
    }
    if (!emailRegex.test(em.value)) {
        em.style.border = "1px solid red";
        document.getElementById('email-error').style.display = "block";
    } else {
        em.style.border = "2px solid green";
        document.getElementById('email-error').style.display = "none";
    }
    if (!phoneRegex.test(phone.value)) {
        phone.style.border = "1px solid red";
        document.getElementById('phone-error').style.display = "block";
    } else {
        phone.style.border = "2px solid green";
        document.getElementById('phone-error').style.display = "none";
    }
    if (!passwordRegex.test(ps.value)) {
        ps.style.border = "1px solid red";
        document.getElementById('password-error').style.display = "block";
    } else {
        ps.style.border = "2px solid green";
        document.getElementById('password-error').style.display = "none";
    }
})


const startBtn = document.getElementById('start-btn');
const progress = document.querySelector('.progress');
const status = document.querySelector('.status');
let downloadFile = document.querySelector('.download-card h2');

startBtn.addEventListener('click', () => {
    let width = 0;
    //   status.textContent = "0%";
    //   progress.style.width = "0%";
    startBtn.disabled = true;

    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            status.textContent = "Download Complete ✅";
            startBtn.disabled = false;
            downloadFile.textContent = "Download File...";

        } else {
            width++;
            downloadFile.textContent = "Started Downloading...";
            progress.style.width = width + "%";
            status.textContent = width + "%";
            //   startBtn.disabled = false;
        }
    }, 30);
});

function showAlert() {
    alert("Alert");
}

const btnConfirm = document.querySelectorAll('.btn');

// btnConfirm.forEach((e) => {
//     e.addEventListener('click', () => {
//         showAlert();
//     });
// });

document.addEventListener('click', (e) => {
    // console.log(e.target.classList.contains('btn'));
    if (e.target.classList.contains('btn')) {
        showAlert();
    }
});

// localStorage
// store kaise kare - seItem
// data fetch kaise kare - getItem
// remove kaise kare - removeItem
// update kaise kare - setItem


// localStorage.setItem("name", "John");

// sessionStorage.setItem("name", "John");



let themeToggle = document.getElementById('themeToggle');
let themeContainer = document.querySelector('.theme-container');


window.matchMedia('(prefers-color-scheme: dark)').matches ? themeContainer.classList.add('dark') : themeContainer.classList.remove('dark');
localStorage.getItem('theme') ? themeContainer.classList.add('dark') : themeContainer.classList.remove('dark');



// window.addEventListener('(prefers-color-scheme: dark)').addEventListener('change', () => {
//     themeContainer.classList.toggle('dark');
// });


themeToggle.addEventListener('change', () => {
    // themeContainer.classList.toggle('dark');
    if (themeContainer.classList.toggle('dark')) {
        console.log("dark mode");
        localStorage.setItem('theme', 'dark');
    } else {
        console.log("light mode");
        localStorage.setItem('theme', '');
    }
});



let countryInput = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
    "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)",
    "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti",
    "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. Swaziland)",
    "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece",
    "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland",
    "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia",
    "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
    "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco",
    "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
    "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay",
    "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
    "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
    "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain",
    "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste",
    "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
    "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
]


// const countrylist= document.querySelector('#country_input');
const countrydatalist= document.querySelector('#country_datalist');
// count=0;
function addCountry(country){
    countryInput.forEach((country) => {
        let option = document.createElement('option');
        option.value=country;
        // input.textContent=country;
        countrydatalist.appendChild(option);
        // count++;
    });
}
addCountry(countryInput);
// console.log(count);


