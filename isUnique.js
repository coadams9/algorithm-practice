// Determine if a string has all unique characters.
var str = 'jklm'
// My Initial Answer

// My thoughts were to first select the initial chararcter in the string
function isUnique(str) {
    var unique = true
    for (let i = 0; i < str.length; i++) {
        let test = str[i]
        // Once the first element was selelcted I wanted to compare it to every other char in the string.
        for (let j = 1; j < str.length; j++) {
            // if the char matches any of the other chars change the value of unique to false, if not do nothing.
            test === str[j] ? unique = false : null
        }
    }
    // Return true or false.
    return unique
}

isUnique(str)