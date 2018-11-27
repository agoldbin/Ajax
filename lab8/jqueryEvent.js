$(function()
    {$(document).ready(function() {
        // Adding button to log "cubs stink" onclick
        $("<input type='button' value='click me' />")
                .insertAfter("#toDoList")
                .click(function() {
                    console.log("cubs stink");
                });

        // Mouseover and mouseout to change li background color
/*        $("#toDoList li").mouseover(function() {
            $(this).css("background-color", "yellow");
        });
        $("#toDoList li").mouseout(function() {
            $(this).css("background-color", "white");
        });
*/

        // Adding new li item
        $("#toDoList").append("<li>new item</li>")

        // Mouseover and mouseout using .on()
        $("#toDoList li").on("mouseover.mouseevent", function() {
            $(this).css("background-color", "yellow");
        });
        $("#toDoList li").on("mouseout.mouseevent", function() {
            $(this).css("background-color", "white");
        });

        // Onclick event to turn of mouse events
        $("<input type='button' value='remove mouse events' />").insertAfter("#toDoList").click(function() {
            $("#toDoList li").off(".mouseevent");
        });

    })
});
