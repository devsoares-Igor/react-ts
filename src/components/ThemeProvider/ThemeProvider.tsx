import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import styled from 'styled-components';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const lightTheme = createTheme();
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

interface ToggleButtonProps {
  darkMode: boolean;
}

const ToggleButton = styled.button<ToggleButtonProps>`
  background-color: ${(props) => (props.darkMode ? '#222' : '#fff')};
  color: ${(props) => (props.darkMode ? '#fff' : '#222')};
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const DackMode: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <main>
        <ToggleButton darkMode={darkMode} onClick={toggleDarkMode}>
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          Modo de luz
        </ToggleButton>
      </main>
    </ThemeProvider>
  );
};

export default DackMode;
