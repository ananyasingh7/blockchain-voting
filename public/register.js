function displayRegis() {
    var x = document.getElementById("registration");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function submitRegis(){
    console.log("clicked");
    console.log(document.getElementById('FirstName').value);
}