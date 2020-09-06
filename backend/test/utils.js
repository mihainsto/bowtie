const User = require('../models/User')
const faker = require("faker");
const UserService = require('../services/UserService');

const getUserByEmail = async (email) => {
    const user = await User.findOne({email: email})
    return user
}
const createFakeUser = async () => {
    const fakeUser = {
        email: faker.internet.email(),
        name: faker.name.findName(),
        password: faker.internet.password(),
      };
    // fakeUser.email="atest@gmail.com";
    // fakeUser.password="123qwe123";
    const status = await UserService.register_user(fakeUser.email, fakeUser.name, fakeUser.password);
    const user = await User.findOne({email: fakeUser.email})
    return user
}

module.exports =  {createFakeUser, getUserByEmail}