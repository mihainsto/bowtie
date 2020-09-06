const faker = require('faker')
const { expect } = require('chai')
const GameService = require('../services/GameService')
const utils = require('./utils')
const BoardService = require('../services/BoardService')

describe("Game Service", () => {
    it("Should create a game", async () => {
        const randomId = faker.random.number(1000).toString()
        const result = await GameService.create_game(randomId)
        expect(result).to.exist
        expect(result.gameId).to.be.equal(randomId)
        expect(result.title).to.exist
        expect(result.releaseDate).to.exist
    })

    it("Should get a user games", async () => {
        const user = await utils.createFakeUser();
            const listTitle = faker.random.word();
            const listUuid = faker.random.uuid();
            const createStatus = await BoardService.create_list(user, listTitle, listUuid)
            const userObj = await utils.getUserByEmail(user.email)
            const cardUuid = faker.random.uuid();
            const gameId = faker.random.number(1000);
            const addCardStatus = await BoardService.add_card(userObj, gameId, cardUuid, listUuid)

            const updatedUser = await utils.getUserByEmail(user.email)
            const games = await GameService.get_games(updatedUser)
            expect(games).to.exist
            expect(games[Object.keys(games)[0]].gameId).to.be.equal(gameId.toString())
            expect(games[Object.keys(games)[0]].title).to.exist
            expect(games[Object.keys(games)[0]].releaseDate).to.exist
    })
})