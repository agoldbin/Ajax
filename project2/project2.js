/**
 * [weather description]
 * @return {[type]} [description]
 */
function weather() {
    var zip;
    var result;
    var cityInfo;

    zip = validateZIP();
    postalCodeSearch(zip);
    // console.log(result);
    // cityInfo = cityWeather(result);
}

/**
 * [validateZIP description]
 * @return {[type]} [description]
 */
function validateZIP() {
    var zip = document.getElementById("zip").value;
    console.log(zip);
    // zip = valueOf(zip);

    // var zipRegex = /\d{5}/
    // var zipRegex = /\b\d{5}\b/
    // console.log(zipRegex);

    removeErr();
    // if (zip.match(zipRegex)) {
    //     // document.getElementByTag("body").appendChild
    //
    //     var node = document.createElement("h3");
    //     var errNode = document.createTextNode("Please enter a valid ZIP code (5 digits)");
    //     node.appendChild(errNode);
    //     document.getElementsByTagName("body")[0].appendChild(node).setAttribute('id', 'errMsg');
    //     return false;
    // } else {
    //     console.log(zip);
    //     return;
    // }
    return zip
}

/**
 * This function will remove old error messages so that only 1 shows up at any given time
 */
function removeErr() {
    if (document.body.contains(document.getElementById("errMsg"))) {
        document.getElementById("errMsg").remove();
    }
}

/**
 * [postalCodeSearch description]
 * @param  {[type]} zip [description]
 * @return {[type]}     [description]
 */
function postalCodeSearch(zip) {
    console.log("zip search: " + zip);
    var url = "http://api.geonames.org/postalCodeLookupJSON?postalcode="+ zip + "&country=US&username=agoldbin"
    // var request = new XMLHttpRequest();
    // request.open('GET', url);
    // request.responseType = 'json';
    // request.send();
    // request.onload = function() {
    //     var city = request.response;
    //     console.log(city);
    // }
    fetch(url)
    .then(data=>{return data.json()})
    .then(res=>{cityWeather(res)})
    // .then(res => {
    //     send = cityLocation(res);
    //     console.log(send);
    //     return send;
    // })

    // .then(res=>{return res})
}

/**
 * [cityWeather description]
 * @param  {[type]} result [description]
 * @return {[type]}        [description]
 */
function cityWeather(result) {
    // console.log("weather");
    // console.log(result);

    var city = result.postalcodes[0].valueOf();
    var cityName = city.placeName;
    var cityLat  = city.lat;
    var cityLong = city.lng;
    // var location = JSON.parse(result);
    // var city = location.postalcodes[0]
    console.log(city);
    console.log("1");
    console.log(city.lng);

    return [cityName, cityLat, cityLong]

    // console.log(location.postalcode.placeName);
    // console.log(result.postalcodes.lng[0]);
    // console.log(result.postalcodes.lat[0]);

}

/**
 * [weatherIcon description]
 * @return {[type]} [description]
 */
function weatherIcon() {

}
