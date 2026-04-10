// let heading = document.createElement('h1');

// // heading.textContent = "The End !!!!";

// let btag = document.querySelector('body');

// btag.appendChild(heading);

// let para = document.querySelector('p');

// console.dir(para);
// // console.log(para.textContent)

// para.textContent = "this is my first dom manipulation Press me to go the url linked to me";

// console.log(document.getElementById('title'));

// document.getElementById('title').style.color = "yellow";

// document.getElementById('text').textContent = "hello it is new text"

// let boxVal = document.createElement('p');

// boxVal.textContent = "the name of the id is box"

// let box = document.getElementById('box');

// box.appendChild(boxVal);

// let litems = document.querySelectorAll('li');

// litems.forEach(lis => {
//     console.log(lis.textContent)
// })

// // document.querySelector('img').setAttribute("src", "https://www.cdn.travejar.com/storage/india_attraction_tour_image/16806077340.webp");

// //events handling

// let paragraph = document.querySelector('p');

// paragraph.addEventListener('click', () => {
//     paragraph.style.color = "red";
// })

// // hwo many event listeners are there in the page

// // paragraph.addEventListener('mouseover',()=>{
// //     paragraph.style.color = "blue";
// // })

// const linkurl = () => {
//     window.open("https://www.google.com", "_blank", "noopener,noreferrer");
// }

// const handleDoubleClick = () => {
//     paragraph.style.color = "green";
//     linkurl();
// };

// paragraph.addEventListener('dblclick', handleDoubleClick);

// // When you really want to remove it:
// // paragraph.removeEventListener('dblclick', handleDoubleClick);

// let input = document.getElementById('input');

// input.addEventListener('input', (chai) => {
//     if (chai.data !== null) {

//         console.log(chai.data);
//     }
// })

// let selectDeviceHeading = document.querySelector('.select-device');
// let selectDevice = document.querySelector('select');

// selectDevice.addEventListener('change', () => {
//     selectDeviceHeading.textContent = "DEVICE SELECTED: " + selectDevice.value.toUpperCase();
// })

// let keyb = document.querySelector('.keyword');



// window.addEventListener('keydown', (e) => {
//     // console.log(e.key);
//     if (e.key === " ") {
//         keyb.textContent = "SPC KEY";
//     } else {
//         keyb.textContent = e.key;
//     }
// })

// let fileInput = document.querySelector('.file-upload-btn');
// let fileName = document.getElementById('input2');

// // fileInput.addEventListener('click',()=>{
// //     fileName.click();
// // })

// fileName.addEventListener("click", (e) => {
//     console.log(e)
// })

// fileName.addEventListener("change", (e) => {
//     if (e.target.files && e.target.files.length > 0) {
//         const selectedFile = e.target.files[0].name;
//         console.log("File Selected:", selectedFile);
//         fileInput.textContent = selectedFile;
//     } else {
//         // This handles cases where the input is cleared
//         fileInput.textContent = "File not selected";
//     }
// });

// fileName.addEventListener("cancel", () => {
//     console.log("No file selected (user cancelled)");
//     fileInput.textContent = "File not selected";
// });


// let form = document.querySelector('form');
// let inp = document.querySelectorAll('.input');
// let card = document.querySelectorAll('.card h4');


// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     // prompt("Form submitted");
//     console.log(inp)
//     // console.log(inp[0].value);
//     // console.log(inp[1].value);
//     // console.log(inp[2].value);
//     // console.log(card[0].textContent);
//     // console.log(card[1].textContent);
//     // console.log(card[2].textContent);
//     card[0].textContent = "Name : " + inp[0].value;
//     card[1].textContent = "Email : " + inp[1].value;
//     card[2].textContent = "Phone No. : " + inp[2].value;
// })

// let mouseBox = document.querySelector('.mouse-position');
// let mousePosition = document.querySelector('.mouse-position h4');

// mouseBox.addEventListener('mousemove', (e) => {
//     // console.log(e);
//     mousePosition.style.top = e.offsetY + "px";
//     mousePosition.style.left = e.offsetX + "px";
// });

