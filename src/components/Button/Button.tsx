// MyButton.tsx
import React from 'react';
import { StyledButton } from './styles';

interface MyButtonProps {
  text: string;
  onClick: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({ text, onClick }) => {
  return (
    <StyledButton variant="contained" color="primary" onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default MyButton;

