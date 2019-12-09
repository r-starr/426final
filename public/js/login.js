//import "./user_accounts/users.js";
//import {accountData}  from  '../../website/user_accounts/users.js';
//const {publicStore} = require('../data/DataStore');

$(function () {
  $("#login").on("click", null, login);
  $("#createaccount").on("click", null, makeAccountForm);
});

function login() {
  console.log("logged in");
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  console.log(user, pass);

  if(loginConfirmedUser(posUser, posPass)) {
    //redirect to homepage
  }
  //what do do when you can't login
  alert("Unable to login. User does not exist.");
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



function makeAccountForm(event) {
  //this is where we replace the login form with the create account form

  //another button for "create account" to confirm
  console.log("created an account");
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  //console.log(user + " " + pass);
  createCookie(user, pass);

  alert("You're new account was created. Welcome, to Gamer Worlde.");
}

function makeAccount () {
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
  }).then(() => {
    $message.html('<span class="has-text-success">Success! Account created.</span>');
  }).catch(() => {
    $message.html('<span class="has-text-danger">Something went wrong :/.</span>');
  });
}


function createCookie(user, pass) {
  // special characters (spaces), need encoding
  let name = user;
  let value = pass;
  // encodes the cookie as my%20name=John%20Smith
  document.cookie = encodeURIComponent(name) + '-' + encodeURIComponent(value);
  //alert(document.cookie);
}


// function createCookie(user, pass) {
//   // special characters (spaces), need encoding
//   let name = user;
//   let value = pass;
//   // encodes the cookie as my%20name=John%20Smith
//   document.cookie = encodeURIComponent(name) + '-' + encodeURIComponent(value);
//   alert(document.cookie);
// }

// function controlMusic() {
//   let music = document.getElementById("music");
//   music.volume = 0.0;
// }