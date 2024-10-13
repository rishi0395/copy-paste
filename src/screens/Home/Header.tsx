// @ts-nocheck
import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom"; // Updated import
import { deleteAllItems, fetchItems } from "../../Api/stateInfoApi";
import "../../style.css";
const HeaderSection = ({ isConnected }) => {
  const navigate = useNavigate(); // Updated from useHistory to useNavigate
  const { setClipboardItems, prompt, setIsLLDRound, isLLDRound } =
    useAppContext();
  const [isLoading, setIsLoading] = useState(false);

  const deleteAllHandler = async () => {
    setIsLoading(true);
    await deleteAllItems();
    setClipboardItems([]);
    setIsLoading(false);
  };

  const fetchHandler = async () => {
    setIsLoading(true);
    const resp = await fetchItems();
    setClipboardItems(resp);
    setIsLoading(false);
  };

  const handleLLD = () => {
    setIsLLDRound((val) => !val);
  };

  const gearButtonHandler = () => {
    navigate("/prompt-builder"); // Adjust the route as necessary
  };

  return (
    <div>
      <div className="header-section">
        <button className={`status-button ${isConnected ? "green" : "red"}`}>
          {isConnected ? "Connected" : "Disconnected. Reconnecting..."}
        </button>
        <div className={`prompt-status ${prompt.length > 0 ? "green" : "red"}`}>
          {prompt.length > 0 ? "Prompt Enabled" : "Prompt Disabled"}
        </div>
        <button className={`green lld-button`} onClick={handleLLD}>
          {isLLDRound ? "LLD Round" : "DSA Round"}
        </button>
        <button className="gear-button" onClick={gearButtonHandler}>
          ⚙️
        </button>
      </div>
      {isLoading && <p className="loading">Loading....</p>}

      <div className="button-wrapper">
        <button
          className="status-button fetch-button green"
          onClick={fetchHandler}
        >
          Fetch List
        </button>
        <button
          className="status-button delete-button red"
          onClick={deleteAllHandler}
        >
          Delete All
        </button>
      </div>
      <h2 className="title">Clipboard Items</h2>
    </div>
  );
};

export default HeaderSection;
