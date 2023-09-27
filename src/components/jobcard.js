import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const HoverBarContainer = styled.div`
  display: flex;
  background: #333;
  text-align: center;
  align-items: center;
  border-radius: 5px;
  transition: all 0.3s ease;
  cursor: pointer;
  width: 98%;

  ${(props) =>
    props.isHovered
      ? css`

          background:#787C8C;
        `
      : css`

        `}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: #333;
  border: 1px solid black;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 10px;
  overflow: hidden;
  width: 98%;


  ${(props) =>
    props.isHovered
      ? css`
          height: 250px;
          background:#787C8C;
        `
      : css`
          height: 70px;
        `}

  @media (max-width: 768px) {
    /* Adjust height for smaller screens */
    height: auto;
    ${(props) =>
      props.isHovered &&
      css`
        padding: 20px; /* Increase padding for better spacing */
      `}
  }
`;

const LogoContainer = styled.div`
  display: flex;
  margin-right: 10px;
`;

const LogoImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

const Title = styled.p`
  font-size: 200%;
  margin: 0;
  color: white;
  padding: 10px;
`;

const Text = styled.div`
  font-size: 20px;
  opacity: 0.7;
  color: white;
  padding: 30px;
`;

const Date = styled.div`
  margin-left: auto;
  color: white;
  font-size: 200%;
`;
const Grid1 = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    list-style: none;
    padding: 8px;

    li {
        flex: 0 0 calc(12.5% - 10px); /* Each row should have 8 items */
        padding: 8px;
        background-color: lightgray;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
    }

`
const HoverBar = ({ logoSrc, title, text, date, myList }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Container
      isHovered={isHovered}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <HoverBarContainer       isHovered={isHovered}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        <LogoContainer>
          <LogoImage src={logoSrc} alt="Logo" />
        </LogoContainer>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </HoverBarContainer>
      {isHovered && <Text>{text}</Text>}
      {isHovered &&       <Grid1>
        {myList.map((item1, index1) => (
          <li key={index1}>{item1}</li>
        ))}
      </Grid1>}
    </Container>
  );
};

export default HoverBar;
