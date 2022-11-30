import nextElementInList from "../../../src/utils/nextElementInList";

describe("Next El in List", () => {
  it("locates elemnt in list and return next element in list", () => {
    const list = ["A", "B", "C", "D", "E"];
    const value = "C";
    const res = nextElementInList(list, value);
    expect(res).toBe("D");
  });

  describe("when el is aat the end of the list", () => {
    it("locates next element at start  of list",()=> {
      const list = ["A", "B", "C", "D", "E"];
      const value = "E";
      const res = nextElementInList(list, value);
      expect(res).toBe("A");
    });
  });
});
