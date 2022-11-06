let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

let array = [];


//[6]
if (window.localStorage.getItem("tasks")) {
  array = JSON.parse(window.localStorage.getItem("tasks"));
}

//[5]
getDataToLocalStorage();

//[1]
submit.onclick = function () {
  if (input.value != "") {
    //[2]
    addTasksToArray(input.value);
    input.value = "";
  }
};

//[7]
tasksDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("del")) {
    deleteTask(e.target.parentElement.getAttribute("data-id"));
    e.target.parentElement.remove();
  }
});

//[2]
function addTasksToArray(toArray) {
  let task = {
    id: Date.now(),
    title: toArray,
  };
  array.push(task);
  //[3]
  addElementsToPage(array);
  //[4]
  addElementToLocalStorage(array);
}

// [3]
function addElementsToPage(arrToEle) {
  tasksDiv.innerHTML = "";

  arrToEle.forEach((task) => {
    let div = document.createElement("div");
    div.className = "task";
    div.setAttribute("data-id", task.id);
    div.append(document.createTextNode(task.title));

    let span = document.createElement("span");
    span.className = "del";
    span.append(document.createTextNode("Delete"));

    div.append(span);
    tasksDiv.append(div);
  });
}

//[4]
function addElementToLocalStorage(setData) {
  window.localStorage.setItem("tasks", JSON.stringify(setData));
}
//[5]
function getDataToLocalStorage() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let task = JSON.parse(data);
    addElementsToPage(task);
  }
}
//[7]
function deleteTask(taskId) {
  array = array.filter((task) => task.id != taskId);
  addElementToLocalStorage(array);
}

// window.localStorage.clear();