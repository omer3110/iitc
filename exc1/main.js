// let h = +prompt("please insert Height");    ////rectangle height and perimeter
// while (!Number.isInteger(h)) {
//     h = +prompt("please insert Height in numbers only");
// }
// let l = +prompt("please insert Length");
// while (!Number.isInteger(l)) {
//     l = +prompt("please insert Length in numbers only");
// }
// let area = l * h;
// let perimeter = (l + h) * 2;
// alert(`Area of the rectangle: ${area} `);
// alert(`Perimeter of the rectangle: ${perimeter} `);


// for (i = 1; i <= 10; i++) {
//     console.log(i);
// }

// let counter = 1;
// while (counter <= 10) {
//     console.log(counter);
//     counter++;
// }


// for (i = 1; i <= 5; i++) {
//     console.log("*****");
// }

// let str = '*';
// for (i = 5; i > 0; i--) {
//     console.log(str.repeat(i));
// }



//// loop_1_m כתוב תכנית שמדפיסה את המספרים 1,2,....100 פעם אחת בשורה ופעם אחת בעמודה

// let counter = 1; //// in column
// while (counter <= 100) {
//     console.log(counter);
//     counter++;
// }

// let counter = 1;       //// in row
// let str = "";
// while (counter <= 100) {
//     str += counter + ", ";
//     counter++;
// }
// console.log(str);

//// loop_2_m  כתוב תכנית שקולטת 5 מספרים מהמשתמש, מחשבת סכום וממוצע ומדפיסה למסך. בצע בעזרת לולאת for

// let counter = 0;
// let sum = 0;
// while (counter < 5) {
//     let num = +prompt("please insert number");
//     sum += num
//     counter++;
// }
// let everage = sum / 5;
// console.log(`The sum of the numbers is ${sum} and the everage is ${everage}`);


// user_num = prompt("Please type number")
// for (i = 0; i < user_num.length; i++) {
//     console.log(user_num[i]);
// }

//// loop_3_m כתוב תוכנית שמדפיסה את כל המספרים השלמים הזוגיים מ1-50.
// let counter = 1;
// while (counter <= 50) {
//     if (counter % 2 == 0) {
//         console.log(counter);
//     }
//     counter++;
// }

//// loop_4_m


//// loop_5_m   כתוב תוכנית שמקבלת מספר שלם ומחשבת עצרת. לדוגמא עבור 4 נקבל : 1*2*3*4 ז"א 24
// user_num = prompt("Please type number");
// let factorial = 1;
// let i = 1;
// while (i <= user_num) {
//     factorial = factorial * i;
//     i++;
// }
// console.log(factorial);

//// loop_6_m כתוב תכנית אשר קולטת מהמשתמש חמישה מספרים ממשים  ומחשבת את המנימום והמקסימום מבינהם ומדפיסה אותו. אפשר להשתמש ב Number.MAX_SAFE_INTEGER  , Number.MIN_SAFE_INTEGER
// let counter = 0;
// let min_num = Number.MAX_SAFE_INTEGER;
// let max_num = Number.MIN_SAFE_INTEGER;
// while (counter < 5) {
//     let num = +prompt("please insert number");
//     if (num > max_num) {
//         max_num = num
//     }
//     if (num < min_num) {
//         min_num = num
//     }
//     counter++;
// }
// console.log(`The lowest number is ${min_num} and the highest is ${max_num}`);

//// loop_7_m חזור על loop_1_m ,loop_2_m בעזרת לולאת for
// for (i = 1; i <= 100; i++) { // in column
//     console.log(i);
// }
// var s = ""; // in row
// for (i = 1; i <= 100; i++) {
//     s += i + " ";
// }
// console.log(s);

//// loop_2_m בעזרת לולאת for
// let counter = 0;
// let sum = 0;
// for (i = 0; i < 5; i++) {
//     let num = +prompt("please insert number");
//     sum += num
// }
// let everage = sum / 5;
// console.log(`The sum of the numbers is ${sum} and the everage is ${everage}`);
// user_num = prompt("Please type number")
// for (i = 0; i < user_num.length; i++) {
//     console.log(user_num[i]);
// }
//// loop_7.5_m loop_3 for loop
// for (i = 1; i <= 50; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// let counter = 3;
// for (i = 1; i <= 50; i++) {
//     if (counter == 3) {
//         console.log(i);
//         counter = 0;
//     }
//     counter++;
// }


//// loop_8_m Do while loop- ex loop_5
// user_num = prompt("Please type number");
// let factorial = 1;
// let i = 1;
// do {
//     factorial = factorial * i;
//     i++;
// } while (i <= user_num)
// console.log(factorial);

////ex loop_6 do while
// let counter = 0;
// let min_num = Number.MAX_SAFE_INTEGER;
// let max_num = Number.MIN_SAFE_INTEGER;
// do {
//     let num = +prompt("please insert number");
//     if (num > max_num) {
//         max_num = num
//     }
//     if (num < min_num) {
//         min_num = num
//     }
//     counter++;
// }
// while (counter < 5)
// console.log(`The lowest number is ${min_num} and the highest is ${max_num}`);

//// loop_9_m  כתוב תכנית אשר קולטת מהמשתמש n ספרים ממשים חיוביים ומחשבת את המנימום והמקסימום מבינהם ומדפיסה אותו. קליטת המספרים מסתימת כאשר המשתמש מכניס 0 או מספר שלילי ואז מדפיסים את המספר המקסימלי והמינימלי שחושב. במה כדאי להשתמש : while , for  או do while

// let min_num = Number.MAX_SAFE_INTEGER;
// let max_num = Number.MIN_SAFE_INTEGER;
// while (true) {
//     let num = +prompt("please insert number");
//     if (num <= 0) {
//         break
//     }
//     if (num > max_num) {
//         max_num = num
//     }
//     if (num < min_num) {
//         min_num = num
//     }
// }
// console.log(`The lowest number is ${min_num} and the highest is ${max_num}`);

//// loop_10_m
// let number = +prompt("Please enter a number:");
// let divisor = 1;
// while (number >= divisor * 10) {
//     divisor *= 10;
// }
// while (divisor >= 1) {
//     let digit = Math.floor(number / divisor);
//     console.log(digit);
//     number %= divisor;
//     divisor /= 10;
// }

//// loop_11_m
let random_number = Math.floor(Math.random() * 100) + 1;
// console.log(random_number);
let user_guess = +prompt("Please guess a number between 1 to 100: ");
let count_guess = 1;
while (user_guess != random_number) {
    user_guess = +prompt("Please guess a number between 1 to 100: ");
    count_guess++
}
alert(`You succeed it took ${count_guess} tries`)