import React, { useState } from "react";
import styled from 'styled-components';

const CardContainer = styled.div`
    width: 100%; /* Make the card container take up 100% width */
    max-width: 450px; /* Limit the maximum width for larger screens */
    background: #333;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    margin: 0 auto; /* Center the card horizontally */
    height: 550px;
    @media (max-width: 768px) {
        height: auto;

      }
`;

const BackgroundImage = styled.img`
    width: 100%;
    height: 275px; /* Allow the image to scale proportionally */

    object-fit: cover;
`;


const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    opacity: ${props => (props.show ? 1 : 0)};
    transition: opacity 0.3s ease;
`;

const Title = styled.h2`
    color: #fff;
    margin-bottom: 8px;
`;

const Description = styled.p`
    color: #ccc;
`;

const TextSection = styled.div`
    background: #333;
    color: #fff;
    font-size: 16px;
    padding: 5px;
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
        padding: 4px;
        background-color: lightgray;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color:#333;
    }

`
export default function Projcard({ imageSrc, title, description, text, title1, myList }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <CardContainer
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            <BackgroundImage src={imageSrc} alt="Education" />
            <Overlay show={isHovered}>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Overlay>
            <TextSection>
                <h3>{title1}</h3>
                <p>{text}</p>
            </TextSection>
                <Grid1>
            {myList.map((item1, index1) => (
            <li key={index1}>{item1}</li>
            ))}
        </Grid1>
        </CardContainer>
    );
}
