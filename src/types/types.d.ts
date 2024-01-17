import { SUPPORTED_LANGUAGES, AUTO_LANGUAGE } from "./constants";

export type Language = keyof typeof SUPPORTED_LANGUAGES;
export type AutoLanguage = typeof AUTO_LANGUAGE;
export type FromLanguage = AutoLanguage | Language;

export interface State {
  fromLanguage: FromLanguage;
  toLanguage: Language;
  fromText: string;
  result: string;
  loading: boolean;
}

export type Action =
  | { type: "SET_FROM_LNG"; payload: FromLanguage }
  | { type: "INTERCHANGE" }
  | { type: "SET_TO_LNG"; payload: Language }
  | { type: "SET_FROM_TEXT"; payload: string }
  | { type: "SET_RESULT"; payload: string };

