const textarea = document.querySelector("textarea");
const addTodoBtn = document.querySelector("#addTodoBtn");
const todoContainer = document.querySelector(".todo-container");

let todoList = [];

const initialLoad = () => {
  if (!localStorage.getItem("todos")) {
    return;
  }
  todoList = JSON.parse(localStorage.getItem("todos")).todoList;
  updateUI();
};

const addTodo = () => {
  const todo = textarea.value;
  if (!todo) {
    return;
  }
  console.log("Added ToDo: ", todo);
  todoList.push(todo);
  textarea.value = "";
  updateUI();
  console.log("ToDo List: ", todoList);
};

const removeTodo = (todoIndex) => {
  todoList = todoList.filter((el, elIndex) => todoIndex !== elIndex);
  updateUI();
};

const editTodo = (todoIndex) => {
  textarea.value = todoList[todoIndex];
  todoList = todoList.filter((el, elIndex) => {
    if (todoIndex === elIndex) {
      return false;
    }
    return true;
  });
  updateUI();
};

const updateUI = () => {
  let newInnerHTML = "";
  todoList.forEach((todoElement, todoIndex) => {
    newInnerHTML += `
    <div class="todo">
        <p>
          ${todoElement}
        </p>
        <div class="btn-container">
          <button class="icon-btn" onclick="editTodo(${todoIndex})">
            <i class="fa-pen-to-square fa-solid"></i>
          </button>
          <button class="icon-btn" onclick="removeTodo(${todoIndex})">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    `;
  });

  todoContainer.innerHTML = newInnerHTML;

  // Save to LocalStorage
  localStorage.setItem("todos", JSON.stringify({ todoList }));
};

addTodoBtn.addEventListener("click", addTodo);

initialLoad();
