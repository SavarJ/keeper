import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";

const Header = () => {
  return (
    <div>
      <header>
        <HighlightIcon style={{ paddingRight: "10px" }} />
        <h1 style={{ display: "inline" }}>Keeper</h1>
      </header>
    </div>
  );
};

export default Header;
