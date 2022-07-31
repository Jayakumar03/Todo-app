// TODO ITEMS
var todoitems = 0;


// selectors
const addButton = document.getElementById("cross-btn");
const numberOfTaskleft = document.getElementById("number-of-task");
const textBar = document.getElementById("text-bar"); // TODO INPUT
const todoList = document.getElementsByClassName("todo-list")[0];
const filterSelector = document.querySelector("task-number-right");
const numberOfTaskRemaining = document.querySelector("task-number-left");

// Event Listeners
addButton.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteCheck);
todoList.addEventListener('click', completedCheck);




// Functions

function addTodo(event) {
    // prevent from submitting
    event.preventDefault();

    // Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // create li
    const newTodo = document.createElement("li");
    newTodo.innerHTML = textBar.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // CHECK MARK BUTTON
    const completedButtom = document.createElement("button");
    completedButtom.innerHTML = 'DONE';
    completedButtom.classList.add("complete-btn");
    todoDiv.appendChild(completedButtom);

    // CHECK TRASH BUTTON
    const trashButtom = document.createElement("button");
    trashButtom.innerHTML = 'DEL';
    trashButtom.classList.add("trash-btn");
    todoDiv.appendChild(trashButtom)

    // APPENDT TO LIST
    todoList.appendChild(todoDiv);

    // CLEAR TODO INPUT VALUE
    textBar.value = "";

   // CALL DISPLAY FUNCTION

}

 // DISPLAYING TASK
 


// FUNCTION FOR DELETE CHECK

function deleteCheck(event) {
    // console.log(event.target);
    const item = event.target;
    if (item.classList[0] === "trash-btn") {
        let trashButtonParent = item.parentElement;
        //  changing class for animation 
        trashButtonParent.classList.toggle("fall");
        todoList.addEventListener("transitionend", function () {
            trashButtonParent.remove();
        });
    }
    todoitems = todoitems - 1;
}

// FUNCTION FOR COMPLETED  CHECK

function completedCheck(event) {
    console.log(event.target);
    const item = event.target;
    if (item.classList[0] === "complete-btn") {
        let doneButtonParent = item.parentElement;
        doneButtonParent.classList.toggle("completed");
    }

    todoitems = todoitems - 1;
}

numberOfTask();
function numberOfTask(params) {
    const length = document.getElementsByClassName("todo").childElementCount;
    numberOfTaskRemaining.innertext = `${length} task left`;
}

