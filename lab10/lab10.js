$(document).ready(function() {
    // Select all li tags (current classes)
    const classes = [...document.querySelectorAll("li")];

    // TODO see if this is even close to right...
    const myClasses = ['Mobile App Internship', 'iOS Development'];
    // let allClasses = [...classes, myClasses];

    // map all current classes
    classes.map(currentClass => {
        // allClasses.textContent;
        console.log(currentClass.textContent);
        console.log(...myClasses);
    });

    // add 2 more classes to map

    // print array to console
})
