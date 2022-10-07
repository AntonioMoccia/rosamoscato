import React from "react";

function Burger(props) {
  return (
    <div className="burger-wrapper" {...props}>
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.85"
          d="M0.339574 0.572134C-0.0154214 0.99521 0.0397651 1.62596 0.462837 1.98096L14.2516 13.5511C14.6747 13.9061 15.3055 13.851 15.6605 13.4279C16.0155 13.0048 15.9603 12.3741 15.5372 12.0191L1.74841 0.448871C1.32534 0.0938662 0.694574 0.149053 0.339574 0.572134Z"
          fill="black"
          fill-opacity="0.69"
        />
      </svg>
    </div>
  );
}

export default Burger;
