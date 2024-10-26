import React from "react";
import "./footer.css";
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer>

        <ul>
          <li>Termos de Serviço</li>
          <li>Política de Privacidade</li>
          <li>Ajuda</li>
          <li>Sobre nós</li>
        </ul>

        <div className="icons">
          <FaInstagram />
          <LuFacebook />
          <FaLinkedinIn />
        </div>

    </footer>
  );
}

export default Footer;
