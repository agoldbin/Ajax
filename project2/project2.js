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
    var err = document.getElementById("errMsg");
    var city = document.getElementById("cityTitle")

    if (document.body.contains(err)) {
        err.remove();
    }
    if (document.body.contains(city)) {
        city.remove();
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
    fetch(url)
        .then(data => {return data.json()})
        .then(res => {cityLocation(res)});
}

/**
 * [cityLocation description]
 * @param  {[type]} cityReq [description]
 * @return {[type]}        [description]
 */
function cityLocation(cityReq) {
    var city = cityReq.postalcodes[0].valueOf();
    var cityLat = city.lat;
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
    var url = "http://api.geonames.org/findNearByWeatherJSON?"
            // City lattitude
            + "lat=" + cityInfo[1]
             // City longitude
            + "&lng="+ cityInfo[2]
            + "&username=agoldbin";
    fetch(url)
        .then(data => {return data.json()})
        .then(res => {prettyUpPage(res)});
}

/**
 * [weatherIcon description]
 * @return {[type]} [description]
 */
function weatherIcons(wind, temp) {
    var node = document.createElement("i");

    if (temp <= 34) {
        // Cold icon
        node;
        document.getElementById("temp").appendChild(node).setAttribute("class", "wi wi-snowflake-cold");
    } else if (temp >= 83) {
        // Hot icon
        node;
        document.getElementById("temp").appendChild(node).setAttribute("class", "wi wi-hot");
    }
    // Wind icon
    if (wind > 15) {
        console.log("Windy");
        node = document.createElement("i");
        document.getElementById("wind").appendChild(node).setAttribute("class", "wi wi-strong-wind");
    }

}

/**
 * [prettyUpPage description]
 */
function prettyUpPage(weatherReq) {
    var weather = weatherReq.weatherObservation.valueOf();
    var wind = weather.windSpeed;
    var temp = weather.temperature;

    temp = convertTemp(temp);
    displayWeather(wind, temp);
}

/**
 * [displayWeather description]
 * @return {[type]} [description]
 */
function displayWeather(wind, temp) {
    autoElement("h3", "Current weather in " + cityName, "main", "cityTitle");
    autoElement("h5", "Temperature: " + temp + " ", "cityTitle", "temp");
    autoElement("h5", "Wind: " + wind + " ", "cityTitle", "wind");
    weatherIcons(wind, temp);
}

function autoElement(elementType, text, parentId, childId) {
    node = document.createElement(elementType);
    textNode = document.createTextNode(text);
    node.appendChild(textNode);
    document.getElementById(parentId).appendChild(node).setAttribute('id', childId)
}


/**
 * [convertTemp description]
 * @return {[type]} [description]
 */
function convertTemp(c) {
    var f = (c * 1.8) + 32;
    f = Math.round(f);
    return f;
}
