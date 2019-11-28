# CS3012-SWENG-Github-API-and-Visualisation
This repository contains the assessment of work for the  third year TCD computer science module CS3012

## Table of contents
* [Introduction](#Introduction)
* [Technologies](#Technologies)
* [Setup](#Setup)
* [Demo](#Demo)

# Introduction
The Access Folder contains the assignment to integrate the Github API to retrieve details of a logged in user. The Visualisation Folder contains the folder to visualise data from github. The data I have chosen to visualise is the contributions of different users to the same repository. Once the webpage is launched in the browser, you can enter a username and bar charts will be displayed for each of their public repos and you will be able to compare the amount of contributions made by different users to those repos.

# Technologies
Both of these projects were made using HTML, Javascript and CSS.
To get the details of a given user, I wrote a function to get the user details using the github API https://api.github.com/users/" + username.
The d3js library https://d3js.org/ was used to implement graphs. To obtain the data used in the graphs I made to functions: One to return the repos of a given user and the second to return the contributors of those repos. This data was obtained by using the Github API https://api.github.com. 

# Setup
To view both of these webpages in the browser download each folder and laucnh the HTML file in your browser of choice.

# Demo
![alt text] (https://github.com/DBoylan1/CS3012-SWENG-Github-API-and-Visualisation/blob/master/Screenshot%20(18).png)
![alt text] (https://github.com/DBoylan1/CS3012-SWENG-Github-API-and-Visualisation/blob/master/Screenshot%20(19).png)
![alt text] (https://github.com/DBoylan1/CS3012-SWENG-Github-API-and-Visualisation/blob/master/Screenshot%20(20).png)
