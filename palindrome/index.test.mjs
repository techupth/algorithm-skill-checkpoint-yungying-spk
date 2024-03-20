import { test, expect, describe } from "vitest";
import { palindrome } from "./index.mjs";

describe("palindrome tests", () => {
  test("palindrome function is defined", () => {
    expect(typeof palindrome).toEqual("function");
  });

  test('"aba" is a palindrome', () => {
    expect(palindrome("aba")).toBeTruthy();
  });

  test('" aba" is not a palindrome', () => {
    expect(palindrome(" aba")).toBe(false);
  });

  test('"aba " is not a palindrome', () => {
    expect(palindrome("aba ")).toBe(false);
  });

  test('"greetings" is not a palindrome', () => {
    expect(palindrome("greetings")).toBe(false);
  });

  test('"1000000001" a palindrome', () => {
    expect(palindrome("1000000001")).toBe(true);
  });

  test('"Fish hsif" is not a palindrome', () => {
    expect(palindrome("Fish hsif")).toBe(false);
  });

  test('"pennep" a palindrome', () => {
    expect(palindrome("pennep")).toBe(true);
  });
});
