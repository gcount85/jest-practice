import ToUpperCase, { getStringInfo, stringInfo } from "../app/Utils";

describe("Utils test suites", () => {
  it("should return uppercase of valid string", () => {
    // arange:
    const sut = ToUpperCase;
    const expected = "ABC";

    // act:
    const actual = sut("abc");

    // assertion:
    expect(actual).toBe(expected);
  });

  it.only("should return string info of valid string", () => {
    // arange:
    const sut = getStringInfo;
    const expected: stringInfo = {
      lowerCase: "abc",
      upperCase: "ABC",
      characters: ["a", "b", "c"],
      extraInfo: {},
      length: 3,
    };

    // act:
    const actual = sut("abc");

    // assertion:
    expect(actual).toEqual(expected);
    expect(expected.characters).toHaveLength(3);
    expect(expected.characters).toContain("a");
    expect(expected.characters).not.toStrictEqual("a");
    expect(expected.characters).toEqual(
      expect.arrayContaining<string>(["a", "b"])
    );

    expect(expected.extraInfo).toBeDefined();
    expect(expected.extraInfo).toBeTruthy();
    expect(expected.extraInfo).toEqual({});
  });
});
