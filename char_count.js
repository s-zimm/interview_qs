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

// Follow up questions:
// 1) I would add an argument to the above function that would accept a valid URL. The URL would be fetched through the
// axios module, which would return the Promised HTML data needed to parse all characters. After generating a string of
// all the characters, plugging it in to the function would be simple. If we are only looking for the inner text
// inside of the HTML, I would import a module such as Cheerio that would allow me to target the text within
// the virtual DOM it creates.

// 2) The first item of business is to write a script that will find every Wikipedia link on the page
// and write a function that would fetch the HTML data from each endpoint, but only if the endpoint has not
// already been fetched. A good way to do this would be with regular expressions. I would loop through each
// URL within the reduce function, and, within the logic of the reduce function,
// add to the global tally of character count.

// 3) To make the above function work within memory confines of many computers, I would use Node's 
// streaming/piping methods to break down the work into a managable workflow. The first function would gather
// all URLs and write them into a file that holds them all. That data would then be piped into the above
// reduce function, which would yield the end result of character tallies.