function displayVoteSignIn(){
    var x = document.getElementById("vote");
    var y = document.getElementById("registration");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function submitVoteSignIn(){
    console.log(document.getElementById('userIdVote').value);
    console.log(document.getElementById('passwordVote').value);
}

function check(){
    var y = document.getElementById("registration");
    if(y.style.display === "none"){
        return true;
    }else{
        return false;
    }
}