function* factorial(n) {
    let prev = 1;
    for (let i = 1; i <= n; i++) {
        prev *= i;
        yield prev;
    }
}

for (var n of factorial(5)) {
    console.log(n)
}