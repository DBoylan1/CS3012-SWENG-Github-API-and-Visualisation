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
    userDetails = JSON.stringify(userDetails);
    document.getElementById("userjson").innerHTML = "<p>HTML URL : " + userDetails.html_url +
        "<p>User Details : " + userDetails + "</p>"; 
    var repos = getReposForUser(username);
    repos = JSON.stringify(repos);
    document.getElementById("userjson").innerHTML = "<p>HTML URL : " + userDetails.html_url +
    "<p>User Details : " + repos + "</p>"; 
    
    d3.select("body").selectAll("svg").remove();
    
   for (var i = 0; i < repos.length; i++){
        var obj = repos[i];
        var repoName = obj["name"];
        console.log("Repo Name : " + repoName);
       // createContributionChart(username, repoName);
    }
}

function getReposForUser(username) {
    var apiUrl = "https://api.github.com/users/" + username + "/repos";
    return getGithubApiResponse(apiUrl);
}

function getContributorsForRepo(username, repo) {
    var apiUrl = "https://api.github.com/repos/" + username + "/" + repo + "/contributors";
    return getGithubApiResponse(apiUrl);

}
