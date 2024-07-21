document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");
  const taskInput = document.getElementById("task-input");

  // Load tasks from Local Storage
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task) => addTaskToDOM(task));
  }

  // Save tasks to Local Storage
  function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Add a task to the DOM
  function addTaskToDOM(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;
    li.classList.add("task-item");

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    removeButton.onclick = function () {
      li.remove();
      removeTask(taskText);
    };

    li.appendChild(removeButton);
    taskList.appendChild(li);
  }

  // Add a task
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    addTaskToDOM(taskText);

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskText);
    saveTasks(tasks);

    taskInput.value = "";
  }

  // Remove a task
  function removeTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter((task) => task !== taskText);
    saveTasks(tasks);
  }

  // Event listeners
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask();
    }
  });

  // Load tasks on page load
  loadTasks();
});
