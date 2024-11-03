function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_81aqzr8", "template_pggug05", params)
    .then((res) => {
      console.log(res);
      alert("Your Message Send Successfull!");
    })
    .catch((err) => console.log(err));
}
