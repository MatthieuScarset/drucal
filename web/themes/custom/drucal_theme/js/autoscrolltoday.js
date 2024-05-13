(function () {
  Drupal.behaviors.autoScrollToday = {
    attach: function (context) {
      once('autoscrolltoday', '[data-calendar-view-today]', context).forEach(function (el) {
        let rect = el.getBoundingClientRect();
        setTimeout(() => {
          window.scrollTo({top: Math.floor(rect.top - 10), behavior: "smooth"});
        }, 1000);
      });
    }
  }
})(Drupal, once);
