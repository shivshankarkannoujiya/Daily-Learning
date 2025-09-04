const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", () => {
  const inputValue = todoInput.value;
  console.log(`User entered: `, inputValue);

  const li = document.createElement("li");
  li.innerText = inputValue;

  const delButton = document.createElement("button");
  delButton.innerText = "X";
  li.appendChild(delButton);

  delButton.addEventListener("click", () => {
    li.remove();
  });
  todoList.appendChild(li);
  todoInput.value = "";
});
