//Task 1
let http = {
    get: function (url) {
        return new Promise(function (resolve, reject) {
            openModal();
            const xhttp = new XMLHttpRequest();
            xhttp.open('GET', url, true);
            xhttp.send();
            xhttp.onreadystatechange = () => {
                if (xhttp.readyState !== 4) {
                    closeModal();
                    return;
                }
                if (xhttp.status === 200) {
                    resolve(JSON.parse(xhttp.responseText));
                } else {
                    const error = xhttp.statusText;
                    reject(error);
                }
            };
        });
    }
};

//Task 2
const inpt_latitude = document.getElementById('inpt-latitude');
const inpt_longitude = document.getElementById('inpt-longitude');
const btn_submit = document.getElementById('btn-submit');
const result = document.getElementById('result');
const land = document.getElementById('land');
const water = document.getElementById('water');

btn_submit.addEventListener('click', trackLocation);
inpt_latitude.addEventListener('keyup', btnDisabled);
inpt_longitude.addEventListener('keyup', btnDisabled);

btn_submit.disabled = true;
land.style.display = 'none';
water.style.display = 'none';

function btnDisabled() {
    if (inpt_latitude.value !== '' && inpt_longitude.value !== '') {
        btn_submit.disabled = false;
    } else {
        btn_submit.disabled = true;
    }
}


function trackLocation() {
    let p = http.get(`https://api.onwater.io/api/v1/results/${inpt_latitude.value},${inpt_longitude.value}`);
    p.then(function (val) {
        const p = document.createElement('p');
        const p2 = document.createElement('p');

        const coordinate = document.createTextNode(`Latitude:${val.lat}`);
        const coordinate2 = document.createTextNode(`Longitude:${val.lon}`);

        result.appendChild(p);
        result.appendChild(p2);
        p.appendChild(coordinate);
        p2.appendChild(coordinate2);

        land.style.display = 'block';
        water.style.display = 'block';

        if (val.water === false) {
            result.classList.add('move-left');
        } else {
            result.classList.add('move-right');
        }
    });
}
function openModal() {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
}