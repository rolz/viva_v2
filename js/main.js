$( document ).ready(function() {
  $("#arrow-down").click(function() {
      $('html, body').animate({
          scrollTop: $("#jobb-form").offset().top
      }, 1000);
  });
});
