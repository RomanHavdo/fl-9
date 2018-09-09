document.addEventListener('DOMContentLoaded', function() {
    let items = JSON.parse(window.localStorage.getItem('items'));
    for (let i = 0; i < items.length; i++) {
        let divdivAction = document.createElement('div');
        let buttonCheckBox = document.createElement('IMG');
        let buttonDelete = document.createElement('IMG');
        let h3 = document.createElement('H3');
        let textInput = document.createTextNode(items[i].description);

        if (items[i].isDone === false) {
            buttonCheckBox.setAttribute('src', 'assets/img/todo-s.png');
        }else if(items[i].isDone === true){
            h3.classList.add('done-h3');
            buttonCheckBox.setAttribute('src', 'assets/img/done-s.png');
        }
        buttonDelete.setAttribute('src', 'assets/img/remove-s.jpg');
        buttonDelete.setAttribute('id', i);


        h3.appendChild(textInput);
        rootNode.appendChild(container);
        container.appendChild(main);
        main.appendChild(divdivAction);
        divdivAction.appendChild(buttonCheckBox);
        divdivAction.appendChild(h3);
        divdivAction.appendChild(buttonDelete);

        h3.onclick = function() {
            main.style.display = 'none';
            modify.style.display = 'block';
            document.getElementById('inputBtnModify').value = this.innerText;
            modifyThis = this;
        }
        buttonCheckBox.onclick = function() {
            this.setAttribute('src', 'assets/img/done-s.png');

            h3.classList.add('done-h3');
            h3.onclick = null;
        }
        buttonDelete.onclick = function() {
            remove(this.id);
            window.localStorage.setItem('items', JSON.stringify(todoItems));
            this.parentElement.removeChild(buttonCheckBox);
            this.parentElement.removeChild(h3);
            this.parentElement.removeChild(buttonDelete);
            divdivAction.parentNode.removeChild(divdivAction);

            function remove(id) {
                return items.filter(i => i.id !== id)
            }

        }

    }

});
const rootNode = document.getElementById('root');
const main = document.getElementById('main');
const container = document.getElementById('container');
const modify = document.getElementById('modify');
let modifyThis;
let counterObjects = 0;

document.getElementById('saveChanges').disabled = true;

function btnDisabled() {
    if (document.getElementById('inputBtn').value !== '') {
        document.getElementById('saveChanges').disabled = false;
    }else {
        document.getElementById('saveChanges').disabled = true;
    }
}

function btnDisabledModify() {

    if (document.getElementById('inputBtnModify').value !== '') {
        document.getElementById('saveChanges2').disabled = false;
    }else {
        document.getElementById('saveChanges2').disabled = true;
    }
}



let toggleControls = document.querySelectorAll('[data-href]');
let contentDivs = document.querySelectorAll('.toggle');

for (let i = 0; i < toggleControls.length; i++) {
    toggleControls[i].addEventListener('click', function(event) {
        let trigger = event.target;
        let selector = '.' + trigger.getAttribute('data-href').replace('#', '');
        let divToShow = document.querySelector(selector);
        for (let j = 0; j < contentDivs.length; j++) {
            contentDivs[j].style.display = 'none';
        }
        divToShow.style.display = 'block';

    });
}
main.classList.remove('toggle');

let todoItems = [];



function addAction() {
    let divdivAction = document.createElement('div');
    let buttonCheckBox = document.createElement('IMG');
    let buttonDelete = document.createElement('IMG');
    let isDoneChecker = false;

    buttonCheckBox.setAttribute('src', 'assets/img/todo-s.png');
    buttonDelete.setAttribute('src', 'assets/img/remove-s.jpg');

    let h3 = document.createElement('H3');
    let textInput = document.createTextNode(document.getElementById('inputBtn').value);

    h3.appendChild(textInput);

    rootNode.appendChild(container);

    container.appendChild(main);
    main.appendChild(divdivAction);

    divdivAction.appendChild(buttonCheckBox);
    divdivAction.appendChild(h3);
    divdivAction.appendChild(buttonDelete);

    h3.onclick = function() {
        main.style.display = 'none';
        modify.style.display = 'block';
        document.getElementById('inputBtnModify').value = this.innerText;
        modifyThis = this;
    }
    buttonCheckBox.onclick = function() {
        this.setAttribute('src', 'assets/img/done-s.png');
        h3.classList.add('done-h3');
        h3.onclick = null;
        isDoneChecker = true;
    }
    let isDelete = false;
    buttonDelete.onclick = function() {
        this.parentElement.removeChild(buttonCheckBox);
        this.parentElement.removeChild(h3);
        this.parentElement.removeChild(buttonDelete);
        divdivAction.parentNode.removeChild(divdivAction);
        isDelete = true;

    }
        todoItems.push({
            isDone: false,
            id: counterObjects,
            description: document.getElementById('inputBtn').value
        })
        counterObjects++;
        window.localStorage.setItem('items', JSON.stringify(todoItems));
    
}


function addNewAction() {
    main.style.display = 'block';
    modify.style.display = 'none';


}

function saveChangesModify() {
    main.style.display = 'block';
    modify.style.display = 'none';
    modifyThis.innerText = document.getElementById('inputBtnModify').value;
}
