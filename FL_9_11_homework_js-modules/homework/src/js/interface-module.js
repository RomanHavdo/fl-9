export function insert() {
    setValue(getValue() + this.value);
}

export function clean() {
    setValue('');
}

export function back() {
    let exp = getValue();
    setValue(exp.substring(0, exp.length - 1));
}

export function getValue() {
    return document.getElementById('textview').value;
}
export function setValue(value) {
    document.getElementById('textview').value = value
}