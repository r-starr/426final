//import "./user_accounts/users.js";
//import {accountData}  from  '../../website/user_accounts/users.js';
//const {publicStore} = require('../data/DataStore');
$(function () {
  $("#login").on("click", null, login);
  $("#createaccount").on("click", null, makeaccount);
});

function login() {
  console.log("logged in");
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  console.log(user, pass);

  if(loginConfirmedUser(posUser, posPass)) {
    //proceed with login
  }
  //what do do when you can't login
}

export async function loginConfirmedUser(posUser, posPass) {
  const result = await axios({
    method: 'get',
    url: '/api/games'
  });
  if (result.data.username.includes[posUser]) {
    return true;
  }

  return false;
}


function makeaccount(event) {
  console.log("created an account");
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  console.log(user + " " + pass);
  createCookie(user, pass);

  const result = await axios({
    method: 'post',
    url: '/api/users',
    data: {
      "first_name": null,
      "last_name": null,
      "email": null,
      "username": null,
      "password": null,
    },
  });

  alert("You're new account was created. Welcome, to Gamer Worlde.");
}

function createCookie(user, pass) {
  // special characters (spaces), need encoding
  let name = user;
  let value = pass;
  // encodes the cookie as my%20name=John%20Smith
  document.cookie = encodeURIComponent(name) + '-' + encodeURIComponent(value);
  alert(document.cookie);
}

function controlMusic() {
  let music = document.getElementById("music");
  music.volume = 0.0;
}