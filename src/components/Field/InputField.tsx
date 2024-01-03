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
  type: string;
  placeholder: string;
  required: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

const LoginTextField: React.FC<LoginTextFieldProps> = ({ label, type, placeholder, required, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <StyledTextField
      fullWidth
      label={label}
      placeholder={placeholder}
      required={required}
      type={showPassword ? 'text' : type}
      value={value}
      onChange={onChange}
      error={Boolean(error)} // Make sure the error prop is treated as a boolean

      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircleIcon />
          </InputAdornment>
        ),
        endAdornment: type === 'password' && (
          <InputAdornment position="end">
            {showPassword ? (
              <VisibilityIcon onClick={handleTogglePasswordVisibility} />
            ) : (
              <VisibilityOffIcon onClick={handleTogglePasswordVisibility} />
            )}
          </InputAdornment>
        ),
      }}
      helperText={error} // Display the error message as helper text
    />
  );
};

export default LoginTextField;
