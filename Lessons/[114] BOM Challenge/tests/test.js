let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

console.log(input);

let inputValuesArray = [];
let deleteArray = [];

//[1] Onclick on sumbit
submit.onclick = function () {
  if (input.value !== "") {
    // adding function => add Input Values To Array
    // it mandatory adding the function before empty the input.value
    addInputValuesToArray(input.value);
    //Empty input
    //We write empty input.value in the end
    input.value = ""; //done
  }
};

// [2] add input.value to array
function addInputValuesToArray(inputToArray) {
  // loop input values
  let taskObj = {
    id: Date.now(),
    title: inputToArray,
    completed: false,
  };
  inputValuesArray.push(taskObj);
  console.log(inputValuesArray[0]);
  // [3] Adding tasks to DOM => tasks Container
  addElementsToTasksContainer(inputValuesArray); // will loop the array to adding it into task container
}

function addElementsToTasksContainer(inputArray) {
  // empty Tasks container
  tasksDiv.innerText = "";

  //loop inputValuesArray
  inputArray.forEach((task) => {
    let div = document.createElement("div");
    div.className = "task";
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));

    if (task.completed) {
      div.className = "task done";
    }

    let span = document.createElement("span");
    span.classList.add("del");
    span.append(document.createTextNode("Delete"));
    div.append(span);
    tasksDiv.append(div);
    console.log(div);
  });
}
