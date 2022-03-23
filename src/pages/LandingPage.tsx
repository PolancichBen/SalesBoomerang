import React, { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { Loader } from '../components/atoms/Loader';

import {
  colorsSelectors,
  selectedColorSelector,
  setSelectedColor,
} from '../store/colors';
import { useAppDispatch } from '../store';

const Container = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  text-align: center;
`;

const Body = styled.div`
  width: 100%;
  margin-top: 2rem;
  justify-content: center;
  display: flex;
  flex-flow: wrap;
`;

const ColorBox = styled.button<{ color: string }>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  margin: 1rem;
  width: 5rem;
  height: 3rem;
  border-radius: 5px;
  background-color: ${({ color }) => color};
`;

const LandingPage: FC = () => {
  const colors = useSelector(colorsSelectors);
  const selectedColor = useSelector(selectedColorSelector);
  const dispatch = useAppDispatch();

  return (
    <Container>
      {!colors.length && <Header>Fetching Colors</Header>}
      <Loader loading={!colors.length}>
        <Header>
          {selectedColor.length
            ? `My Favorite Color is ${selectedColor}`
            : 'Please Select a Color to Begin'}
        </Header>
        <Body>
          {colors.map((color) => (
            <ColorBox
              onClick={() => dispatch(setSelectedColor(color))}
              color={color}
            >
              {color}
            </ColorBox>
          ))}
        </Body>
        <ColorBox color="White" onClick={() => dispatch(setSelectedColor(''))}>
          Reset
        </ColorBox>
      </Loader>
    </Container>
  );
};

export default LandingPage;
