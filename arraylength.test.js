import {arrayLength} from"./arraylength"
describe("given arrayLength",() => {
  describe ("when give in arrays", () =>{
    test("Then it should return the array length",() => {
      const arr1 = [1,2,3,4]
      const r = arrayLength (arr1)
      expect (r).toBe(4)
    })
  })
});
