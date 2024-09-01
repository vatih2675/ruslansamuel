const todolistSectionOpen = document.querySelector("#todolistSectionOpen");
const sectionToDoList = document.querySelector("#sectionToDoList");
const todolistSectionClose = document.querySelector("#todolistSectionClose");
const inputField = document.querySelector("#inputTugas"),
  todoLists = document.querySelector(".todoLists"),
  pendingNum = document.querySelector(".pending-num"),
  clearButton = document.querySelector(".clear-button");

todolistSectionOpen.addEventListener("click", function () {
  sectionToDoList.classList.remove("hidden");
  sectionToDoList.classList.add("flex");
  inputField.focus();
});

todolistSectionClose.addEventListener("click", function () {
  sectionToDoList.classList.remove("flex");
  sectionToDoList.classList.add("hidden");
});

// LISTS

function allTasks() {
  let tasks = document.querySelectorAll(".pending");
  pendingNum.textContent = tasks.length;
  let allLists = document.querySelectorAll(".list");
  if (allLists.length > 0) {
    todoLists.style.marginTop = "20px";
    clearButton.classList.remove("hidden");
    clearButton.classList.add("flex");
    return;
  }
  todoLists.style.marginTop = "0px";
  clearButton.classList.remove("flex");
  clearButton.classList.add("hidden");
}

inputField.addEventListener("keyup", (e) => {
  let inputVal = inputField.value.trim();
  if (e.key === "Enter" && inputVal.length > 0) {
    let liTag = `<li class="list pending group w-full flex justify-between items-center bg-gradient-to-t hover:bg-gradient-to-b from-sky-800 to-sky-600 shadow-gray-700/50 shadow-lg rounded-full py-3 px-5 cursor-pointer" onclick="handleStatus(this)">
            <input type="checkbox" class="peer hidden" />
            <span class="task peer-checked:line-through peer-checked:text-gray-400">${inputVal}</span>
            <i class="bi bi-trash3 text-gray-400 hover:text-white hidden group-hover:flex" onclick="deleteTask(this)"></i>
        </li>`;
    todoLists.insertAdjacentHTML("beforeend", liTag);
    inputField.value = "";
    allTasks();
  }
});

function handleStatus(e) {
  const checkbox = e.querySelector("input");
  checkbox.checked = checkbox.checked ? false : true;
  e.classList.toggle("pending");
  allTasks();
}

function deleteTask(e) {
  e.parentElement.remove();
  allTasks();
}

clearButton.addEventListener("click", () => {
  todoLists.innerHTML = "";
  allTasks();
});
