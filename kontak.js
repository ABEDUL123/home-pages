function sendMail() {
  // Mengambil nilai dari input
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  // Mengirim email menggunakan EmailJS
  emailjs
    .send("service_81aqzr8", "template_pggug05", params)
    .then((res) => {
      console.log(res);
      alert("Your message has been sent successfully!");
    })
    .catch((err) => {
      console.error("Error:", err);
      alert("There was an error sending your message. Please try again.");
    });
}
