
const progress = document.querySelector("#progress");
const earth = document.querySelector(".earth");
const sections = document.querySelectorAll(".story-section");
const clock = document.querySelector("#clock");
const replay = document.querySelector("#replay");

const messages = [
  "THE PRESENT??",
  "TIME IS FAKE",
  "WE ARE SO COOKED",
  "404: REALITY NOT FOUND",
  "WHY IS SPACE SO BIG"
];

function updatePage() {
  const scrollable =
    document.documentElement.scrollHeight - window.innerHeight;

  const amount = scrollable > 0
    ? (window.scrollY / scrollable) * 100
    : 0;

  progress.style.width = `${amount}%`;

  const center = window.innerHeight * 0.55;
  let activeScene = "intro";

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();

    if (rect.top < center && rect.bottom > center) {
      activeScene = section.dataset.scene;
    }
  });

  document.body.dataset.scene = activeScene;

  if (earth) {
    const warning = document.querySelector(".warning");
    const gone = document.querySelector(".gone");

    if (warning && gone) {
      const warningTop = warning.getBoundingClientRect().top;
      const goneTop = gone.getBoundingClientRect().top;

      if (warningTop < window.innerHeight && goneTop > 0) {
        const shrink = Math.max(
          0.08,
          Math.min(1, warningTop / window.innerHeight)
        );

        earth.style.transform = `scale(${shrink}) rotate(${(1 - shrink) * 70}deg)`;
        earth.style.opacity = shrink;
      } else if (goneTop <= 0) {
        earth.style.opacity = 0;
      } else {
        earth.style.opacity = 1;
        earth.style.transform = "";
      }
    }
  }
}

let messageIndex = 0;

function updateClock() {
  clock.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
}

window.addEventListener("scroll", updatePage, { passive: true });
window.addEventListener("resize", updatePage);

setInterval(updateClock, 2300);

replay.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

updatePage();
updateClock();