// let characterInput = document.querySelector('#character-input');
// let characterCount = document.querySelector('#character-count span');

// characterInput.addEventListener('input', (e) => {
//     // console.log(e.target.value.length);
//     characterCount.textContent = e.target.value.length;
// });


// // form validation

// let submitBtn = document.querySelector('.form-validation form');
// let nm = document.querySelector('#name');
// let em = document.querySelector('#email');
// let phone = document.querySelector('#phone');
// let ps = document.querySelector('#password');
// let selectGender = document.querySelector('#select-gender');

// submitBtn.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log(e.target.value);
//     const nameRegex = /^[a-zA-Z\s]{3,50}$/;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^\d{10}$/;
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

//     if (!nameRegex.test(nm.value)) {
//         nm.style.border = "1px solid red";
//         document.getElementById('name-error').style.display = "block";
//     } else {
//         nm.style.border = "2px solid green";
//         document.getElementById('name-error').style.display = "none";
//     }
//     if (!emailRegex.test(em.value)) {
//         em.style.border = "1px solid red";
//         document.getElementById('email-error').style.display = "block";
//     } else {
//         em.style.border = "2px solid green";
//         document.getElementById('email-error').style.display = "none";
//     }
//     if (!phoneRegex.test(phone.value)) {
//         phone.style.border = "1px solid red";
//         document.getElementById('phone-error').style.display = "block";
//     } else {
//         phone.style.border = "2px solid green";
//         document.getElementById('phone-error').style.display = "none";
//     }
//     if (!passwordRegex.test(ps.value)) {
//         ps.style.border = "1px solid red";
//         document.getElementById('password-error').style.display = "block";
//     } else {
//         ps.style.border = "2px solid green";
//         document.getElementById('password-error').style.display = "none";
//     }
// })


// const startBtn = document.getElementById('start-btn');
// const progress = document.querySelector('.progress');
// const status = document.querySelector('.status');
// let downloadFile = document.querySelector('.download-card h2');

// startBtn.addEventListener('click', () => {
//     let width = 0;
//     //   status.textContent = "0%";
//     //   progress.style.width = "0%";
//     startBtn.disabled = true;

//     const interval = setInterval(() => {
//         if (width >= 100) {
//             clearInterval(interval);
//             status.textContent = "Download Complete ✅";
//             startBtn.disabled = false;
//             downloadFile.textContent = "Download File...";

//         } else {
//             width++;
//             downloadFile.textContent = "Started Downloading...";
//             progress.style.width = width + "%";
//             status.textContent = width + "%";
//             //   startBtn.disabled = false;
//         }
//     }, 30);
// });

// function showAlert() {
//     alert("Alert");
// }

// const btnConfirm = document.querySelectorAll('.btn');

// // btnConfirm.forEach((e) => {
// //     e.addEventListener('click', () => {
// //         showAlert();
// //     });
// // });

// document.addEventListener('click', (e) => {
//     // console.log(e.target.classList.contains('btn'));
//     if (e.target.classList.contains('btn')) {
//         showAlert();
//     }
// });

// // localStorage
// // store kaise kare - seItem
// // data fetch kaise kare - getItem
// // remove kaise kare - removeItem
// // update kaise kare - setItem


// // localStorage.setItem("name", "John");

// // sessionStorage.setItem("name", "John");



// let themeToggle = document.getElementById('themeToggle');
// let themeContainer = document.querySelector('.theme-container');


// window.matchMedia('(prefers-color-scheme: dark)').matches ? themeContainer.classList.add('dark') : themeContainer.classList.remove('dark');
// localStorage.getItem('theme') ? themeContainer.classList.add('dark') : themeContainer.classList.remove('dark');



// // window.addEventListener('(prefers-color-scheme: dark)').addEventListener('change', () => {
// //     themeContainer.classList.toggle('dark');
// // });


// themeToggle.addEventListener('change', () => {
//     // themeContainer.classList.toggle('dark');
//     if (themeContainer.classList.toggle('dark')) {
//         console.log("dark mode");
//         localStorage.setItem('theme', 'dark');
//     } else {
//         console.log("light mode");
//         localStorage.setItem('theme', '');
//     }
// });



