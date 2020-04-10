const express = require('express') // this loads the express library into this file

const app = express()

// setup Express config
app.set('view engine', 'ejs') // tell express whenever we render a view it should be using EJS as the engine to create the view. **Make sure you've installed ejs with `npm install ejs`
app.set('views', 'templates') // tell express our view templates sit in a directory called "templates". By default express will think the views are inside a directory called "views" (this is convention too)

const DOMAIN = 'localhost' // loopaddress. All requests made here will go out and back into your computer
const PORT = 3000 // most ports between 1-*65000 will work

// GET "/"
app.get('/', (req, res) => {
  // req is a object that represents the current HTTP Request being made to your app
  // res is a object with properties and methods used to create a response to a request

  // res.render() is used to render a template. It accepts two arguments
  // 1) is the path of the view (ejs file) from the "views" directory
  res.render('welcome')
})

app.listen(PORT, DOMAIN, () => {
  // when the app starts listening this callback gets invoked
  console.log(`Server is listening on ${DOMAIN}:${PORT}`)
})
