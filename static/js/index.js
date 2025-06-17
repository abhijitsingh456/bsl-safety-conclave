function countdown() {
  const eventDate = new Date("2025-08-06T09:00:00").getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;
  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "The event has started!";
    return;
  }
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML =
    `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  setTimeout(countdown, 1000);
}
countdown();