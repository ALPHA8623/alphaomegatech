gsap.registerPlugin(ScrollTrigger, SplitText);

const isFinePointer = window.matchMedia("(pointer: fine)").matches;

/* ---------- i18n ---------- */
function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const dict = translations[lang];
    if (dict && dict[el.dataset.i18n] != null) {
      el.innerHTML = dict[el.dataset.i18n];
    }
  });
  document.documentElement.lang = lang;
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  try {
    localStorage.setItem("aot-lang", lang);
  } catch (e) {
    /* localStorage unavailable — ignore, language just won't persist */
  }
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

let savedLang = "es";
try {
  savedLang = localStorage.getItem("aot-lang") || "es";
} catch (e) {
  /* ignore */
}
setLang(savedLang);

/* ---------- Scroll progress bar ---------- */
gsap.to("#progressBar", {
  scaleX: 1,
  ease: "none",
  scrollTrigger: {
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
});

/* ---------- Marquee de palabras clave (bucle infinito, se ralentiza con el ratón encima) ---------- */
const marqueeTrack = document.getElementById("marqueeTrack");
const marqueeTween = gsap.to(marqueeTrack, {
  xPercent: -50,
  duration: 18,
  ease: "none",
  repeat: -1,
});
marqueeTrack.addEventListener("pointerenter", () => marqueeTween.timeScale(0.15));
marqueeTrack.addEventListener("pointerleave", () => marqueeTween.timeScale(1));

/* ---------- Nav background on scroll ---------- */
ScrollTrigger.create({
  start: 0,
  end: 99999,
  onUpdate: (self) => {
    document.getElementById("nav").style.background =
      self.scroll() > 40 ? "rgba(10,10,10,0.85)" : "rgba(10,10,10,0.55)";
  },
});

/* ---------- Hero entrance ---------- */
// Divide el titular en caracteres para revelarlo letra por letra
const heroSplit = new SplitText(".hero h1", { type: "chars, words" });
gsap.set(heroSplit.chars, { autoAlpha: 0, y: 20 });

gsap.timeline({ defaults: { duration: 0.9, ease: "power3.out" } })
  .fromTo(".hero-logo", { y: -20, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
  .fromTo(".hero .eyebrow", { y: 15, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, "-=0.5")
  .to(heroSplit.chars, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.018, ease: "power3.out" }, "-=0.35")
  .fromTo(".hero-sub", { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, "-=0.4")
  .fromTo(".hero-ctas", { y: 15, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, "-=0.5");

/* ---------- Interacciones de ratón (solo en dispositivos con puntero fino) ---------- */
if (isFinePointer) {
  document.documentElement.classList.add("has-custom-cursor");

  // Cursor personalizado: sigue el ratón y crece sobre elementos interactivos
  const cursor = document.getElementById("cursorDot");
  const cxTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3" });
  const cyTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3" });

  window.addEventListener("pointermove", (e) => {
    cxTo(e.clientX);
    cyTo(e.clientY);
  });

  document.querySelectorAll("a, button, .card").forEach((el) => {
    el.addEventListener("pointerenter", () => cursor.classList.add("hover"));
    el.addEventListener("pointerleave", () => cursor.classList.remove("hover"));
  });

  // Botones magnéticos: se atraen levemente hacia el cursor
  document.querySelectorAll(".btn, .contact-btn").forEach((btn) => {
    const bxTo = gsap.quickTo(btn, "x", { duration: 0.4, ease: "power3" });
    const byTo = gsap.quickTo(btn, "y", { duration: 0.4, ease: "power3" });

    btn.addEventListener("pointermove", (e) => {
      const rect = btn.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      bxTo(relX * 0.35);
      byTo(relY * 0.35);
    });

    btn.addEventListener("pointerleave", () => {
      bxTo(0);
      byTo(0);
    });
  });

  // Tarjetas de servicios con inclinación 3D según la posición del cursor
  document.querySelectorAll(".card").forEach((card) => {
    const rxTo = gsap.quickTo(card, "rotationX", { duration: 0.5, ease: "power3" });
    const ryTo = gsap.quickTo(card, "rotationY", { duration: 0.5, ease: "power3" });
    const zTo = gsap.quickTo(card, "z", { duration: 0.5, ease: "power3" });

    card.addEventListener("pointermove", (e) => {
      const rect = card.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      ryTo(relX * 14);
      rxTo(-relY * 14);
      zTo(20);
    });

    card.addEventListener("pointerleave", () => {
      rxTo(0);
      ryTo(0);
      zTo(0);
    });
  });
}

/* ---------- Slow hero glow drift ---------- */
gsap.to(".glow-1", { x: 40, y: 30, duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut" });
gsap.to(".glow-2", { x: -30, y: -20, duration: 9, repeat: -1, yoyo: true, ease: "sine.inOut" });

/* ---------- Service cards reveal ---------- */
gsap.utils.toArray(".card").forEach((card, i) => {
  gsap.fromTo(
    card,
    { y: 40, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.7,
      ease: "power2.out",
      delay: i * 0.08,
      scrollTrigger: { trigger: card, start: "top 88%" },
    }
  );
});

/* ---------- Process line draw + steps reveal ---------- */
gsap.to(".steps-line line", {
  strokeDashoffset: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".steps",
    start: "top 80%",
    end: "bottom 60%",
    scrub: true,
  },
});

gsap.utils.toArray(".step").forEach((step, i) => {
  gsap.fromTo(
    step,
    { y: 30, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.6,
      ease: "power2.out",
      delay: i * 0.12,
      scrollTrigger: { trigger: step, start: "top 90%" },
    }
  );

  // Cuenta el número del paso desde 00 en vez de mostrarlo ya escrito
  const numEl = step.querySelector(".step-num");
  const target = parseInt(numEl.textContent, 10);
  numEl.textContent = "00";
  const counter = { val: 0 };
  gsap.to(counter, {
    val: target,
    duration: 1,
    ease: "power1.out",
    delay: i * 0.12,
    scrollTrigger: { trigger: step, start: "top 90%" },
    onUpdate: () => {
      numEl.textContent = String(Math.round(counter.val)).padStart(2, "0");
    },
  });
});

/* ---------- About reveal ---------- */
gsap.fromTo(
  ".about-mark, .about .eyebrow, .about h2, .about-body, .about-byline, .about-photo",
  { y: 25, autoAlpha: 0 },
  {
    y: 0,
    autoAlpha: 1,
    duration: 0.7,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: { trigger: ".about", start: "top 80%" },
  }
);

/* ---------- Why reveal ---------- */
gsap.utils.toArray(".why-item").forEach((item, i) => {
  gsap.fromTo(
    item,
    { y: 25, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.6,
      ease: "power2.out",
      delay: i * 0.08,
      scrollTrigger: { trigger: item, start: "top 90%" },
    }
  );
});

/* ---------- FAQ: acordeón + reveal ---------- */
gsap.utils.toArray(".faq-item").forEach((item, i) => {
  gsap.fromTo(
    item,
    { y: 20, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.5,
      ease: "power2.out",
      delay: i * 0.05,
      scrollTrigger: { trigger: item, start: "top 92%" },
    }
  );

  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    const onDone = () => ScrollTrigger.refresh();
    if (isOpen) {
      gsap.to(answer, { height: 0, duration: 0.35, ease: "power2.inOut", onComplete: onDone });
    } else {
      gsap.to(answer, { height: "auto", duration: 0.4, ease: "power2.inOut", onComplete: onDone });
    }
    item.classList.toggle("open", !isOpen);
  });
});

/* ---------- Contact reveal ---------- */
gsap.fromTo(
  ".contact .eyebrow, .contact h2, .contact-sub, .contact-btn",
  { y: 25, autoAlpha: 0 },
  {
    y: 0,
    autoAlpha: 1,
    duration: 0.6,
    stagger: 0.06,
    ease: "power2.out",
    scrollTrigger: { trigger: ".contact", start: "top 85%" },
  }
);

window.addEventListener("load", () => ScrollTrigger.refresh());
