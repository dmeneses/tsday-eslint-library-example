import { RegexHelper } from "../src";
import { RegexType } from "../src/regex-type";

describe("Regex Helper", () => {
  describe("isValid", () => {
    it("should return false when invalid email is provided", () => {
      expect(RegexHelper.isValid("nonvalidemail.com", RegexType.EMAIL)).toBe(false);
    });
  });
});