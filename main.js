let toDoArr = ["Practice", "Home work", "Work", "studies", "Work"];
let elemToDo = document.querySelector('.checkList')

toDoArr.forEach(item => createToDos(item));


function createToDos(item) {
    let li = document.createElement('li');
    li.textContent = item;
    elemToDo.appendChild(li);
    li.onclick = () => removeList(li);
}

function removeList(item) {
    let index = Array.from(elemToDo.children).indexOf(item);
    toDoArr.splice(index, 1);
    item.remove();
}

