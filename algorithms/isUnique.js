// // Determine if a string has all unique characters.
var str = 'jkjm'
// // my Initial Answer

// // my thoughts were to first select the initial chararcter in the string
function isUnique(str) {
    var unique = true
    for (let i = 0; i < str.length; i++) {
        let test = str[i]
        // Once the first element was selelcted I wanted to compare it to every other char in the string.
        for (let j = i + 1; j < str.length; j++) {
            //NEEDED TO MAKE J = NEXT CHARACTER SO IT CHECKS FOR ALL CHARACTERS EACH TIME. MY LOGIC WAS FOR THR FIRST CHARACTER ONLY BUT WHEN ALGORITHIM GOT TO THE SECOND INTEGER IT DID NOT CHACK THE FIRST ONE.
            // if the char matches any of the other chars change the value of unique to false, if not do nothing.
            test === str[j] ? unique = false : null
        }
    }
    // console.log true or false.
    if (unique === true) {
        console.log('this string is unique')
    } else {
        console.log('this string is not unique')
    }
}

isUnique(str)

//Things Learned: 
// 1. I thought that if i started at i = 3 that the indexes at 0, 1, 2 were not being checked so I tried to fix it but found it didn't need fixing. The above code works just fine. 

// 2. I learned that when going through characters the first loop pauses on the first element before doing comparisons on every other element