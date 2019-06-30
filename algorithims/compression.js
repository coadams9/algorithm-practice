//Implement a method to perform basic string compression
//String 'aabccccaaa' would be 'a2b1c5a3'
//If compressed string would not become smaller than original string method should return original string.


//This is my initial stab at this. I can do it. will retry tomo. THis is pretty close with the answer being 'a5,a5,b1,c4,c4,c4,c4,a5,a5,a5'. 
str = 'aabccccaaa'

function compression(str) {
    let array = []
    for (i = 0; i < str.length; i++) {
        let count = 0
        for (j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++
            }
        }
        array.push(str[i].concat(count))
    }
    console.log(array.join())
}

compression(str)