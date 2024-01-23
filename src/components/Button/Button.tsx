// MyButton.tsx
import React from 'react';
import { StyledButton } from './styles';


interface MyButtonProps {
  text: string;
  type?: "button" | "submit" | "reset"; // Alterei o tipo para ser mais específico
  
}

const MyButton: React.FC<MyButtonProps> = ({ text, type = "button" }) => {
  return (
    <StyledButton
      variant="contained"
      color="primary"
      type={type}
      
    >
      {text}
    </StyledButton>

  );
};



export default MyButton;
