// let a = 'helo JS';
// console.log(a);
// alert("hello");
// console.log(a);
// let b = 1 + 'a';
// console.log(a);


// let a = 2, b = 11;
// a = b > 7 && b < 10 ? 1 : 2;
// console.log(a);


let h = +prompt("please insert Height");
while (!Number.isInteger(h)) {
    h = +prompt("please insert Height in numbers only");
}
let l = +prompt("please insert Length");
while (!Number.isInteger(l)) {
    l = +prompt("please insert Length in numbers only");
}
let area = l * h;
let perimeter = (l + h) * 2;
alert(`Area of the rectangle: ${area} `);
alert(`Perimeter of the rectangle: ${perimeter} `);
