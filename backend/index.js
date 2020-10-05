const { response } = require('express')
/*
*   dependencies
*/
const express = require('express')


/*
*    config - express
*/
const app = express()
const port = 3000


/*
*    endpoints
*/
/*app.get('/', (request, response) => {
  response.send('Hello World! xD xD')
  console.log("test 1 2 1 2")
}),*/
app.get('/posts', (request, response) => {
    let posts = [
        {
            caption: 'essai toto',
            location: 'chez toto'
        },
        {
            caption: 'essai tata',
            location: 'chez tata'
        }       
    ]
    response.send(posts)
})


/*
*    running the app
*/
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

