import { useAppContext } from "../../context/AppContext";
import "../../style.css";
import Button from "../../components/Button";

const ClipboardItemsScreen = ({ clipboardItems }) => {
  const { prompt } = useAppContext();

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(`${prompt}\n${text}`).catch((error) => {
      console.log("Error copying text:", error);
    });
  };

  const handleCopyWithoutPrompt = (text) => {
    navigator.clipboard.writeText(text);
  };

  const sortedItems = clipboardItems.sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div className="clipboard-container">
      <ul className="clipboard-list">
        {sortedItems.map((item, index) => (
          <li key={index} className="section-container">
            <div className="section">
              <span className="item-text">{item.text}</span>
            </div>

            <span className="timestamp">
              {new Date(item.timestamp).toLocaleString()}
            </span>

            <div className="button-wrapper">
              <Button
                title="Copy without Prompt"
                onClick={() => handleCopyWithoutPrompt(item.text)}
              />
              <Button
                title="Copy with Prompt"
                onClick={() => copyToClipboard(item.text)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClipboardItemsScreen;
