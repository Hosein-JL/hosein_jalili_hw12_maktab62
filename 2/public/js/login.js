$(document).ready(function() {
    $('#login-btn').click(loginBtnClick);
});

function loginBtnClick() {
    if ($('#username').val() && $('#password').val()) {
        let data = {
            username: $('#username').val(),
            password: $('#password').val()
        }
        $('#loginNecessary').css('display', 'none')
        $('#loginErrorText').css('display', 'none');
        $.ajax({
            type: "POST",
            url: "/login",
            data,
            success: function(response) {
                location.replace(`/user/${data.username}`)
            },
            error: function(err) {
                $('#loginErrorText').text(err.responseJSON.message).css('display', 'block');
            }
        });
    } else {
        $('#loginNecessary').css('display', 'block')
    }
}