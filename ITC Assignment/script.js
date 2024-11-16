// Toggle navbar on small screens
function toggleNav() {
  const navDemo = document.getElementById("navDemo");
  if (navDemo.className.indexOf("w3-show") === -1) {
    navDemo.className += " w3-show";
  } else {
    navDemo.className = navDemo.className.replace(" w3-show", "");
  }
}
