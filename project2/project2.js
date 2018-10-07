/**
 * [weather description]
 * @return {[type]} [description]
 */
function weather() {
    var zip = document.getElementById("zip").value;
    // var result;
    console.log(zip);
    var cityInfo;

    validateZIP(zip);
    postalCodeSearch(zip);
    // cityInfo = postalCodeSearch(zip);
    // currentWeather = cityLocation(cityInfo);
}

/**
 * [validateZIP description]
 * @return {[type]} [description]
 */
function validateZIP(zip) {
    console.log(zip);
    // zip = valueOf(zip);

    // var zipRegex = /\d{5}/
    var zipRegex = /\b\d{5}\b/
    // console.log(zipRegex);

    removeErr();
    if (zip.match(zipRegex)) {
        return true;
    } else {
        document.getElementById("main").appendChild

        var node = document.createElement("h3");
        var errNode = document.createTextNode("Please enter a valid ZIP code (5 digits)");
        node.appendChild(errNode);
        document.getElementById("main").appendChild(node).setAttribute('id', 'errMsg');
        return false;
    }
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
    var send;
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
    // .then(res=>{cityLocation(res)})
    // .then(res => {
    //     send = cityLocation(res);
    //     console.log(send);
    //     return send;
    .then(res=>{return res;})
    // })
console.log("work!: ", send);
    // .then(res=>{return res})
}

/**
 * [cityLocation description]
 * @param  {[type]} result [description]
 * @return {[type]}        [description]
 */
function cityLocation(result) {
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

    // cityInfo = [cityName];
    return [cityName, cityLat, cityLong]

    // console.log(location.postalcode.placeName);
    // console.log(result.postalcodes.lng[0]);
    // console.log(result.postalcodes.lat[0]);

}

/**
 * [weatherRequest description]
 * @return {[type]} [description]
 */
function weatherRequest() {

}

/**
 * [weatherIcon description]
 * @return {[type]} [description]
 */
function weatherIcon() {

}

/**
 * [prettyUpPage description]
 * @return {[type]} [description]
 */
function prettyUpPage() {

}

/**
 * [convertTemp description]
 * @return {[type]} [description]
 */
function convertTemp() {

}
