document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".animated");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => observer.observe(card));
});

// COMENTARIOS PESSOAIS
document.addEventListener("DOMContentLoaded", function () {
  const cardsContainer = document.querySelector(".cards-feedback");
  const cards = document.querySelectorAll(".card-feedback");
  const totalCards = cards.length;
  let index = 0;

  function cloneCards() {
    const firstClone = cards[0].cloneNode(true);
    const lastClone = cards[totalCards - 1].cloneNode(true);
    cardsContainer.appendChild(firstClone);
    cardsContainer.insertBefore(lastClone, cardsContainer.firstChild);
  }

  function slideCards() {
    index++;
    if (index >= totalCards + 1) {
      setTimeout(() => {
        cardsContainer.style.transition = "none";
        index = 1;
        cardsContainer.style.transform = `translateX(-${index * 260}px)`;
      }, 500);
    }
    cardsContainer.style.transition = "transform 0.5s ease-in-out";
    cardsContainer.style.transform = `translateX(-${index * 260}px)`;
  }

  cloneCards();
  setInterval(slideCards, 3000);
});

//
// Dark & Light toggle

document.querySelector(".day-night input").addEventListener("change", () => {
  document.querySelector("body").classList.add("toggle");
  setTimeout(() => {
    document.querySelector("body").classList.toggle("light");

    setTimeout(
      () => document.querySelector("body").classList.remove("toggle"),
      10
    );
  }, 5);
});
