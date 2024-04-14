
// //     const person = {
// //         firstName: 'Omer',
// //         lastNane: 'Sidi',
// //         age: 24,
// //         printThis: function () {
// //             console.log(this)
// //         },
// //         getFullName: function () {
// //             return `${this.firstName} ${this.lastNane} ${this.age}`;
// //         }
// //     }
// //     person.getFullName()
// //     person.printThis()

// let personsArray = [
//     { firstName: 'Omer', lastName: 'Sidi', age: 24 },
//     { firstName: 'Moshe', lastName: 'Cohen', age: 57 },
//     { firstName: 'Micha', lastName: 'Richards', age: 33 },
//     { firstName: 'Thiery', lastName: 'Henry', age: 38 },
// ];

// function averagePersonsAge(persons) {
//     let sumAges = 0;
//     for (let i = 0; i < persons.length; i++) {
//         sumAges += persons[i].age;
//     }
//     let average = sumAges / persons.length;
//     return average;
// }
// console.log(averagePersonsAge(personsArray));

// function oldestPerson(persons) {
//     let oldestAge = 0;
//     let indexOfOldestPerson = 0;
//     for (let i = 0; i < persons.length; i++) {
//         if (persons[i].age > oldestAge) {
//             oldestAge = persons[i].age;
//             indexOfOldestPerson = i;
//         }
//     }
//     return `The oldest person is ${persons[indexOfOldestPerson].firstName}, his age his ${oldestAge} and the age index is ${indexOfOldestPerson}`;
// }
// console.log(oldestPerson(personsArray));

//array_opeartion_0
// let booksArray = [
//     { bookName: 'The Great Gatsby', numberOfPages: 180 },
//     { bookName: 'To Kill a Mockingbird', numberOfPages: 281 },
//     { bookName: '1984', numberOfPages: 328 },
//     { bookName: 'Pride and Prejudice', numberOfPages: 432 },
//     { bookName: 'The Catcher in the Rye', numberOfPages: 277 }
// ];
// for (let i = 0; i < booksArray.length; i++) {
//     console.log(`Book Name: ${booksArray[i].bookName}, Number of Pages: ${booksArray[i].numberOfPages}`);
// }

//array_opeartion_1
// function addBook(array, name, pages) {
//     let newBook = { bookName: name, numberOfPages: pages };
//     array.push(newBook)
// }
// addBook(booksArray, 'Harry Potter and the Sorcerer\'s Stone', 309);
// for (let i = 0; i < booksArray.length; i++) {
//     console.log(`Book Name: ${booksArray[i].bookName}, Number of Pages: ${booksArray[i].numberOfPages}`);
// }

//array_opeartion_2
// function getBook(array, name) {
//     for (let i of array) {
//         if (i.bookName == name) {
//             return i;
//         }
//     }
//     return null;
// }
// console.log(getBook(booksArray, 'Harry Potter and the Sorcerer\'s Stone'))
//array_opeartion_3
// function updateBookPages(array, name, pages) {
//     for (let i of array) {
//         if (i.bookName == name) {
//             i.numberOfPages = pages;
//             return i;
//         }
//     }
//     return null;
// }
// console.log(updateBookPages(booksArray, 'Harry Potter and the Sorcerer\'s Stone', 444));
//array_opeartion_4
// function deleteBook(array, name) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].bookName === name) {
//             array.splice(i, 1);
//             return true;
//         }
//     }
//     return false;
// }

// console.log(deleteBook(booksArray, '1984'));
// for (let i = 0; i < booksArray.length; i++) {
//     console.log(`Book Name: ${booksArray[i].bookName}, Number of Pages: ${booksArray[i].numberOfPages}`);
// }







//array_opeartion_5
let numsArray = [4, 8, 4, 9];
let userNum = +prompt("Please choose a number to increase by 1: ");
function increaseByOne(array, inputNum) {
    let numberFound = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === inputNum) {
            array[i]++;
            numberFound = true;
        }
    }
    if (numberFound) {
        return array;
    } else {
        return `The number ${inputNum} is not in the array`;
    }
}
console.log(increaseByOne(numsArray, userNum));
console.log(numsArray);