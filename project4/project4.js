$(document).ready(function() {
    // When search button is clicked, the magic begins...
    $("#searchBtn").click(function() {
        // variables which will be reused for appending to the ul on index
        const newItem = $("<li></li>");
        const gifImg  = $("<img>");
        newItem.append(gifImg);

        // perform HTTP get request and process response
        // Split onto multiple lines for readability
        $.get(`http://api.giphy.com/v1/gifs/search?q=
                ${$('#gifSearchField').val()}
                &api_key=0LiVOxtcLaAecDKwpJAS70WorYkySwZB&limit=10`
                , function( data ) {
        }).done(function(data) {
            // Save response of returned gif data, everything else is junk
            const gifData = data.data;
            // console.log(data);

            // This line returns an array with the urls to the gifs to be displayed
            // const gifURLs = gifData.map(gifData => gifData.images.downsized.url);

            // TODO display each gif and append to the page
            const gifURLs = gifData.map(gifData => {
                let currentGif = {};
                currentGif.url = gifData.images.downsized.url;
                return currentGif;
                // $("#gifResults").append(newItem.append(gifImg.attr("src", gifData.images.downsized.url)));
            })
            console.table(gifURLs);
        });
    })
})
