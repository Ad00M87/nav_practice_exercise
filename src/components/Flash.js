import React from 'react';
import styled from 'styled-components';

const FlashHeader = styled.h3`
  margin-top: 0;
`
const FlashSubHeader = styled.p`
  margin-bottom: 0;
`
const FlashContainer = styled.div`
  background-color: #DCE8E3;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 8px;
`

const Flash = ({ text, result }) => (
  <FlashContainer>
    <FlashHeader>{text.header}</FlashHeader>
    <FlashSubHeader>{text.subheader}</FlashSubHeader>
  </FlashContainer>
)

export default Flash;
