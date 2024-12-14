const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")


//middlewares
// app.use(express.static("public"))
app.use('/blog', blog)
//SYNTAX OF MIDDLEWARE
// const myLogger = function (req, res, next) {
//     console.log('LOGGED')
//     next()
//   }

// Middleware 1 - Logger for our application 
app.use ((req, res, next) => {
    // console.log('m1'); //uncomment later


    console.log(req.headers);  // will print all the headers when it this will hit 
    req.harry = "harry bhai" // by doing this i am adding harry in the req object. if i add this to the /about then see what happesn after reaching to /about by this you can modify the request.
    fs.appendFileSync("loggs.txt", `${Date.now()} is a ${req.method}\n`) // uncomment and see this how we use middleware for logging our info like when server get called and all in the form of timestamp and the request name in all new txt file whch will automatically update when it will log by reloading the page again and again the get request is hit and our logs are being printed in the loggs.txt with the help of fs module which is built in module in the node.js. you can convert the timestamp using the date object.
    console.log(`${Date.now()} is a ${req.method}`); // this shows the real use of the  middleware saying that when any request is hit tell the date(timestamp) and the req.method means which type of request was there get and all.

    // res.send("data") // never send response in middleware if you do so then you this req will be run m1 will be hit but then it will stop form here itself. it will not go down and check the m2 and also the routes handler if you dont want error and send the response then you can but then you can by commenting the next() below. but this is not recommended.

    next() // also if you comment out the n only while keep the comment on the res.send ignoring that that is there or not you will see one main thing happening that on the browser side you will see the browser loading keep loading and buffering this is because that you had comment out the next() so in the backend the request will come and it will just sotp in the m1 the m1 will be hit you will see on the terminal but m2 wont and also the rest routes handler will not. this is because you had commented the next() in the m1 so the the backend request will not be able to reach to the rest m2 and the routes handlers it will stop at m1 only. 
})

// Middleware 2
app.use ((req, res, next) => {
    console.log('m2');
     req.harry = "rohan bhai" // same work as html in running the code in ordering which ever code is written later that will be considered in this case the Middleware 1 was having this same req.harry and it is active still this will run you see check the /about rohan bhai will printed.
    next()
})


//routes handler
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Hello about!' + req.harry)
})
app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})