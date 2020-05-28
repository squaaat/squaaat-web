import React from 'react';
import './Header.scss';


interface HeaderProps{
  [key: string]: any;
}
const Header:React.FC<HeaderProps> = () => {

  return (
    <header className="Header">
      <h1 style={{marginLeft: 40, fontSize: '32pt', letterSpacing: 2}}>!Squaaat</h1>
    </header>
  )
}
export default Header;