function displayRegis() {
    var x = document.getElementById("registration");
    var y = document.getElementById("vote");
    if (x.style.display === "none") {
        if(y.style.display === "none"){
            x.style.display = "block";
        }
    } else {
      x.style.display = "none";
    }
}

function submitRegis(){
    console.log(document.getElementById('FirstName').value);
    console.log(document.getElementById('LastName').value);
}