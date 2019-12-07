
import "./user_accounts/users.js";
import {accountData} from  './user_accounts/users.js';






function login() {
    console.log("logged in");
    if (users.js);
    let posUser = $("#username").value;
    let posPass = $("#password").value;
    console.log(posUser);
    loginConfirmedUser(posUser, posPass);

    return false;
}

export async function loginConfirmedUser(posUser, posPass) {
    const result = await axios({
        method: 'post',
        url: 'http://localhost:3000/account/create',
        params: {
            name: posUser,
            pass: posPass,
        },
      });
      return result.status;
}


function makeaccount(accountData) {
    console.log("created an account");
    
    accountData.push(accountData);

    return false;
}

function controlMusic() {
    let music = document.getElementById("music");
    music.volume = 0.0;
}

$(function () {
    controlMusic();
    $("#login").on("click", login);
    $("#createaccount").on("click", makeaccount);
});