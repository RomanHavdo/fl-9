const rootNode = document.getElementById('root');

let counter = 1;
let divCounter = 1;
let dragCounter = 1;
const maxNumberOfItems=10;


document.getElementById('addButton').disabled = true;

let hr = document.createElement('hr');
let divAfterHr = document.getElementById('root');
let divRoot = divAfterHr.parentNode;
divRoot.insertBefore(hr, divAfterHr);


function btnDisabled() {
    if (document.getElementById('inputBtn').value !== '') {
        document.getElementById('addButton').disabled = false;
    }else {
        document.getElementById('addButton').disabled = true;
    }
}

function addAction() {
    if (counter <= maxNumberOfItems) {
        let divAction = document.createElement('div');
        let divdivAction = document.createElement('div');


        divAction.setAttribute('id', `div${divCounter}`);
        divdivAction.setAttribute('id', `drag${dragCounter}`);
        divCounter++;
        dragCounter++;

        divAction.setAttribute('ondrop', 'drop(event)');
        divAction.setAttribute('ondragover', 'allowDrop(event)');

        divdivAction.setAttribute('draggable', true);
        divdivAction.setAttribute('ondragstart', 'drag(event)');

        let buttonCheckBox = document.createElement('i');
        let buttonDelete = document.createElement('i');

        buttonCheckBox.classList.add('material-icons');
        buttonDelete.classList.add('material-icons');
        let checkedBox = document.createTextNode('check_box_outline_blank');
        let deleteBox = document.createTextNode('delete');

        let h2 = document.createElement('H2');
        let textInput = document.createTextNode(document.getElementById('inputBtn').value);

        let br = document.createElement('br');

        buttonCheckBox.appendChild(checkedBox);
        h2.appendChild(textInput);
        buttonDelete.appendChild(deleteBox);


        rootNode.appendChild(divAction);
        divAction.appendChild(divdivAction);
        divdivAction.appendChild(buttonCheckBox);
        divdivAction.appendChild(h2);
        divdivAction.appendChild(buttonDelete);
        divdivAction.appendChild(br);

        buttonCheckBox.onclick = function() {
            this.innerText = 'check_box';
        }
        buttonDelete.onclick = function() {
            this.parentElement.removeChild(buttonCheckBox);
            this.parentElement.removeChild(h2);
            this.parentElement.removeChild(br);
            this.parentElement.removeChild(buttonDelete);

            counter--;
        }

        divAction.ondrop = function(ev) {
            ev.preventDefault();
            let src = document.getElementById(ev.dataTransfer.getData('text'));
            let srcParent = src.parentNode;
            let tgt = ev.currentTarget.firstElementChild;

            ev.currentTarget.replaceChild(src, tgt);
            srcParent.appendChild(tgt);
        }
        divAction.ondragover = function(ev) {
            ev.preventDefault();
        }
        divdivAction.ondragstart = function(ev) {
            ev.dataTransfer.setData('text', ev.target.id);
        }


        counter++;
    }else {
        document.getElementById('inputBtn').disabled = true;
        document.getElementById('addButton').disabled = true;
        
        let span = document.createElement('span');
        let textSpan = document.createTextNode('Maximum item per list are created');
        span.setAttribute('id', 'maximumItemSpan');
        span.appendChild(textSpan);
        let h1Before = document.getElementById('after-h1');
        let parentDiv = h1Before.parentNode;
        parentDiv.insertBefore(span, h1Before);

    }
}
