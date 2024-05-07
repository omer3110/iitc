//כתוב פונקציה שמקבלת מערך של מספרים ומחזירה מערך ממוין מהקטן לגדול.
// אסור לשנות את המערך המקורי. אסור להשתמש בפונקצית sort של מערך. מה סבוכיות הריצה ?

function sortArray(array) {
    let tempdArr = array.slice(); // Make a copy of the input array
    let sortedArray = [];
    while (tempdArr.length > 0) {
        let minIndex = 0;
        for (let i = 1; i < tempdArr.length; i++) {
            if (tempdArr[i] < tempdArr[minIndex]) {
                minIndex = i;
            }
        }
        sortedArray.push(tempdArr[minIndex]);
        tempdArr.splice(minIndex, 1);
    }
    return sortedArray;
}

let numArray = [2, 4, 0, 1, 6, 5, 87, 3, 2];
console.log(sortArray(numArray));