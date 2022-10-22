let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

// array empty tasksDiv on reload we should prevent it
let array = [];

//[6]
// prevent empty array on reload
if (window.localStorage.getItem("tasks")) {
  array = JSON.parse(window.localStorage.getItem("tasks"));
}

//[5]
// get data to local storage
getDataToLocalStorage();

//[1]
// confirming
submit.onclick = function () {
  if (input.value != "") {
    //[2]
    // add input.value to array
    addTasksToArray(input.value);
    input.value = "";
  }
};

//[7]
// delete task function
tasksDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("del")) {
    //FIRST: delete from local storage
    deleteTask(e.target.parentElement.getAttribute("data-id"));
    //SECOND: remove from DOM
    e.target.parentElement.remove();
  }
});

/* ...................Functions */
//[2]
//add input.value to array
function addTasksToArray(toArray) {
  //object
  let task = {
    id: Date.now(),
    title: toArray,
  };
  //create empty array in global scope
  array.push(task);
  console.log(array);

  //[3]
  // create function insert array elements to elements
  addElementsToPage(array);

  //[4]
  // add elements to local storage
  addElementToLocalStorage(array);
}

//[3]
// create function insert array elements to elements
function addElementsToPage(arrToEle) {
  //empty tasksDiv container
  tasksDiv.innerHTML = "";

  //loop the array to add it into elements
  arrToEle.forEach((task) => {
    //task name element
    let div = document.createElement("div");
    div.className = "task";
    div.setAttribute("data-id", task.id);
    div.append(document.createTextNode(task.title));

    // task delete button
    let span = document.createElement("span");
    span.className = "del";
    span.append(document.createTextNode("Delete"));

    // append elements to DOM
    div.append(span);
    tasksDiv.append(div);
  });
}

//[4]
// add elements to local storage
function addElementToLocalStorage(setData) {
  // set data to local storage as a string using JSON.stringify
  window.localStorage.setItem("tasks", JSON.stringify(setData));
}

//[5]
// get data to local storage
// defined the function top of the global scope
function getDataToLocalStorage() {
  //save data in variable to confirming it in the next step
  let data = window.localStorage.getItem("tasks");

  // if the data is true convert it from string to array
  if (data) {
    let task = JSON.parse(data);
    // do the same as adding the array to elements function
    addElementsToPage(task);
  }
}

//[7]
// delete task function
function deleteTask(taskId) {
  array = array.filter((task) => task.id != taskId);
  addElementToLocalStorage(array);
}

// localStorage.clear();
