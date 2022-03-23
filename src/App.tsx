import React, { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import styled from 'styled-components';

import { useAppDispatch } from './store';
import { fetchColors, selectedColorSelector } from './store/colors';

import LandingPage from './pages/LandingPage';
import { useSelector } from 'react-redux';

const Container = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ color }) => color};
  min-width: 100%;
  min-height: 100%;
`;

const App: FC = () => {
  const dispatch = useAppDispatch();
  const selectedColor = useSelector(selectedColorSelector);

  useEffect(() => {
    (async () => {
      await dispatch(fetchColors());
    })();
  }, [dispatch]);

  return (
    <Container color={selectedColor || 'white'}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Container>
  );
};

export default App;
