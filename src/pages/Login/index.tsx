// LoginPage.tsx
import React from 'react';
import LoginTextField from '../../components/Field/InputField';
import { StyledButton } from '../../components/Button/styles';

import {
  LoginPageContainer,
  LoginTitle,
  LoginForm,
} from './styles';

const LoginPage: React.FC = () => {
  return (
    <LoginPageContainer>
      <LoginTitle>Login</LoginTitle>
      <LoginForm>
        <LoginTextField
          label="Nick"
          type="text"
          placeholder = "Digite o seu nick "
        />
        <LoginTextField
          label="Senha"
          type="password"
          placeholder = "Digite a sua senha "
        />
        <StyledButton
          type="submit">Entrar
        </StyledButton>
      </LoginForm>
    </LoginPageContainer>
  );
};

export default LoginPage;
