import React from "react";

// Define your input styles using CSS
const styles = {
  defaultTextInput: {
    color: "black",
    borderColor: "gray",
    borderWidth: "1px",
    padding: "10px",
    marginBottom: "20px",
    minHeight: "30px",
    borderStyle: "solid",
    width: "100%", // You might want to control the width
  },
};

const TextInput = ({ style, ...props }) => {
  return (
    <input
      style={{ ...styles.defaultTextInput, ...style }} // Merge default styles with custom styles
      {...props} // Spread additional props (like placeholder, value, onChange, etc.)
    />
  );
};

export default TextInput;
