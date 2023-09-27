import React from "react";
import styled from 'styled-components';

const IntroContainer = styled.div`
  background-color: #18191A;
  padding: 200px;
  text-align: center;
  height: 400px;

  @media (max-width: 768px) {
    padding: 100px;
    height: auto;
  }
`;

const IntroTitle = styled.h1`
  font-size: 90px;
  color: #f2f2f2;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const IntroText = styled.p`
  font-size: 30px;
  color: #f2f2f2;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export default function Intro(){
    return(
        <IntroContainer>
            <IntroTitle>Welcome To My Portfolio</IntroTitle>
            <IntroText>I'm Sohan Addagudi, and this is a portfolio of my experiences so far!</IntroText>
        </IntroContainer>
    )
}