// let countryInput = [
//     "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
//     "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
//     "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
//     "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)",
//     "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti",
//     "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. Swaziland)",
//     "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece",
//     "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland",
//     "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
//     "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia",
//     "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
//     "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco",
//     "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
//     "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay",
//     "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
//     "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
//     "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain",
//     "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste",
//     "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
//     "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
// ]


// // const countrylist= document.querySelector('#country_input');
// const countrydatalist = document.querySelector('#country_datalist');
// // count=0;
// function addCountry(country) {
//     countryInput.forEach((country) => {
//         let option = document.createElement('option');
//         option.value = country;
//         // input.textContent=country;
//         countrydatalist.appendChild(option);
//         // count++;
//     });
// }
// addCountry(countryInput);
// // console.log(count);






// function createToster(config) {
//     return function (string) {
//         const container = document.createElement("div");
//         container.className = "containers";

//         const paragraph = document.createElement("p");
//         //   paragraph.className = "pppp";
//         paragraph.textContent = string;

//         container.appendChild(paragraph);
//         const mainContainer = document.querySelector(".main-container");
//         //   (mainContainer ?? document.body).appendChild(container);
//         mainContainer.appendChild(container);

//         setTimeout(() => {
//             container.remove(); // simplest way
//         }, config.duration);

//         console.log('container');
//     }
// }
// // const toster = createToster({
// //   positionX: "right", 
// //   positionY: "top", 
// //   theme: "dark",
// //   duration: 3000,
// // })

// const darkToster = createToster({ theme: "dark", duration: 3000 });
// const lightToster = createToster({ theme: "light", duration: 2000 });

// // lightToster("Light message");

// // toster("Example of a toster from the function.");
// // toster("Example of a toster from the function.");

// document.querySelector(".darkToster").addEventListener("click", (e) => {
//     // console.log(e.target);
//     darkToster("Dark message");
// });
// document.querySelector(".lightToster").addEventListener("click", () => {
//     lightToster("Light message");
// });



// // console.log(this)

// let functionthis = function () {
//     // console.log(this);
// }
// functionthis();


// let obj = {
//     name: "utkarsh",
//     age: 20,
// }

// let obj2 = {
//     name: "john",
//     age: 21,
// }

// let abc = function () {
//     console.log(this.name);
// }
// // abc();

// let bcd = () => {
//     console.log(this.name);
// }
// // bcd();

// let cde = function () {
//     console.log(this.age);
// }


// let def = function (a, r, h) {
//     console.log(this.age);
//     console.log(a, r, h);
// }


// // abc.call(obj);
// // bcd.call(obj2);
// // cde.call(obj2);
// // def.apply(obj2, [1,2,3]);
// // def.call(obj, 45,67,89);



// // const usermanager = {
// //     user:[],

// let formSubmit = document.querySelector('#profileForm');

// const userManager = {
//     user: [],
//     init: function () {
//         // formSubmit.addEventListener('submit', this.submitform.bind(this));
//         // alert("User Manager Initialized");
//     },
//     submitform: function (e) {
//         e.preventDefault();
//         console.log("Form Submitted");
//     },
//     addUser: function () {
//         // this.user.push({name,role,image,bio});
//     },
//     removeUser: function () {
//         // this.user = this.user.filter(user => user.name !== name);
//     },
// }

// userManager.init();



// function getProfile(username, callback) {
//     setTimeout(() => {
//         console.log(`${username} is logged in`);
//         callback({ username });
//     }, 1000);
// }


// getProfile("utkarsh", function (name) {
//     console.log(`${name.username} `);
// })



// fetch("http://localhost:3000/users")
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data[2].name);
//     })
//     .catch(err => {
//         console.log(err);
//     })


//     // Promise
// let promise = new Promise((resolve, reject) => {
//     let success = true;

//     if (success) {
//         resolve("Promise Success!");
//     } else {
//         reject("Something went wrong failed!");
//     }
// });

// promise
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(error);
//     });




