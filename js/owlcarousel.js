$(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    // margin: 10,
    nav: false, // we have made nav as false because we dont want the navigation bar below our image
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
