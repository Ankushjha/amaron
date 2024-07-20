$(function () {
  var counter = 1;
  $("#prev").on("click", function () {
    $(".carousel-item").animate({
      left: "+=400px",
    });
    handleControls(--counter);
  });

  $("#next").on("click", function () {
    $(".carousel-item").animate({
      left: "-=400px",
    });
    handleControls(++counter);
  });

  function handleControls(counter = 1) {
    var totalSlide = $(".carousel-item").length;
    if (counter === 1) {
      $("#prev").animate({ opacity: 0 }).prop("disabled", true);
      $("#next").animate({ opacity: 1 }).prop("disabled", false);
    } else if (counter === totalSlide) {
      $("#prev").animate({ opacity: 1 }).prop("disabled", false);
      $("#next").animate({ opacity: 0 }).prop("disabled", true);
    } else {
      $("#prev").animate({ opacity: 1 }).prop("disabled", false);
      $("#next").animate({ opacity: 1 }).prop("disabled", false);
    }
  }
  handleControls(counter)
});
