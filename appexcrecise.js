let express = require('express')
let app = express()
let port = 3001


app.get('/', (req, res) => {
    res.send('Hello world!')
})



app.listen(port, () => {
    console.log('Example app listen to port 3001')
})


  