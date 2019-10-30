let log = document.findElementById("login");

log.onclick = function (){
    console.log("log in butotn pressed");
};

function login() {
    console.log("logged in");
}

document.findElementById("createaccount").addEventListener("click", makeaccount);

function makeaccount() {
    console.log("created an account");
}