import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <a
          className="footer-link"
          href="https://jainsavar.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Savar Jain
        </a>
        <p>Copyright © {getcurrentYear()}</p>
      </footer>
    </div>
  );
};

function getcurrentYear() {
  return new Date().getFullYear();
}

export default Footer;
