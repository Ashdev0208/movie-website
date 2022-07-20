"use strict";
window.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".image-container"),
    slides = slider.querySelectorAll(".img-slider"),
    dots = document.querySelectorAll(".dot"),
    cards = document.querySelectorAll('.cards'),
    rightArrow = document.querySelectorAll(".arrow-right"),
    leftArrow = document.querySelectorAll(".arrow-left");

    rightArrow.forEach((item,index) => {
      item.addEventListener('click' , () => {
        cards[index].style.transform = `translateX(-17%)`;
      })
    })

    leftArrow.forEach((item,index) => {
      item.addEventListener('click' , () => {
        cards[index].style.transform = `translateX(0)`;
      })
    })
  let i = 0;

  let carousel = () => {
    dots[i].classList.remove("active");
    i++;
    if (i == slides.length) {
      i = 0;
    }
    dots[i].classList.add("active");
    slider.style.transform = `translateX(-${i * 25}%)`;
  };

  function resetInterval() {
    clearInterval(repeat);
    repeat = setInterval(carousel, 2500);
  }

  let repeat = setInterval(carousel, 2500);
  function autoClick() {
    dots.forEach((element) => {
      element.addEventListener("click", function () {
        dots.forEach((dot) => dot.classList.remove("active"));
        this.classList.add("active");
      });
    });
  }
  autoClick();
  dots.forEach((item, index) => {
    item.addEventListener("click", () => {
      resetInterval();
      i = index;
      slider.style.transform = `translateX(-${index * 25}%)`;
    });
  });
  class Cards {
    constructor(src, date, title, text,num = 0, element = "cards") {
      this.src = src;
      this.date = date;
      this.title = title;
      this.text = text;
      this.element = element;
      this.num = num;
    }
    render() {
      const card = document.createElement("div");

      card.innerHTML = `
      <div class="card">
      <div class="bg-img">
        <img src="${this.src}" alt="" />
      </div>
      <div class="content-text">
        <div class="date desc-text">${this.date}</div>
        <div class="name medium-text">${this.title}</div>
        <div class="movie-about desc-text">${this.text}</div>
      </div>
      </div>
      `;
      document.querySelectorAll(`.${this.element}`)[this.num].append(card);
    }
  }
  const newCards = new Cards(
    "../img/stranger things.png",
    "USA, 2016 -<br /> Current",
    "Stranger Things",
    "Action,<br /> Adventure,<br /> Horror"
  ).render();
  const newCards2 = new Cards(
    "../img/batman.png",
    "USA, 2018 -<br /> Current",
    "Batman Begin",
    "Action,<br /> Thriller,"
  ).render();
  const newCards3 = new Cards(
    "../img/spiderCartoon.png",
    "USA, 2019 ",
    "Spider-man Into the spider verse",
    "Action,<br /> Thriller,"
  ).render();
  const newCards4 = new Cards(
    "../img/stranger things.png",
    "USA, 2016 -<br /> Current",
    "Stranger Things",
    "Action,<br /> Adventure,<br /> Horror"
  ).render();
  const newCards5 = new Cards(
    "../img/batman.png",
    "USA, 2018 -<br /> Current",
    "Batman Begin",
    "Action,<br /> Thriller,"
  ).render();
  const newCards6 = new Cards(
    "../img/spiderCartoon.png",
    "USA, 2019 ",
    "Spider-man Into the spider verse",
    "Action,<br /> Thriller,"
  ).render();

  const newCards7 = new Cards(
    "../img/stranger things.png",
    "USA, 2016 -<br /> Current",
    "Stranger Things",
    "Action,<br /> Adventure,<br /> Horror",
    1
  ).render();
  const newCards8 = new Cards(
    "../img/batman.png",
    "USA, 2018 -<br /> Current",
    "Batman Begin",
    "Action,<br /> Thriller,",
    1
  ).render();
  const newCards9 = new Cards(
    "../img/spiderCartoon.png",
    "USA, 2019 ",
    "Spider-man Into the spider verse",
    "Action,<br /> Thriller,",
    1
  ).render();
  const newCards10 = new Cards(
    "../img/stranger things.png",
    "USA, 2016 -<br /> Current",
    "Stranger Things",
    "Action,<br /> Adventure,<br /> Horror",
    1
  ).render();
  const newCards11 = new Cards(
    "../img/batman.png",
    "USA, 2018 -<br /> Current",
    "Batman Begin",
    "Action,<br /> Thriller,",
    1
  ).render();
  const newCards12 = new Cards(
    "../img/spiderCartoon.png",
    "USA, 2019 ",
    "Spider-man Into the spider verse",
    "Action,<br /> Thriller,",
    1
  ).render();
});
