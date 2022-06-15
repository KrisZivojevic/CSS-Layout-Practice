function onNavChange(articleId) {
  const elementsNames = {
    LOCATIONS: 'locations',
    VIEWS: 'views',
    LAKES: 'lakes',
  }

  const locationsEl = document.getElementById(elementsNames.LOCATIONS)
  const viewsEl = document.getElementById(elementsNames.VIEWS)
  const lakesEl = document.getElementById(elementsNames.LAKES)

  if (articleId == elementsNames.LOCATIONS) {
    locationsEl.style.display = "block";
    viewsEl.style.display = "none";
    lakesEl.style.display = "none";

    document.getElementById("nav-locations").classList.add('active');
    document.getElementById("nav-views").classList.remove('active');
    document.getElementById("nav-lakes").classList.remove('active');

  } else if (articleId == VIEWS) {
    locationsEl.style.display = "none";
    viewsEl.style.display = "block";
    lakesEl.style.display = "none";

    document.getElementById("nav-locations").classList.remove('active');
    document.getElementById("nav-views").classList.add('active');
    document.getElementById("nav-lakes").classList.remove('active');

  } else if (articleId == LAKES) {
    locationsEl.style.display = "none";
    viewsEl.style.display = "none";
    lakesEl.style.display = "block";

    document.getElementById("nav-locations").classList.remove('active');
    document.getElementById("nav-views").classList.remove('active');
    document.getElementById("nav-lakes").classList.add('active');
  }
}