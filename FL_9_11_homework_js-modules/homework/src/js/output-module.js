import '../styles/styles.css';
import { insert, clean, back } from './interface-module.js'
import { equal } from './calculating-module.js'

let inserts = document.getElementsByClassName('insert');

for (let i = 0; i < inserts.length; i++) {
    inserts[i].onclick = insert;
}

let cleanEl = document.getElementById('clean');
cleanEl.onclick = clean;

let backEl = document.getElementById('back');
backEl.onclick = back;

let equalEl = document.getElementById('equal');
equalEl.onclick = equal;