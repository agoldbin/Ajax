/**
 * [weather description]
 * @return {[type]} [description]
 */
function weather() {
    var zip = document.getElementById("zip").value;
    var cityInfo;

    validateZIP(zip);
    postalCodeSearch(zip);
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
    var url = "http://api.geonames.org/postalCodeLookupJSON?postalcode="
            + zip
            + "&country=US&username=agoldbin";
    // var send;

    // TODO return json from site to main func
    // var req = new XMLHttpRequest();
    // req.open("GET", url);
    // req.send();
    fetch(url)
            .then(data=>{return data.json()})
            .then(res=>{cityLocation(res)});
}

/**
 * [cityLocation description]
 * @param  {[type]} cityReq [description]
 * @return {[type]}        [description]
 */
function cityLocation(cityReq) {
    var city = cityReq.postalcodes[0].valueOf();
    var cityName = city.placeName;
    var cityLat  = city.lat;
    var cityLong = city.lng;
    console.log(city);
    console.log(city.lng, city.lat);

    // return [cityName, cityLat, cityLong];
    cityInfo = [cityName, cityLat, cityLong];

// TODO return city info
    weatherRequest(cityInfo);
}

/**
 * [weatherRequest description]
 * @return {[type]} [description]
 */
function weatherRequest() {
    var url = "http://api.geonames.org/findNearByWeatherJSON?lat="
            + cityInfo[1]
            + "&lng="
            + cityInfo[2]
            + "&username=agoldbin";

    // TODO return json from site to main func
    fetch(url)
            .then(data=>{return data.json()})
            .then(res=>{prettyUpPage(res)})
}

/**
 * [weatherIcon description]
 * @return {[type]} [description]
 */
function weatherIcons(wind, temp) {
    var weather = [false, false, false];
    switch(temp) {
        // Cold icon
        case (temp <= 34):
            weather[0] = true;
            break;
        // Hot icon
        case (temp >= 83):
            weather[1] = true;
            break;
        default:
            console.log("Something went wrong checking temp icon");
            break;
    }
    // Wind icon
    if (wind > 15) {
        weather[2] = true;
    }
    return weather;
}

/**
 * [prettyUpPage description]
 * @return {[type]} [description]
 */
function prettyUpPage(weatherReq) {
    var weather = weatherReq.weatherObservation.valueOf();
    var wind = weather.windSpeed;
    var temp = weather.temperature;

    temp = convertTemp(temp);
    icons = weatherIcons(wind, temp);
    displayWeather(wind, temp);
    console.log(wind, temp);

}

/**
 * [displayWeather description]
 * @return {[type]} [description]
 */
function displayWeather(wind, temp) {
    var icons = weatherIcons(wind, temp)
    var node = document.createElement("h3");
    var cityNode = document.createTextNode("Current weather in " + cityName);

    document.getElementById("main").appendChild
    node.appendChild(cityNode);
    document.getElementById("main").appendChild(node).setAttribute();

}

/**
 * [convertTemp description]
 * @return {[type]} [description]
 */
function convertTemp(c) {
    var f = (c * 1.8) + 32
    console.log(c, f);
    return f;
}
