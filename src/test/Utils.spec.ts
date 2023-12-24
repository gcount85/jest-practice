import {
  StringUtils,
  ToUpperCase,
  getStringInfo,
  stringInfo,
} from "../app/Utils";

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

  it("should return string info of valid string", () => {
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

describe("toUpperCase examples", () => {
  it.each([
    {
      input: "abc",
      expected: "ABC",
    },
    {
      input: "blue",
      expected: "BLUE",
    },
  ])("$input should be $expected", ({ input, expected }) => {
    // arrange
    const sut = ToUpperCase;

    // act
    const actual = sut(input);

    //assert
    expect(actual).toEqual(expected);
  });
});

// jest hooks: beforeEach, afterEach
describe.only("StringUtils test", () => {
  let sut: StringUtils;

  beforeEach(() => {
    // arrance
    sut = new StringUtils();
    console.log("setup!");
  });

  afterEach(() => {
    console.log("cleanup!");
  });

  it("should return upperCase", () => {
    console.log("test!");

    const actual = sut.toUpperCase("abc");

    expect(actual).toEqual("ABC");
  });
});
