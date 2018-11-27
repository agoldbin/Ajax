function checkInput() {
    var id = document.getElementById('userID').value;
    if (id == "" || id == null) {
        console.log("User ID is required");
    } else {
        console.log(id);
    }
}
