import express from 'express'
import { faker } from '@faker-js/faker';

const app = express();
// var faker = require("@faker-js/faker");

const createRandomUser = () => {
    const newFakeUser = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }

    return newFakeUser;
}

const createFakeCompany = () => {
    const newFakeCompany = {
        _id:faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.stateAbbr(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }

    return newFakeCompany
}


app.get("/api/users/new", (req, res) => {
    res.json(createRandomUser());
});

app.get("/api/companies/new", (req, res) => {
    res.json(createFakeCompany());
});

app.get("/api/user/company", (req, res) => {
    res.json({user: createRandomUser(), company: createFakeCompany()});
});

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);