//   let fetchData=  fetch('https://jsonplaceholder.typicode.com/posts' ,{
//     method:'POST',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({
//         title:'new title',
//         body:'new body',
//         userId:13,
//         id:1053,
//     }
// )})
// .then(res=>{
//     return res.json();
// })
// .then(data=>{
//     console.log(data);
// })
// .catch(err=>{
//     console.log(err);
// })


// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback();
// }

// function sayBye() {
//     console.log("Bye!");
// }

// greet("Utkarsh", sayBye);


fetch("http://localhost:3000/users/")
    .then(res => res.json())
    .then(post => console.log(post))
    .catch(err => console.error(err));

// const products = [
//     { id: 101, name: "Wireless Mouse", price: 899, inStock: true },
//     { id: 102, name: "Gaming Keyboard", price: 2499, inStock: false },
//     { id: 103, name: "Smart Watch", price: 4999, inStock: true },
//     { id: 104, name: "Bluetooth Speaker", price: 1799, inStock: false },
//     { id: 105, name: "USB-C Charger", price: 699, inStock: true },
//     { id: 106, name: "External Hard Drive", price: 5499, inStock: false },
//     { id: 107, name: "LED Monitor", price: 12999, inStock: true },
//     { id: 108, name: "Webcam HD", price: 1599, inStock: false }
//   ];

//   products.forEach(product => {
//     fetch("http://localhost:3000/products", {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(product)
//     })
//     .then(res => res.json())
//     .then(data => console.log("Added:", data))
//     .catch(err => console.error(err));
//   });

// fetch("http://localhost:3000/products", {
//     method: 'POST',
//     headers: { 'content-type': 'application/json' },
//     body: JSON.stringify(
//        {
//       "id": "101",
//       "name": "Wireless Mouse",
//       "price": 899,
//       "inStock": true
//     },
//     {
//       "id": "102",
//       "name": "Gaming Keyboard",
//       "price": 2499,
//       "inStock": false
//     },
//     {
//       "id": "103",
//       "name": "Smart Watch",
//       "price": 4999,
//       "inStock": true
//     },
//     {
//       "id": "104",
//       "name": "Bluetooth Speaker",
//       "price": 1799,
//       "inStock": false
//     },
//     {
//       "id": "105",
//       "name": "USB-C Charger",
//       "price": 699,
//       "inStock": true
//     },
//     {
//       "id": "106",
//       "name": "External Hard Drive",
//       "price": 5499,
//       "inStock": false
//     },
//     {
//       "id": "107",
//       "name": "LED Monitor",
//       "price": 12999,
//       "inStock": true
//     },
//     {
//       "id": "108",
//       "name": "Webcam HD",
//       "price": 1599,
//       "inStock": false
//     }
//     )
// })
//     .then(res => {
//         return res.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.error(err);
//     })


fetch("http://localhost:3000/users/jWHSz1bigxY", {
    method: 'PATCH',//PUT
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
        "city": "bangalore",
        "name": "Manak Tripathi",
        "email": "manakripathi@example.com",

    })
}).then(res => {
    return res.json();
}).then(data => {
    console.log(data);
}).catch(err => {
    console.error(err);
})


// fetch("http://localhost:3000/products")
//   .then(res => res.json())
//   .then(products => {
//     products.forEach(product => {
//       fetch(`http://localhost:3000/products/${product.id}`, {
//         method: "DELETE"
//       })
//       .then(() => console.log(`Deleted product ${product.id}`))
//       .catch(err => console.error(err));
//     });
//   })
//   .catch(err => console.error(err));

// DELETE ALL PRODUCTS

// fetch("http://localhost:3000/products", {
//     method: "DELETE"
// }).then(() => console.log("deleted"))
//     .catch(err => console.error(err))

// fetch("http://localhost:3000/products?inStock=true")
//     .then(res => res.json())
//     .then(data => {
//         console.log("In Stock Products:"); // header
//         data.forEach(product => console.log(product.name)); // log each product name
//       })
//         .catch(err => console.error(err));




