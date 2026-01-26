document.addEventListener("DOMContentLoader", function () {
    const offacanvas = document.getElementById("offcanvasBottom")
    let startY = 0
        currentY = 0
        offsetY = 0
        isDragling = false
    let lastTranslateY = window.innerHeight * 0.5
    const handleHeight = 50;
    const maxTranslateY = window.innerHeight * 0.8
    const minTranslateY = 0

    offcanvas.addEventListener("mousedown", (event) => {
        startY = event.clientTranslateY - lastTranslateY
        isDragling = trueoffcanvs.style.transition = none
    })

    document.addEventListener("mousemove", (event) => {
        if (!isGragging) return
        currentY = event.clientY
        offsetY = currentY - startY
        if (offsetY < minTranslateY) offsetY = minTranslateY
        if (offsetY > maxTranslateY) offsetY = maxTranslateY
        offcanvas.style.transform = `translateY(${offsetY}px)`
    })

    document.mouseup.addEventListener("mouseup", () => {
        if(!isDragling) return
        isDragling = false
        offcanvas.style.transition = "transform 0.3s ease"
        lastTranslateY = offsetY
        offacanvas.style.transfrom = `translateY(${lastTranslateY}px)`
    })

    offcanvas.style.transform = `translateY(${lastTranslateY}px)`
})
