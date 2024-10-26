import React from "react";
import "./cadastro.css";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

function Cadastro() {
  return (
    <div className="cadastro-container">
      <h1>Cadastro</h1>
      <form action="">
        <input
          type="text"
          id="register-cpf"
          placeholder="CPF"
          name="register-cpf"
          required
        />
        <input
          type="email"
          id="register-email"
          placeholder="E-mail"
          name="register-email"
          required
        />
        <input
          type="tel"
          id="register-phone"
          placeholder="Telefone"
          name="register-phone"
          required
        />
        <input
          type="password"
          id="register-password"
          placeholder="Senha"
          name="register-password"
          required
        />
        <button className="entrar" type="submit">
          Cadastrar
        </button>
        <div className="container-align">
          <div className="FacebookEGoogle">
            <FaGoogle />
            <FaFacebook />
          </div>
          <p>
            Já tem uma conta? <span>Entrar</span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Cadastro;
