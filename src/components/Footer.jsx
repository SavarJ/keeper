import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <p>Copyright © {getcurrentYear()}</p>
      </footer>
    </div>
  );
};

function getcurrentYear() {
  return new Date().getFullYear();
}

export default Footer;
