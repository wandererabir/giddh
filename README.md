# GIDDH Project
It is a app where user can store user data in form of a table and perform CRUD operations on them.

The beta version is deployed in : https://giddh-walkover.herokuapp.com/

## Appendix 
1. [Tech Stack](#tech-stack)
2. [Team Intro](#team-intro)
3. [Balsamiq designs](#balsamiq-designs)
4. [Sudo Code](#sudo-code)
5. [Routes](#routes)
6. [Running Locally](#running-locally)
7. [Database/API](#database)

## Tech Stack
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)<br />
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)<br />
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## Team Intro
### Abir Paul
* Login / SignUp using Auth0
* User data retrieve using Auth0
* Frontend designs of the page
* Creating CRUD operations for each data
* Hosting and deployment 

### Aman Shrivastava
* Database building using JSON Server
* Creating Table for user data
* Creating webhooks whenever a opertion is executed
* Creating history of each data
* Project documentation 

## Balsamiq designs

## Sudo Code
#### Log In/ Sign Up using auth0
 
       `IF userlogin = true
          API call to get user data
          Assign data to variables
          Re-route user to dashboard
       
        ELSEIF userlogin failed 
         Don't allow to get user data
         Re-route user to home page 
        
        ELSE
         Sign Up using Google or email
         Meet all the validations
         API creates a user metadata
         Re-route user to dashboard`

#### LogIn & Logout Button
 
       `IF userlogin = true
          Login btn changes to Logout btn
          User metadata is fetched into Profile page
       
        ELSEIF userlogin = false 
         Login btn remains
         Profile page remains blank`

#### Database 
 
      `Load Users :
       IF data exists
          Fetch the data 
          Place it in a form of a table
          
        ELSE 
          Keep the table blank
          
       Add Users :
       IF server exists
          Fetch the data from user 
          POST it to the server
          Notify the user with message
          
        ELSE 
          Don't allow to add the data
        
       Edit Users :
       IF data exists
          Fetch the data from server
          GET the data in the inputarea
          Edit cnhanges done by the user
          POST the data
          
        ELSE 
          Don't allow to edit operation
          Show a error message
          
       Delete Users :
       IF data exists
          Fetch the data id
          Remove the data from the server
          
        ELSE 
          Don't allow to delete operation
          Show a error message`
