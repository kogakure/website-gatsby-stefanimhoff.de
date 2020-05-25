import React from 'react';
import styled from 'styled-components';

import { Row } from '.';

const FixedBox = styled.div`
  align-items: center;
  background: rgba(25, 25, 25, 0.3);
  display: flex;
  height: 100px;
  justify-content: center;
`;

const Box = styled.div`
  align-items: center;
  background: rgba(25, 25, 25, 0.3);
  display: flex;
  justify-content: center;
`;

const rowProps = {
  marginBottom: true,
  debug: true,
};

export default {
  component: Row,
  title: 'Layout/Row',
};

export const Default = () => (
  <Row {...rowProps}>
    <Box>Default</Box>
  </Row>
);

export const Center = () => (
  <Row variant="center" {...rowProps}>
    <Box>center</Box>
  </Row>
);

export const Fullsize = () => (
  <Row variant="fullsize" {...rowProps}>
    <Box>fullsize</Box>
  </Row>
);

export const RightOnly = () => (
  <Row variant="rightOnly" {...rowProps}>
    <Box>rightOnly</Box>
  </Row>
);

export const LeftOnly = () => (
  <Row variant="leftOnly" {...rowProps}>
    <Box>leftOnly</Box>
  </Row>
);

export const BigRight = () => (
  <Row variant="bigRight" {...rowProps}>
    <Box>bigRight</Box>
  </Row>
);

export const BigLeft = () => (
  <Row variant="bigLeft" {...rowProps}>
    <Box>bigLeft</Box>
  </Row>
);

export const Start = () => (
  <Row variant="start" {...rowProps}>
    <FixedBox>start</FixedBox>
    <Box>start</Box>
  </Row>
);

export const Middle = () => (
  <Row variant="middle" {...rowProps}>
    <FixedBox>middle</FixedBox>
    <Box>middle</Box>
  </Row>
);
export const End = () => (
  <Row variant="end" {...rowProps}>
    <FixedBox>end</FixedBox>
    <Box>end</Box>
  </Row>
);

export const RightDown = () => (
  <Row variant="rightDown" {...rowProps}>
    <Box>rightDown</Box>
    <Box>rightDown</Box>
  </Row>
);

export const LeftDown = () => (
  <Row variant="leftDown" {...rowProps}>
    <Box>leftDown</Box>
    <Box>leftDown</Box>
  </Row>
);

export const VariableStart = () => (
  <Row variant="variableStart" {...rowProps}>
    <FixedBox>variableStart</FixedBox>
    <Box>variableStart</Box>
    <Box>variableStart</Box>
  </Row>
);

export const VariableMiddle = () => (
  <Row variant="variableMiddle" {...rowProps}>
    <Box>variableMiddle</Box>
    <FixedBox>variableMiddle</FixedBox>
    <Box>variableMiddle</Box>
  </Row>
);

export const VariableEnd = () => (
  <Row variant="variableEnd" {...rowProps}>
    <Box>variableEnd</Box>
    <Box>variableEnd</Box>
    <FixedBox>variableEnd</FixedBox>
  </Row>
);
