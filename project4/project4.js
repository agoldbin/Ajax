$(document).ready(function() {
    // When search button is clicked, the magic begins...
    $("#searchBtn").click(function() {
        // const xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${$('#gifSearchField').val()}&api_key=0LiVOxtcLaAecDKwpJAS70WorYkySwZB&limit=10`);
        // xhr.done(function(data) {

        // perform HTTP get request and process response
        $.get(`http://api.giphy.com/v1/gifs/search?q=${$('#gifSearchField').val()}&api_key=0LiVOxtcLaAecDKwpJAS70WorYkySwZB&limit=10`, function( data ) {
            // $( ".result" ).html( data );
            console.log(data);


            // console.log(JSON.parse(data));
            // console.log("success got data", data);

            // Parse data to JSON
            // const gifJSON = JSON.parse(data);

            // iterate over JSON using .map
            const gifArray = [];

            // console.log(JSON.parse(data));

        });
    })
})
