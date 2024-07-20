// these are all the id's need for this form.

var mobile = document.getElementById("mobile");
var email = document.getElementById("email");
var otp = document.getElementById("otp");
var password = document.getElementById("password");

var submit = document.getElementById("submit");

// we have created a new array to sore data in it

var userList = [];

//  this data will remains same even if we refresh the page

var data = localStorage.getItem("userList");
userList = JSON.parse(data);
userList = data === null ? [] : JSON.parse(data);

//if submit is not equal to none .

if (submit !== null) {
  submit.addEventListener("submit", function (event) {
    //this is submit button's action
    event.preventDefault();

    // created object
    var nUser = {};
    var form = new FormData(submit);

    form.forEach(function (value, name) {
      nUser[name] = value;
      // console.log(name);
      // console.log(value);
    });
    console.log(nUser);

    if (
      (nUser["mobile"] &&
        nUser["email"] &&
        nUser["otp"] &&
        nUser["password"]) == ""
    ) {
      alert("Form should be filled properly!");
    } else if (nUser["email"].indexOf("@") <= 0) {
      alert("Email should be valid");
    } else if (
      nUser["email"].charAt(nUser["email"].length - 4) != "." &&
      nUser["email"].charAt(nUser["email"].length - 3) != "."
    ) {
      alert("Email should be valid");
    } else if (isNaN(nUser["mobile"])) {
      alert("Mobile number should be valid");
    } else if (nUser["mobile"].length != 10) {
      alert("Mobile number should be valid and of 10 characters only!");
    } else if (
      nUser["mobile"].charAt(0) != 9 &&
      nUser["mobile"].charAt(0) != 8 &&
      nUser["mobile"].charAt(0) != 7 &&
      nUser["mobile"].charAt(0) != 6
    ) {
      alert("Mobile number should be valid");
    } else if (nUser["password"].length < 5) {
      alert("Password must be between 5 to 20 characters ");
    } else if (nUser["password"].length > 20) {
      alert("Password must be between 5 to 20 characters ");
    } else {
      userList.push(nUser);

      localStorage.setItem("userList", JSON.stringify(userList));

      // this is the alert function which gives alert as pop up message.

      alert("User added successfully");
      print();
      submit.reset();
    }
  });
}

// this is used to register the table id to display the given data in table format.

var tablelistPrint = document.getElementById("user-list");

function print() {
  if (tablelistPrint === null) return false;

  //  map function has been used here to recrese the data
  var tableArray = userList.map(function (value, index) {
    var data = `<tr>
            <th scope="row">${index + 1} </th>
    
            <td>${value.mobile}</td>
            <td>${value.otp}</td>
            <td>${value.email}</td>
            <td>${value.password}</td>
            <td>
            <button class="btn btn-danger btn-sm" onclick="remove(${index})" >
            <i class="fa fa-trash" aria-hidden="true"></i></button>
            <button class="btn btn-primary btn-sm">
            <i class="fa fa-edit" aria-hidden="true"></i></button>
    
            </td></tr>`;
    return data;
  });
  var newString = tableArray.join("");
  tablelistPrint.innerHTML = newString;
  // console.print(tablelistPrint);
}
print();

// this function which is used to remove the data from table and local storage.
function remove(index) {
  var del = confirm("Are you sure?");
  if (del == true) userList.splice(index, 1);

  alert("User Deleted Successfully");
  print();
  localStorage.setItem("userList", JSON.stringify(userList));
}

// Validation using mobile number
// these are the id which is required for login

var mobileLogin = document.getElementById("mobileLogin");
var emailLogin = document.getElementById("emailLogin");

mobileLogin.addEventListener("click", function () {
  mobileValid();
  mobileLogin.reset();
});

emailLogin.addEventListener("click", function () {
  emailValid();
  emailLogin.reset();
});

// Function to login via mobile and otp

function mobileValid() {
  var mobile = document.getElementById("mobilenum"); //registering all the required variables id's for mobile and otp
  mobile = mobile.value;
  otp = document.getElementById("otp");
  otp = otp.value;
  let userdata = [];
  userdata = JSON.parse(localStorage.getItem("userList"))
    ? JSON.parse(localStorage.getItem("userList"))
    : [];

  if ((mobile && otp) == "") {
    alert("Invalid");
  } else if (
    userdata.some((v) => {
      return v.mobile == mobile && v.otp == otp;
    })
  ) {
    alert("Success");
  } //in case of both the true conditions.......success message is shown
  else {
    alert("Invalid");
  }
} //in case of both the false conditions.......invalid message is shown

//var formSubmit1=document.getElementById("submit2");

// Function to Login via email and password

function emailValid() {
  var email = document.getElementById("emailid");
  var email = email.value; //registering all the required variables id's
  var password = document.getElementById("pass");
  var password = password.value;
  var user_data1 = [];

  user_data1 = JSON.parse(localStorage.getItem("userList"))
    ? JSON.parse(localStorage.getItem("userList"))
    : [];

  if (
    user_data1.some((v) => {
      return v.email == email && v.password == password;
    })
  ) {
    //verifying stored email and password
    alert("Success");
  } //in case of true condition...success message is displayed
  else {
    alert("Invalid");
  } //in case of false condition...Invalid message is displayed
}

$(function () {
  $("#signUp").on("click", function () {
    $("#submit").show();
    $("#login").prop("checked", false);
    $("#mobileSubmit").hide();
    $("#emailSubmit").hide();
    $(".hide").hide();
  });

  $("#login").on("click", function () {
    $("#submit").hide();
    $("#signUp").prop("checked", false);
    $(".hide").show();
    $("#mobileSubmit").show();
    $("#emailSubmit").hide();
  });

  $("#mobText").on("click", function () {
    $("#submit").hide();
    $("#emailText").prop("checked", false);
    $("#mobileSubmit").show();
    $("#emailSubmit").hide();
  });

  $("#emailText").on("click", function () {
    $("#submit").hide();
    $("#mobText").prop("checked", false);
    $("#mobileSubmit").hide();
    $("#emailSubmit").show();
  });

  $("#mobileSubmit").hide();
  $("#emailSubmit").hide();
  $(".hide").hide();
});
