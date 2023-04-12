import React from 'react';

interface SpinnerProps {
  size: number;
}

import { StyledSpinner } from './styles';

const Spinner: React.FC<SpinnerProps> = ({
  size
}) => {
  return <StyledSpinner size={size} />;
};

export default Spinner;
