var cityName;

/**
 * [weather description]
 * @return {[type]} [description]
 */
function weather() {
    var zip = document.getElementById("zip").value;
    validateZIP(zip);
    postalCodeSearch(zip);
}

/**
 * [validateZIP description]
 * @return {[type]} [description]
 */
function validateZIP(zip) {
    var zipRegex = /\b\d{5}\b/;

    removeErr();
    if (zip.match(zipRegex)) {
        return true;
    } else {
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
    // TODO add function to remove weather info
    // document.getElementById("errMsg").remove();
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
    var cityLat  = city.lat;
    var cityLong = city.lng;
    cityName = city.placeName;

    cityInfo = [cityName, cityLat, cityLong];
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
    fetch(url)
            .then(data=>{return data.json()})
            .then(res=>{prettyUpPage(res)});
}

/**
 * [weatherIcon description]
 * @return {[type]} [description]
 */
function weatherIcons(wind, temp) {
    wind = 15;
    temp = 34;
    console.log(temp, wind);
    var weather = [false, false, false];
    switch(true) {
        // Cold icon
        case temp <= 34:
            console.log("Cold");
            weather[0] = true;
            break;
        // Hot icon
        case temp >= 83:
            console.log("Hot");
            weather[1] = true;
            break;
        default:
            console.log("Temp outside of range");
            break;
    }
    // Wind icon
    if (wind > 15) {
        console.log("Windy");
        weather[2] = true;
    }
    console.log(weather);
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
    displayWeather(wind, temp);
    console.log(wind, temp);
}

/**
 * [displayWeather description]
 * @return {[type]} [description]
 */
function displayWeather(wind, temp) {
    var node;
    var textNode;
    var body  = document.getElementById("main")
    var icons = weatherIcons(wind, temp);
    node     = document.createElement("h3");
    textNode = document.createTextNode("Current weather in " + cityName);
    // temp +=

    // body.appendChild;
    node.appendChild(textNode);
    body.appendChild(node).setAttribute('id', 'cityName');

    // var weaNode = document.createElement("i");

    node     = document.createElement("h5");
    textNode = document.createTextNode(temp + "\t" + wind);
    if (icons[0]) {
        textNode.setAttribute('class', 'wi wi-snowflake-cold')
    }
    if (icons[1]) {
        textNode.setAttribute('class', 'wi wi-hot')
    }
    if (icons[2]) {
        textNode.setAttribute('class', 'wi wi-hot')
    }

    // node     = document.createElement("h5");

    textNode = document.createTextNode(temp + "\t" + wind);
    // textNode.appendChild(weaNode);
    node.appendChild(textNode);
    document.getElementById("cityName").appendChild(node).setAttribute('id', 'weather');
}

/**
 * [convertTemp description]
 * @return {[type]} [description]
 */
function convertTemp(c) {
    var f = (c * 1.8) + 32;
    console.log(c, f);
    return f;
}
