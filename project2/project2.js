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
    var url = "http://api.geonames.org/postalCodeLookupJSON?postalcode=" +
        zip +
        "&country=US&username=agoldbin";
    fetch(url)
        .then(data => {
            return data.json()
        })
        .then(res => {
            cityLocation(res)
        });
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
    var url = "http://api.geonames.org/findNearByWeatherJSON?lat=" +
        cityInfo[1] +
        "&lng=" +
        cityInfo[2] +
        "&username=agoldbin";
    fetch(url)
        .then(data => {
            return data.json()
        })
        .then(res => {
            prettyUpPage(res)
        });
}

/**
 * [weatherIcon description]
 * @return {[type]} [description]
 */
function weatherIcons(wind, temp) {
    // var newItem = document.createElement("LI");       // Create a <li> node
    // var textnode = document.createTextNode("Water");  // Create a text node
    // newItem.appendChild(textnode);                    // Append the text to <li>
    //
    // var list = document.getElementById("myList");    // Get the <ul> element to insert a new node
    // list.insertBefore(newItem, list.childNodes[0]);
    //
    // console.log(temp, wind);
    // var weather = [false, false, false];
    // var tempNode;
    // var windNode;
    console.log("debug 1");
    var temp = 0;
    var wind = 100;
    var node = document.createElement("i");
    console.log(temp, wind);
    // var textNode = doc();
    console.log("debug 3");
    // node.appendChild(textNode);
    console.log("outside switch");
    if (temp <= 34) {
        console.log("Cold");
        document.getElementById("temp").appendChild(node).setAttribute("class", "wi wi-snowflake-cold");
    } else if (temp >= 83) {
        console.log("Hot");
        document.getElementById("temp").appendChild(node).setAttribute("class", "wi wi-hot");
    } else {
        console.log("Temp doesn't require icon");
    }
    // Wind icon
    if (wind > 15) {
        console.log("Windy");
        node;
        // node.appendChild()
        document.getElementById("wind").appendChild(node).setAttribute("class", "wi wi-strong-wind");
        weather[2] = true;
    }
    // console.log(weather);
    // return weather;
    //
    //
    //
    //     node     = document.createElement("h5");
    // if (icons[0]) {
    //     textNode.setAttribute('class', 'wi wi-snowflake-cold')
    // }
    // if (icons[1]) {
    //     textNode.setAttribute('class', 'wi wi-hot')
    // }
    // if (icons[2]) {
    //     textNode.setAttribute('class', 'wi wi-day-windy')
    // }
    //
    // // node     = document.createElement("h5");
    //
    // textNode = document.createTextNode(temp + "\t" + wind);
    // // textNode.appendChild(weaNode);
    // node.appendChild(textNode);
    // document.getElementById("cityName").appendChild(node).setAttribute('id', 'weather');

}

// function tempIcon() {
//
// }

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
    var node;
    var tempNode;
    var windNode;
    var textNode;
    // var body  = document.getElementById("main")
    // var icons = weatherIcons(wind, temp);
    autoElement("h3", "Current weather in " + cityName, "main", "cityTitle");
    var tempElement = autoElement("h5", "Temperature: " + temp + " ", "cityTitle", "temp");
    // tempElement.setAttribute('class', 'wi wi-farenheit')
    console.log("wind info");
    var windElement = autoElement("h5", "Wind: " + wind + " ", "cityTitle", "wind");

    console.log("wheather icons");
    weatherIcons(wind, temp);

    // console.log("DEBUG: 1");
    // node     = document.createElement("h5");
    // textNode = document.createTextNode(wind);
    // node.appendChild(textNode);
    // tempElement.insertAdjacentHTML('afterend', wind)
    // // .setAttribute('id', childId);
    // console.log("DEBUG: 2");

    // node     = document.createElement("h3");
    // textNode = document.createTextNode("Current weather in " + cityName);
    // node.appendChild(textNode);
    // document.getElementById("main").appendChild(node).setAttribute('id', 'cityName');
    //
    // node     = document.createElement("h5");
    // textNode = document.createTextNode(temp);
    // node.appendChild(textNode);

    // + "\t" + wind);
    // if (icons[0]) {
    //     textNode.setAttribute('class', 'wi wi-snowflake-cold')
    // }
    // if (icons[1]) {
    //     textNode.setAttribute('class', 'wi wi-hot')
    // }
    // if (icons[2]) {
    //     textNode.setAttribute('class', 'wi wi-day-windy')
    // }

    // node     = document.createElement("h5");

    // textNode = document.createTextNode(temp + "\t" + wind);
    // // textNode.appendChild(weaNode);
    // node.appendChild(textNode);
    // document.getElementById("cityName").appendChild(node).setAttribute('id', 'weather');
}

function autoElement(elementType, text, parentId, childId) {
    node = document.createElement(elementType);
    textNode = document.createTextNode(text);
    node.appendChild(textNode);
    document.getElementById(parentId).appendChild(node).setAttribute('id', childId)
    // document.getElementById(parentId).appendChild(node).setAttribute('class', 'wi wi-farenheit')

    return document.getElementById(childId);
}


/**
 * [convertTemp description]
 * @return {[type]} [description]
 */
function convertTemp(c) {
    var f = (c * 1.8) + 32;
    f.toPrecision(2);
    // Math.round(f * 100) / 100
    // f.round(2);
    // parseFloat(f).toFixed(2);
    console.log(c, f);
    return f;
}
