import { normaliseData } from "../normaliseData";

const obj1 = {
  id: 123,
  firstName: "Joe",
  lastName: "Bloggs"
}
const obj2 = {
  id: 456,
  firstName: "David",
  lastName: "Attenborough"
}
const obj3 = {
  id: 789,
  firstName: "Lewis",
  lastName: "Hamilton"
}
const dataset = [obj1, obj2, obj3];

describe("Normalise data helper", () => {
  it.each([
    {
      given: dataset,
      identifierKey: "id",
      expected: {
        "123": obj1,
        "456": obj2,
        "789": obj3
      }
    },
    {
      given: dataset,
      identifierKey: "firstName",
      expected: {
        "Joe": obj1,
        "David": obj2,
        "Lewis": obj3
      }
    },
  ])("returns object with array elements indexed by $identifierKey key", ({given, identifierKey, expected}) => {
    expect(normaliseData(given, identifierKey)).toStrictEqual(expected);
  });

  it("returns empty object when array elements can't be indexed by provided key", () => {
    expect(normaliseData(dataset, "noMatches")).toStrictEqual({});
  });
});