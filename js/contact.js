$(function () {
  var data = localStorage.getItem("enquiryList");
  var enquiryList = data === null ? [] : JSON.parse(data);
  $("#submit").on("submit", function (event) {
    event.preventDefault();
    let form = $(this);
    if (form.valid() === true) {
      var newEnquiry = {
        name: $("#name").val(),
        email: $("#email").val(),
        mobile: $("#mobile").val(),
        city: $("#city").val(),
        comment: $("#comment").val(),
      };
      enquiryList.push(newEnquiry);
      localStorage.setItem("enquiryList", JSON.stringify(enquiryList));
      swal({
        title: "Success",
        text: "Query submitted",
        icon: "success",
        button: "Next",
      }).then(() => {
        window.location.assign("/enquiry.html");
      });
    }
  });

  $("#submit").validate({
    rules: {
      name: {
        required: true,
        minlength: "4",
      },
      email: {
        required: true,
        minlength: "6",
        // regex: "/^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}\b$/i",
      },
      mobile: {
        required: true,
        number: true,
        minlength: "10",
        maxlength: "10",
      },
      city: {
        required: true,
        minlength: "3",
      },
      comment: {
        required: true,
        minlength: "10",
      },
    },

    messages: {
      name: {
        required: "Enter User Name",
        minlength: "user name must be atleast 4 characters",
      },
      email: {
        required: "Enter Valid Email",
        minlength: "enter at least 6 chars",
        // regex: "Email should be proper",
      },
      mobile: {
        required: "Please Enter Valid Contact Number",
        maxlength: "Mobile number should be valid",
      },
      city: {
        required: "Please enter valid city name",
        minlength: "Please enter valid city name",
      },
      comment: {
        required: "Please enter Commments/Queries/Compliments/Concerns",
        minlength: "Query should be of minimum 10 characters",
      },
    },

    errorPlacement: function (error, element) {
      var data = $(element).parent("div").find($(".error-div"));
      error.appendTo(data);
    },
  });
});
