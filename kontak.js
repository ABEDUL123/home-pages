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

function validateEmail(email) {
  // RegExp untuk memeriksa format email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function verifyEmail() {
  const emailInput = prompt("Masukkan email:");
  const confirmEmailInput = prompt("Konfirmasi email:");

  // Validasi email
  if (!validateEmail(emailInput)) {
    alert("Format email tidak valid. Silakan masukkan email yang benar.");
    return; // Hentikan eksekusi jika email tidak valid
  }

  // Verifikasi email
  if (emailInput !== confirmEmailInput) {
    alert("Email tidak cocok. Silakan coba lagi.");
    return; // Hentikan eksekusi jika email tidak cocok
  }

  alert("Email valid dan terverifikasi!");
  // Di sini Anda bisa melanjutkan ke proses pengiriman email
}

// Panggil fungsi verifikasi email
verifyEmail();

