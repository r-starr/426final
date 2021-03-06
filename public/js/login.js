//import "./user_accounts/users.js";
//import {accountData}  from  '../../website/user_accounts/users.js';
//const {publicStore} = require('../data/DataStore');

window.onload = function() {
    $(document).on("click", "#createAccount", renderAccountForm);
    $(document).on("click", "#login", login);
    $(document).on("click", "#submit", createAccount);
    $(document).on("click", "#cancel", renderLogin);
}

export async function login() {
    const result = await axios({
        method: 'post',
        url: '/api/users/login',
        data: {
            "username": $("#username")[0].value,
            "password": $("#password")[0].value,
        },
    }).then((response) => {
        localStorage.setItem('jwt', response.data.jwt);
        window.location.href = "/home";
    }).catch(() => {
        window.alert("Failed to login!");
    });
}

function renderAccountForm(event) {
    $("#section").empty();
    $("#section").append(`
  <div class="container">
  <div class="card">
  <div class="card-content">
    <div class="field">
      <label class="label">First Name</label>
      <div class="control">
        <input class="input is-hovered" type="text" id = newFirstName placeholder="Jane">
      </div>
    </div>

    <div class="field">
      <label class="label">Last Name</label>
      <div class="control">
        <input class="input is-hovered" type="text" id = "newLastName" placeholder="Smith">
      </div>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input class="input is-hovered" type="text" id = "newEmail" placeholder="jane.smith@gmail.com">
      </div>
    </div>

    <div class="field">
      <label class="label">Username</label>
      <div class="control">
        <input class="input is-hovered" type="text" id = "newUsername" placeholder="jsmith">
      </div>
    </div>
  
    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input class="input is-hovered" type="password" id = "newPassword" placeholder="somethingVerySecure">
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-primary" id="submit">Submit</button>
      </div>
      <div class="control">
        <button class="button is-primary is-light" id="cancel">Cancel</button>
      </div>
   </div>

   </div>
  </div>
  </div>
  `);

    //first name, last name, email, username, password

    // //another button for "create account" to confirm
    // console.log("created an account");
    // let user = document.getElementById("username").value;
    // let pass = document.getElementById("password").value;
    // //console.log(user + " " + pass);
    // createCookie(user, pass);

    //alert("You're new account was created. Welcome, to Gamer Worlde.");
}

function renderLogin() {
    $("#section").empty();
    $("#section").append(`
    <div class="container">
        <div class="card">
            <div class="card-content">
            <div class = "field">
                <label class = "label">Username</label>
                <div class = "control">
                    <input class="input is-hovered" type="text" name="username" id="username" placeholder="Username">
                </div>
            </div>

            <div class = "field">
                <label class = "label">Password</label>
                <div class = "control">
                    <input class="input is-hovered" type="password" name="password" id="password" placeholder="Password">
                </div>
            </div>
            
            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-primary" id="login">Login</button>
                </div>
                <div class="control">
                    <button class="button is-primary is-light" id="createAccount">Create Account</button>
                </div>
            </div>
        </div>
    </div>
  `);
}

async function createAccount() {
    const result = await axios({
        method: 'post',
        url: '/api/users',
        data: {
            "first_name": $("#newFirstName")[0].value,
            "last_name": $("#newLastName")[0].value,
            "email": $("#newEmail")[0].value,
            "username": $("#newUsername")[0].value,
            "password": $("#newPassword")[0].value,
        },
    }).then((response) => {
        localStorage.setItem('jwt', response.data.jwt);
        window.location.href = "/home";
    });
}