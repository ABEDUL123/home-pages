function updateDateAndTime() {
  const time = new Date();
  const currentTime = time.toLocaleTimeString();
  const currentDate = time.toLocaleDateString();
  document.querySelector("#date-and-time").innerHTML =
    currentDate + " " + currentTime;
}

setInterval(updateDateAndTime);
