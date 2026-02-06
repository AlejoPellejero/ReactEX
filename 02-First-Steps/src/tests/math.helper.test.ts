import { describe, expect, test } from "vitest";
import { add, multiply, substract } from "../helpers/math.helper";

describe("add", () => {
  test("Should add two positives numbers", () => {
    //1 Arrange
    const a = 2;
    const b = 3;
    //2 Act
    const result = add(a, b);
    //3 Assert

    expect(result).toBe(a + b);
  });

  test("Should add two negatives numbers", () => {
    //1 Arrange
    const z = -5;
    const a = -2;
    const b = -3;
    //2 Act
    const result = add(a, b);
    //3 Assert

    expect(result).toBe(z);
  });
});

describe("multiply", () => {
  test("Should muliply two positives numbers", () => {
    //1 Arrange
    const z = 32;
    const a = 8;
    const b = 4;
    //2 Act
    const result = multiply(a, b);
    //3 Assert

    expect(result).toBe(z);
  });
});

describe("substract", () => {
  test("Should substract two positives numbers", () => {
    //1 Arrange
    const z = 4;
    const a = 8;
    const b = 4;
    //2 Act
    const result = substract(a, b);
    //3 Assert

    expect(result).toBe(z);
  });

  test("Should substract 10 from 20", () => {
    //1 Arrange
    const z = 10;
    const a = 20;
    const b = 10;
    //2 Act
    const result = substract(a, b);
    //3 Assert

    expect(result).toBe(z);
  });
});
