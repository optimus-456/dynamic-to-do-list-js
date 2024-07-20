//DOMContentLoaded ensures that the javascript loads after the html
document.addEventListener("DOMContentLoaded", function () {
  // Retrieving all DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");
  const taskInput = document.getElementById("task-input");

  // Creating the add task function
  function addTask() {
    var taskText = document.getElementById("task-input").value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
    } else {
      var li = document.createElement("li");
      li.textContent = taskText;
      var removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.className = "remove-btn";

      // Task removal
      removeButton.onclick = function () {
        li.remove();
      };

      li.appendChild(removeButton);

      taskList.appendChild(li);

      taskInput.value = "";
    }
  }
  // Attaching event listeners to addButton and taskInput
  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask();
    }
  });
});
