import React from 'react';
import { useNavigate } from "react-router";
import LoginTextField from '../../components/Field/InputField';
import MyButton from '../../components/Button/Button';


import {
  LoginPageContainer,
  LoginTitle,
  LoginForm,
} from './styles';


const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [nick, setNick] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [nickError, setNickError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");


  const handleSubmit = () => {
    // Lógica de validação
    if (!nick.trim()) {
      setNickError("Campo Nick obrigatorio");
      return;
    } else {
      setNickError("");
    }

    if (!password.trim()) {
      setPasswordError("Campo senha obrigatorio");
      return;
    } else {
      setPasswordError("");
    }

    // Se a validação passar, navegue para a próxima página
    navigate("/main");
  };

  return (
    <LoginPageContainer>
      <LoginTitle>Login</LoginTitle>
      <LoginForm>
        <LoginTextField
          label="Nick"
          type="text"
          placeholder="Digite o seu nick"
          required={true}
          value={nick}
          onChange={(e) => setNick(e.target.value)}
          error={nickError}
        />

        <LoginTextField
          label="Senha"
          type="password"
          placeholder="Digite a sua senha"
          required={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
        />
        <MyButton
          type="submit"
          text="Entrar"
          onClick={handleSubmit}
        />
      </LoginForm>
    </LoginPageContainer>
  );
};

export default LoginPage;
