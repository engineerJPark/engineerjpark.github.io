// Publication filter + scroll progress bar.
(function () {
  var buttons = document.querySelectorAll('.category-btn');
  var pubs = document.querySelectorAll('.pub');

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var f = btn.dataset.filter;
      buttons.forEach(function (b) { b.classList.toggle('active', b === btn); });
      pubs.forEach(function (p) {
        var tags = (p.dataset.tags || '').split('|');
        p.hidden = !(f === 'all' || tags.indexOf(f) !== -1);
      });
    });
  });

  var bar = document.getElementById('scroll-progress');
  if (bar) {
    var update = function () {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
  }
})();
