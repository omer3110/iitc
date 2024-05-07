//    const numArr = [3, 18, 10, 7];

//    function hasValueGreaterThanTen(array) {
//        return array.find(num => num > 10) !== undefined;
//    }
//    console.log(hasValueGreaterThanTen(numArr));



//    function hasEven(array) {
//        return array.find(num => (num % 2 == 0)) !== undefined;
//    }
//    console.log(hasEven(numArr));


//    const result = numArr.filter(checkAdult);
//    function checkAdult(num) {
//        return num % 2 == 0;
//    }
//    console.log(result);

// const myArray = ["Omer", "Moshe", "Nissim"];
// const sortArray = myArray.map((name) => `<li> ${name}</li>`);
// let nameList = document.querySelector(".list")
// nameList.innerHTML += sortArray.join("");




//array_find_1
// let arrayNum = [1, 3, 5, 2, 7];

// function hasValueGreaterThanTen(array) {
//         return array.find(num => num == 11);
// }
// if (hasValueGreaterThanTen(arrayNum)) {
//         console.log("yes");
// }
// else {
//         console.log("no");
// }

//array_find_2
// let peopleArray = [
//         { name: "Moshe Kupernikos", age: 33 },
//         { name: "Shimon", age: 21 },
//         { name: "Joe", age: 34 }
// ];

// function findPersonByAge(ageToFind) {
//         const person = peopleArray.find(person => person.age === ageToFind);
//         if (person) {
//                 console.log(person);
//         } else {
//                 console.log("no");
//         }
// }

// findPersonByAge(33);
// findPersonByAge(11);



const numArr = [3, 18, 1, 7];
function countEven(arr) {
        const intVal = 0;
        return arr.reduce((count, number) => count + (number % 2 == 0 ? 1 : 0), intVal);
}
console.log(countEven(numArr));