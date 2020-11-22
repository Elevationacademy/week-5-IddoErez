const express = require('express')
const app = express()
const path = require('path')
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]


app.get('/priceCheck/:name', (req, res) => {
    let productName = req.params.name
    for (let product of store) {
        if (product.name === productName) {
            res.send({ price: product.price })
            return
        }
    }
    res.send({ price: null })
})

app.get('/buy/:name', (req, res) => {
    let productName = req.params.name
    for (let product of store) {
        if (product.name === productName) {
            product.inventory -= 1
            res.send({ price: product.price, newInventory: product.inventory, productName: product.name })
        }
    }
})



const port = 3000
app.listen(port, function () {
    console.log(`server is up and running smoothly`)
})
