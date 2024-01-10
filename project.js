document.addEventListener("DOMContentLoaded", function () {
  const barLevels = document.querySelectorAll(".bar-level");

  barLevels.forEach((bar) => {
    const tecPorc = bar.previousElementSibling;
    const porcentagem = parseInt(
      tecPorc.querySelector("span").getAttribute("data-character")
    );

    const filledBar = bar.querySelector(".filled-bar");
    filledBar.style.width = porcentagem + "%";
  });
});

const topics = document.querySelectorAll(".list-site li > a");
const topicsCel = document.querySelectorAll(".box-size ul li");
const boxSize = document.querySelector(".box-size");
const nav = document.querySelector("header nav");
const header = document.querySelector("header");

const bar = document.querySelector(".bar");
const closeX = document.querySelector(".box-size i");
const filledBar = document.querySelectorAll("filled-bar");
const topChair = document.querySelector(".topChair");

function barActions() {
  bar.addEventListener("click", () => {
    boxSize.style.transform = "translateX(0%)";
  });
  closeX.addEventListener("click", () => {
    boxSize.style.transform = "translateX(100%)";
  });
}

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const threshold = 0.04 * document.body.scrollHeight;
  const threshold2 = 0.1 * document.body.scrollHeight;

  if (scrollPosition >= threshold) {
    header.classList.add("fixed-nav");
  } else {
    header.classList.remove("fixed-nav");
  }

  if (scrollPosition >= threshold2) {
    topChair.style.display = "flex";
  } else {
    topChair.style.display = "none";
  }
});

topChair.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

function barTopics() {
  topics.forEach((top, index) => {
    top.addEventListener("click", (event) => {
      event.preventDefault();

      let scrollToPosition = 0;

      if (index === 1) {
        scrollToPosition = 0.17 * document.body.scrollHeight;
      } else if (index === 2) {
        scrollToPosition = 0.32 * document.body.scrollHeight;
      } else if (index === 3) {
        scrollToPosition = 0.52 * document.body.scrollHeight;
      } else if (index === 4) {
        scrollToPosition = 0.72 * document.body.scrollHeight;
      }

      const nav = document.querySelector("header nav");
      const navHeight = nav.offsetHeight;
      scrollToPosition -= navHeight;

      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });

      boxSize.style.transform = "translateX(100%)";
    });
  });

  const sections = document.querySelectorAll("section");

  window.onscroll = () => {
    sections.forEach((sec, index) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 485;
      let height = sec.offsetHeight;

      if (index === 0) {
        offset = sec.offsetTop - 230;
      } else if (index === 4) {
        offset = sec.offsetTop - 700;
      }

      if (top >= offset && top < offset + height) {
        topics.forEach((link, i) => {
          link.classList.remove("active");
          if (i === index) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  };
}

function barTopicsCel() {
  topicsCel.forEach((top, index) => {
    top.addEventListener("click", () => {
      if (index === 1) {
        window.scrollTo({
          top: 0.12 * document.body.scrollHeight,
          behavior: "smooth",
        });
        boxSize.style.transform = "translateX(100%)";
      } else if (index === 2) {
        window.scrollTo({
          top: 0.3 * document.body.scrollHeight,
          behavior: "smooth",
        });
        boxSize.style.transform = "translateX(100%)";
      } else if (index === 3) {
        window.scrollTo({
          top: 0.55 * document.body.scrollHeight,
          behavior: "smooth",
        });
        boxSize.style.transform = "translateX(100%)";
      } else if (index === 4) {
        window.scrollTo({
          top: 0.72 * document.body.scrollHeight,
          behavior: "smooth",
        });
        boxSize.style.transform = "translateX(100%)";
      }
    });
  });
}

barActions();
barTopics();
barTopicsCel();
