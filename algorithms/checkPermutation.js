//Write a function that checks to see if the two strings are permutations of each other.

str1 = 'kge'
str2 = 'bac'

//I thought that if str2 inlcudes all of str2 then it is a permutation of it. 
//i.e. 'abcd' includes the 'a', 'b', 'c' but the 'd' is left off meaning that hopefully it returns false as these two are not permutations of each other. 

// function checkP(str1, str2) {
//     str2.includes(str1) ? console.log(true) : console.log(false)
// }

// checkP(str1, str2)

//WELL THAT WAS WRONG...

//IT LOOKS LIKE THAT BECAUSE STR1 INCLUDES THE 'A B C' IN 'A B C D' IT DOESN'T MATTER THAT 'D' IS THERE OR NOT. MY FUNCTION RETURNED TRUE AND I WAS EXPECTING FALSE. 
//I'LL TRY SOME METHOD FOR CHECKING EVERY CHARACTER IN THE STRINGS NEXT.

// function checkP(str1, str2) {
//     let checker = false
//     for (i = 0; i < str1.length; i++) {
//         for (j = 0; j < str2.length; j++) {
//             if (str1[i] !== str2[j]) {
//                 return true
//             } else {
//                 null
//             }
//         }
//     }
// }

// checkP(str1, str2)

//NOPE
// ----------------------------------------------------------------------


//THIS IS A SOLUTION I FOUND. IN THIS CODE SORT IS BEING DEFINED TO FIRST MAKE THE STRING INTO AN ARRAY IN PLACE USING THE SPREAD OPEREATOR, IT THEN SORTS THAT ARRAY AND JOINS THEM INTO A STRING FOR COMPARRISON USE LATER ON.

const sort = str => [...str].sort().join``;

function checkPermutations1(str1, str2) {
    //HERE WERE CHECKING TO SEE IF THE STRINGS ARE BOTH PRESENT AND THEN TO SEE IF THE TWO LENGTHS OF THE STRINGS MATCH UP. IF ANY OF THESE THINGS IS FALSE(THE STRINGS ARE NOT THERE OR THE LENGTHS DO NOT MATCH KUP THEN WE KNOW WE CANNOT HAVE AN ANAGRAM)
    if (!str1 || !str2 || str1.length !== str2.length) return false;

    //IT THEN RETURNS THE BOOLEAN VALUE OF WHETHER THE STRINGS ARE EQUAL OR NOT.
    return sort(str1) === sort(str2);
}

checkPermutations1(str1, str2)


// THINGS I LEARNED: 
// 1. USING THE [...str] OPERATOR IN PLACE IS GOOD. YOU CAN THEN USE .sort().join('') TO TURN THE ARRAY IN PLACE INTO A AN ARRAY, SORT IT, AND THEN JOIN THEM INTO A STRING. 2. ON LINE 42 THE (!str1) PART SIMPLY MEANS IF THE STRING IS NOT THERE. 
// 3. THE === BETWEEN THE TWO SORT'S WILL MAKE THE FUNCTION RETURN THE BOOLEAN VALUE. IF THEY ARE EQUAL IT WILL RETURN TURE IF NOT THEY WILL RETURN FALSE.  
