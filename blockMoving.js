  // START WIDTH SCROLL
  let div = document.createElement("div");

  div.style.overflowY = "scroll";
  div.style.width = "50px";
  div.style.height = "50px";

  document.body.append(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;

  div.remove();

  // END WIDTH SCROLL

  // START MAP MOVING ===>

  window.addEventListener(
    `resize`,
    (event) => {
      mapMoving();
    },
    false
  );

  function mapMoving() {
    const widthDocument = document.documentElement.offsetWidth,
      slider = document.querySelector(".slider"),
      map = document.querySelector(".map"),
      spaceForMap = document.querySelector(".space-for-map"),
      spaceForSimilar = document.querySelector(".space-for-similar"),
      similar = document.querySelector(".specifications-similar");

    bd = {
      map: `<div class="map">
      <div class="map__title review-info__description-title"> <span>Карта базирования</span><a class="map__link" data-fancybox="images" href="img/review/map/map.jpg" data-caption="Вы найдете нас здесь"><img class="map__img" src="img/review/map/map.jpg" alt="карта"/></a></div>
    </div>`,
      similar: `<div class="specifications-similar">
    <h3 class="specifications-similar__title">Похожие запросы</h3>
    <div class="specifications-similar__buttons">
      <button class="specifications-similar__btn">погрузочно-разгрузочные работы</button>
      <button class="specifications-similar__btn">строительно-монтажные работы</button>
      <button class="specifications-similar__btn">установка ветрогенератора</button>
      <button class="specifications-similar__btn">установка металлоконструкций</button>
      <button class="specifications-similar__btn">укладка перекрытий</button>
      <button class="specifications-similar__btn">монтаж рекламных конструкций</button>
      <button class="specifications-similar__btn">монтаж ЛЕП</button>
    </div>
  </div>
</div>`,
    };

    function widthDefinition() {
      if (widthDocument <= 965) {
        similar.classList.add("hidden");
        spaceForSimilar.innerHTML = bd.similar;
      }
      if (widthDocument > 965 - scrollWidth) {
        similar.classList.remove("hidden");
        spaceForSimilar.innerHTML = "";
      }
      if (widthDocument <= 720) {
        map.classList.add("hidden");
        spaceForMap.innerHTML = bd.map;
      }
      if (widthDocument > 720 - scrollWidth) {
        map.classList.remove("hidden");
        spaceForMap.innerHTML = "";
      }
    }
    widthDefinition();
  }

  mapMoving();
  // MAP MOVING END <===

  // START TOGGLE CHARACTERISTICS

  let mobileCharacteristics = document.querySelector(
      ".review-info__description-title--characteristics"
    ),
    reviewDescription = document.querySelector(
      ".review-info__description-text"
    ),
    specificationsOptions = document.querySelector(".specifications__options"),
    titleDescription = document.querySelector(
      ".review-info__description-title--description"
    );

  mobileCharacteristics.addEventListener("click", function () {
    reviewDescription.classList.add("hidden");
    specificationsOptions.classList.add("active");
  });

  titleDescription.addEventListener("click", function () {
    specificationsOptions.classList.remove("active");
    reviewDescription.classList.remove("hidden");
  });

  // END TOGGLE CHARACTERISTICS