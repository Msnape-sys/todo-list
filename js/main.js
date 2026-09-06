
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
addTaskButton.addEventListener("click", addTask);


function addTask(){
const taskText = taskInput.value;
if (taskText === ""){
return};
const listItem = document.createElement("li");
listItem.classList.add("task");
const taskSpan = document.createElement("span");
taskSpan.innerText = taskText;
taskSpan.classList.add("taskText");
const deleteButton = document.createElement("button");
deleteButton.innerText = "REMOVE";
deleteButton.classList.add("deleteButton");
taskSpan.addEventListener("click", markComplete);
deleteButton.addEventListener("click", removeTask);
listItem.appendChild(taskSpan);
listItem.appendChild(deleteButton);
taskList.appendChild(listItem);
taskInput.value = "";
}
function markComplete(event){
event.target.classList.toggle("completed");
}
function removeTask(event){
event.target.parentElement.remove();

}