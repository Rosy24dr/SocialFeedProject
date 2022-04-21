import React, { useState } from "react";

const Button = (props) => {
  const [button, setButton] = useState("inactive");

  function handleClick() {
    if (button === "inactive") {
      setButton("active");
    } else {
      setButton("inactive");
    }
  }
  return (
    <div>
      <button>like</button>
      <button>dislike</button>
    </div>
  );
};

export default Button;
