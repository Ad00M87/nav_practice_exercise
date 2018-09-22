import React from 'react';
import styled from 'styled-components';

const FlashHeader = styled.h3`
  margin-top: 0;
  color: #000;
`
const FlashSubHeader = styled.p`
  margin-bottom: 0;
`
const FlashContainer = styled.div`
  background-color: ${props => props.result === "success" ? "#DCE8E3" : "#d7b6af" };
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 8px;
`

const Flash = ({ text, result }) => (
  <FlashContainer result={result}>
    <FlashHeader>{text.header}</FlashHeader>
    <FlashSubHeader>{text.subheader}</FlashSubHeader>
  </FlashContainer>
)

export default Flash;
