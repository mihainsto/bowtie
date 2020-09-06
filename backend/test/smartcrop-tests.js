const expect = require("chai").expect;
const smartcrop = require("../services/smartcrop/smartcrop");


describe("Smartcrop Service", () => {
    it("Should crop a image", async () => {
        const status = await smartcrop.applySmartCropPromise(
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1280px-Tux.svg.png",
            "testImage",
            600,
            300
          );
        expect(status.status).to.equal("done")
    })
})