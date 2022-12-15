let express = require('express')
let moment = require('moment')
let app = express()
let port = 3003

let models = require ('./models/index')

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello world!')
})

function logUrl(req, res, next) {
    console.log('Request URL ', req.originalUrl)
    next()
}

app.get('/blog', logUrl, (req, res) => {
    res.json({message: "Blog list", data: [{ id:1, title: "Makanan sehat" }, { id: 2, title: "Minuman sehat" }]})
})
app.get('/blog/new', (req, res) => {
    res.send('<form method="post" action="/blog">Create<input name="title" type="text" /><input type="submit" /></form>')
})
app.post('/blog', (req, res) => {
    console.log(req.body)
    res.send('New blog created! Title: ' + req.body.title)
})
app.get('/blog/:id', (req, res) => {
    res.send('Detail blog ' + req.params.id)
})
app.get('/blog/:id/edit', (req, res) => {
    res.send('<form>Edit<input type="text" /><input type="submit" /></form>')
})
app.put('/blog/:id', (req, res) => {
    res.send('Update ' + req.params.id)
})
app.delete('/blog/:id', (req, res) => {
    res.send('Delete ' + req.params.id)
})

//////////////////////// user dan product /////////////////////

app.get('/user', logUrl, (req, res) => {
    let findUser =  models.Users.findAll().then(function(result) { // untuk menampilkan semua data  pakai findAll
        if(result.length < 1) {
            res.json({message: "Data not available"})
        }

        res.json(result)
    })
    // res.json({message: "user list", data: [{ id:1, title: "Makanan sehat" }, { id: 2, title: "Minuman sehat" }]})
})
app.get('/user/:id', (req, res) => { 
    let findUser = models.Users.findOne({ where: {id: req.params.id} }).then(function(result) { // untuk menampilkan id setiap table pakai findOne
        if(result.length < 1) {
            res.json({message: "Data not available"})
        }   

        res.json(result)
    })
    // res.send('Detail user ' + req.params.id)
})

app.post('/user', (req, res) => {
    let createUser = models.Users.create(req.body)
    if(!createUser) {
        console.log('Error create user')
    }

    res.json(req.body)
    // res.send('New user created! Title: ' + req.body.title)
})

app.put('/user/:id', (req, res) => {
    res.send('Update user ' + req.params.id)
})
app.delete('/user/:id', (req, res) => {
    res.send('Delete user ' + req.params.id)
})
let json = {
    "products": [
      {
        "id": 1,
        "title": "Susu sapi",
        "description": "susu sapi UHT",
        "price": 10000,
        "created_at": "2022-01-01 10:00"
      },
      {
        "id": 2,
        "title": "Susu Kambing",
        "description": "susu kambing murni",
        "price": 20000,
        "created_at": "2022-01-05 10:00"
      },
      {
        "id": 3,
        "title": "Susu formula",
        "description": "susu formula",
        "price": 5500,
        "created_at": "2022-01-07 10:00"
      }
    ]
  }
  

app.get('/product', logUrl, (req, res) => {
    let data = []
    for (let index = 0; index < json.products.length; index++) {
        const element = json.products[index];
        element.created_at = moment(element.created_at).toString()
        data.push(element)
    }
    res.json(data)
})
app.get('/product/:id', (req, res) => {
    res.send('Detail product ' + req.params.id)
})
app.post('/product', (req, res) => {
    res.json(req.body)
    // res.send('New product created! Title: '+ req.body.title + 'Quantity: '+ req.body.Qty)
})
app.put('/product/:id', (req, res) => {
    res.send('Update ' + req.params.id)
})
app.delete('/product/:id', (req, res) => {
    res.send('Delete ' + req.params.id)
})

app.get('/user/:id/product', (req, res) => {
    res.send('Detail user ' + req.params.id + 'product list')
})

app.listen(port, () => {
    console.log('Example app listen to port 3003')
})

