const {v4} = require('uuid')

let usersDB = [
    {id: v4(), name: 'Andy', age: 30}
]

const getUsers = ((req, res) => {
    res.send(usersDB)
})

const createUser = ((req, res) => {
    const user = req.body
    usersDB.push({id: v4(), ...user})
    res.send(`User with name: ${user.name} was created!!!`)
})

const getUser = ((req, res) => {
    const {id} = req.params
    const user = usersDB.find(user => user.id === id)

    if (user) {
        res.send(user)
    } else {
        res.send(`User with id: ${id} not found!`)
    }
})

const updateUser = ((req, res) => {
    const {id} = req.params
    const {name, age} = req.body

    if (id) {
        const user = usersDB.find(user => user.id === id)

        if (user) {
            name ? user.name = name : null
            age ? user.age = age : null

            res.send(`User updated!`)
        } else {
            res.send(`User with id: ${id} not found!`)
        }
    }
})

const deleteUser = ((req, res) => {
    const {id} = req.params
    const {name} = usersDB.find(user => user.id === id)
    usersDB = usersDB.filter(user => user.id !== id)
    res.send(`${name} was deleted!`)
})

module.exports = {getUsers, createUser, getUser, updateUser, deleteUser}