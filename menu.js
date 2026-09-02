document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("menuToggle");
  var nav = document.querySelector("#header nav");
  if (!btn || !nav) return;

  function closeMenu() {
    nav.classList.remove("is-open");
    btn.textContent = "☰";
    btn.setAttribute("aria-expanded", "false");
  }

  btn.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("is-open");
    btn.textContent = isOpen ? "✕" : "☰";
    btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // リンクをタップしたらメニューを閉じる
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });
});
