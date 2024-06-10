function countdownTail(n, acc = []) {
    if (n === 0) {
        console.log(acc.join(', '));
    } else {
        acc.push(n);
        countdownTail(n - 1, acc);
    }
}

countdownTail(5);
