// Chapter 21 - 25



// Question no. 1

// var firstName = prompt("Enter Your First Name")
// var lastName = prompt("Enter Your Last Name")
// console.log(firstName + " " + lastName)


// Question no. 2

// var userInput = prompt("Enter your favorite mobile phone model")
// document.write("<b> My favorite phone is : " + userInput + "</br>")
// document.write("<b> Length of string : " + userInput.length)


// Question no. 3

// var str = "Pakistani"
// document.write("<b> String: Pakistani </br>")
// document.write("<b> Index of 'n': " + str.indexOf("n"))


// Question no. 4

// var str = "Hello World"
// document.write("<b> String: Hello World </br>")
// document.write("<b> Index of 'l': " + str.lastIndexOf("l"))


// Question no. 5

// var str = "Pakistani"
// document.write("<b> String: Pakistani </br>")
// document.write("<b> Character at index 3 : " + str[3])
// document.write("<b> Character at index 3 : " + str.charAt(3))


// Question no. 6

// var firstName = prompt("Enter Your First Name")
// var lastName = prompt("Enter Your Last Name")
// console.log(firstName + " " +lastName.concat())


// Question no. 7

// var text = "Hyderabad"
// document.write("<b>City: " + text + "</br>")
// var word = "Hyder"
// var replace = "Islam"
// document.write("After replacement: " + text.replace(word,replace))


// Question no. 8

// var message = "Ali and Sami are best friends. They play cricket and football together."
// var word = "and"
// var replace = "&"
// document.write("<b>" + message.replaceAll(word,replace))


// Question no. 9

// var str = "472"
// document.write("<b>Value: " + str + "</br> Type: String</br>")
// document.write("Value: " + (+str) + "</br> Type: Number")


// Question no. 10

// var userInput = prompt("Enter any word in lower case")
// document.write("<b>User Input: " + userInput + "</br>")
// document.write("Upper case: " + userInput.toUpperCase())


// var userInput = prompt("Enter any word in upper case")
// document.write("<b>User Input: " + userInput + "</br>")
// document.write("Little case: " + userInput.toLowerCase())


// Question no. 11

// var userInput = prompt("Enter any word")
// var firstLetter = userInput.slice(0 , 1)
// var convert = firstLetter.toUpperCase()
// var otherLetters =  userInput.slice(1)
// var arr = [convert , otherLetters]

// console.log(arr.join(""))

// document.write("<b>User Input: " + userInput + "</br>")
// document.write("Title case: " + arr.join(""))


// Question no. 12

// var num = 35.35
// var str = num.toString()
// var replace = str.replace("." , "")
// console.log(replace)

// document.write("<b> Number: " + str + "</br>" )
// document.write("Result: " + replace)


// Question no. 14

// var arr =  ["cake", "apple pie", "cookie", "chips", "patties"]

// var userInput = prompt("Enter the item you want to search:").toLowerCase()

