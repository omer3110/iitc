// board = "";                    //loops_nested_3      כתוב תכנית אשר משתמשת בלולאה מקוננת להדפסת לוח הכפל של 1 עד 10
// for (i = 1; i <= 10; i++) {
//     for (j = 1; j <= 10; j++) {
//         board += (i * j) + "\t";
//     }
//     board += "\n";
// }
// console.log(board);

////function_2_m     "כתוב פונקציה שמקבלת שני מספרים שלמים ומחזירה מקסימום בעזרת return. בצע קריאה מהדף והדפס את הערך המתקבל
// function who_is_bigger(num1, num2) {
//     let biggest_number = (num1 > num2) ? num1 : num2
//     return biggest_number
// }
// let number1 = +prompt("Please enter a number: ");
// let number2 = +prompt("Please enter a number: ");
// let bigger_number = who_is_bigger(number1, number2)
// console.log(`Biggest number is ${bigger_number}`)

////function_3_m  ". כתוב פונקציה שמקבלת שני מספרים ממשים ומחזירה את סכומם בעזרת return.  בצע קריאה מהדף והדפס את הערך המתקבל
// function sum_numbers(num1, num2) {
//     let sum = num1 + num2;
//     return sum
// }
// let number1 = +prompt("Please enter a number: ");
// let number2 = +prompt("Please enter a number: ");
// let sum = sum_numbers(number1, number2)
// console.log(`sum of the numbers is: ${sum}`)

////function_5_m
// function sum_numbers(number) {
//     let sum = 0
//     for (i = number; i > 0; i--) {
//         sum += i;
//     }
//     return sum
// }
// let number1 = +prompt("Please enter a number: ");
// let sum = sum_numbers(number1)
// alert(`sum of number is ${sum}`)

////function_6_m    כתוב פונקציה שמחליפה בין ערכים של שני משתנים מ scope חיצוני . יש להשתמש לבדוק באמצעות קריאה מהדף
// function switch_variable(var1, var2) {
//     let temp_var = var1;
//     var1 = var2;
//     var2 = temp_var;
//     return alert(`first item is now ${var1} and second item is now ${var2}`)
// }
// let som1 = prompt("Please enter something: ");
// let som2 = prompt("Please enter something: ");
// switch_variable(som1, som2)

//function_7_m

// function triangle_of_signs(char, number) {
//     for (let i = 1; i <= number; i++) {
//         let line = '';
//         for (let j = 1; j <= i; j++) {
//             line += char;
//         }
//         console.log(line);
//     }
// }
// let number1 = +prompt("Please enter a number: ");
// let sign = prompt("Please enter a sign: ");
// triangle_of_signs(sign, number1)


// function_8_b     כתוב פונקציה שמקבלת מספר שלם ומחזירה את סכום ספרותיו. לדוגמא עבור 123 יוחזר 6 : שזה 1+2+3
// function sum_index_number(num) {
//     let sum = 0;
//     let length_num = num.length
//     for (i = 0; i < length_num; i++) {
//         sum += Number(num[i]);
//     }
//     return sum
// }
// let number = prompt("Please enter a number: ");
// let sum_num = sum_index_number(number);
// alert(`Sum of all num index is: ${sum_num}`)

// function_9_b  fibonacci
// function fib_num_print(num) {
//     let n1 = 0, n2 = 1, new_n;
//     for (i = 0; i < num; i++) {
//         console.log(n1);
//         new_n = n1 + n2;
//         n1 = n2;
//         n2 = new_n;
//     }
// }
// let number = prompt("How many fibonacci numbers do you want to see?: ");
// fib_num_print(number)

//arrays

//// array_0.5_m    הגדר מערך עם המספרים 5,3,7,8,11 חשב את סכום האיברים והממוצע והדפס ל console. יש לבצע באמצעות לולאה על המערך
// let num_array = [1, 2, 3, 4, 5, 6, 7, 8];
// let sum = 0;
// for (i = 0; i < num_array.length; i++) {
//     sum += num_array[i];
// }
// alert(`The sum of the array is: ${sum}`)
//// array_0.7_m   הגדר מערך עם חמישה שמות. הדפס את השמות בעזרת לולאה על המערך
// let names_array = ['omer', 'moshe', 'sami', 'ovad', 'messi'];
// for (i = 0; i < names_array.length; i++) {
//     console.log(names_array[i]);
// }

//// array_1_m      כתוב דף HTML אשר מכניס ערכים 1,2,3 עד 100 למערך ואחר כך מדפיס את המערך.
// let num_array = [];
// for (i = 1; i <= 100; i++) {
//     num_array.push(i);
// }
// console.log(num_array);

//// array_2_m כתוב  דף HTML  אשר מכניס 5 מספרים רנדומלים ושלמים בגודל שבין 0 ל 99 למערך (המערך בגודל 5). הדף מחשב ממוצע וסכום של איברים במערך ומדפיס אותם
// let num_array = [];
// let sum = 0;
// let everage = 0;
// for (i = 0; i < 5; i++) {
//     let number = +prompt("Please enter a number: ");
//     num_array.push(number);
//     sum += number;
// }
// everage = sum / 5;
// console.log(num_array);
// console.log(sum);
// console.log(everage);

//// array_2.5_m     כתוב פונקציה שמקבלת מערך מספרים שלמים ומספר שלם כארגומנטים. הפונקציה בודקת אם המספר מופיע במערך, אם כן מוחזר true אחרת מוחזר false
// function is_in_array(num, array) {
//     let length_arr = array.length;
//     for (i = 0; i < length_arr; i++) {
//         if (array[i] == num) {
//             return true;
//         }
//     }
//     return false
// }
// num_array = [1, 5, 8, 4];
// let number = +prompt("Please enter a number to check if is in array: ");
// console.log(is_in_array(number, num_array));

//// array_2.7_m   כתוב פונקציה שמקבלת  שני מערכים של  מספרים שלמים כארגומנטים. שני המערכים הם באותו אורך ומכילים מספרים ללא חזרות . החזר  את מספר האיברים שמופיעים בשני המערכים.
// function is_in_both_arrays(array1, array2) {
//     let count_in_both = 0;
//     let countedSet = new Set();
//     for (let i = 0; i < array1.length; i++) {
//         if (array2.includes(array1[i]) && !countedSet.has(array1[i])) {
//             count_in_both++;
//             countedSet.add(array1[i]);
//         }
//     }
//     return count_in_both;
// }
// let array1_num = [1, 3, 7, 88, 1, 12];
// let array2_num = [9, 3, 8, 88, 1, 5];
// console.log(is_in_both_arrays(array1_num, array2_num));


// function count_unique(array) {
//     let new_array = [];
//     for (i of array) {
//         if (!new_array.includes(i)) {
//             new_array.push(i);
//         }
//     }
//     return new_array.length;
// }
// let array2_num = [9, 9, 8, 8, 8, 5];
// console.log(count_unique(array2_num));

// console.log(count_unique(new Set(array2_num)));



// let str = "name:nathan , family:krasney , city:haifa";
// function max_value(string) {
//     let array = str.split(',');
//     for (i of array) {

//     }

// }