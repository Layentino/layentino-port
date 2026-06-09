const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");
const revealItems = document.querySelectorAll(".reveal");
const counters = document.querySelectorAll("[data-count]");
const cursorLight = document.getElementById("cursorLight");
const tiltCards = document.querySelectorAll(".tilt-card");
const magneticItems = document.querySelectorAll(".magnetic");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

window.addEventListener("mousemove", (event) => {
  if (!cursorLight) return;
  cursorLight.style.left = `${event.clientX}px`;
  cursorLight.style.top = `${event.clientY}px`;
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const counter = entry.target;
      const target = parseFloat(counter.dataset.count);
      const isDecimal = String(target).includes(".");
      let current = 0;
      const steps = 70;
      const increment = target / steps;

      const update = () => {
        current += increment;
        if (current >= target) {
          counter.textContent = isDecimal ? target.toFixed(2) : Math.round(target);
          return;
        }

        counter.textContent = isDecimal ? current.toFixed(2) : Math.round(current);
        requestAnimationFrame(update);
      };

      update();
      counterObserver.unobserve(counter);
    });
  },
  { threshold: 0.9 }
);

counters.forEach((counter) => counterObserver.observe(counter));

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + 120;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPosition >= top && scrollPosition < top + height) {
      navItems.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

tiltCards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = ((y / rect.height) - 0.5) * -8;

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
  });
});

magneticItems.forEach((item) => {
  item.addEventListener("mousemove", (event) => {
    const rect = item.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    item.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`;
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "translate(0, 0)";
  });
});