// var found = false

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === userInput){
//         found = true;
//         break;
//     }
// }


// if (found){
//         alert("The item  '" + userInput + "'  is found in the list.");
// } else {
//         alert("The item '" + userInput + "' is not found in the list.");
//     }


// Question no. 16

// var university = "University of Karachi"
// var universityArr = university.split('')

// console.log(universityArr)

// for (var i = 0; i < universityArr.length; i++){
//     console.log(universityArr[i])
// }

// document.write("</b>" + universityArr[0] + "</br>")
// document.write(universityArr[1] + "</br>")
// document.write(universityArr[2] + "</br>")
// document.write(universityArr[3] + "</br>")
// document.write(universityArr[4] + "</br>")
// document.write(universityArr[5] + "</br>")
// document.write(universityArr[6] + "</br>")
// document.write(universityArr[7] + "</br>")
// document.write(universityArr[8] + "</br>")
// document.write(universityArr[9] + "</br>")
// document.write(universityArr[10] + "</br>")
// document.write(universityArr[11] + "</br>")
// document.write(universityArr[12] + "</br>")
// document.write(universityArr[13] + "</br>")
// document.write(universityArr[14] + "</br>")
// document.write(universityArr[15] + "</br>")
// document.write(universityArr[16] + "</br>")
// document.write(universityArr[17] + "</br>")
// document.write(universityArr[18] + "</br>")
// document.write(universityArr[19] + "</br>")
// document.write(universityArr[20] + "</br>")


// Question no. 17

// var userInput = prompt("Enter any word: " , "Pakistan")
// // var str = userInput.slice(-1)
// var str = userInput.charAt(userInput.length - 1)

// console.log(str)

// document.write("<b>User Input: " + userInput + "</br>")
// document.write("Last character of input: " + str)


// Question no. 18

// var str = "The quick brown fox jumps over the lazy dog."
// var word = "the"
// var count = 0

// var strLowerCase = str.toLowerCase()
// var wordLowerCase = word.toLocaleLowerCase()

// var array = strLowerCase.split(' ')

// for ( var i = 0; i < array.length; i++){
//     if (array[i] === wordLowerCase){
//         count++
//     }
// }

// console.log(count)
// document.write("<b>Text: " + str + "</br>")
// document.write("There are " + count + " occurrences of word 'the'")
















//  Chapter No. 26 - 30


// Question no. 1

// var userInput = +prompt("Enter a positive integer")
// console.log("Number : " + userInput)
// console.log("Round of value : " + Math.round(userInput))
// console.log("Floor value : " + Math.floor(userInput))
// console.log("Ceil value : " + Math.ceil(userInput))

// document.write("<b> Number : " + userInput + "<br>")
// document.write("Round of value : " + Math.round(userInput) + "<br>")
// document.write("Floor value : " + Math.floor(userInput) + "<br>")
// document.write("Ceil value : " + Math.ceil(userInput) + "<br>")


// Question no. 2

// var userInput = +prompt("Enter a negative integer")
// console.log("Number : " + userInput)
// console.log("Round of value : " + Math.round(userInput))
// console.log("Floor value : " + Math.floor(userInput))
// console.log("Ceil value : " + Math.ceil(userInput))

// document.write("<b> Number : " + userInput + "<br>")
// document.write("Round of value : " + Math.round(userInput) + "<br>")
// document.write("Floor value : " + Math.floor(userInput) + "<br>")
// document.write("Ceil value : " + Math.ceil(userInput) + "<br>")


// Question no. 3

// var userInput = +prompt("Enter a negative number")
// document.write("<b> The absolute value of  " + userInput + "  is  " + Math.abs(userInput) + ".")


// Question no. 4

// console.log(Math.ceil(Math.random() * 6))
// console.log(Math.ceil(Math.random() * 6))
// console.log(Math.ceil(Math.random() * 6))
// console.log(Math.ceil(Math.random() * 6))
// console.log(Math.ceil(Math.random() * 6))

// document.write(" <b> Ramdom dice value : " + Math.ceil(Math.random() * 6) + "</br>")
// document.write(" <b> Ramdom dice value : " + Math.ceil(Math.random() * 6))


// Question no. 5

// console.log(Math.ceil(Math.random() * 2))

// if (Math.ceil(Math.random() * 2) == 2){
//     document.write(" <b> 2 <br> Ramdom coin value : Heads")
// } 
// else{
//     document.write("<b> 1 <br> Ramdom coin value : Tails")
// }



// Question no. 6

// document.write("<b> Random number between 1 and 100 : " + Math.ceil(Math.random() * 100))


// Question no. 7

// var userInput = +prompt("Enter your weight in kilograms")
// document.write("<b> The weigth of user is " + userInput.toFixed(1) + " kilograms")


// Question no. 8

// var secretNumber = Math.ceil(Math.random() * 6)
// var userInput = +prompt("Enter a number between 1 and 10")
// console.log(secretNumber)
// console.log(userInput)

// if (userInput === secretNumber){
//     swal({
//                 title: "Congratulation!",
//                 text: "You clicked the button!",
//                 icon: "success",
//                 button: "Aww yiss!",
//               });
// }
// else{
//     swal({
//         title: "Try again!",
//         text: "You clicked the button!",
//         icon: "success",
//         button: "Aww yiss!",
//       });
// }

