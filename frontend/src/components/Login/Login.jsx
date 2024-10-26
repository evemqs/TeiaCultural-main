import "./Login.css";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

function Login() {
  return (
    <div className="login-container">
      <h1>Entrar</h1>
      <form action="">
        <input
          type="email"
          id="login-email"
          placeholder="E-mail ou número de telefone"
          name="login-email"
          required
        />
        <input
          type="password"
          placeholder="Senha"
          id="login-password"
          name="login-password"
          required
        />
        <button className="entrar" type="submit">
          Entrar
        </button>
        <div className="checkbox-container">
          <input type="checkbox" id="remember-me" name="remember-me" />
          <label htmlFor="remember-me">Salvar informações de login</label>
        </div>
        <div className="container-align">
          <p>Esqueceu a senha?</p>
          <div className="FacebookEGoogle">
            <FaGoogle />
            <FaFacebook />
          </div>
          <p>
            Não tem uma conta? <span>Cadastre-se</span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
