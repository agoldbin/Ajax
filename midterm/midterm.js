// JS MIdterm
// 10/30/18
function init() {
	console.log("Q1: " + new Rectangle(3,4).Perimeter());
	console.log("Q2: " + abbr + " " + fullName);
	console.log("Q3: "  )
	answer();
}


/*
Q1

Create a class (Rectangle) that has 2 private variables _length and _width. Add
a function called Perimeter that calculates the perimeter of the current
rectangle instance. The Perimeter function should be included in the prototype
of the Rectangle class. Make sure the Perimeter method does not access the
instance variables _length and _width. The variables should be passed into the
Perimeter method.
*/
class Rectangle {
	constructor(length, width) {
		this.length = length;
		this.width = width;
	}

	Perimeter() {
		return ((this.length * 2) + (this.width *2));
	}
}

/*
Q2

Assuming the xml below is loaded in a string variable named _states, load the
string into a xml document (cross browser). Create a textnode that contains the
fulltext of the 2nd state and append it to the document.body
<states>
    <state>
        <abbreviation>WI</abbreviation>
        <fulltext>Wisconsin</fulltext>
    </state>
    <state>
        <abbreviation>IL</abbreviation>
        <fulltext>Illinois</fulltext>
    </state>
    <state>
        <abbreviation>MN</abbreviation>
        <fulltext>Minnesota</fulltext>
    </state>
</states>
*/
var _states =
`
<states>
    <state>
        <abbreviation>WI</abbreviation>
        <fulltext>Wisconsin</fulltext>
    </state>
    <state>
        <abbreviation>IL</abbreviation>
        <fulltext>Illinois</fulltext>
    </state>
    <state>
        <abbreviation>MN</abbreviation>
        <fulltext>Minnesota</fulltext>
    </state>
</states>
`;
var xmlParser;
if (window.DOMParser) {
	xmlParser = new DOMParser().parseFromString(_states, "application/xml")
} else {
	xmlParser = new ActiveXObject("Microsoft.XMLDOM");
	xmlParser.loadXML(_states);
}

// get the state info
var allStates = xmlParser.getElementsByTagName("states"); //returns an array
var stateQ2   = allStates[0].getElementsByTagName("state");
var abbr      = stateQ2[1].getElementsByTagName("abbreviation")[0].childNodes[0].nodeValue;
var fullName  = stateQ2[1].getElementsByTagName("fulltext")[0].childNodes[0].nodeValue;

// body has id "main"
var node      = document.createElement("p");
var stateNode = document.createTextNode(
		abbr
		+ " "
		+ fullName
);
node.appendChild(stateNode);
document.getElementById("main").appendChild(node);


/*
Q3

Assuming you have a server resource called response.php that sends you a JSON
response. Write code to create an ajax request that retrieves the JSON
response from response.php and loads the response into a javascript variable
called response.
*/
var req = new XMLHttpRequest();
var url = "response.php";

req.onreadystatechange = function() {
	if (this.readystate == 4 && this.status == 200) {
		var response = JSON.parse(this.responseText)
	}
};

req.open("GET", url);
req.send(null);


/*
Q4

With the below xml, recreate the data by creating a variable that stores the
same data as JSON (you can hard code the JSON data). Output the value of the 2nd
state's abbreviation and fulltext. This does not need to be done through code.
You can simply have a variable that stores the JSON data.
<states>
    <state>
        <abbreviation>WI</abbreviation>
        <fulltext>Wisconsin</fulltext>
    </state>
    <state>
        <abbreviation>IL</abbreviation>
        <fulltext>Illinois</fulltext>
    </state>
    <state>
        <abbreviation>MN</abbreviation>
        <fulltext>Minnesota</fulltext>
    </state>
</states>
*/
var states =
{
"states": {
	"state":
		[{
			"abbreviation": "WI",
			"fulltext": "Wisconsin"
		}
		,{
			"abbreviation": "IL",
			"fulltext": "Illinois"
		}
		,{
			"abbreviation": "MN",
			"fulltext": "Minnesota"
		}]
	}
};

var answer = function() {
	var myState = states.states.state[2]
	console.log("Q4: " + myState.abbreviation + " " + myState.fulltext);
}
