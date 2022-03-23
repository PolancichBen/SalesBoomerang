import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoaderElement = styled.div`
  margin-top: 2rem;
  border-radius: 50%;
  border-top: 2px solid gray;
  width: 60px;
  height: 60px;
  animation: ${spin} 2s linear infinite;
`;

interface LoaderProps {
  children: any;
  loading: boolean;
}

export const Loader: FC<LoaderProps> = ({ children, loading }) => {
  return loading ? <LoaderElement /> : <>{children}</>;
};
