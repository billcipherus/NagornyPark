let darkTheme = 0;
function changeTheme() {
  const themeChanger = document.getElementById("themeChangeBtn");
  const offcanvas = document.getElementById("offcanvasBottom");
  const icons = document.getElementsByClassName("placeIcon")
  const body_elem = document.body;

  if (darkTheme === 0) {
    body_elem.style.backgroundColor = "#212529";
    for (let i = 0; i<icons.length; i += 1) {
      icons[i].classList.add("changeIconColor")
    }
    offcanvas.setAttribute("data-bs-theme", "dark");
    themeChanger.innerText = "🌙"
    darkTheme = 1;
  } else {
    body_elem.style.backgroundColor = "#fff";
    for (let i = 0; i<icons.length; i += 1) {
      icons[i].classList.remove("changeIconColor")
    }
    offcanvas.setAttribute("data-bs-theme", "light");
    themeChanger.innerText = "☀"
    darkTheme = 0;
  }
}
