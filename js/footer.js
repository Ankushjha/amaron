// 1st technique to get data but the lengthy one and too many functions so we've avoided that technique

// footer section
// about section
// var about = [
//   "Amara Raja",
//   "Management",
//   "Aftermarket",
//   "OEM",
//   "International Operation",
//   "manufacturing",
// ];
// var footerAboutSection = document.getElementById("main_footer_about");
// function aboutSection() {
//   var newArray = about.map(function (value, index) {
//     var data = `<li class="footer-items"><a href="#${index}">${value}</a></li>`;
//     return data;
//   });
//   var newString = newArray.join("");
//   footerAboutSection.innerHTML = newString;
// }
// aboutSection();

// // footer Product & solution section

// var product = [
//   "Two-Wheeler",
//   "Three-Wheeler",
//   "Passanger Veehicle",
//   "Commercial-Vehicle",
//   "Farm-Vehicle",
//   "Earth Moving Equipment",
//   "Genset",
//   "E-Rickshaw",
//   "Inverter & Batteries",
// ];
// var footerProductSection = document.getElementById("main-footer-products");
// function productSection() {
//   var newArray = product.map(function (value, index) {
//     var data = `<li class="footer-items"><a href="#${index}">${value}</a></li>`;
//     return data;
//   });
//   console.log(newArray);
//   var newString = newArray.join("");
//   footerProductSection.innerHTML = newString;
// }
// productSection();

// // footer services section
// var service = [
//   "Amcare",
//   "Tips for buying batteries",
//   "Battery safety guidelines",
//   "Terminology",
//   "FAQs",
//   "Battery Recycle",
// ];
// var footerServiceSection = document.getElementById("main-footer-services");
// function serviceSection() {
//   var newArray = service.map(function (value, index) {
//     var data = `<li class="footer-items"><a href="#${index}">${value}</a></li>`;
//     return data;
//   });
//   console.log(newArray);
//   var newString = newArray.join("");
//   footerServiceSection.innerHTML = newString;
// }
// serviceSection();

// // footer experience section

// var experience = ["media", "Ad Gallery", "fun Facts", "Amaron Logo", "Events"];
// var footerExperienceSection = document.getElementById("main-footer-experience");
// function experienceSection() {
//   var newArray = experience.map(function (value, index) {
//     var data = `<li class="footer-items"><a href="#${index}">${value}</a></li>`;
//     return data;
//   });
//   console.log(newArray);
//   var newString = newArray.join("");
//   footerExperienceSection.innerHTML = newString;
// }
// experienceSection();

// // footer others section
// var other = [
//   "Contact",
//   "Blogs",
//   "Terms & Conditions",
//   "Privacy Policy",
//   "online Order terms and condition",
//   "Sitemap",
// ];
// var footerOtherSection = document.getElementById("main-footer-others");
// function otherSection() {
//   var newArray = other.map(function (value, index) {
//     var data = `<li class="footer-items"><a href="#${index}">${value}</a></li>`;
//     return data;
//   });
//   console.log(newArray);
//   var newString = newArray.join("");
//   footerOtherSection.innerHTML = newString;
// }
// otherSection();

// 2nd technique to get data using object or nested array
// footer section

var footer = {
  about: [
    {
      url: "#",
      name: "Amara Raja",
    },
    {
      url: "#",
      name: "Management",
    },
    {
      url: "#",
      name: "Aftermarket",
    },
    {
      url: "#",
      name: "OEM",
    },
    {
      url: "#",
      name: "International Operation",
    },
    {
      url: "#",
      name: "manufacturing",
    },
  ],

  product: [
    {
      url: "two-wheeler.html",
      name: "Two-Wheeler",
    },
    {
      url: "#",
      name: "Three-Wheeler",
    },
    {
      url: "#",
      name: "Passanger Veehicle",
    },
    {
      url: "#",
      name: "Commercial-Vehicle",
    },
    {
      url: "#",
      name: "Farm-Vehicle",
    },
    {
      url: "#",
      name: "Earth Moving Equipment",
    },
    {
      url: "#",
      name: "Genset",
    },
    {
      url: "#",
      name: "E-Rickshaw",
    },
    {
      url: "inverter-and-batteries.html",
      name: "Inverter & Batteries",
    },
  ],

  service: [
    {
      url: "#",
      name: "Amcare",
    },
    {
      url: "#",
      name: "Tips for buying batteries",
    },
    {
      url: "#",
      name: "Battery safety guidelines",
    },
    {
      url: "terminology.html",
      name: "Terminology",
    },
    {
      url: "#",
      name: "FAQs",
    },
    {
      url: "#",
      name: "Battery Recycle",
    },
  ],

  experience: [
    {
      url: "#",
      name: "media",
    },
    {
      url: "ad-gallery.html",
      name: "Ad Gallery",
    },
    {
      url: "#",
      name: "fun Facts",
    },
    {
      url: "#",
      name: "Amaron Logo",
    },
    {
      url: "#",
      name: "Events",
    },
  ],

  other: [
    {
      url: "contact.html",
      name: "Contact",
    },
    {
      url: "#",
      name: "Blogs",
    },
    {
      url: "#",
      name: "Terms & Conditions",
    },
    {
      url: "#",
      name: "Privacy Policy",
    },
    {
      url: "#",
      name: "Online Order Terms and Condition",
    },
    {
      url: "#",
      name: "Sitemap",
    },
  ],
};


var footerAboutSection = document.getElementById("main_footer_about");

var footerProductSection = document.getElementById("main-footer-products");

var footerServiceSection = document.getElementById("main-footer-services");

var footerExperienceSection = document.getElementById("main-footer-experience");

var footerOtherSection = document.getElementById("main-footer-others");

function footerList() {
  var newArray1 = Object.values(footer);
  console.log(newArray1);

  var newArray = newArray1.map(function (value, index) {
    var data = [];
    value.map(function (item, index) {
      data.push(
        `<li class="footer-items"><a href="./${item.url}">${item.name}</a></li>`
      );
    });
    // console.log(data);

    // for (let i = 0; i < data.length; i++) {
    //   console.log(data[i]);
    //   // footerAboutSection.innerHTML = newArray[0].toString();
    // }

    // var newString = data.join("");
    // footerListSection.innerHTML = newString;
    return data;
  });

  // console.log(newArray);
  // console.log(newArray[2]);
  // console.log(newArray[0]);

  // Now we've set our data into newArray but the problem is it is an array and we've to get data in string so that data will be easily stored to I've get data for every footer section using index and change those to string and then replace all , from an empty space.

  footerAboutSection.innerHTML = newArray[0].toString().replaceAll(",", "");
  footerProductSection.innerHTML = newArray[1].toString().replaceAll(",", "");
  footerServiceSection.innerHTML = newArray[2].toString().replaceAll(",", "");
  footerExperienceSection.innerHTML = newArray[3]
    .toString()
    .replaceAll(",", "");
  footerOtherSection.innerHTML = newArray[4].toString().replaceAll(",", "");
}
footerList();



// hamburger navbar code

$(function () {
  $(".ham-menu").on("click", function () {
    $(" .main-header-menu > .menu").animate({
      left: "0%",
    });
  });
  $(".user-action > div > button").on("click", function () {
    $(" .main-header-menu > .menu").animate({
      left: "-80%",
    });
  });
});


// this one is for fixing the header
$(function () {
  $(document).bind("scroll", ".main-carousel", function () {
    var offset_t = $(".main-carousel").offset().top - $(window).scrollTop();
  });
});