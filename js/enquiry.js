$(function () {
  var data = localStorage.getItem("enquiryList");
  var enquiryList = data === null ? [] : JSON.parse(data);

  $(document).on("click", ".remove", function () {
    var index = $(this).data("id");
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover data",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        enquiryList.splice(index, 1);
        localStorage.setItem("enquiryList", JSON.stringify(enquiryList));
        printEnquiry();

        swal("deleted successfully!", {
          icon: "success",
        });
      }
    });
  });

  printEnquiry();

  function printEnquiry() {
    var list = enquiryList
      .map(function (enquiry, index) {
        return `<tr>
                    <td>${index+1}</td>
                    <td>${enquiry.name}</td>
                    <td>${enquiry.email}</td>
                    <td>${enquiry.mobile}</td>
                    <td>${enquiry.city}</td>
                    <td>${enquiry.comment}</td>
                    <td>
                        <button class="remove" data-id="${index}">Delete <i class="fa fa-trash" aria-hidden="true"></i></button>
                    </td>
                </tr>`;
      })
      .join("");
    $("#tableBody").html(list);
  }
});
