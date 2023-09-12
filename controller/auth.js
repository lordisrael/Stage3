const Person = require('../model/person')
const mongoose = require('mongoose')
const {StatusCodes} = require('http-status-codes')
const {NotFoundError, BadRequestError, ConflictError} = require('../errors')
const asyncHandler = require('express-async-handler')

const createPerson = asyncHandler(async(req, res) => {
    const {email} = req.body
    const userAlreadyExists = await Person.findOne({email})
    if(!userAlreadyExists) {
        const person = await Person.create(req.body)
        res.status(StatusCodes.CREATED).json(person)
    } else {
        throw new ConflictError('Email already Exists')
    }
})

const getPeople = asyncHandler(async (req, res) => {
    const people = await Person.find()
    res.status(StatusCodes.OK).json({people})
})

// const getAPerson = asyncHandler(async(req, res) => {
//     const {id: personId} = req.params
//     const getAPerson = await Person.findOne({_id: personId})

//     // const personId = /^[0-9a-fA-F]{24}$/.test(param);
//     // let person;
//     // if (personId) {
//     //     // If it's an ObjectId, find by ID
//     //     person = await Person.findById(param);
//     //   } else {
//     //     // If it's a string, find by name
//     //     person = await Person.findOne({ name: param });
//     // }

//     if(!getAPerson){
//         throw new NotFoundError(`Person with id: ${personId} is not found`)
//     }
//     res.status(StatusCodes.OK).json(getAPerson)
    
// })

const getPerson = asyncHandler(async (req, res) => {
    const { param } = req.params;
    const isObjectId = mongoose.Types.ObjectId.isValid(param);
    if(isObjectId) {
        person = await Person.findById(param)
    } else { 
        person = await Person.findOne({$or: [{ name: param }, { email: param }]});
    }
    if (!person) {
      throw new NotFoundError(`Person with name: ${param} not found`);
    }
  
    res.status(StatusCodes.OK).json({ person });
});

const updatePerson = asyncHandler(async(req, res) => {
    // const {_id: PersonId} = req.params
    // const person = await Person.findByIdAndUpdate({_id: PersonId},
    //     {
    //         firstname: req.body.firstname,
    //         lastname: req.body.lastname
    //     },
    //     {
    //         new: true,
    //         runValidators: true
    //     })
    // if(!user){
    //     throw new NotFoundError(`User with id: ${personId} is not found`)
    // }
    // res.status(StatusCodes.OK).json({person, msg: {msg: 'Person updated'}})
    
    const { param } = req.params;
  // Check if the parameter is a valid ObjectId (user ID)
  const isObjectId = mongoose.Types.ObjectId.isValid(param);
  let updatedPerson;

  if (isObjectId) {
    // If it's a valid ObjectId, update by ID
    updatedPerson = await Person.findByIdAndUpdate(param, /*req.body*/ {
      age: req.body.age,
      mobile: req.body.mobile,
      country: req.body.country
    }, {
      new: true,
      runValidators: true,
    });
  } else {
    // If it's not a valid ObjectId (meaning it's a name or email), update by name/email
    updatedPerson = await Person.findOneAndUpdate(
      { $or: [{ name: param }, { email: param }] },
      /*req.body*/ {
        age: req.body.age,
      mobile: req.body.mobile,
      country: req.body.country
      },
      {
        new: true,
        runValidators: true,
      }
    );
  }

  if (!updatedPerson) {
    return res.status(404).json({ message: 'Person not found' });
  }

  res.status(200).json({ message: 'Person updated', updatedPerson });
});

const deletePerson = asyncHandler(async(req, res) => {
    const { param } = req.params;
    const isObjectId = mongoose.Types.ObjectId.isValid(param);

    if(isObjectId) {
        person = await Person.findByIdAndDelete(param)
    } else { 
        person = await Person.findOneAndDelete({$or: [{ name: param }, { email: param }]});
    }
    if (!person) {
      throw new NotFoundError(`Person with name or id: ${param} not found`);
    }
  
    res.status(StatusCodes.OK).json({deletePerson, msg: {msg: 'User deleted'}});
    /*const {id: PersonId} = req.params
    const deletePerson = await Person.findByIdAndDelete({_id: PersonId})
    if(!deletePerson){
        throw new NotFoundError(`User with id: ${PersonId} is not found`)
    }
    res.status(StatusCodes.OK).json({deletePerson, msg: {msg: 'User deleted'}})*/
    
})

module.exports = {
    createPerson,
    getPerson,
    getPeople,
    deletePerson,
    updatePerson
}