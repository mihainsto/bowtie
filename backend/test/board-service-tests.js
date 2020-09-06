const expect = require("chai").expect;
const faker = require("faker");
const BoardService = require("../services/BoardService");
const UserService = require("../services/UserService.js");
const utils = require("./utils");



describe("Board Service", () => {
    describe("Creating lists", () => {
        it("Should create a new list", async () => {
            const user = await utils.createFakeUser();
            const listTitle = faker.random.word();
            const uuid = faker.random.uuid();
            const createStatus = await BoardService.create_list(user, listTitle, uuid)
            expect(createStatus.title).to.be.equal(listTitle)
            const updatedUser = await utils.getUserByEmail(user.email)
            expect(updatedUser.board.lists[0].title).to.be.equal(listTitle)
            expect(updatedUser.board.lists[0].listId).to.be.equal(uuid)
            
        })
    })

    describe("Add cards", () => {
            
    })

    describe("Updating lists order", () => {

    })

    describe("Updating cards order", () => {

    })

    describe("Move cards", () => {

    })

})