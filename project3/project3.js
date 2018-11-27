$(document).ready(function() {

    $.get("project3/allTasks.php", function(t) {
        console.log(t.description);
    }, "xml");

})

$(function() {
    // TODO save new task to db
    $("#newTaskBtn").click(function() {
        $("#toDoList").append("<li>" + $('#newTaskField').val()+"</li>");
        console.log($("#newTaskField").val());
        $("#newTaskField").val("");
        refreshLi();
    })

    refreshLi();
})

/* Function that will be called when page is first loaded and when new tasks
 * are created so they can be deleted
 */
function refreshLi() {
    // Delete tasks for clientside
    $("#toDoList li").click(function() {
        $(this).remove();
    })
    // TODO delete task with serverside code

    // Highlight li on mouseover (just for fun)
    $("#toDoList li").mouseover(function() {
        $(this).css("background-color", "yellow");
    })
    $("#toDoList li").mouseout(function() {
        $(this).css("background-color", "white");
    })
}
