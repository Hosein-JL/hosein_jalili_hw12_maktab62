$(document).ready(function () {
  $("#signup-btn").click(signupBtnClick);
});

// https://stackoverflow.com/questions/63494947/get-value-from-radio-button-inputname-genderchecked-returns-null

function signupBtnClick() {
  if (
    $("#username").val() &&
    $("#password").val() &&
    $("#email").val() &&
    $('input[name="gender"]:checked').val()
  ) {
    let data = {
      fName: $("#fName").val(),
      lName: $("#lName").val(),
      username: $("#username").val(),
      password: $("#password").val(),
      email: $("#email").val(),
      gender: $('input[name="gender"]:checked').val(),
      isLoggedIn: false,
    };
    $("#signupNecessary").css("display", "none");
    $("#errorText").css("display", "none");
    $.ajax({
      type: "POST",
      url: "/signup",
      data,
      success: function (response) {
        // console.log(response);
        location.replace("/");
      },
      error: function (err) {
        $("#errorText").text(err.responseJSON.message).css("display", "block");
      },
    });
  } else {
    $("#signupNecessary").css("display", "block");
  }
}
