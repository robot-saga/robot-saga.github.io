// Password check functionality
const PASSWORD = "925";
function checkPassword() {
  const v = document.getElementById("pwd").value.trim();
  if (v === PASSWORD) {
    document.getElementById("auth").style.display = "none";
    document.getElementById("content").style.display = "block";
    startHero();
  } else {
    document.getElementById("msg").innerText = "Incorrect password.";
  }
}
