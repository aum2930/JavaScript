const express = require('express')
const blog = require('./routes/blog')  //blog.js access    
const app = express()
const port = 3000

app.use(express.static("Public"))
app.use('/blog', blog) //right blog written is see up in the const blog this is triggering that variable.

app.get('/', (req, res) => {
    console.log("Hey it's a get request");
    res.send('Hello World, this is a get request!')
})//  Retrieve data fetcing htmlfile or images etc

app.post('/', (req, res) => {
    console.log("Hey it's a post request");
    res.send('Hello World!, this is a post request')
}) //  Send data (create or submit)

app.put('/', (req, res) => {
    console.log("Hey it's a put request");
    res.send('Hello World!, this is a put request')
}) // Update (replace) data
//DELETE: Delete data.
// PATCH: Partially update data.

// app.get('/', (req, res) => {
//     console.log("Hey it's a get request");
//     res.send('Hello World, this is a get request!')
// }).post('/', (req, res) => {
//     console.log("Hey it's a post request");
//     res.send('Hello World!, this is a post request')
// }).put('/', (req, res) => {
//     console.log("Hey it's a put request");
//     res.send('Hello World!, this is a put request')
// }) // ^^^^ uncomment this and see how exactly the "chaining of request" the just for the info.



app.get('/index', (req, res) => {
    console.log("Hey it's get request (index.html)");
    // res.send('Hello World!, this is index.html but not the html file')
    res.sendFile('templates/index.html', {root:  __dirname})//to know what is do spell mistake in the templates and run then you will get basically the dirname specifies the path of this directory and then undo the mistake then run. 
})

app.get('/api', (req, res) => {
    console.log("Hey it's a get request (api)");
    res.json({a:1, b:2, c:3, d:4, "name":["harry","jarry"]})
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})