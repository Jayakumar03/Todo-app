// TODO ITEMS
var todoitems = 0;


// selectors
const addButton = document.getElementById("cross-btn");
const numberOfTaskleft = document.getElementById("number-of-task");
const textBar = document.getElementById("text-bar"); // TODO INPUT
const todoList = document.getElementsByClassName("todo-list")[0];
const filterSelector = document.getElementsByClassName("task-number-right")[0];
const numberOfTaskRemaining = document.querySelector("task-number-left");


// Event Listeners
document.addEventListener('DOMContentLoaded', getTodoFromLocal);
addButton.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteCheck);
todoList.addEventListener('click', completedCheck);
filterSelector.addEventListener('click', filterTodo);




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
    saveLocalTodo(textBar.value);

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
    // SAVING TO LOCAL STORAGE
    

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
    deleteLocalTodo();
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

// DUNCTION FOR FILTERING ALL AND COMPLETED
function filterTodo(event) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        const mstyle = todo.style
        if (mstyle != undefined && mstyle != null) {
            switch (event.target.value) {
                case "all":
                    todo.style.display = "flex";
                    break
    
                case "completed":
                    if(todo.classList.contains("completed")){
                        todo.style.display = "flex";
                    }else{
                         todo.style.display = "none"
                    }
                    break;
    
                case "in-complete":
                        if(todo.classList.contains("completed")){
                            todo.style.display = "none";
                        }else{
                             todo.style.display = "display"
                        }
                        break;
                default:
                    break;
            }
        }
            
        })
        
    }

// FUNCTION FOR SAVING LOCAL
function saveLocalTodo(todo) {
    // check if its already saved.
    let todos;
    if(localStorage.getItem('todos') === null){
        todos= [];

    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
    
}

// FUNCTIIN FOR GETTING THE VALUES FORM LOCALSTORAGE
function getTodoFromLocal() {
    let todos;
    if(localStorage.getItem('todos') === null){
        todoS = [];

    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    todos.forEach(function(todo) {
          // Todo DIV
     const todoDiv = document.createElement("div");
     todoDiv.classList.add("todo");
 
     // create li
     const newTodo = document.createElement("li");
     newTodo.innerHTML = todo;
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
 

    })
}
  // FUCTION TO DELETE THE ONJECTS IN LOCAL STORAGE
function deleteLocalTodo() {
    let todos;
    if(localStorage.getItem('todos') === null){
        todoS = [];

    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    const todoIndex = todos.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}











// numberOfTask();
// function numberOfTask(params) {
//     const length = document.getElementsByClassName("todo").childElementCount;
//     numberOfTaskRemaining.innertext = `${length} task left`;
// }