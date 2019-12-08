//import "./user_accounts/users.js";
import {accountData}  from  './user_accounts/users.js';
//const {publicStore} = require('../data/DataStore');



const privRoot = new axios.create({
  baseURL: "http://localhost:3000/data/private"
});

async function createUserAccount({user, pass}) {
    return await privRoot.post('/users/', {
        "data": [user, pass],
        "tyspe": "merge"
    }) 
  }

  async function getAllUsers() {
    return await privRoot.get('/users/');
  }
  

function login(event) {
    console.log("logged in");
    console.log(event.data);
    // if (users.js);
    // let posUser = $("#username").value;
    // let posPass = $("#password").value;
    // console.log(posUser);
    // loginConfirmedUser(posUser, posPass);
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


function makeaccount(event) {
    console.log("created an account");
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    console.log(user + " " + pass);
    createCookie(user, pass);
    let newUser = {
      username: user,
      password: pass,
    }
    event.data.push(newUser);
    (async () => {
        await createUserAccount({
          user,
          pass,
        });
        let {data} = await getAllAuthors();
        console.log(data)
     })();
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

$(function () {
    controlMusic();
    $("#login").on("click", null, accountData, login);
    $("#createaccount").on("click", null, accountData, makeaccount);
});