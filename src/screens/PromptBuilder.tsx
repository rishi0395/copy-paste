import React, { useEffect, useState } from "react";

import "../style.css";
import { getSavedPromptsApi, setSavedPromptsApi } from "../Api/stateInfoApi";
import { addPrompt } from "../utils";
import { useNavigate } from "react-router-dom";

const PromptBuilder = () => {
  const navigate = useNavigate(); // Updated from useHistory to useNavigate

  const [savedPrompts, setSavedPrompts] = useState([]);
  const [generatePromptTextInput, setGeneratePromptTextInput] = useState("");

  useEffect(() => {
    getSavedPrompts();
  }, []);

  const getSavedPrompts = async () => {
    const prompts = await getSavedPromptsApi();
    setSavedPrompts(prompts);
  };

  const handleSetPrompt = async () => {
    if (generatePromptTextInput) {
      const updatedPrompts = addPrompt(savedPrompts, generatePromptTextInput);
      await setSavedPromptsApi(updatedPrompts);
      setSavedPrompts(updatedPrompts);
      navigate("/");
    }
  };

  const handleClearPrompt = () => {
    setGeneratePromptTextInput("");
  };

  const copyToClipboard = async (prompt) => {
    try {
      await navigator.clipboard.writeText(prompt);
      setGeneratePromptTextInput(prompt);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleDeleteAllSavedPrompt = async () => {
    await setSavedPromptsApi([]);
    setSavedPrompts([]);
  };

  const handleDeletePrompt = async (prompt) => {
    const updatedList = savedPrompts.filter((ele) => ele.val !== prompt.val);
    await setSavedPromptsApi(updatedList);
    setSavedPrompts(updatedList);
  };

  return (
    <div className="prompt-builder">
      <h2>Create Your Interview Prompt</h2>

      <textarea
        value={generatePromptTextInput}
        onChange={(e) => setGeneratePromptTextInput(e.target.value)}
        rows={4}
        cols={50}
        placeholder="Enter your prompt here..."
      />

      <div className="button-container">
        <button onClick={handleSetPrompt} className="set-prompt-button">
          Set prompt text
        </button>
        <button onClick={handleClearPrompt} className="clear-prompt-button">
          Clear prompt text
        </button>
      </div>

      <h3>Saved Prompts</h3>
      <button
        onClick={handleDeleteAllSavedPrompt}
        className="delete-all-button"
      >
        Delete all saved prompts
      </button>

      <ul className="saved-prompts-list">
        {savedPrompts.map((item, index) => (
          <li
            key={index}
            className={`prompt-item ${
              generatePromptTextInput === item.val ? "active" : ""
            }`}
          >
            <span>{new Date(item.timestamp).toLocaleString()}</span>
            <span onClick={() => copyToClipboard(item.val)}>{item.val}</span>
            <button onClick={() => handleDeletePrompt(item)}>
              Delete Prompt
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PromptBuilder;
