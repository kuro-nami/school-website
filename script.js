const barsicon = document.getElementById('barsicon')
const crossicon = document.getElementById('crossicon')
const menu = document.getElementById('menu');
const firstcircle = document.getElementById('firstcircle');
const secondcircle = document.getElementById('secondcircle');

barsicon.addEventListener('click', function () {
  barsicon.style.display = "none";
  crossicon.style.display = "flex";
  menu.style.display = "flex";
  firstcircle.style.display = "flex";
  secondcircle.style.display = "flex";
  menu.classList.add('menuexpand');
  firstcircle.classList.add('expand');
  secondcircle.classList.add('expand');
});


crossicon.addEventListener('click', function () {
  barsicon.style.display = "flex";
  crossicon.style.display = "none";
  menu.style.display = "none";
  firstcircle.style.display = "none";
  secondcircle.style.display = "none";
  menu.classList.remove('menuexpand');
  firstcircle.classList.remove('expand');
  secondcircle.classList.remove('expand');
});
