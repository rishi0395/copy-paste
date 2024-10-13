import React from "react";

// Define your text styles using CSS
const styles = {
  defaultText: {
    color: "black", // Set default text color to black
  },
};

const Text = ({ children, style, ...props }) => {
  return (
    <span style={{ ...styles.defaultText, ...style }} {...props}>
      {children}
    </span>
  );
};

export default Text;
