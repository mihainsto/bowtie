const expect = require("chai").expect;
const request = require("request");
const faker = require("faker");
const UserService = require("../services/UserService");

describe("User Service", function () {
  describe("Register", function () {
    it("Should register a new user", async () => {
      const fakeUser = {
        email: faker.internet.email(),
        name: faker.name.findName(),
        password: faker.internet.password(),
      };
      const status = await UserService.register_user(
        fakeUser.email,
        fakeUser.name,
        fakeUser.password
      );
      expect(status).to.be.true;
    });
    it("Should not register if no password provided", async () => {
      const fakeUser = {
        email: faker.internet.email(),
        name: faker.name.findName(),
        password: "",
      };
      try {
        const status = await UserService.register_user(
          fakeUser.email,
          fakeUser.name,
          fakeUser.password
        );
        expect(status).not.to.exist;
      } catch (err) {
        expect(err).to.contain("passowrd");
      }
    });

    it("Should not register if invalid email provided", async () => {
      const fakeUser = {
        email: "invalidemail",
        name: faker.name.findName(),
        password: faker.internet.password(),
      };
      try {
        const status = await UserService.register_user(
          fakeUser.email,
          fakeUser.name,
          fakeUser.password
        );
        expect(status).not.to.exist;
      } catch (err) {
        expect(err).to.contain("email");
      }
    });

    it("Should not register two users with the same email", async () => {
      const fakeUser = {
        email: faker.internet.email(),
        name: faker.name.findName(),
        password: faker.internet.password(),
      };
      try {
        const status = await UserService.register_user(
          fakeUser.email,
          fakeUser.name,
          fakeUser.password
        );
        const newStatus = await UserService.register_user(
          fakeUser.email,
          fakeUser.name,
          fakeUser.password
        );
        expect(newStatus).not.to.exist;
      } catch (err) {
        expect(err).to.contain("exists");
      }
    });
  });

  describe("Login", function () {
    it("Should login a user", async () => {
      const fakeUser = {
        email: faker.internet.email(),
        name: faker.name.findName(),
        password: faker.internet.password(),
      };
      const status = await UserService.register_user(
        fakeUser.email,
        fakeUser.name,
        fakeUser.password
      );
      const loginResponse = await UserService.login_user(
        fakeUser.email,
        fakeUser.password
      );
      expect(loginResponse.token).to.exist;
    });

    it("Should not login a user with invalid data", async () => {
      const fakeUser = {
        email: faker.internet.email(),
        name: faker.name.findName(),
        password: faker.internet.password(),
      };
      const status = await UserService.register_user(
        fakeUser.email,
        fakeUser.name,
        fakeUser.password
      );
      try{
        const loginResponse = await UserService.login_user(
          fakeUser.email,
          "invalid password"
        );
        expect(loginResponse).not.to.exist;
      }
      catch (err){
        expect(err).to.contain("password");
      }
    });
  });
  
});
