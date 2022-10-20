/* 
  Solution Process

  [1] Add Task => submit.onclick
    - if condition
    -- adding function => addTaskToArray(input.value) // insert all input values in array using function
    -- empty input => input.value = "" // after the previous function works empty the input * if we wrote it before the function it will not out put any value because we removed the value before the function process work, Thus we must write it after the function in the end of the condition

  [2] Add Task To Array Using Function => function addTaskToArray(taskText)
    - creating object => const task // insert the data we will loop by it to adding in array
    -- id => id: Date.now(), //unique id for every array element 
    ---- unique id => Date.now() // will give you date of this moment as numbers you can use it as unique id
    -- title => title: taskText, // the taskText(input.value)
    -- completed => completed: false, // the status of the todo line if it's done or not
    
    - creating  array in GLOBAL SCOPE => let arrayOfTasks = []; // this array we will push the taskText(input.value) in it
    -- push the task(the object) into the array arrayOfTasks => arrayOfTasks.push(task) // we use it in array to loop it
    
    - addElementsToPageForm(arrayOfTasks) // using this function to loop the array and create elements to taskDiv container

  [3] Add Tasks To Page Using Function => function addElementsToPageFrom(arrayOfTasks)
    - empty taskDiv => taskDiv.innerHTML = ""; // Before any process this function will remove any content in the elements container in DOM
    - looping arrayOfTasks => arrayOfTasks.forEach((task = (arrayOfTasks))) // will loop the array and create elements to DOM
    
    -- create div => let div = document.createElement("div") // create div to contain the task name and button
    ---- add class to div => div.className = "task" // adding attribute for using it in css
    ---- adding data attribute => div.setAttribute("data-id", task.id) // task.id = relate to forEach((task)) not the object (const task = {})
    ---- append task to div => div.append(document.createTextNode(task.title)) // append object property (title) into div element
    -- completed if condition => if(task.completed) // by default it is if condition is true without writing it 
    ---- add class to div => div.className = "done task" // if it's true (completed) add class "done" it will change the shape using css if adding this class
    
    -- create span = let span => document.createElement("span"); // create this element using it as button
    ---- adding class to span => span.className = "del" // to access from css
    ---- append text to span => span.append(document.createTextNode("Delete")); // button text
    
    -- append span to div => div.append(span) // display span into div 
    -- append div to tasksDiv => tasksDiv.append(div) // display div to task container

    [4] adding data to localSTorage from arrayOfTasks => addDataToLocalStorageFrom(arrayOfTasks)
    - the data we need to save is the tasks, then we will use arrayOfTasks as a parameter, because it contains the tasks data
    - set tasks to localStorage => window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
    -- convert the arrayOfTasks to string => JSON.stringify(arrayOfTasks) // localStorage needs string to save, we used JSON.stringify() to convert the array to string 
    
    [5] get data from localStorage => function getDataFromLocalStorage() // creating function to get the data form localStorage but this function will be on global scope by it self
    - this function will get the data we set on localStorage 
    - create variable contains localStorage key getItem("tasks") => let data = window.localStorage.getItem("tasks"); // it will save in data variable then we can using it any where
    - creating if condition => if(data) {} // if data is true do the block of code.
    --  create new variable => let task = JSON.parse(data); // this variable contains "let data" variable 
        and changing it form string to array using "JSON.parse()".
    --  bring create element function => addElementsToPageForm(task) //
    ----  we need to add elements to page and create delete button again like the same process of [3] addElementsToPageForm(arrayOTasks)
    ----  we brought addElementsToPageFrom(task) function again to check it after using JSON.parse(data) only, while we could directly using addElementsToPageFrom(arrayOfTasks) but if there is any problem 
    - define the the function in in the top of global scope after the arrayOfTasks => getDataFromLocalStorage();
    - the function will work normally but onreloading the page it will empty the tasks because the arrayOfTasks is empty onloading => let arrayOfTasks = [] // follow the steps to understand how to fix it
    
    [6] this condition will save the data of localStorage in the empty array after relaoding
    - if condition => if(localStorage.getItem("task")) // if it's true do the block of code
    --  overwrite arrayOfTasks => arrayOfTasks = JSON.parse(localStorage.getItem("tasks")); // will bring the data on local storage "data = string" and convert it string > array because it saved on localstorage as a string
        ,then will convert it using JSON.parse()

    [7]
*/

let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");
console.log(tasksDiv);

// Empty Array To Store The Tasks
// Using of the variable => if the input is not empty the input.value will go to this variable => array
/* ********after saving the data by local storage on getDataFromLocalStorage(); 
after refresh it normally will save data but if we add new value in the input 
it will remove the previous data bacause the process of this project will back looping 
from the first and in the first arrayOfTasks = []; is empty that meen the tasks will be removed */
let arrayOfTasks = [];

