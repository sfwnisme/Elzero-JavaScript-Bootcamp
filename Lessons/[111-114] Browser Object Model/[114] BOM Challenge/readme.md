# Note

**Explaining All Steps**

Solution Process
[1] Add Task => submit.onclick

- if condition
  - adding function => addTaskToArray(input.value) // insert all input values in array using function
  - empty input => input.value = "" // after the previous function works empty the input \* if we wrote it before the function it will not out put any value because we removed the value before the function process work, Thus we must write it after the function in the end of the condition

[2] Add Task To Array Using Function => function addTaskToArray(taskText)

- creating object => const task // insert the data we will loop by it to adding in array

  - id => id: Date.now(), //unique id for every array element - unique id => Date.now() // will give you date of this moment as numbers you can use it as unique id
  - title => title: taskText, // the taskText(input.value)
  - completed => completed: false, // the status of the todo line if it's done or not

- creating array in GLOBAL SCOPE => let arrayOfTasks = []; // this array we will push the taskText(input.value) in it

  - push the task(the object) into the array arrayOfTasks => arrayOfTasks.push(task) // we use it in array to loop it

- addElementsToPageForm(arrayOfTasks) // using this function to loop the array and create elements to taskDiv container

[3] Add Tasks To Page Using Function => function addElementsToPageFrom(arrayOfTasks)

- empty taskDiv => taskDiv.innerHTML = ""; // Before any process this function will remove any content in the elements container in DOM
- looping arrayOfTasks => arrayOfTasks.forEach((task = (arrayOfTasks))) // will loop the array and create elements to DOM

  - create div => let div = document.createElement("div") // create div to contain the task name and button
    - add class to div => div.className = "task" // adding attribute for using it in css
    - adding data attribute => div.setAttribute("data-id", task.id) // task.id = relate to forEach((task)) not the object (const task = {})
    - append task to div => div.append(document.createTextNode(task.title)) // append object property (title) into div element
  - completed if condition => if(task.completed) // by default it is if condition is true without writing it

    - add class to div => div.className = "done task" // if it's true (completed) add class "done" it will change the shape using css if adding this class

  - create span = let span => document.createElement("span"); // create this element using it as button

    - adding class to span => span.className = "del" // to access from css
    - append text to span => span.append(document.createTextNode("Delete")); // button text

  - append span to div => div.append(span) // display span into div
  - append div to tasksDiv => tasksDiv.append(div) // display div to task container

[4] adding data to localSTorage from arrayOfTasks => addDataToLocalStorageFrom(arrayOfTasks)

- the data we need to save is the tasks, then we will use arrayOfTasks as a parameter, because it contains the tasks data
- set tasks to localStorage => window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
  - convert the arrayOfTasks to string => JSON.stringify(arrayOfTasks) // localStorage needs string to save, we used JSON.stringify() to convert the array to string

[5] get data from localStorage => function getDataFromLocalStorage() // creating function to get the data form localStorage but this function will be on global scope by it self

- this function will get the data we set on localStorage
- create variable contains localStorage key getItem("tasks") => let data = window.localStorage.getItem("tasks"); // it will save in data variable then we can using it any where
- creating if condition => if(data) {} // if data is true do the block of code.
  - create new variable => let task = JSON.parse(data); // this variable contains "let data" variable
    and changing it form string to array using "JSON.parse()".
  - bring create element function => addElementsToPageForm(task) //
    - we need to add elements to page and create delete button again like the same process of [3] addElementsToPageForm(arrayOTasks)
    - we brought addElementsToPageFrom(task) function again to check it after using JSON.parse(data) only, while we could directly using addElementsToPageFrom(arrayOfTasks) but if there is any problem
- define the the function in in the top of global scope after the arrayOfTasks => getDataFromLocalStorage();
- the function will work normally but onreloading the page it will empty the tasks because the arrayOfTasks is empty onloading => let arrayOfTasks = [] // follow the steps to understand how to fix it

[6] this condition will save the data of localStorage in the empty array after relaoding

- if condition => if(localStorage.getItem("task")) // if it's true do the block of code
  - overwrite arrayOfTasks => arrayOfTasks = JSON.parse(localStorage.getItem("tasks")); // will bring the data on local storage "data = string" and convert it string > array because it saved on localstorage as a string
    ,then will convert it using JSON.parse()

[7] delete task => tasksDiv.addEventListener('click', (e) => {block of code})

- will apply the function onclicking
- if condition => if (e.target.classList.contains("del")) {block of code} // we use this line of code targetting a specific element on tasksDiv
  - First: delete task parentElement from localStorage => deleteTaskWith(e.target.parentElement.getAttribute("data-id")); // use this function to delete the parent element of task
    that have this attribute by clicking on delete button
    - targetting the element by attribute => getAttribute("data-id"); // element has this attribute
      - delete function => function deleteTaskWith(taskId) {block of code} // the process of deleting the task parentElement from localStorage will be in this function
        - overwrite the arrayOfTasks variable => arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId); // this will update the arrayOfTasks data if the task id not equal the taskId we deleted
          then delete the deleted task and did not effect the other elements
        - update localStorage data of arrayOfTasks => addDataToLocalStorageFrom(arrayOfTasks); // this function will filter the data of tasks and delete the selected task
  - Second: delete the task from DOM => e.target.parentElement.remove(); // this will remove the task parentElement from the DOM
    - using this block of code to remove the task parentElement from DOM, if we did not remove it from DOM will still displayed untill you refresh or reload the page
