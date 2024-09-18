
function maxload(){
    alert("Maximum loaded")
}
function SendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "anfasshakeer@gmail.com",
        Password : "AC04DC1D30F297623620D305C17293D48E07",
        To : 'anfastk13@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Subject: " + document.getElementById("subject").value
        + "<br> Messege: " + document.getElementById("message").value
    }).then(
    message => alert("Message sent Succesfully")
    );
}
