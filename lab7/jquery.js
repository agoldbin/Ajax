$(document).ready(function() {
    $("li").text("cubs stink");

    console.log($("#header").html());

    var nLinks = $(".link").length;
    console.log("Number of link class elements: " + nLinks);

    $("tr.odd td").addClass("oddColumn");
})
