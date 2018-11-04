import './style.scss';
import usersDb from './data';
import {createStore} from 'redux';

const rootNode = document.getElementById('root');

let form = document.createElement('form');
let formP = document.createElement('p');
let textSearch = document.createTextNode('Search by name: ');
let formPInput = document.createElement('input');
let hr = document.createElement('hr');
let divFooter = document.createElement('div');
let hr2 = document.createElement('hr');
let button = document.createElement('button');
let footer = document.createElement('p');
let table = document.createElement('table');
let tr = document.createElement('tr');
let thPhoto = document.createElement('th');
let thName = document.createElement('th');
let thAddress = document.createElement('th');
let thEmail = document.createElement('th');
let thPhone = document.createElement('th');
let thTimeZone = document.createElement('th');
let thActions = document.createElement('th');

let textPhoto = document.createTextNode('Photo');
let textName = document.createTextNode('Name');
let textAddress = document.createTextNode('Address');
let textEmail = document.createTextNode('Email');
let textPhone = document.createTextNode('Phone number');
let textTimeZone = document.createTextNode('Time zone');
let textActions = document.createTextNode('Actions');
let footerText = document.createTextNode('Displayed 5 users out of 21');
formPInput.setAttribute('type', 'search');
formPInput.setAttribute('placeholder', 'Enter user name');
let textShow = document.createTextNode('LOAD MORE');

rootNode.appendChild(form);
form.appendChild(formP);
formP.appendChild(textSearch);
formP.appendChild(formPInput);
form.appendChild(hr);

rootNode.appendChild(table);
table.appendChild(tr);
tr.appendChild(thPhoto);
tr.appendChild(thName);
tr.appendChild(thAddress);
tr.appendChild(thEmail);
tr.appendChild(thPhone);
tr.appendChild(thTimeZone);
tr.appendChild(thActions);

thPhoto.appendChild(textPhoto);
thName.appendChild(textName);
thAddress.appendChild(textAddress);
thEmail.appendChild(textEmail);
thPhone.appendChild(textPhone);
thTimeZone.appendChild(textTimeZone);
thActions.appendChild(textActions);


rootNode.appendChild(divFooter);
divFooter.appendChild(hr2);
divFooter.appendChild(footer);
footer.appendChild(footerText);
divFooter.appendChild(button);
button.appendChild(textShow);

const inputState = {
    shown: 5,
    users: usersDb,
};

const store = createStore(usersList);

function usersList(state = inputState, action) {
    return state;
}

function renderUsers(state) {
    let users = state.users;
    let shown = state.shown;

    for (let i = 0; i < shown; i++) {
        let tr = document.createElement('tr');
        let thPhoto = document.createElement('td');
        let tdImg = document.createElement('img');

        let thName = document.createElement('td');
        let thAddress = document.createElement('td');
        let thEmail = document.createElement('td');
        let thPhone = document.createElement('td');
        let thTimeZone = document.createElement('td');
        let tdDelete = document.createElement('td');
        let thActions = document.createElement('button');

        tdImg.setAttribute('src', users[i].picture);

        let textName = document.createTextNode(users[i].name);
        let textAddress = document.createTextNode(users[i].location);
        let textEmail = document.createTextNode(users[i].email);
        let textPhone = document.createTextNode(users[i].phone);
        let textTimeZone = document.createTextNode(users[i].timezone);

        let textActions = document.createTextNode('Remove');

        table.appendChild(tr);
        tr.appendChild(thPhoto);
        tr.appendChild(thName);
        tr.appendChild(thAddress);
        tr.appendChild(thEmail);
        tr.appendChild(thPhone);
        tr.appendChild(thTimeZone);
        tr.appendChild(tdDelete);
        thPhoto.appendChild(tdImg);

        thName.appendChild(textName);
        thAddress.appendChild(textAddress);
        thEmail.appendChild(textEmail);
        thPhone.appendChild(textPhone);
        thTimeZone.appendChild(textTimeZone);

        tdDelete.appendChild(thActions);
        thActions.appendChild(textActions);
    }
}

store.subscribe(() => {
    renderUsers(store.getState());
});

renderUsers(store.getState());