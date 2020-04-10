const express = require('express') // this loads the express library into this file

const app = express()

const DOMAIN = 'localhost' // loopaddress. All requests made here will go out and back into your computer
const PORT = 3000 // most ports between 1-*65000 will work

// GET "/"
app.get('/', (req, res) => {
  // req is a object that represents the current HTTP Request being made to your app
  // res is a object with properties and methods used to create a response to a request
  res.send("Hello World")
})

app.listen(PORT, DOMAIN, () => {
  // when the app starts listening this callback gets invoked
  console.log(`Server is listening on ${DOMAIN}:${PORT}`)
})
