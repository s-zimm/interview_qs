const fibonacci = (n) => {
    let fibArray = [];
    for (let i = 0; i < n; i++) {
        if (fibArray.length > 2) {
            fibArray.push(fibArray[fibArray.length - 2] + fibArray[fibArray.length - 1]);
        } else {
            fibArray.push(i);
        }
        
    }
    fibArray.map(n => console.log(n));
}

fibonacci(10);