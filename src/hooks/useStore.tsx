import { useReducer } from "react";
import type { Action, State, Language, FromLanguage } from "../types/types";
import { AUTO_LANGUAGE } from "../types/constants";

export function useStore() {
  const initialState: State = {
    fromLanguage: "en",
    toLanguage: "fr",
    fromText: "Hello, how are you",
    result: "",
    loading: false,
  };

  function reducer(state: State, action: Action) : State {
    const { type } = action;

    if (type === "INTERCHANGE") {
      if (state.fromLanguage === AUTO_LANGUAGE) {
        return state; // No realizar el intercambio si fromLanguage es "auto"
      }
      return {
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage,
      };
    }
    
    if (type === "SET_FROM_LNG") {
      return {
        ...state,
        fromLanguage: action.payload,
      };
    }
    if (type === "SET_TO_LNG") {
      if (state.toLanguage === action.payload) return state;
      const loading = state.fromText !== "";

      return {
        ...state,
        toLanguage: action.payload,
        result: "",
        loading,
      };
    }

    if (type === "SET_FROM_TEXT") {
      const loading = action.payload !== "";

      return {
        ...state,
        loading,
        fromText: action.payload,
        result: "",
      };
    }

    if (type === "SET_RESULT") {
      return {
        ...state,
        loading: false,
        result: action.payload,
      };
    }

    return state;
  }
  
  const [{ fromLanguage, toLanguage, fromText, result, loading }, dispatch] : [State, React.Dispatch<Action>] = useReducer(reducer, initialState);

  const interchange = () => {
    dispatch({ type: "INTERCHANGE" });
  };

  const setFromLanguage = (payload: FromLanguage) => {
    dispatch({ type: "SET_FROM_LNG", payload });
  };

  const setToLanguage = (payload: Language) => {
    dispatch({ type: "SET_TO_LNG", payload });
  };

  const setFromText = (payload: string) => {
    dispatch({ type: "SET_FROM_TEXT", payload });
  };

  const setResult = (payload: string) => {
    dispatch({ type: "SET_RESULT", payload });
  };

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchange,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult,
  };
}
