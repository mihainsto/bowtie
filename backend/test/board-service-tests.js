const expect = require("chai").expect;
const faker = require("faker");
const BoardService = require("../services/BoardService");
const UserService = require("../services/UserService.js");
const utils = require("./utils");
const { update } = require("../models/User");



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
        it("Should create multiple lists", async () => {
            const user = await utils.createFakeUser();
            
            const listNames = [];
            const listUuids = [];

            for (let i=0; i<10; i++){
                listNames.push(faker.random.word())
                listUuids.push(faker.random.uuid())
                const createStatus = await BoardService.create_list(user, listNames[i], listUuids[i])
                expect(createStatus.title).to.be.equal(listNames[i])
            }
            
            const updatedUser = await utils.getUserByEmail(user.email)
            updatedUser.board.lists.forEach((list, index) => {
                expect(list.title).to.be.equal(listNames[index])
                expect(list.listId).to.be.equal(listUuids[index])
            });
            
        })
    })

    describe("Add cards", async () => {
        it("Should add a new card", async () => {
            const user = await utils.createFakeUser();
            const listTitle = faker.random.word();
            const listUuid = faker.random.uuid();
            const createStatus = await BoardService.create_list(user, listTitle, listUuid)
            const userObj = await utils.getUserByEmail(user.email)
            const cardUuid = faker.random.uuid();
            const gameId = faker.random.number(1000);
            const addCardStatus = await BoardService.add_card(userObj, gameId, cardUuid, listUuid)
            expect(addCardStatus).to.exist;
            expect(addCardStatus.gameId).to.be.equal(gameId.toString())
            expect(addCardStatus.releaseDate).to.exist

            const updatedUser = await utils.getUserByEmail(user.email)
            expect(updatedUser.board.cards[0].gameId).to.be.equal(addCardStatus.gameId)
            expect(updatedUser.board.lists[0].cardsIds[0]).to.be.equal(cardUuid)
        })

        it("Should add multiple cards", async () => {
            const user = await utils.createFakeUser();
            const listTitle = faker.random.word();
            const listUuid = faker.random.uuid();
            const createStatus = await BoardService.create_list(user, listTitle, listUuid)

            const cardUuids = []
            const gameIds = []

            for (let i=0; i<5; i++){
                cardUuids.push(faker.random.uuid())
                gameIds.push(faker.random.number(1000).toString())
                const addCardStatus = await BoardService.add_card(user, gameIds[i], cardUuids[i], listUuid)
                expect(addCardStatus).to.exist;
                expect(addCardStatus.gameId).to.be.equal(gameIds[i])
                expect(addCardStatus.releaseDate).to.exist
            }

            const updatedUser = await utils.getUserByEmail(user.email)

            updatedUser.board.lists[0].cardsIds.forEach((cardId, index) => {
                expect(updatedUser.board.cards[index].gameId).to.be.equal(gameIds[index])
                expect(updatedUser.board.lists[0].cardsIds[index]).to.be.equal(cardUuids[index])
            })
        })
    })

    describe("Updating lists order", () => {
        it("Should update lists order", async () => {
            const user = await utils.createFakeUser();
                        
            const listNames = [];
            const listUuids = [];

            for (let i=0; i<10; i++){
                listNames.push(faker.random.word())
                listUuids.push(faker.random.uuid())
                const createStatus = await BoardService.create_list(user, listNames[i], listUuids[i])
            }
            const newListOrder = user.board.listsOrder.sort(() => Math.random() - 0.5)
            const updateStatus = await BoardService.update_list_order(user, newListOrder)
            expect(updateStatus).to.be.equal(newListOrder)

            const updatedUser = await utils.getUserByEmail(user.email)
            updatedUser.board.listsOrder.forEach((element, index) => {
                expect(element).to.be.equal(newListOrder[index])
            });

        })
    })

    describe("Updating cards order", () => {
        it("Should update cards order", async () => {
            const user = await utils.createFakeUser();
            const listTitle = faker.random.word();
            const listUuid = faker.random.uuid();
            const createStatus = await BoardService.create_list(user, listTitle, listUuid)

            const cardUuids = []
            const gameIds = []

            for (let i=0; i<5; i++){
                cardUuids.push(faker.random.uuid())
                gameIds.push(faker.random.number(1000).toString())
                const addCardStatus = await BoardService.add_card(user, gameIds[i], cardUuids[i], listUuid)
            }
            // BoardService.update_card_order()
            const newCardsOrder = user.board.lists[0].cardsIds.sort(() => Math.random() - 0.5)
            const updateStatus = await BoardService.update_card_order(user, listUuid, newCardsOrder)
            expect(updateStatus).to.exist;
            const updatedUser = await utils.getUserByEmail(user.email)
            
            updatedUser.board.lists[0].cardsIds.forEach((cardId, index) => {
                expect(cardId).to.be.equal(newCardsOrder[index])
            });
    })
    })

    // describe("Move cards", () => {
    //     it("Should move cards between lists", async () => {
    //         const user = await utils.createFakeUser();
    //         const list1 = {
    //             title: faker.random.word(),
    //             id: faker.random.uuid()
    //         }
    //         const list2 = {
    //             title: faker.random.word(),
    //             id: faker.random.uuid()
    //         }
    //         let createStatus = await BoardService.create_list(user, list1.title, list1.id)
    //         createStatus = await BoardService.create_list(user, list2.title, list2.id)
    //         const cardUuids1 = []
    //         const cardUuids2 = []
    //         const gameIds1 = []
    //         const gameIds2 = []
    //         for (let i=0; i<2; i++){
    //             cardUuids1.push(faker.random.uuid())
    //             gameIds1.push(faker.random.number(1000).toString())
    //             const addCardStatus = await BoardService.add_card(user, gameIds1[i], cardUuids1[i], list1.uuid)
    //         }

    //         for (let i=0; i<2; i++){
    //             cardUuids2.push(faker.random.uuid())
    //             gameIds2.push(faker.random.number(1000).toString())
    //             const addCardStatus = await BoardService.add_card(user, gameIds2[i], cardUuids2[i], list2.uuid)
    //         }

    //         const updatedUser = await utils.getUserByEmail(user.email)
    //         const cardsOrder1 = updatedUser.board.lists[0].cardsIds
    //         const cardsOrder2 = updatedUser.board.lists[1].cardsIds
    //         console.log(updatedUser.board.lists)
    //         console.log(cardsOrder1)
    //         console.log(cardsOrder2)

    //     })
    // })

})