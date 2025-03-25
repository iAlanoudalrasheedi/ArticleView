function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    var taskText = taskInput.value;
    if (taskText === "") {
      return;
    }
  
    var li = document.createElement("li");
    var span = document.createElement("span");
    span.textContent = taskText;
    li.appendChild(span);
  
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
      li.remove();
    };
    li.appendChild(deleteButton);
  
    taskList.appendChild(li);
  
    taskInput.value = "";
  }
  