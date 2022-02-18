import { RegexType } from './regex-type';

export class RegexHelper {
  // eslint-disable-next-line no-useless-escape
  public static readonly EMAIL = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  public static readonly NUMBERS_ONLY = /^\d+$/;
  public static readonly LETTERS_ONLY = /^[a-zA-Z]+$/;
  public static readonly NUMBERS_AND_LETTERS = /^[a-zA-Z0-9]+$/;

  private static regexMap = {
    [RegexType.EMAIL]: this.EMAIL,
    [RegexType.NUMBERS_ONLY]: this.NUMBERS_ONLY,
    [RegexType.LETTERS_ONLY]: this.LETTERS_ONLY,
    [RegexType.NUMBERS_AND_LETTERS]: this.NUMBERS_AND_LETTERS
  };

  public static isValid(input: string, regexType: RegexType): boolean {
    return this.regexMap[regexType].test(input);
  }
}