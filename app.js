const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

const resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

const particles = [];
const PARTICLE_COUNT = 80;

const random = (min, max) => Math.random() * (max - min) + min;

class Particle {
  constructor() {
    this.reset(true);
  }

  reset(initial = false) {
    this.x = random(0, canvas.width);
    this.y = initial ? random(0, canvas.height) : canvas.height + random(0, 40);
    this.size = random(1, 3.5);
    this.speedY = random(20, 60) / 60;
    this.speedX = random(-25, 25) / 60;
    this.alpha = random(0.15, 0.65);
    this.hue = random(200, 310);
  }

  update() {
    this.x += this.speedX;
    this.y -= this.speedY;

    if (this.y < -20 || this.x < -20 || this.x > canvas.width + 20) {
      this.reset();
    }
  }

  draw() {
    const gradient = ctx.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      this.size * 6
    );
    gradient.addColorStop(0, `hsla(${this.hue}, 100%, 70%, ${this.alpha})`);
    gradient.addColorStop(1, "transparent");

    ctx.beginPath();
    ctx.fillStyle = gradient;
    ctx.arc(this.x, this.y, this.size * 6, 0, Math.PI * 2);
    ctx.fill();
  }
}

const initParticles = () => {
  particles.length = 0;
  Array.from({ length: PARTICLE_COUNT }).forEach(() => particles.push(new Particle()));
};

const render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });
  requestAnimationFrame(render);
};

resizeCanvas();
initParticles();
render();

window.addEventListener("resize", () => {
  resizeCanvas();
  initParticles();
});

const tiltTargets = document.querySelectorAll(".tilt");

const applyTilt = (element, rotateX, rotateY) => {
  element.style.setProperty("--tilt-x", `${rotateX}deg`);
  element.style.setProperty("--tilt-y", `${rotateY}deg`);
};

const handleTilt = (event, element, intensity = 20) => {
  const bounds = element.getBoundingClientRect();
  const centerX = bounds.left + bounds.width / 2;
  const centerY = bounds.top + bounds.height / 2;
  const rotateX = ((event.clientY - centerY) / bounds.height) * -intensity;
  const rotateY = ((event.clientX - centerX) / bounds.width) * intensity;

  applyTilt(element, rotateX, rotateY);
};

const resetTilt = (element) => {
  element.style.setProperty("--tilt-x", "0deg");
  element.style.setProperty("--tilt-y", "0deg");
};

tiltTargets.forEach((target) => {
  const intensity = Number(target.dataset.tiltIntensity) || 18;
  target.addEventListener("mousemove", (event) => handleTilt(event, target, intensity));
  target.addEventListener("mouseleave", () => resetTilt(target));
});

const badges = document.querySelectorAll(".floating-badge");
let glowMouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

const updateBadgeParallax = (event) => {
  glowMouse = { x: event.clientX, y: event.clientY };
  badges.forEach((badge) => {
    const depth = Number(badge.dataset.depth) || 30;
    const offsetX = ((event.clientX - window.innerWidth / 2) / depth).toFixed(2);
    const offsetY = ((event.clientY - window.innerHeight / 2) / depth).toFixed(2);
    badge.style.setProperty("--badge-offset-x", `${offsetX}px`);
    badge.style.setProperty("--badge-offset-y", `${offsetY}px`);
  });
};

window.addEventListener("mousemove", updateBadgeParallax);

const root = document.documentElement;

const navButtons = document.querySelectorAll(".sidebar-btn[data-target]");
const sections = Array.from(document.querySelectorAll(".section[id]"));

const setActiveButton = (targetId) => {
  navButtons.forEach((button) => {
    const buttonTarget = button.dataset.target;
    if (buttonTarget === targetId) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
};

navButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const targetSelector = button.dataset.target;
    const targetSection = document.querySelector(targetSelector);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "center" });
      setActiveButton(targetSelector);
    }
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    const visibleEntry = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visibleEntry) {
      const id = `#${visibleEntry.target.id}`;
      setActiveButton(id);
    }
  },
  {
    root: null,
    threshold: [0.35, 0.55, 0.75],
  }
);

sections.forEach((section) => observer.observe(section));

const pointerGlow = () => {
  root.style.setProperty("--pointer-x", `${glowMouse.x}px`);
  root.style.setProperty("--pointer-y", `${glowMouse.y}px`);
  requestAnimationFrame(pointerGlow);
};
pointerGlow();