let button = document.getElementById("showInStock");
let list = document.getElementById("productList");
let allButton = document.getElementById("showOutOfStock");
let deleteButton = document.querySelector(".delete-btn");
let addProductBtn = document.querySelector(".add-product-btn");
let pName = document.getElementById("p-name");
let pPrice = document.getElementById("p-price");
let pStock = document.getElementById("p-stock");
let form = document.getElementById("product-form");
let status = document.getElementById("status");
let submitBtn = document.querySelector(".submit-btn");
let editBtn = document.querySelector(".edit-btn");
let editForm = document.getElementById("edit-product-form");
let statusEdit = document.getElementById("statusEdit");
let editPrice = document.querySelector(".edit_price");
let editStockToggle = document.querySelector(".edit_stock");
let editName = document.querySelector(".edit_name");
let currentEditId = null;

//     fetch("http://localhost:3000/products?inStock=true")
//         .then(res => res.json())
//         .then(data => {
//             // console.log("In Stock Products:"); // header
//             // data.forEach(product => console.log(product.name)); // log each product name
//             list.innerHTML = "";
//             count = 0;
//             data.forEach(product => {
//                 allButton.style.background = "linear-gradient(184deg, rgb(255 229 3), rgb(157 164 41 / 80%))";
//                 count++;
//                 const listItem = document.createElement("li");
//                 listItem.textContent = `${count}. ${product.name} - ₹${product.price}`;
//                 list.appendChild(listItem);
//                 button.style.background = "linear-gradient(122deg, rgb(17, 192, 108), rgb(134 182 129))";
//             });
//         })
//         .catch(err => console.error(err));
// })

// allButton.addEventListener("click", () => {
//     fetch("http://localhost:3000/products?inStock=false")
//         .then(res => res.json())
//         .then(data => {
//             // console.log("Out of Stock Products:"); // header
//             // data.forEach(product => console.log(product.name)); // log each product name
//             list.innerHTML = "";
//             count = 0;
//             data.forEach(product => {
//                 count++;
//                 button.style.background = "linear-gradient(184deg, rgb(255 229 3), rgb(157 164 41 / 80%))";
//                 const listItem = document.createElement("li");
//                 listItem.textContent = `${count}. ${product.name} - ₹${product.price}`;
//                 list.appendChild(listItem);
//                 allButton.style.background = "linear-gradient(122deg, rgb(17, 192, 108), rgb(134 182 129))";
//             });
//         })
//         .catch(err => console.error(err));
// })



// let StockProdct = () => {
//     fetch("http://localhost:3000/products?inStock=true")
//         .then(res => res.json())
//         .then(data => {
//             // console.log("In Stock Products:"); // header
//             // data.forEach(product => console.log(product.name)); // log each product name
//             list.innerHTML = "";
//             count = 0;
//             data.forEach(product => {
//                 allButton.style.background = "linear-gradient(184deg, rgb(255 229 3), rgb(157 164 41 / 80%))";
//                 count++;
//                 const listItem = document.createElement("li");
//                 listItem.textContent = `${count}. ${product.name} - ₹${product.price}`;
//                 list.appendChild(listItem);
//                 button.style.background = "linear-gradient(122deg, rgb(17, 192, 108), rgb(134 182 129))";
//             });
//         })
//         .catch(err => console.error(err));
// }

// let OutOfStockProdct = () => {
//     fetch("http://localhost:3000/products?inStock=false")
//         .then(res => res.json())
//         .then(data => {
//             // console.log("Out of Stock Products:"); // header
//             // data.forEach(product => console.log(product.name)); // log each product name
//             list.innerHTML = "";
//             count = 0;
//             data.forEach(product => {
//                 count++;
//                 button.style.background = "linear-gradient(184deg, rgb(255 229 3), rgb(157 164 41 / 80%))";
//                 const listItem = document.createElement("li");
//                 listItem.textContent = `${count}. ${product.name} - ₹${product.price}`;
//                 list.appendChild(listItem);
//                 allButton.style.background = "linear-gradient(122deg, rgb(17, 192, 108), rgb(134 182 129))";
//             });
//         })
//         .catch(err => console.error(err));
// }



