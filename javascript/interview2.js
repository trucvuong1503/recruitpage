document.addEventListener("DOMContentLoaded", function() {
$(document).ready(function() {
  $(window).scroll(function() {
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    $('.fadeinleft').each(function() {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();

      if (bottom_of_window > bottom_of_element) {
        $(this).addClass('animate');
      }
    });

    $('.fadeinright').each(function() {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();

      if (bottom_of_window > bottom_of_element) {
        $(this).addClass('animate');
      }
    });
  });
})
});
