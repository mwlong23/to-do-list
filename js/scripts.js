//Business Logic
function Task(toDo, priority) {
  this.toDo = toDo;
  this.priority = priority;
}



// UI logic
$(document).ready(function(){
  $("form#to-do").submit(function(event){
    event.preventDefault();
    var toDo = $("#task").val();
    var priority = $("#priority").val();
    var newTask = new Task(toDo, priority);
    console.log(priority, newTask);
    console.log(toDo);
    $("#list").append("<li>" + newTask.toDo + " " + newTask.priority + "</li>");
  });
});
