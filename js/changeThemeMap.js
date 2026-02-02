let darkTheme = 0;
function changeTheme() {
  const themeChanger = document.getElementById("themeChanger");
  const offcanvas = document.getElementById("offcanvasBottom");
  const body_elem = document.body;

  if (darkTheme === 0) {
    body_elem.style.backgroundColor = "#212529";

    themeChanger.style.setProperty("--bs-btn-color", "#fff");
    themeChanger.style.setProperty("--bs-btn-bg", "#dc3545");
    themeChanger.style.setProperty("--bs-btn-border-color", "#fff");
    themeChanger.style.setProperty("--bs-btn-hover-color", "#fff");
    themeChanger.style.setProperty("--bs-btn-hover-bg", "#bb2d3b");
    themeChanger.style.setProperty("--bs-btn-hover-border-color", "#fff");
    themeChanger.style.setProperty("--bs-btn-active-color", "#fff");
    themeChanger.style.setProperty("--bs-btn-active-bg", "#9f2733");
    themeChanger.style.setProperty("--bs-btn-active-border-color", "#fff");

    themeChanger.style.setProperty("--bs-btn-disabled-color", "#fff");
    themeChanger.style.setProperty("--bs-btn-disabled-bg", "#9f2733");
    themeChanger.style.setProperty("--bs-btn-disabled-border-color", "#fff");

    themeChanger.style.setProperty("--bs-btn-active-border-color", "#fff");

    offcanvas.setAttribute("data-bs-theme", "dark");

    darkTheme = 1;
  } else {
    body_elem.style.backgroundColor = "#fff";

    themeChanger.style.setProperty("--bs-btn-color", "#000000");
    themeChanger.style.setProperty("--bs-btn-bg", "#0d6efd");
    themeChanger.style.setProperty("--bs-btn-border-color", "#000000");
    themeChanger.style.setProperty("--bs-btn-hover-color", "#000000");
    themeChanger.style.setProperty("--bs-btn-hover-bg", "#0b5ed7");
    themeChanger.style.setProperty("--bs-btn-hover-border-color", "#000000");
    themeChanger.style.setProperty("--bs-btn-active-color", "#000000");
    themeChanger.style.setProperty("--bs-btn-active-bg", "#0851bb");
    themeChanger.style.setProperty("--bs-btn-active-border-color", "#000000");
    themeChanger.style.setProperty("--bs-btn-disabled-color", "#000000");
    themeChanger.style.setProperty("--bs-btn-disabled-bg", "#0851bb");
    themeChanger.style.setProperty("--bs-btn-disabled-border-color", "#000000");

    offcanvas.setAttribute("data-bs-theme", "light");

    darkTheme = 0;
  }
}
