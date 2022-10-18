let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

console.log(input);
let arr = [];

// Prevent removing array elements if saved on localStorage
if (window.localStorage.getItem("task")) {
  arr = JSON.parse(window.localStorage.getItem("task"));
}
//[6]
//Delete task
tasksDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("del")) {
    e.target.parentElement.remove();
  } 
});

//[5]
getDataToLocalStorage();

// [1]
submit.onclick = function () {
  if (input.value !== "") {
    // [2]
    addTasksToArray(input.value);
    input.value = "";
  }
};

/* -------------functions */

//[2]
function addTasksToArray(tasksToArray) {
  const obj = {
    id: Date.now(),
    title: tasksToArray,
    completed: false,
  };
  arr.push(obj);
  console.log(arr);

  //[3]
  addTasksToElement(arr);

  //[4]
  addDataToLocalStorage(arr);
}

//[3]
function addTasksToElement(task) {
  tasksDiv.innerHTML = "";
  task.forEach((taskLoop) => {
    // console.log(taskLoop); //test
    //------ task
    let div = document.createElement("div");
    div.className = "task";
    div.setAttribute("data-id", taskLoop.id);
    div.append(document.createTextNode(taskLoop.title));

    //------ completed task
    if (taskLoop.completed) {
      div.className = "task done";
    }

    //------ Delete button
    let span = document.createElement("span");
    span.className = "del";
    span.append(document.createTextNode("Delete"));

    //------ append task and button to tasksDiv
    div.append(span);
    tasksDiv.append(div);
  });
}

//[4]
function addDataToLocalStorage(arrToLocal) {
  window.localStorage.setItem("task", JSON.stringify(arrToLocal));
}

//[5]
function getDataToLocalStorage() {
  let data = window.localStorage.getItem("task");
  if (data) {
    let task = JSON.parse(data);
    addTasksToElement(task);
  }
}

// window.localStorage.clear();
