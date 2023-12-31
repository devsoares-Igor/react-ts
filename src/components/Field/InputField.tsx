// src/components/LoginTextField.tsx
import React, { useState, ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import styled from '@emotion/styled';

const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 16px;
  }
`;

interface LoginTextFieldProps {
  label: string;
  type: 'text' | 'password';
  placeholder: string;
}

const LoginTextField: React.FC<LoginTextFieldProps> = ({ label, type, placeholder }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };



  return (
    <StyledTextField
      fullWidth
      label={label}
      placeholder={placeholder}
      type={showPassword ? 'text' : type}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircleIcon />
          </InputAdornment>
        ),
        endAdornment:
          type === 'password' && (
            <InputAdornment position="end">
              {showPassword ? (
                <VisibilityIcon onClick={handleTogglePasswordVisibility} />
              ) : (
                <VisibilityOffIcon onClick={handleTogglePasswordVisibility} />
              )}
            </InputAdornment>
          ),
      }}
    />
  );
};

export default LoginTextField;
