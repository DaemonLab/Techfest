import React from "react";

function Header() {
  return (
    <div
      className="sticky top-5 z-50 inline fixed"
      style={{ color: "white", fontSize: "60px" }}
    >
      <ion-icon name="arrow-up-circle-outline" className="sticky"></ion-icon>
    </div>
  );
}

export default Header;
