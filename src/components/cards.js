import React, { useState } from "react";
import styled from 'styled-components';

const CardContainer = styled.div`
    width: 100%; /* Make the card container full-width */
    max-width: 660px; /* Limit maximum width */
    background: #333;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    margin: 0 auto; /* Center the card horizontally */
`;

const BackgroundImage = styled.img`
    width: 100%;
    height: 300px;
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
    font-size: 25px;
`;

const Description = styled.p`
    color: #ccc;
    font-size: 18px;
`;

const TextSection = styled.div`
    background: #333;
    color: #fff;
    font-size: 16px;
    padding-left: 10px;
`;

export default function Card({ imageSrc, title, description, text, title1 }) {
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
        </CardContainer>
    );
}
