const express = require('express')
const router = express.Router()

const {createPerson, getPeople, getAPerson, getPerson, deletePerson, updatePerson} = require('../controller/auth')

router.post('/', createPerson)
router.get('/getPerson' ,getPeople)
router.get('/:param', getPerson)
router.delete('/:param', deletePerson)
router.patch('/:id', updatePerson)


module.exports = router