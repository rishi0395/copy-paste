import React from "react";
import { useAppContext } from "../../context/AppContext";
import { useWebsocket } from "../../hooks/useWebsocket";
import Header from "./Header";
import ClipboardItems from "./ClipboardItems";

function Home() {
  const context = useAppContext();
  const { clipboardItems, setClipboardItems } = context;
  const { isConnected } = useWebsocket({ setClipboardItems });
  return (
    <div>
      <Header isConnected={isConnected} />{" "}
      <ClipboardItems clipboardItems={clipboardItems} />
    </div>
  );
}

export default Home;
