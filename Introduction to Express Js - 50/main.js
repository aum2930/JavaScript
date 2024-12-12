const express = require('express')
const app = express()
const port = 2007

app.use(express.static('public'))

//this is basically a function only 
// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello world')
})
app.get('/about', (req, res) => {
  res.send('Hello About us!')
})
app.get('/contact', (req, res) => {
  res.send('Hello Contact us!')
})
app.get('/blog', (req, res) => {
  res.send('Hello Blog!')
})
app.get('/blog/:slug', (req, res) => {
  //to fetch {slug} form db
  // console.log(req.params); will output the object param and the data in it {slug: 'intro-to-harry'}
  // console.log(req.query); this will print the query object written in the url after the ?mode=dark and all so it will store like {mode: 'dark'}
  res.send(`intro-to-${req.params.slug}`) 
})


// app.get('/blog/intro-to-js', (req, res) => {
//   //logic to fetch intro of js form db
//   res.send('Hello this is the blog about js!')
// })
// app.get('/blog/intro-to-python', (req, res) => {
//   //logic to fetch intro of python form db
//   res.send('Hello this is the blog about python!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})