import React from "react";
import "./Header.scss";

interface HeaderProps {
  [key: string]: string;
}
const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="Header">
      <div className="container">
        <div className="box">Arrow</div>
        <h1 className="logo-text">!Squaaat</h1>
        <div className="box">Arrow</div>
      </div>
    </header>
  );
};
export default Header;
