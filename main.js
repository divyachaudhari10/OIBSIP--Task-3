$(document).ready(function() {
    var taskInput = $('#task-input');
    var addTaskBtn = $('#add-task-btn');
    var taskList = $('#task-list');

    
  
    addTaskBtn.on('click', function() {
      var taskText = taskInput.val();
  
      if (taskText !== '') {
        var taskItem = '<li><span>' + taskText + '</span><button class="delete-btn">Delete</button></li>';
  
        taskList.append(taskItem);
        taskInput.val('');
      }
    });
  
    taskList.on('click', '.delete-btn', function() {
      $(this).parent().remove();
    });
  });
  