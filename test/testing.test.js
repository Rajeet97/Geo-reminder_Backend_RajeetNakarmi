const Customer = require('../models/Customer')
const Exercise = require('../models/Exercise')
const Feedback = require('../models/Feedback')
const mongoose = require('mongoose')

const url = 'mongodb://localhost:4000/test';
beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });
});

afterAll(async () => {

    await mongoose.connection.close();
});


describe('Longlat Schema Test', () => {
    it('task testing', () => {
        const longlat = {
            "name": "task1",
            "task": "task",
            "long": "25.5555",
            "lat": "25.5550"
        }
        return Longlat.create(longlat)
            .then((namecheck) => {
                expect(namecheck.name).toEqual('task1')
            })
    })


    //         it(' delete customer', async () => {
    //             const status = await Customer.deleteOne({_id :Object('5e37b56a6490df13fcb933fc')})
    //             expect(status.ok).toBe(1)
    //         })


    //         it('delete every user', async () => {
    //             const status = await Customer.deleteMany()
    //             expect(status.ok).toBe(1)
    //         })


    //      it('select customer', async () => {
    //         const status = await Customer.find({})
    //         expect(status.length).toBeGreaterThan(0)
    //     })

    //     it(' delete exercise', async () => {
    //         const status = await Customer.deleteOne({_id :Object('5e48577024244e48f08c99a4')})
    //         expect(status.ok).toBe(1);
    //     })

    //     it('select exercise', async () => {
    //         const status = await Exercise.find({})
    //         expect(status.length).toBeGreaterThan(0)
    //     })


    //     describe('Exercise Test', () => {
    //     it('Exercise testing', () => {
    //         const exercise = {                
    //             "exercise": "jump",
    //             "time": "1hour",
    //         };

    //         return Exercise.create(exercise)
    //             .then((exercisecheck) => {
    //                 expect(exercisecheck.exercise).toEqual('jump')
    //             })
    //     })

    // })  



})