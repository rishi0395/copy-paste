import React from "react";

// Define your button styles using CSS
const buttonStyles = {
  button: {
    backgroundColor: "#007BFF", // Default blue color
    padding: "10px",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    border: "none",
    outline: "none",
  },
  buttonText: {
    color: "#FFFFFF", // Default text color is white
    fontSize: "16px",
    fontWeight: "600",
  },
};

const Button = ({ title, onClick, style, textStyle }: any) => {
  return (
    <button style={{ ...buttonStyles.button, ...style }} onClick={onClick}>
      <span style={{ ...buttonStyles.buttonText, ...textStyle }}>{title}</span>
    </button>
  );
};

export default Button;
