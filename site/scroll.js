(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var wide = window.matchMedia("(min-width: 721px)");

  /* ───── 상단 진행 바: 스크롤 위치와 현재 노선 색 ───── */
  var nav = document.querySelector(".nav");
  var onDocPage = !document.querySelector(".route a[href^='#']");
  var setProgress = function (line) {
    if (!nav) return;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    nav.style.setProperty("--sp", max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    if (line) nav.style.setProperty("--pc", "var(--" + line + ")");
  };
  if (onDocPage) {
    setProgress("out");
    window.addEventListener("scroll", function () { setProgress("out"); }, { passive: true });
  }

  /* ───── 노선 진행 바: 현재 구역 표시 ───── */
  var links = Array.prototype.slice.call(document.querySelectorAll(".route a[href^='#']"));
  var targets = links.map(function (a) { return document.querySelector(a.getAttribute("href")); });

  if (links.length) {
    var spyTicking = false;

    var spy = function () {
      spyTicking = false;
      var probe = window.scrollY + window.innerHeight * 0.4;
      var current = -1;
      targets.forEach(function (el, i) {
        if (el && el.getBoundingClientRect().top + window.scrollY <= probe) current = i;
      });
      links.forEach(function (a, i) {
        if (i === current) a.setAttribute("aria-current", "location");
        else a.removeAttribute("aria-current");
      });
      setProgress(current >= 0 ? links[current].getAttribute("data-line") : "story");
    };

    var onSpyScroll = function () {
      if (!spyTicking) {
        spyTicking = true;
        window.requestAnimationFrame(spy);
      }
    };

    spy();
    window.addEventListener("scroll", onSpyScroll, { passive: true });
    window.addEventListener("resize", onSpyScroll);
  }

  /* ───── 숫자 구간: 스크롤 고정 + 열차가 정차할 때마다 한 항목씩 ───── */
  var pin = document.querySelector(".numbers-pin");
  if (!pin) return;

  var slides = pin.querySelectorAll(".number-slide");
  var stops = pin.querySelectorAll(".ride-stops span");
  var ride = document.getElementById("ride");
  var count = document.getElementById("ride-count");
  var n = slides.length;
  if (!n) return;

  var lastIndex = -1;

  var setActive = function (index) {
    if (index === lastIndex) return;
    lastIndex = index;
    slides.forEach(function (slide, i) { slide.classList.toggle("is-active", i === index); });
    stops.forEach(function (stop, i) {
      stop.classList.toggle("is-done", i < index);
      stop.classList.toggle("is-active", i === index);
    });
    if (ride) ride.style.setProperty("--p", n > 1 ? index / (n - 1) : 0);
    if (count) count.textContent = "정차 " + (index + 1) + " / " + n;
  };

  var update = function () {
    var rect = pin.getBoundingClientRect();
    var total = rect.height - window.innerHeight;
    if (total <= 0) return;
    var progress = Math.max(0, Math.min(0.999, -rect.top / total));
    setActive(Math.min(n - 1, Math.floor(progress * n)));
  };

  var ticking = false;
  var onScroll = function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(function () { ticking = false; update(); });
    }
  };

  var pinned = false;

  var sync = function () {
    var want = !reduceMotion.matches && wide.matches;
    if (want === pinned) return;
    pinned = want;
    if (want) {
      lastIndex = -1;
      update();
      setActive(Math.max(lastIndex, 0));
      window.addEventListener("scroll", onScroll, { passive: true });
    } else {
      window.removeEventListener("scroll", onScroll);
      slides.forEach(function (slide) { slide.classList.remove("is-active"); });
    }
  };

  sync();
  window.addEventListener("resize", sync);
})();
