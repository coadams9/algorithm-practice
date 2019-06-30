//Write a function that replaces all white spaces in a string with '%20'.

str = 'ab cd ef   '

function whiteSpace(str) {
    let newString = []
    for (i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            newString.push(str[i])
        } else {
            newString.push('%20')
        }
    }
    console.log(newString.join(', '))
}

whiteSpace(str)

//DAMN DID THIS ONE ALL BY MYSELF!! IT WORKED THE FIRST TIME!! HELL YEAH!