// @ts-nocheck
import React, { createContext, useContext, useEffect, useState } from "react";
import { getSavedPromptsApi } from "../Api/stateInfoApi";

const defaultContext = {
  clipboardItems: [],
  setClipboardItems: () => {},
  prompt: "",
  setPrompt: () => {},
  isLLDRound: false,
  setIsLLDRound: () => {},
};
const AppContext = createContext(defaultContext);

// This will render all the children passed to it.
export default function AppProvider({ children }) {
  const [clipboardItems, setClipboardItems] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [isLLDRound, setIsLLDRound] = useState(false);

  useEffect(() => {
    const getInitPrompts = async () => {
      const savedList = await getSavedPromptsApi(isLLDRound);
      if (savedList.length > 0) {
        setPrompt(savedList[0].val);
      }
    };
    getInitPrompts();
  }, [isLLDRound]);

  return (
    <AppContext.Provider
      value={{
        clipboardItems,
        setClipboardItems,
        prompt,
        setPrompt,
        isLLDRound,
        setIsLLDRound,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// This is responsible for exposing all the props available for TaskContainer to children components
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Props must be used within a <AppContainer />");
  }
  return context;
}
