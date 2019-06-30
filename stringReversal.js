// Implement a function that reverses a string

// my initial answer
var str = 'abcde'


// reverse = (str) => {
//     //set an empty string
//     let reversed = ''
//     for (let i = 0; i < str.length; i++) {
//         //for every element in that string I pop it off and shuffle it into 'reversed'
//         // reversed << str.pop()
//     }
//     //return the reversed string
//     console.log(reversed)
//     return reversed
// }

// reverse(str)

//STR.POP() DOESN'T WORK. THIS IS A METHOD FOR ARRAYS ONLY.

//TO TEST SPLIT METHOD TO GET THIS STRING INTO AN ARRAY SO HOPEFULLY MY CODE WILL WORK.
let newArr = str.split([,])
console.log(newArr)


//SECOND IMPLEMENTATION. This time I used split to split the string into an array to get more methods to opereate on. Once this was done I wrote outthe same logic as before but it worked because I changed the data type to an array first. I think this code works well.
reverse = (str) => {
    //set an empty string
    let reversed = []
    // CHANGED THIS TO BE AN ARRAY INITIALLY
    let newArr = str.split([])
    for (let i = 0; i < str.length; i++) {
        //for every element in that newArray I pop it off and shuffle it into 'reversed'
        reversed.push(newArr.pop())
    }
    //return the reversed string
    console.log(reversed.join(''))
    console.log(typeof reversed.join(''))
    return reversed
}

reverse(str)