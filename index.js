const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.use(express.static('build'))

morgan.token('data', function getId (req) {
  return JSON.stringify(req.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4
  }
];

const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
}

const generateNewPerson = (name, number) => ({ name, number, id: getRandomInt(100000)});

const checkNewPerson = ({name, number}) => {
  let errors = {}
  const duplicate = persons.find(person => person.name === name);
  
  if (name === '' || name === undefined) {
    errors = {
      ...errors,
      name: 'Name must be included'
    } 
  }

  if (number === '' || number === undefined) {
    errors = {
      ...errors,
      number: 'Number must be included'
    } 
  }

  if (duplicate) {
    errors = {
      ...errors,
      name: 'Name must be unique'
    } 
  }
  
  return errors
}

app.get('/info', (req, res) => {
  res.send(
    `
      <p>Phonebook has infor for ${persons.length} people</p>
      <p>${new Date()}</p>
    `
  );
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find(person => person.id === id)
  if(person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

app.post('/api/persons', (req, res) => {
  const person = req.body
  const newPerson = generateNewPerson(person.name, person.number);
  const errors = checkNewPerson(newPerson);
  if (Object.keys(errors).length) {
    res.status(404).json(errors)
  } else {
    persons = [...persons, newPerson]
    res.json(newPerson);
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter(person => person.id !== id)
  res.status(204).end()
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})