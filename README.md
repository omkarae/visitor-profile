
# Welcome to this repo!

## Visitor-Profiling


## This is a web app was created to profile your website visitors and get some insights about it.
- When a user visits a particular website, the HTTPS/HTTP request consists an array of IP addresses.
- This array consists all the IP addresses from where the request was routed.
- Since private IP addresses are allocated by ISP and are of no use for the profiling.
- I extracted the first public IP address from this array.
- When we finally get the Public IP of the user, that IP address is used to find the approximate location of the user using IP-API.
- This approximate location is displayed on the webpage and is stored on a remote MongoDB database.
- This data can be used to generate insights, to give users more relevent experience.
- This web app is hosted at <a href="https://ip.cyclic.app/"> Click Here </a>



## Screenshots
<p align="center>
  <img src="https://github.com/omkarae/visitor-profile/blob/main/1.png" alt="UI" height=200px></img>
</p>



## Technologies/Packages used - 
- NodeJS
- ExpressJS
- Mongoose
- MongoDB
- ejs
- IP-API
