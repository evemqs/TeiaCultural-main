import React, { useState } from 'react';
import "./navbar.css";
import Logo from "../../assets/logo.svg"; 
import { LuUser } from "react-icons/lu";
import Button from "../Button/Button";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <header>
      <nav>
        <div className="container-logo">
          <img src={Logo} alt="Logo teia cultural" />
        </div>
        <div className="container-buttons">
          {isLoggedIn ? (
            <LoggedInButtons onLogoutClick={handleLogoutClick} />
          ) : (
            <LoggedOutButtons onLoginClick={handleLoginClick} />
          )}
        </div>
      </nav>
    </header>
  );
}

function LoggedInButtons({ onLogoutClick }) {
  return (
    <>
      <Button title="Divulgar Serviços" onClick={() => {}} />
      <Button title="Acessibilidade" onClick={() => {}} />
      <Button title="Explorar" onClick={() => {}} />
      <Button title={<LuUser />} onClick={onLogoutClick} />
    </>
  );
}

function LoggedOutButtons({ onLoginClick }) {
  return (
    <>
      <Button title="Cadastrar" onClick={() => {}} />
      <Button title="Acessibilidade" onClick={() => {}} />
      <Button title="Explorar" onClick={() => {}} />
      <Button title="Entrar" onClick={onLoginClick} />
    </>
  );
}

export default Navbar;