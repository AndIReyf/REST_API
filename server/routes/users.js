const router = require('express').Router()
const {getUsers, createUser, getUser, updateUser, deleteUser} = require("../controllers/users")

router.get('/', getUsers)
router.post('/', createUser)
router.get('/:id', getUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router