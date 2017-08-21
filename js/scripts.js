//Business Logic
function Task(toDo, priority) {
  this.toDo = toDo;
  this.priority = priority;
}
function priorityContext (priority){
  switch( priority){
    case "high":
      return "bg-danger";
      break;
    case "medium":
      return "bg-warning";
      break;
    case "low":
      return "bg-info";
      break;
  };
};

// UI logic
$(document).ready(function(){
  $("form#to-do").submit(function(event){
    event.preventDefault();
    var toDo = $("#task").val();
    var priority = $("#drop-down").val();
    var newTask = new Task(toDo, priority);
    var context = priorityContext(priority);
    console.log(priority);
    $("#list").append('<li class=' + context + '>' + newTask.priority + " " + newTask.toDo + '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span></li>');
    $("ul#list").children("li").last().click(function(){
      $(this).remove();
    });
  });
});
