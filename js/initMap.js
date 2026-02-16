async function loadJson() {
  const response = await fetch("/dataJson/data.json");
  const data = await response.json();
  return data;
}

ymaps.ready(async () => {
  const data = await loadJson();
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map(
      "map",
      {
        center: [43.118202, 131.92234],
        zoom: 15,
      },
      {
        restrictMapArea: [
          [43.115, 131.92],
          [43.119, 131.926],
        ],
      },
    );

    data.poligons.forEach((border) => {
      const polygon = new ymaps.Polygon(
        [border],
        {},
        {
          fillColor: "rgba(133, 217, 121, 1)",
          strokeColor: "rgba(167, 227, 159, 1)",
          strokeWidth: 2,
        },
      );
      myMap.geoObjects.add(polygon);
    });

    data.lake.forEach((border) => {
      const lake = new ymaps.Polygon(
        [border],
        {},
        {
          fillColor: "rgba(164, 232, 237, 1)",
          strokeColor: "rgba(0, 171, 194, 1)",
          strokeWidth: 2,
        },
      );
      myMap.geoObjects.add(lake);
    });

    data.paths.forEach((path) => {
      const line = new ymaps.Polyline(
        path,
        {},
        {
          strokeColor: "rgb(130, 130, 130)",
          strokeWidth: 3,
          strokeOppacity: 1,
        },
      );
      myMap.geoObjects.add(line);
    });

    data.buildings.forEach((border) => {
      const building = new ymaps.Polygon(
        [border],
        {},
        {
          fillColor: "rgb(112, 112, 112)",
          strokeColor: "rgb(71, 71, 71)",
          strokeWidth: 2,
        },
      );
      myMap.geoObjects.add(building);
    });

    let menuList = document.getElementsByClassName("menuList");
    let itemList = document.getElementsByClassName("itemList");
    data.places.forEach((place) => {
      const item = document.createElement("div");
      item.classname = "placeItem";
      item.innerHTML = `<img class="placeIcon" src="${place.iconUrl}"> ${place.name}`;
      itemList[0].appendChild(item);

      let iconSize = [32, 32];
      let iconOffset = [-16, -32];

      if (place.name === "Чи-Фань" || place.name === "Pizza Ragazzi") {
        iconSize = [16, 16];
        iconOffset = [-8, -16];
      }

      var mark = new ymaps.Placemark(
        place.coords,
        {
          hintContent: place.name,
          balloonContent: place.desc,
        },
        {
          iconImageHref: place.iconUrl,
          iconLayout: "default#image",
          iconImageSize: iconSize,
          iconImageOffset: iconOffset,
        },
      );
      myMap.geoObjects.add(mark);

      item.onclick = () => {
        const iI = document.getElementsByClassName("itemInfo");
        const iT = document.getElementsByClassName("itemTitle");
        const iIMG = document.getElementsByClassName("itemImage");
        const iD = document.getElementsByClassName("infoDesc");
        const btnU = document.getElementById("btnUndo");

        menuList[0].style.display = "none";
        iI[0].style.display = "block";
        iT[0].innerText = place.name;
        iIMG[0].src = place.img;
        iD[0].innerText = place.desc;
        btnU.onclick = () => {
          menuList[0].style.display = "block";
          iI[0].style.display = "none";
        };
        iIMG.style.width = "10px";
      };
    });
  }
});