const fetchProducts = (inStock) => {
    currentState = inStock;
    fetch(`http://localhost:3000/products?inStock=${inStock}`)
        .then(res => res.json())
        .then(data => {
            list.innerHTML = "";
            let count = 0;

            data.forEach(product => {
                count++;
                const li = document.createElement("li");
                li.textContent = `${count}. ${product.name} - ₹${product.price}`;
                list.appendChild(li);
                const deleteBtn = document.createElement("button");
                deleteBtn.textContent = "Delete";
                deleteBtn.classList.add("delete-btn");
                deleteBtn.addEventListener("click", () => {
                    deleteProduct(product.id);
                });
                li.appendChild(deleteBtn);
                const editBtn = document.createElement("button");
                editBtn.textContent = "Edit";
                editBtn.classList.add("edit-btn");
                editBtn.addEventListener("click", () => {
                    document.getElementById('edit-product-modal').style.display = 'flex';
                    statusEdit.textContent = "";
                    editName.value = product.name;
                    editPrice.value = product.price;
                    editStockToggle.checked = product.inStock;
                    currentEditId = product.id;
                    // editProduct(product.id);
                });
                li.appendChild(editBtn);
            });

            // Button styling logic
            if (inStock) {
                button.style.background = "linear-gradient(122deg, rgb(17, 192, 108), rgb(134 182 129))";
                allButton.style.background = "linear-gradient(184deg, rgb(255 229 3), rgb(157 164 41 / 80%))";
            } else {
                allButton.style.background = "linear-gradient(122deg, rgb(17, 192, 108), rgb(134 182 129))";
                button.style.background = "linear-gradient(184deg, rgb(255 229 3), rgb(157 164 41 / 80%))";
            }
        })
        .catch(err => console.error(err));
};

function deleteProduct(id) {
    fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE"
    })
        .then(() => {
            console.log("deleted")
            fetchProducts(currentState);
        })
        .catch(err => console.error(err));
}



addProductBtn.addEventListener("click", () => {
    document.getElementById('product-modal').style.display = 'flex';
    pName.value = '';
    pPrice.value = '';
    pStock.checked = true;
    status.textContent = "";
    // fetchProducts(currentState);
});



// function editProduct(id) {
//     fetch(`http://localhost:3000/products/${id}`, {
//         method: "PUT",
//         headers: { 'content-type': 'application/json' },
//         body: JSON.stringify({
//             "name": editName.value,
//             "price": editPrice.value,
//             // "inStock": pStock.checked
//         })
//     })
//         .then(() => {
//             console.log("edited")
//             fetchProducts(currentState);
//         })
//         .catch(err => console.error(err));
// }

// function editProduct(id) {
editForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(`http://localhost:3000/products/${currentEditId}`, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                "name": editName.value,
                "price": editPrice.value,
                "inStock": editStockToggle.checked,
                // "inStock": editForm.pStock.checked
            })
        });
        console.log(response);
        console.log(response.ok);
        if (!response.ok) throw new Error("Failed to edit product");
        const data = await response.json();
        console.log("Success:", data);
        status.style.color = "green";
        status.textContent = "Product edited successfully";
        // submitBtn.disabled = true;
        await new Promise((resolve) => setTimeout(resolve, 1000));
        closeEditModal();
        fetchProducts(currentState);
    }
    catch (err) {
        console.error(err);
        status.style.color = "red";
        status.textContent = "Failed to edit product";
    }
})


// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     fetch("http://localhost:3000/products", {
//         method: "POST",
//         headers: { 'content-type': 'application/json' },
//         body: JSON.stringify({
//             "name": pName.value,
//             "price": pPrice.value,
//             "inStock": pStock.checked
//         })
//     })
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//             // status.textContent = "";
//             // setTimeout(() => {
//             //     status.textContent = "Product added successfully";
//             // }, 3000);
//     })
//     .then(() => {console.log("Product added successfully")})
//     .catch(err => console.error(err));

