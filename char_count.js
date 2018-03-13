const charCount = (string) => {
    let arrayedString = string.toLowerCase().split('');

    let reduced = arrayedString.reduce((total, current) => {

        if (current !== ' ') {
            if (!total[current]) {
                total[current] = 1;
            } else {
                total[current] = total[current] + 1;
            }
        }
        return total;

    }, {});

    console.log(reduced);
}

charCount('Hello this is a string');