require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const Person = require('./models/person')

app.use(cors())
app.use(express.json())

app.use(express.static('build'))

morgan.token('data', function getId (req) {
  return JSON.stringify(req.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))

app.get('/info', (req, res) => {
  Person.find({}).then(people => {
    res.send(
      `
        <p>Phonebook has info for ${people.length} people</p>
        <p>${new Date()}</p>
      `
    )
  })
})

app.get('/api/persons', (req, res, next) => {
  Person.find({}).then(people => {
    res.json(people.map(person => person.toJSON()))
  }).catch(error => next(error))
})

app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id).then(person => {
    if (person) {
      res.json(person.toJSON())
    } else {
      res.status(404).end()
    }
  }).catch(error => next(error))
})

app.post('/api/persons', (req, res, next) => {
  const name = req.body.name
  const number = req.body.number
  const person = new Person({
    name,
    number,
  })

  person
    .save()
    .then(response => response.toJSON())
    .then(savedAndFormattedNote => res.json(savedAndFormattedNote))
    .catch(error => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {
  const name = req.body.name
  const number = req.body.number

  const person = {
    name,
    number,
  }

  Person.findByIdAndUpdate(req.params.id, person, { new: true })
    .then(updatedPerson => {
      res.json(updatedPerson.toJSON())
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).end()
    })
    .catch(error => next(error))
})

const errorHandler = (error, request, response, next) => {
  console.error(error.name)
  console.error(error.message)

  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)

// eslint-disable-next-line no-undef
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})