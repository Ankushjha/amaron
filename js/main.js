// amaron every need section
var amaronForEveryNeed = [
  {
    image: "Two-Wheeler.png",
    name: "Two Wheeler",
  },
  {
    image: "Three-Wheeler.png",
    name: "Three-Wheeler",
  },
  {
    image: "Passanger-Veehicle.png",
    name: "Passanger Veehicle",
  },
  {
    image: "Commercial-Vehicle.png",
    name: "Commercial Vehicle",
  },
  {
    image: "Farm-Vehicle.png",
    name: "Farm eVehicle",
  },
  {
    image: "Invrtor-battery.png",
    name: "Invertor battery",
  },
  {
    image: "E-rikshaw.png",
    name: "E-Vehicles",
  },
  {
    image: "other-application.png",
    name: "Other Application",
  },
];
var amaronNeed = document.getElementById("every-need-menu");
function amaron_every_need_section() {
  var newArray = amaronForEveryNeed.map(function (value, index) {
    var data = `<li>
                <span class="img-icon">
                <img src="./images/${value.image}" alt="${value.value}" />
                </span>
                <span>${value.name}</span>
             </li>`;
    return data;
  });
  var newString = newArray.join("");
  amaronNeed.innerHTML = newString;
}
amaron_every_need_section();

// 3rd section last part tab code to change between facebook and twitter

$(function () {
  $("#tab").tabs({
    active: 1,
    collapsible: true,
  });
});