//[6]
// Check if there is tasks in local storage
if (localStorage.getItem("tasks")) {
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

//[5] Trigger Get Data Form Local Storage function
getDataFromLocalStorage();

//[1] Add Task
function outPutTask() {
  if (input.value !== "") {
    //[2]
    // add task to arrayOfTasks variable
    addTaskToArray(input.value); // add task to array of tasks
    input.value = ""; // Empty input field => after finishing the previous function this code will remove the text from the input
  }
}

submit.onclick = function () {
  //[1]
  outPutTask();
};

// using ENTER button to output the task
// solution LINK: "https://www.codegrepper.com/code-examples/javascript/press+enter+on+input+javascript"
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    //[1]
    outPutTask();
  }
});

//[7] Delete task
// will search for specific selector or attribute
tasksDiv.addEventListener("click", (e) => {
  // using this method to find the element
  if (e.target.classList.contains("del")) {
    // Second: remove the task from the task => array
    // remove from localStorage
    // will target the task by its [id] => [data-id] // will use it as a parameter
    deleteTaskWith(e.target.parentElement.getAttribute("data-id"));

    // First: remove the task form the DOM
    // remove parent element form the page
    // here we targeted the parent container
    // using .target for the specific element
    e.target.parentElement.remove();
  }
});

//[2] Add Task To Array Using Function
// addTaskToArray(taskText) => addTaskToArray(input.value) =>> input value will have all the process in this function
function addTaskToArray(taskText) {
  // console.log(taskText); // taskText = input.value
  // Task Data
  const task = {
    id: Date.now(), // using Date.now() => professional way to Create a UNIQUE ID
    title: taskText, // the input.value
    completed: false, // by default it's false due to did not add any thing yet
  };
  console.log(task); // testing
  // push task to array of tasks
  // pushing the tesk object into array will contain all object names
  arrayOfTasks.push(task);
  // console.log(arrayOfTasks); // testing
  // [3] Add Tasks To Page
  addElementsToPageFrom(arrayOfTasks);

  //[4] adding arrayOfTasks to localStorage
  // Add Tasks To localStorage
  // All process that has done on arrayOfTasks array will import to localStorage
  // why we add this function here? => because we target the array
  addDataToLocalStorageFrom(arrayOfTasks);

  // for testing
  console.log(arrayOfTasks);
  // this will be added to localStorage setItem value
  // it change the array to string array => without indexes
  console.log(JSON.stringify(arrayOfTasks));
}

/* --------------------------Functions */

//[3]
// Add Tasks To Page
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

    //Check If Task Is Done
    if (task.completed) {
      div.className = "done task";
    }

    // Create Delete Button
    let span = document.createElement("span");
    span.className = "del";
    // You Can Use One Of This Two Ways
    // span.innerText = "Delete";
    span.append(document.createTextNode("Delete"));

    // Append Button To Main Div
    div.append(span);
    console.log(div);
    //Add Task Div To Task Container
    tasksDiv.append(div);
  });
}

//[4]
// adding arrayOfTasks to localStorage
function addDataToLocalStorageFrom(arrayOfTasks) {
  // we need to change the array output to sring array that we will use JSON.stringfy
  //  JSON.stringify change the array to string array => without indexes
  window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks)); // adding JSON to access it by localStorage
}
// window.localStorage.clear();

//[5]
// Trigger Get Data Form Local Storage function
// in this point of process it save the data at local storage
// at the same time the input.value in array get removed by default of arrayOfTasks = []; it's empty in the first of the page go up
function getDataFromLocalStorage() {
  let data = window.localStorage.getItem("tasks");
  // addElementsToPageFrom(JSON.parse(window.localStorage.getItem("tasks"))); // we can use this instead of the condition below
  if (data) {
    //here we need to change the string array to normall array
    // we using JSON.parse() to converts string array to normall array
    // define it here as an array again to get it in localStorage
    // here we check if the data we got from localStrotage.setItem() is match or not, by returning it to its normal
    let task = JSON.parse(data);
    // console.log(task); // for testing
    // defined it again after convert it form stringify() to parse() for repeat the same process of creating element in getItem of localStorage
    // after reloading the array will be saved as array [let task = JSON.parse(data) => converted to array] to save it in localStorage.getItem
    // let task = let arrayOfTasks
    // here will repeat the same process of creating element by addElementsToPageFrom(arrayOfTasks) but change the parameter to (task)
    addElementsToPageFrom(task); // also you can use arrayOfTasks instead of task
  }
}

/* 
JSON.stringify() => change any method like array or object to string
JSON.parse() => change any string array or object array to its normal like array or object
*/

// [6]
// Delete Task Function
function deleteTaskWith(taskId) {
  // for explain only
  // for (let i = 0; i < arrayOfTasks.length; i++) {
  // console.log(`${arrayOfTasks[i].id} === ${taskId}`);
  // }
  // console.log(arrayOfTasks[i].id != taskId);
  arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
  addDataToLocalStorageFrom(arrayOfTasks);
}

// localStorage.clear();
