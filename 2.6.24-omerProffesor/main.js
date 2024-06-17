// const fruits = ["Banana", "Apple"];

// function getNewFruits(fruit) {
//     return [...fruits, fruit]
// }

// const newFruits = getNewFruits("Orange");
// console.log(newFruits);
// console.log(fruits);
// console.log(...newFruits);


// const cat = {
//     nickName: "Mitzi",
//     age: 1
// }

// function increamentCatAge(obj) {
//     const newCatObj = { ...obj };
//     newCatObj.age = newCatObj.age + 1;
//     return newCatObj;
// }

// const newCat = increamentCatAge(cat);
// console.log(cat);
// console.log(newCat);


const persons = [
    {
        _id: "1",
        name: "baba",
        age: 30,
        hobbies: ["sing", "work"],
    },
    {
        _id: "2",
        name: "mama",
        age: 80,
        hobbies: ["learn", "smoke", "sing"],
    },
    {
        _id: "3",
        name: "lulu",
        age: 12,
        hobbies: ["TV"],
    },
];
//1
function getPersonById(id) {
    return persons[id];
}
console.log(getPersonById(0));
//2
function getPersonsByHobby() {
    return persons.filter((person) => person.hobbies.includes("sing"));
}

console.log(getPersonsByHobby());
//3
function isPersonsOver70() {
    return persons.some((person) => person.age > 70);
}
console.log(isPersonsOver70());
//4
function isAllPersonsOver18() {
    return persons.every((person) => person.age > 18);
}
console.log(isAllPersonsOver18());
//5
function personsToIdsArray() {
    return persons.map((person) => person._id);
}
console.log(personsToIdsArray());
//6
function personsToHobbiesArr() {
    return persons.reduce((acc, person) => {
        person.hobbies.forEach(hobby => {
            if (!acc.includes(hobby)) {
                acc.push(hobby);
            }
        });
        return acc;
    }, []);
}
console.log(personsToHobbiesArr());
//7
function sumPersonsAges() {
    return persons.reduce((acc, person) => {
        acc += person.age;
        return acc;
    }, 0);
}
console.log(sumPersonsAges());
//8
let newPerson = {
    _id: "4",
    name: "nunu",
    age: 12,
    hobbies: ["cars"],
}
function switchPersonById(obj, id) {
    persons.slice(id, 1);
    return persons;
}
console.log(switchPersonById(newPerson, 1));


let numArray = [1, 2, 3, 4, 5];

console.log(numArray.map((num) => num * 2));

console.log(numArray.filter((num) => num % 2 == 0));

console.log(numArray.reduce((num, sum) => num += sum, 0));

const students = ["Omer", "Jane", "Biden", "Jill"];

console.log(students.find((student) => student[0].toLowerCase() == 'j'));

console.log(students.some((student) => student[0].toLowerCase() == 'j'));

console.log(students.every((student) => student[0].toLowerCase() == 'j'));

const colors = ["red", "blue", "green", "yellow", "purple"];

const slicedColors = colors.slice(0, 3);
console.log(slicedColors);

console.log(colors);

colors.splice(-2, 2, "pink", "orange");

console.log(colors);



const prices = [
    { name: "laptop", price: 1000 },
    { name: "phone", price: 500 },
    { name: "tablet", price: 800 },
    { name: "watch", price: 200 }
]

const prodNames = prices.map((price) => price.name);
console.log(prodNames);

const prodOver500 = prices.filter((pri) => pri.price > 500);
console.log(prodOver500);

const sumPrices = prices.reduce((sum, item) => {
    return sum + item.price;
}, 0);
console.log(sumPrices);


const inventory = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 500 },
    { id: 3, name: 'Tablet', price: 800 }
];


// function arrayToObj(inventory) {
//     let ind = 1;
//     const newObj = {};
//     inventory.forEach((inv) => {
//         let tempObj = { id: inv.id, name: inv.name, price: inv.price };
//         newObj[ind] = tempObj
//         ind++;
//     })
//     return newObj
// }
// console.log(inventory);

function arrayToObject(arr, key) {
    return arr.reduce((acc, obj) => {
        acc[obj[key]] = obj;
        return acc;
    }, {});
}

console.log(arrayToObject(inventory, 'id'));


const duplicates = [1, 2, 2, 3, 4, 4, 5];

function uniqueValues(values) {
    const res = values.reduce((acc, val) => {
        const isIncluded = acc.includes(val)
        if (!isIncluded) acc.push(val);
        return acc
    }, [])
    return res;
}

console.log(uniqueValues(duplicates));


const employees = [
    { name: 'John Doe', department: 'Engineering', yearsOfExp: 5 },
    { name: 'Peter Johnson', department: 'Engineering', yearsOfExp: 5 },
    { name: 'Jane Smith', department: 'Marketing', yearsOfExp: 8 },
    { name: 'Lucy Brown', department: 'Marketing', yearsOfExp: 10 },
    { name: 'Mike Davis', department: 'Engineering', yearsOfExp: 3 },
    { name: 'Sara Wilson', department: 'Marketing', yearsOfExp: 8 }
];


function groupBy(items, key) {

    const res = items.reduce((acc, item) => {
        const value = [item[key]];
        if (!acc[value]) acc[value] = [];

        acc[value].push(item);
        return acc;
    }, {});
    return res;
}
console.log(groupBy(employees, 'department'));
/*
{
Engineering: [
  { name: 'John Doe', department: 'Engineering', yearsOfExp: 5 },
  { name: 'Peter Johnson', department: 'Engineering', yearsOfExp: 5 },
  { name: 'Mike Davis', department: 'Engineering', yearsOfExp: 3 }
],
Marketing: [
  { name: 'Jane Smith', department: 'Marketing', yearsOfExp: 8 },
  { name: 'Lucy Brown', department: 'Marketing', yearsOfExp: 10 },
  { name: 'Sara Wilson', department: 'Marketing', yearsOfExp: 8 }
]
}
*/

