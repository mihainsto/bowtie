const faker = require('faker')
const igdb = require('../services/igdb/igdb')
const { expect } = require('chai')

describe("igdb Service", () => {
    it("Should search for a game", async () => {
        const searchString = "Metro"
        const results = await igdb.search_for_a_game(searchString, "0", "10")
        expect(results).to.exist
        expect(results[0].id).to.exist
        expect(results[0].name).contain(searchString)
    })
    it("Should get a game detalis", async () => {
        const randomId = faker.random.number(1000)
        const result = await igdb.get_game(randomId)
        expect(result).to.exist
        expect(result.id).to.be.equal(randomId)
        expect(result.name).to.exist
    })
})