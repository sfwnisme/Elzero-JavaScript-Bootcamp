let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");
console.log(tasksDiv);

//[1] Add Task
submit.onclick = function () {
  if (input.value !== "") {
    addTaskToArray(input.value); // add task to array of tasks
    input.value = ""; // Empty input field => after finishing the previous function this code will remove the text from the input
  }
};

// [2] add Task to array => function
// addTaskToArray(taskText) => addTaskToArray(input.value) =>> input value will have all the process in this function
function addTaskToArray(taskText) {
  // console.log(taskText); // taskText = input.value
  let taskArr = [];
  taskArr.push(taskText);
  console.log(taskArr);
}
