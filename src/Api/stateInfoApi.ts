import axios from "axios";
import { URLS } from "./constants";
import {
  DEFAULT_PROMPT_DSA,
  DEFAULT_PROMPT_LLD,
  SAVED_PROMPTS,
} from "../utils/constants";

export const fetchItems = async () => {
  try {
    const response = await axios.get(URLS.fetchItems);
    return response.data;
  } catch (error) {
    return [];
  }
};

export const deleteAllItems = async () => {
  try {
    const response = await axios.delete(URLS.deleteAllItems);
    return response.data;
  } catch (error) {
    return false;
  }
};

export const saveItem = async (reqBody) => {
  try {
    const response = await axios.post(URLS.saveItem, reqBody);
    return response.data;
  } catch (error) {
    return [];
  }
};

export const getSavedPromptsApi = async (isLLDRound = false) => {
  try {
    let prompts = JSON.parse(localStorage.getItem(SAVED_PROMPTS)) ?? [];
    prompts = [
      ...prompts,
      {
        val: isLLDRound ? DEFAULT_PROMPT_LLD : DEFAULT_PROMPT_DSA,
        timestamp: new Date(),
      },
    ];
    return prompts;
  } catch (e) {
    console.log("getSavedPrompts", e);
    return [];
  }
};

export const setSavedPromptsApi = async (prompts) => {
  try {
    localStorage.setItem(SAVED_PROMPTS, JSON.stringify(prompts));
  } catch (e) {
    console.log("getSavedPrompts", e);
  }
};
