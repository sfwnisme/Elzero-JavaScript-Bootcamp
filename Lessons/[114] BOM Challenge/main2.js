/* 
  Process
  [1] Add Task
  [2] Add Task To Array Using Function
  [3] Add Tasks To Page
  
*/

let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");
console.log(tasksDiv);

// Empty Array To Store The Tasks
// Using of the variable => if the input is not empty the input.value will go to this variable => array
let arrayOfTasks = [];

//[1] Add Task
submit.onclick = function () {
  if (input.value !== "") {
    addTaskToArray(input.value); // add task to array of tasks
    input.value = ""; // Empty input field => after finishing the previous function this code will remove the text from the input
  }
};

//   [2] Add Task To Array Using Function
// addTaskToArray(taskText) => addTaskToArray(input.value) =>> input value will have all the process in this function
function addTaskToArray(taskText) {
  // console.log(taskText); // taskText = input.value
  // Task Data
  const task = {
    id: Date.now(), // using Date.now() => professional way to Create a UNIQUE ID
    title: taskText, // the input.value
    completed: false, // by default it's false due to did not add any thing yet
  };
  // push task to array of tasks
  // pushing the tesk object into array will contain all object names
  arrayOfTasks.push(task);
  // console.log(arrayOfTasks); // testing
  // [3] Add Tasks To Page
  addElementsToPageFrom(arrayOfTasks);
}

function addElementsToPageFrom(arrayOfTasks) {
  // Empty Task Div
  tasksDiv.innerHTML = "";
  // Looping on Array Of Tasks
  arrayOfTasks.forEach((task) => {
    //Create Main Div
    let div = document.createElement("div");
    div.className = "task";
    div.setAttribute("data-id", task.id);
    // You Can Use One Of This Two Ways
    // div.innerText = task.title;
    div.append(document.createTextNode(task.title));

    // Create Delete Button
    let span = document.createElement("span");
    span.className = "del";
    // You Can Use One Of This Two Ways
    // span.innerText = "Delete";
    span.append(document.createTextNode("Delete"));

    // Append Button To Main Div
    div.append(span);
    console.log(div);
    tasksDiv.append(div);
  });
}
