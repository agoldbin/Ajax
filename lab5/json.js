var students;

function init() {
    students = [
            {
                    "id":"01001", // storing id as string as they otherwise are stored incorrectly (due to size?)
                    "name":"Dixie LeDoge",
                    "email":"bark@moon.com"
            },
            {
                    "id":"12345",
                    "name":"Griff Dapup",
                    "email":"i@ecarpet.edu" // get it? I ate carpet? He's a hellyin
            },
            {
                    "id":"00012",
                    "name":"Aaron Rodgers",
                    "email":"goat@hof.org"
            },
            {
                    "id":"33000",
                    "name":"Aaron Jones",
                    "email":"bruiser@shifty.com"
            },
            {
                    "id":"80016",
                    "name":"Justine Page",
                    "email":"teacher@mmsd.edu"
            },
            {
                    "id":"01160",
                    "name":"Aaron Goldbin",
                    "email":"agoldbin@madisoncollege.edu"
            }
    ];
    printStudents();
}


// id, name, email
// do not print name
function printStudents() {
    var insertStudent = document.getElementById('studentInfo');
    var node     = document.createElement("h4");
    var textNode = document.createTextNode("ID\t\tEmail")
    var insert;

    node.appendChild(textNode)
    insertStudent.appendChild(node);

    for (var i = 0; i < students.length; i++) {
        insert   = students[i].id + "\t\t" + students[i].email;
        node     = document.createElement("h5");
        textNode = document.createTextNode(insert);
        node.appendChild(textNode);
        insertStudent.appendChild(node);
    }
}
