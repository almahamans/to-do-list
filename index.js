let userInput = document.querySelector("#input");
let label = document.querySelector("label");
let addBtn = document.querySelector("#add__btn");
let list = document.querySelector("#ulist");
let form = document.querySelector("form");
let so = document.querySelector("#lists__sec");
let counter = document.querySelector("#counter");

let search_label = document.querySelector("#search_input_label");
let search_input = document.querySelector("#search_input");

let count = 0;
let lists = JSON.parse(localStorage.getItem("tasks")) || [];
//to display tasks from localstorage
if (lists.length > 0) {
  lists.forEach((task) => {
    addToDo(task);
    count = lists.length;
    updateLocalStorage();
  });
  counter.innerHTML = `Number of tasks: ${count}`;
}

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let inputTask = userInput.value;
  //check if its empty inputs
  label.style.color = "red";
  label.style.display = "block";
  if (!inputTask) {
    label.innerHTML = "Should write something...";
    setTimeout(() => {
      label.style.display = "none";
    }, 2000);
    return;
  }
  addToDo(inputTask);
  lists.push(inputTask);
  count++;
  updateLocalStorage();
  form.reset();
  counter.innerHTML = `Number of tasks: ${count}`;
});

function addToDo(inputTask) {
  //creating div for styling
  let text_div = document.createElement("div");

  let li = document.createElement("li");
  //create span tag to hold input value
  let task = document.createElement("span");
  task.textContent = inputTask;
  //create checkbox button
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  text_div.appendChild(checkbox);
  text_div.appendChild(task);
  li.appendChild(text_div);
  //create section for buttons for styleing
  let btn_sec = document.createElement("section");
  //create delete for each item in the list
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  btn_sec.appendChild(deleteBtn);
  //create edit for each item in the list
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  btn_sec.appendChild(editBtn);

  li.appendChild(btn_sec);
  //append li into ul
  list.appendChild(li);
  //check on one element
  checkbox.addEventListener("click", () => {
      li.classList.toggle("checked");
      updateLocalStorage();
    }, false);

  btn_sec.classList.add("btn_style");
  li.classList.add("li_style");
  //remove one item
  deleteBtn.onclick = () => {
    list.removeChild(li);
    const taskText = li.querySelector("span").textContent;
    const taskIndex = lists.indexOf(taskText);
    lists.splice(taskIndex, 1);
    updateLocalStorage();
    count--;
    counter.innerHTML = `Number of tasks: ${count}`;
  };
  //edit one item
  editBtn.onclick = () => {
    let oldTask = li.querySelector("span").textContent;
    let newTask = prompt("Edit task:");
    if (newTask) {
      li.querySelector("span").textContent = newTask;
      const taskIndex = lists.indexOf(oldTask);
      lists[taskIndex] = newTask;
      updateLocalStorage();
    }
  };
}

function updateLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(lists));
}
//search
search_label.style.display = "block";
search_input.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredTasks = lists.filter((task) =>
    task.toLowerCase().includes(searchTerm)
  );
  list.innerHTML = "";
  filteredTasks.forEach((task) => addToDo(task));
});