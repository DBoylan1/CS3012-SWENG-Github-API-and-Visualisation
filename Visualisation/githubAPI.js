
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
   //userDetails = JSON.stringify(userDetails, null, 2);
    var repos = getReposForUser(username);
    repos = JSON.stringify(repos, null, 2);
    document.getElementById("userjson").innerHTML =  "<p>Username : " + userDetails.login + "</p>" + "<p>Created : " + userDetails.created_at + "</p>"
    + "<p>URL : " + userDetails.url + "</p>" + "<p>Repos URL : " + userDetails.repos_url + "</p>"  + "<p>Number of Public Repos : " + userDetails.public_repos + "</p>"
    + "<p>Updated : " + userDetails.updated_at + "</p>"; 
    //var repos = getReposForUser(username);
    //repos = JSON.stringify(repos);
  
    }


function getReposForUser(username) {
    var apiUrl = "https://api.github.com/users/" + username + "/repos/full_name";
    return getGithubApiResponse(apiUrl);
}


