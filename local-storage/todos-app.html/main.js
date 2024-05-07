
// localStorage.removeItem("checkList");

let toDo = document.querySelector("#my-to-do");
let checkList = document.querySelector(".checkList");
let toDoArray = [];
console.log(toDoArray);
localStorageLoad();

// Function to load data from local storage
function localStorageLoad() {
    let currentStorage = localStorage.getItem("checkList");
    if (currentStorage) {
        toDoArray = JSON.parse(currentStorage);
        toDoArray.forEach(addToDoItem);
    }
}
// Function to add a to-do item to the list
function addToCheckList() {
    let newToDo = toDo.value.trim();
    if (checkUniqueToDo(newToDo)) {
        addToDoItem(newToDo);
        toDoArray.push(newToDo);
        localStorage.setItem("checkList", JSON.stringify(toDoArray));
        toDo.value = ''; // Clear input field after adding
    }
}
// Function to check for duplicate and empty to-do items
function checkUniqueToDo(checkRow) {
    if (toDoArray.includes(checkRow) || checkRow === '') {
        alert("Cannot insert duplicates or empty to-dos");
        return false;
    }
    return true;
}
// Function to add a to-do item to the list
function addToDoItem(item) {
    let li = document.createElement('li');
    li.classList.add('row');
    li.textContent = item;
    checkList.appendChild(li);
    li.onclick = function () {
        // li.remove();
        // let index = toDoArray.indexOf(item);
        // toDoArray.splice(index, 1);
        // localStorage.setItem("checkList", JSON.stringify(toDoArray));
        console.log(li);
        if (li.style.color == "black") {
            li.style.color = "green";
        }
        else {
            li.style.color = "black"
        }
    };
}
// Function to sort the list
function sortList() {
    toDoArray.sort();
    checkList.innerHTML = ''; // Clear the list
    toDoArray.forEach(addToDoItem);
    localStorage.setItem("checkList", JSON.stringify(toDoArray));
}

function clearCheckList() {
    toDoArray = [];
    localStorage.setItem("checkList", JSON.stringify(toDoArray));
    checkList.innerHTML = '';
}