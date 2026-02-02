document.addEventListener("DOMContentLoaded", function () {
  const offcanvas = document.getElementById("offcanvasBottom");
  const bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
  bsOffcanvas.show();
  // Две строчки выше чинят проблему отображения offcanvas поверх карты
  // const bsOffcanvas = new bootstrap.Offcanvas(offcanvas); - создаёт сущность offcanvas из bootstrap, записывают в него наш существующий тег offcanvas
  // bsOffcanvas.show(); - показывает его на экране

  let startY = 0;
  let currentY = 0;
  let offsetY = 0;
  let isDraging = false;

  let lastTranslateY = window.innerHeight * 0.5;
  const handleHeight = 50;
  const maxTranslateY = window.innerHeight * 0.8 - handleHeight;
  const minTranslateY = 0;

  offcanvas.addEventListener("mousedown", (event) => {
    startY = event.clientY - lastTranslateY;
    isDraging = true;
    offcanvas.style.transition = "none";
  });

  document.addEventListener("mousemove", (event) => {
    if (!isDraging) return;
    currentY = event.clientY;
    offsetY = currentY - startY;
    if (offsetY < minTranslateY) offsetY = minTranslateY;
    if (offsetY > maxTranslateY) offsetY = maxTranslateY;
    offcanvas.style.transform = `translateY(${offsetY}px)`;
  });

  document.addEventListener("mouseup", () => {
    if (!isDraging) return;
    isDraging = false;
    offcanvas.style.transition = "transform 0.3s ease";
    lastTranslateY = offsetY;
    offcanvas.style.transform = `translateY(${lastTranslateY}px)`;
  });

  offcanvas.addEventListener("touchstart", (event) => {
    startY = event.clientY - lastTranslateY;
    isDraging = true;
    offcanvas.style.transition = "none";
  });

  document.addEventListener("touchmove", (event) => {
     if (!isDraging) return;
    currentY = event.clientY;
    offsetY = currentY - startY;
    if (offsetY < minTranslateY) offsetY = minTranslateY;
    if (offsetY > maxTranslateY) offsetY = maxTranslateY;
    offcanvas.style.transform = `translateY(${offsetY}px)`;
  });

  document.addEventListener("touchend", () => {
    if (!isDraging) return;
    isDraging = false;
    offcanvas.style.transition = "transform 0.3s ease";
    lastTranslateY = offsetY;
    offcanvas.style.transform = `translateY(${lastTranslateY}px)`;
  });

  offcanvas.style.transform = `translateY(${lastTranslateY}px)`;
});
