function displayRegis() {
    var x = document.getElementById("registration");
    if (x.style.display === "none" && check()) {
        x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function submitRegis(){
    console.log(document.getElementById('FirstName').value);
    console.log(document.getElementById('LastName').value);
}

function check(){
    var y = document.getElementById("vote");
    if(y.style.display === "none"){
        return true;
    }else{
        return false;
    }
}