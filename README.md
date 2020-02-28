# The Cooper Challenge
### Author  
[Paulo Swärdblad](https://github.com/pauloswardblad)  
[Kayla Woodbury](https://github.com/kaylawoodbury)
## Built with  
**Front End:** React v.16.12.0, CSS  
**Back End:** Rails 6.0.2.1   
**Testing frameworks:** Cypress, Enzyme  
**Deployed at:** [Netlify](https://kpcooper.netlify.com/) and [Heroku](https://www.heroku.com/).
## The code   
This project is the client facing side of our Cooper Test application. Our repositories for the Cooper API built in Rails can be found at the following links for [Paulo](https://github.com/pauloswardblad/cooper_api) and [Kayla](https://github.com/kaylawoodbury/cooper_api).
## Getting started
### Dependencies  
* Yarn
* React
* Enzyme
* Cypress
* Axios
* Chart.js
* react-chartjs-2 
### Setup   
To test this application, fork the repo to your own GitHub account and clone it to your local workspace. </br>
*Note:*Be sure to set up backend api first (noted above), in order to fully interact with the application. 
Install all of the dependencies:    
```
$ yarn install
```  
Run the unit tests:  
```
$ yarn test
```  
Start cypress and run the feature tests:  
```
$ yarn run cy:open
```
Start the backend api (if already configured) in a separate terminal (only run this command for the Rails application):
```
$ rails s
```
Start the React application and run it on your local host:
```
$ yarn start
```
### Exploring the app online or in local host  
Use the following test-credentials to test interaction with the application:  
**Email:** `user@mail.com`  
**Password:** `password`
## Updates/Improvements   
- Finish implementing the BMI calculator on the client side and add the save/retrieve data functionality to it 
- Add additional styling
- Add registration button 
## License  
[MIT-license](https://en.wikipedia.org/wiki/MIT_License)
### Acknowledgement  
Material provided by [Craft Academy](https://craftacademy.se). 