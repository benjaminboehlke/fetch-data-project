import './../scss/style.scss'
import { getData } from './loadData.js'
import { sendData } from './sendData.js';

const app = document.querySelector('#app');


app.innerHTML = `
<form>
<input id="title" type="text"></input>
<input id="copy" type="text" ></input>
<input id="btn" type="submit" value="Submit">
</form>
        <div id="container">
        </div>
        `
sendData();
getData();


