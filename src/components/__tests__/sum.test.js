import { sum } from "../sum";
/// const { add } = require("../add.js")
test("Sum Function should Calculate the sum of two functions" , () => {

    const result = sum(4,6)
    expect(result).toBe(10); // assertions
})