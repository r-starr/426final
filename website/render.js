





function login() {
    console.log("logged in");
}

function makeaccount() {
    console.log("created an account");
}

$(function () {
    $("#login").on("click", login);
    $("#createaccount").on("click", makeaccount);
});