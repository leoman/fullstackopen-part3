const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url =
  `mongodb+srv://fullstackopen:${password}@cluster0-lu1eo.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const saveNewPerson = (name, number) => {
  const person = new Person({
    name,
    number,
  })

  person.save().then(response => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
}

const getAllPersons = () => {
  Person.find({}).then(result => {
    console.log('phonebook:')
    result.forEach(({ name, number }) => {
      console.log(`${name} ${number}`)
    })
    mongoose.connection.close()
  })
}

if(name && number) {
  saveNewPerson(name, number)
} else {
  getAllPersons()
}