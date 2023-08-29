import './../scss/style.scss'


let list = document.getElementById('list');
let btn = document.getElementById('submit');
let btnHide = document.getElementById('hide');
let dataHidden = true;
//btnHide.disabled = true;
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

    //btnHide.disabled = false;

}

function getData() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => showData(json))

};



