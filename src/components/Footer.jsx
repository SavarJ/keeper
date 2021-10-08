import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        <p>Copyright © {getcurrentYear()}</p>
      </footer>
    </div>
  );
}

function getcurrentYear() {
  return new Date().getFullYear();
}

export default Footer;
