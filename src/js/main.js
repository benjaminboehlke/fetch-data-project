import './../scss/style.scss'
import { getData } from './loadData.js'
import { sendData } from './sendData.js';

const app = document.querySelector('#app');


app.innerHTML = `
<header>
<div class="branding">Pizzaservice</div>
</header>
<form class="form">
<h2>Add a Pizza</h2>
<label for="title">Title</label>
<input id="title" type="text"></input>
<label for="copy">Copy</label>
<input id="copy" type="text"></input>
<input id="btn" type="submit" value="Submit" disabled>
</form>
        <div id="container">
        </div>
        `
    
sendData();
getData();




