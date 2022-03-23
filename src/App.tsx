import React, { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import styled from 'styled-components';

import { useAppDispatch } from './store';
import { fetchColors } from './store/colors';

import LandingPage from './pages/LandingPage';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  // justify-content: space-between; // Not Needed unless Using Footer
  min-width: 100%;
  min-height: 100%;
`;

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(fetchColors());
    })();
  }, [dispatch]);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Container>
  );
};

export default App;
