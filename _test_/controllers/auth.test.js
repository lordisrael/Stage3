
const {createPerson, getPerson} = require('../../controller/auth')
const {StatusCodes} = require('http-status-codes')
const {ConflictError} = require('../../errors/conflict')
const Person = require('../../model/person')
//const mongoose = require('mongoose')

jest.mock('../../model/person.js')
jest.mock('../../errors')
//jest.mock('express')
//jest.mock('mongoose')

describe('createPerson', () => {
    it('Should create new User if email does not exist', async() => {
        const req = {
            body: {
              email: 'test@example.com',
            },
        }
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        Person.findOne.mockResolvedValue(null);

    // Mock the create method to return a sample person
        const samplePerson = { _id: '123', email: 'test@example.com' };
        Person.create.mockResolvedValue(samplePerson);
        await createPerson(req, res);

        expect(res.status).toHaveBeenCalledWith(StatusCodes.CREATED);
        expect(res.json).toHaveBeenCalledWith(samplePerson);
    })
    // it('should throw a ConflictError when email already exists', async () => {
    //     const req = {
    //       body: {
    //         email: 'test@example.com',
    //         // Other request data...
    //       },
    //     };
    
    //     const res = {
    //       status: jest.fn().mockReturnThis(),
    //       json: jest.fn(),
    //     };
    //     Person.findOne.mockResolvedValue({ _id: '123', email: 'test@example.com' });

    //     // Ensure that the ConflictError is thrown
    //     await expect(createPerson(req, res)).rejects.toThrow(ConflictError);
    
    // });
})

// describe('getPerson', () => {
//   it('should find a person by ID when valid ID provided', async () => {
//     const validObjectId = 'validObjectId123';
//     const req = {
//       params: {
//         param: validObjectId,
//       },
//     };

//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     // Mock the Types.ObjectId.isValid method to return true for validObjectId
//     //mongoose.Types.ObjectId.isValid.mockReturnValue(true);

//     // Mock the findById method to return a sample person
//     const samplePerson = { _id: validObjectId, name: 'John Doe', email: 'johndoe@example.com' };
//     Person.findById.mockResolvedValue(samplePerson);

//     await getPerson(req, res);

//     expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
//     expect(res.json).toHaveBeenCalledWith({ person: samplePerson });
//   });

// })


// const request = {
//     body: {
//         email: 'fake_email'
//     }
// }

// const response = {
//     status: jest.fn((x) => x),
//     json : jest.fn((x) => x)
// }

//     User.findOne.mockImplementationOnce(() = ({
//         id: 1,
//         email: email,
//     }))
//     await createPerson(request, require)
// })