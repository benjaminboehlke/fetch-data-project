/* let btn = document.getElementById('submit');
let list = document.getElementById('list');
let inputfield = document.querySelector('#prompt'); 
btn.disabled = true;

btn.addEventListener('click', addMessage, false);
inputfield.addEventListener('keypress', validate, false);



function validate() {
    let input = document.getElementById('prompt').value;
    let btn = document.getElementById('submit');
    if(input.length <= -1 ) {
        btn.disabled = true;
    }
    else {
        btn.disabled = false;
    }
  

}

function addMessage() {

    let listItem = document.createElement('li');


    let input = document.getElementById('prompt').value;
    console.log(input);
    list.appendChild(listItem).innerHTML = input;
    document.querySelector('#prompt').value = "";
    btn.disabled = true;
}
 */

let list = document.getElementById('list');
let btn = document.getElementById('submit');
let btnHide = document.getElementById('hide');
let dataHidden = true;
btnHide.disabled = true;
let db = [];

btn.addEventListener('click', getData, false);
btnHide.addEventListener('click', hideToggle, false);


function hideToggle() {
    if(!dataHidden){
    list.style.display = "none"
    btnHide.innerText = "Show";
    dataHidden = true;
    }
    else {
    list.style.display = "block"
    btnHide.innerText = "Hide";
    dataHidden = false;
    }
 }


function showData(data) {
    dataHidden = false;

    db = data;
    
    list.innerHTML = db.length + "Einträge";

    for (let i = 0; i < db.length; i++) {
        let listItem = document.createElement('li');
        console.log(db[i]);
        listItem.innerHTML = `<div class="card"> ${db[i].title}<br><small>${db[i].userId}</small></div>`
        list.appendChild(listItem);
    
    }

    btnHide.disabled = false;

}

function getData() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => showData(json))

};
