(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 상단 내비게이션: 스크롤 시 반투명 → 불투명 ---------- */
  var navBar = document.getElementById("nav-bar");
  if (navBar && navBar.dataset.static !== "true") {
    var toggleNav = function () {
      if (window.scrollY > 40) {
        navBar.classList.add("is-solid");
      } else {
        navBar.classList.remove("is-solid");
      }
    };
    toggleNav();
    window.addEventListener("scroll", toggleNav, { passive: true });
  }

  /* ---------- 섹션 등장 애니메이션 (fade-up) ---------- */
  var revealTargets = document.querySelectorAll(".reveal");
  if (revealTargets.length) {
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealTargets.forEach(function (el) { el.classList.add("in-view"); });
    } else {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
      );
      revealTargets.forEach(function (el) { io.observe(el); });
    }
  }

  /* ---------- 숫자 섹션: 스크롤 고정 + 진행률에 따라 한 항목씩 등장 ---------- */
  var pinSection = document.querySelector(".numbers-pin");
  var slides = pinSection ? pinSection.querySelectorAll(".number-slide") : [];
  var dots = pinSection ? pinSection.querySelectorAll(".stage-dots span") : [];

  var pinEnabled = !!pinSection && slides.length > 0 && !prefersReducedMotion && window.innerWidth > 720;

  var showAll = function () {
    slides.forEach(function (slide) { slide.classList.add("is-active"); });
  };

  if (pinEnabled) {
    pinSection.classList.add("js-pin");

    var ticking = false;
    var n = slides.length;

    var setActive = function (index) {
      slides.forEach(function (slide, i) {
        slide.classList.toggle("is-active", i === index);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle("is-active", i === index);
      });
    };

    var updatePin = function () {
      ticking = false;
      var rect = pinSection.getBoundingClientRect();
      var total = rect.height - window.innerHeight;
      if (total <= 0) return;
      var progress = -rect.top / total;
      progress = Math.max(0, Math.min(0.999, progress));
      var index = Math.max(0, Math.min(n - 1, Math.floor(progress * n)));
      setActive(index);
    };

    var onScroll = function () {
      if (!ticking) {
        window.requestAnimationFrame(updatePin);
        ticking = true;
      }
    };

    setActive(0);
    updatePin();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", function () {
      if (window.innerWidth <= 720) {
        pinSection.classList.remove("js-pin");
        showAll();
        window.removeEventListener("scroll", onScroll);
      }
    });
  } else if (pinSection) {
    showAll();
  }
})();
