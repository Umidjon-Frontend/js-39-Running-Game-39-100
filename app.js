const hero = document.querySelector(".hero");
const drakon = document.querySelector(".drakon");

function jump() {
  if (hero.classList !== "animation") {
    hero.classList.add("animation");
    drakon.style.animation = "drakon 1s infinite linear";
  }
  setTimeout(() => {
    hero.classList.remove("animation");
  }, 300);
}

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    jump();
  }
});


let isAlive = setInterval(() => {
  let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    console.log(heroTop);
  let drakonLeft = parseInt(
    window.getComputedStyle(drakon).getPropertyValue("left")
  );
  console.log(drakonLeft);

  if (drakonLeft < 80 && drakonLeft > 40 && heroTop >= 180) {
    drakon.style.animation = "none";
    alert("Game over. Press spacebar to start");
  }
}, 10);