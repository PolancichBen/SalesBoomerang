import React, { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { colorsSelectors } from '../store/colors';

const Container = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LandingPage: FC = () => {
  const colors = useSelector(colorsSelectors);
  return <Container>Hello World</Container>;
};

export default LandingPage;
