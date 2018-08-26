function findType(obj) {
  if (obj === null) { //becouse exemple
    return 'object';
  }
  const firstSpace = 1;
  const firstCharacterOfType = 0;
  const lastCharacterOfType = -1;
  return {}.toString.call(obj).split(' ')[firstSpace].slice(firstCharacterOfType, lastCharacterOfType).toLowerCase();
}

function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i]);
  }
}


function map(array, func) {
  let arrayResult = [];
  forEach(array, el => arrayResult.push(func(el)));
  return arrayResult;
}


function filter(array, func) {
  let arrayResult = [];
  forEach(array, el => {
    if (func(el)) {
      arrayResult.push(el);
    }
  });
  return arrayResult;
}

function getAdultAppleLovers(data) {
  return map(filter(data, el => el['age'] > 18 && el['favoriteFruit'] === 'apple'), el => el.name);
}

function keys(arrayOfKeysOfAnObject) {
  const array = [];
  for (let key in arrayOfKeysOfAnObject) {
    if (arrayOfKeysOfAnObject.hasOwnProperty(key)) {
      array.push(key);
    }
  }
  return array;
}

function values(arrayOfValuesOfAnObject) {
  const array = [];
  for (let value in arrayOfValuesOfAnObject) {
    if (arrayOfValuesOfAnObject.hasOwnProperty(value)) {
      array.push(arrayOfValuesOfAnObject[value]);
    }
  }
  return array;
}

function showFormattedDate(date) {
  date = date.toString();
  const firstCharacterOfYear = 11;
  const lastCharacterOfYear = 4;
  const firstCharacterOfMonth = 4;
  const lastCharacterOfMonth = 3;
  const firstCharacterOfDay = 8;
  const lastCharacterOfDay = 2;
  const year = date.substr(firstCharacterOfYear, lastCharacterOfYear);
  const month = date.substr(firstCharacterOfMonth, lastCharacterOfMonth);
  const day = date.substr(firstCharacterOfDay, lastCharacterOfDay);

  return 'It is ' + day + ' of ' + month + ', ' + year;
}
