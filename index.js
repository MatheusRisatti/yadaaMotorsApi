const express = require ('express')
// import express from 'express'

const app = express()

app.use(express.json())

const cars = [
    {
        id: 1,
        name: 'Fusion'
    },
    {
        id: 2,
        name: 'Civic'
    },
    {
        id: 3,
        name: 'Corolla'
    }
]

app.get('/cars', (request, response) =>{
    return response.status(200).json(cars)
} )

app.get('/cars/:id', (request, response) =>{
    const { id } = request.params

    const car = cars.find(car => car.id === Number(id))

    return response.status(200).json(car)
} )

app.post('/cars', (request, response) => {
    const { name } = request.body

    const car = {
        id: cars.length + 1,
        name
    }

    cars.push(car)

    return response.status(201).json(car)
})














app.listen(3333, () => console.log('Server is running'))
