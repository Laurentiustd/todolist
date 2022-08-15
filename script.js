const newTask = document.querySelector(".new-task");
const add = document.querySelector(".add");
const edit = document.querySelector(".edit");
const tasksList = document.querySelector(".container .tasks");
const judulTaskList = document.querySelector(".container .tasks h2");

add.addEventListener("click", () => {
  judulTaskList.style.opacity = "1";
  let newTaskVal = `<div class="task">
    <input type="text" value="${newTask.value}" readonly>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
    </div>`;

  tasksList.innerHTML += newTaskVal;

  newTask.value = "";

  // const del = document.querySelectorAll(".container .tasks .task .delete");
  // del.forEach((delEl)=>{
  //     delEl.addEventListener("click", ()=>{
  //         delEl.parentElement.remove();
  //     });

  // });
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("edit")) {
    e.target.previousElementSibling.removeAttribute("readonly");
    e.target.previousElementSibling.focus();
    e.target.innerHTML = "Save";
    e.target.classList = "save";
  } else if (e.target.classList.contains("save")) {
    e.target.classList = "edit";
    e.target.innerHTML = "Edit";
    e.target.previousElementSibling.setAttribute("readonly", "readonly");
  }
});
