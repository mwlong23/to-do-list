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
    var priority = $("#drop-down").val();
    var newTask = new Task(toDo, priority);
    console.log(priority);
    $("#list").append("<li>" + newTask.priority + " " + newTask.toDo + "</li>");
    $("ul#list").children("li").last().click(function(){
      $(this).remove();
    });
  });
});
