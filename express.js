let express = require('express')
let app = express()
let port = 3000

app.get('/', (req, res) => {
    res.send('Hello world!')
})

function logOriginalUrl (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}


app.get('/blog', logOriginalUrl, (req, res) => {
    res.send('Blog list')
})

app.get('/blogg', (req,res) => {
    res.json({message: "blog list", data:[{ id:1, tittle: "makanan sehat"},{ id:2, title: "minuman sehat"}]})
})

app.get('/blog/new', (req, res) => {
    res.send('<form method="post" action="/blog">Create<input name="title" type="text" /><input type="submit" /></form>')
})
app.post('/blog', (req, res) => {
    console.log(req.body)
    res.send('New blog created! Title: ' + req.body)
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
    res.send('Update ' + req.params.id)
})


app.listen(port, () => {
    console.log('Example app listen to port 3000')
})