//     closeModal();
// });

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
        const response = await fetch("http://localhost:3000/products", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                "name": pName.value,
                "price": pPrice.value,
                "inStock": pStock.checked
            })
        });
        console.log(response);
        console.log(response.ok);
        if (!response.ok) throw new Error("Failed to add product");
        const data = await response.json();
        console.log("Success:", data);
        status.style.color = "green";
        status.textContent = "Product added successfully";
        submitBtn.disabled = true;
        await new Promise((resolve) => setTimeout(resolve, 1000));
        closeModal();
    }
    // .catch(err => console.error(err));
    catch (err) {
        console.error(err);
        status.style.color = "red";
        status.textContent = "Failed to add product";
    }

});



function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}

function closeEditModal() {
    document.getElementById('edit-product-modal').style.display = 'none';
    editingProductId = null;
}



let searchWeather = document.querySelector("#cityInput");
let getWeather = document.querySelector("#getWeather");
let weather = document.querySelector("#weather");
let temperature = document.querySelector("#temperature");
// let location = document.querySelector("#location");
let feelsLike = document.querySelector("#feelsLike");
let humidity = document.querySelector("#humidity");
let pressure = document.querySelector("#pressure");
let windSpeed = document.querySelector("#windSpeed");
let clouds = document.querySelector("#clouds");
let visibility = document.querySelector("#visibility");
let sunrise = document.querySelector("#sunrise");
let sunset = document.querySelector("#sunset");
let country = document.querySelector("#country");
let cityName = document.querySelector("#cityName");
let errorMessageWeather = document.querySelector("#errorMessageWeather");

const apiKey = "6fb03a4baee4752b90604c78045beb9f";


getWeather.addEventListener("click", () => {
    if (searchWeather.value === "") {
        alert("Please enter a city name");
    } else {
        getWeatherData();
    }
})

async function getWeatherData() {

    // getWeather.addEventListener("click", () => {
    //     fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchWeather.value}&limit=5&appid=${apiKey}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    // })
    try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchWeather.value}&limit=&appid=${apiKey}`);
        const data = await response.json();
        console.log(data);
        if (data.length === 0) {
            throw new Error("City not found");
            // errorMessageWeather.textContent = "City not found";
        } else {
            const lat = data[0].lat;
            const lon = data[0].lon;

            console.log(lat, lon);

            fetchFinalWeatherData(lat, lon);
        }
    }
    catch (err) {
        console.log(err);
        errorMessageWeather.textContent = err.message;
    }
}

async function fetchFinalWeatherData(lat, lon) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
        const data = await response.json();
        console.log(data);
        const tempKelvin = data.main.temp;
        const tempCelsius = tempKelvin - 273.15;
        temperature.textContent = Math.floor(tempCelsius);
        const feelsLikeKelvin = data.main.feels_like;
        const feelsLikeCelsius = feelsLikeKelvin - 273.15;
        feelsLike.textContent = Math.floor(feelsLikeCelsius);
        // feelsLike.textContent = data.main.feels_like;
        humidity.textContent = data.main.humidity;
        pressure.textContent = data.main.pressure;
        windSpeed.textContent = data.wind.speed;
        clouds.textContent = data.clouds.all;
        const visibilityValue = data.visibility; // in meters

        let visibilityText = "";

        if (visibilityValue <= 1000) {
            visibilityText = "Fog / very poor visibility 🌫️";
        } else if (visibilityValue <= 4000) {
            visibilityText = "Hazy conditions 🌁";
        } else if (visibilityValue <= 8000) {
            visibilityText = "Moderate visibility";
        } else if (visibilityValue < 10000) {
            visibilityText = "Good visibility";
        } else {
            visibilityText = "Excellent / clear sky ☀️";
        }

        visibility.textContent = visibilityText; 
        sunrise.textContent = formatIST(data.sys.sunrise);
        sunset.textContent = formatIST(data.sys.sunset);
        country.textContent = data.sys.country;
        cityName.textContent = data.name;
    }
    catch (err) {
        console.log(err);
    }
}


function formatIST(unix) {
    return new Date(unix * 1000).toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        // second: "2-digit",
        hour12: true
    });
}