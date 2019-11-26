<<<<<<< HEAD
function getGithubApiResponse(apiUrl){
    //console.log(apiUrl);
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",apiUrl,false);
    Httpreq.send(null);
    x = JSON.parse(Httpreq.responseText);
    //console.log(x);
    return x;
}

function getUserDetails() {
    var username  = document.getElementById("username_inp").value;
    var apiUrl = "https://api.github.com/users/" + username;
    var userDetails = getGithubApiResponse(apiUrl);
    userDetails = JSON.stringify(userDetails, null, 2);
    document.getElementById("userjson").innerHTML =  "<p>User Details : " + userDetails + "</p>"; 
    var repos = getReposForUser(username);
    repos = JSON.stringify(repos);
  
    }


function getReposForUser(username) {
    var apiUrl = "https://api.github.com/users/" + username + "/repos";
    return getGithubApiResponse(apiUrl);
}

=======
function getGithubApiResponse(apiUrl){
    //console.log(apiUrl);
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",apiUrl,false);
    Httpreq.send(null);
    x = JSON.parse(Httpreq.responseText);
    //console.log(x);
    return x;
}

function getUserDetails() {
    var username  = document.getElementById("username_inp").value;
    var apiUrl = "https://api.github.com/users/" + username;
    var userDetails = getGithubApiResponse(apiUrl);
    userDetails = JSON.stringify(userDetails, null, 2);
    document.getElementById("userjson").innerHTML =  "<p>User Details : " + userDetails + "</p>"; 
    var repos = getReposForUser(username);
    repos = JSON.stringify(repos);
  
    }


function getReposForUser(username) {
    var apiUrl = "https://api.github.com/users/" + username + "/repos";
    return getGithubApiResponse(apiUrl);
}

>>>>>>> 27591909fd61230e27d556953710554eb4d737ff
