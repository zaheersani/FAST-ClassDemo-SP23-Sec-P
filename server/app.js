const express = require('express')
const app = express()

const users = require('./users.json')

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Default route')
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/users/:id/todos/:userid', (req, res) => {
    let { id } = req.params;
    res.send(users.find(u => u.id == id))
})

app.post('/users', (req, res) => {
    let user = req.body
    res.status(201).send(user)
})

app.listen(3000, () => {
    console.log('Express server running on port 3000')
})