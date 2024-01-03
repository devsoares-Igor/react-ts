// BackgroundComponent.tsx

import React from 'react';
import { StyledBackground } from './styles';

interface BackgroundComponentProps {
  children: React.ReactNode;
}

const BackgroundComponent: React.FC<BackgroundComponentProps> = ({ children }) => {
  return (
    <StyledBackground>
      {children}
    </StyledBackground>
  );
};

export default BackgroundComponent;
