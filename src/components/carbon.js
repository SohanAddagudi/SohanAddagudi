import React from 'react';
import Navbar from './navbar';
import styled from 'styled-components';

import calc from '../carboncalc.png';
import chat from '../carbonchat.png';


const Carbon = () => {
  return (
    <Wrapper >
      <Navbar/>
      <Content>
      <h1 style={{fontSize: "40px"}}>Carbon Counter Application</h1>
      <IconContainer>
        <h2>Github:</h2>
        <a href="https://github.com/MasonScarbro/HackByte2Prj" target="_blank" rel="noopener noreferrer">
            <img src="https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png" alt="GitHub" />
          </a>
        </IconContainer>
        <TextSection>
          <h1 >Summary:</h1>
          <p>
          The Carbon Calculator project is a comprehensive full-stack web application hosted on AWS EC2, designed to educate users about their carbon emissions and enable them to take actionable steps to reduce their environmental footprint. At its core, the project features a Carbon Calculator that  quantifies users' carbon footprints, considering various factors such as transportation choices and energy consumption. It also provides an AI chatbot that provides information to the user based on their input. This tool provides users with a clear understanding of their environmental impact.          </p>
          <h1>The Project:</h1>
          <p>
            I developed this project during the Hackbytes hackathon with another student. This application won an award for inspring environmental project. Watch the full project walkthrough below, or read the below sections for an in-depth look into the project and the process!
          </p>
          <h2>Carbon Calculator: </h2>
          <p>
            We created a carbon calculator with Python that took into account the users electricity, water, gas and travel to calculate their carbon footprint. The calculator queries a Pandas dataframe that stores car models and makes with their corresponding gas mileage to ensure accurate calculation of carbon footprint.
          </p>

          
          <SmallImageContainer>
            <img src={calc} alt="Carbon Calculator" />
          </SmallImageContainer>
          <h2>Chatbot: </h2>
          <p>
            We utilized an AI chatbot to provide an even interactive and personal advice to the user. The user could ask questions regarding the environment, and the chatbot would respond with advice and information. We built this model using TensorFlow trained with JSON files that provided patterns and responses for the chatbot. 
          </p>
          <SmallImageContainer>
            <img src={chat} alt="Carbon Chatbot" />
          </SmallImageContainer>
          <h2>Application: </h2>
          <p>
            This application utilized the python web-framework Django that provided full-stack functionality. It was also hosted using AWS EC2. This website also had various other pieces of important information regarding the website and was garnished with incredible HTML and CSS. View the video below for more!
          </p>

          <h1>The Development Process: </h1>
          <p>
The journey of building the Carbon Calculator application was an inspiring and educational process, beginning with a crucial brainstorming phase. During this initial stage, we conducted in-depth research into carbon emissions and their sources, seeking to create a tool that would not only quantify users' environmental impact but also educate and empower them. Brainstorming sessions allowed us to outline the key features, such as the Carbon Calculator itself and the AI chatbot, which would provide personalized guidance.
As development commenced, we encountered several significant challenges. Integrating diverse data sources for accurate emissions calculations proved complex, requiring meticulous data cleaning and integration processes through Pandas. Ensuring the AI chatbot provided relevant and helpful information demanded extensive machine learning model training and optimization. Additionally, the challenges of working with a stranger virtually was something that we had to work through. Teaching my team to use version control was an essential step in this process, and an extremely fulfilling one as I had the opportunity to teach an important computer science tool.
Despite these hurdles, our team's determination and collaboration enabled us to overcome each challenge. The development process fostered a deeper understanding of carbon emissions and sustainable practices, reflecting the project's educational mission. In the end, building the Carbon Calculator was a fulfilling endeavor, combining technological innovation with environmental consciousness to create a tool that empowers individuals to make greener choices in their daily lives.</p>
          <iframe style={{border: 0}} src="https://drive.google.com/file/d/1uVV2WacRndMNP2HsMdQXxqrFtpMGDKrX/preview" width="640" height="480" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>


          
        </TextSection>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #18191a;
  font-family: 'Lora', serif;
  color: white;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const TextSection = styled.div`
  h1 {
    font-size: 29px;
    margin-bottom: 10px;
  }

  p {
    font-size: 20px;
  }

  img {
    max-width: 80%;
    height: auto;
    display: block;
    margin: 10px auto;
  }
  a {
    color: lightblue;
  }
  iframe {
    max-width: 100%;

    display: block;
    margin: 10px auto;
  }
`;

const SmallImageContainer = styled.div`
  text-align: center;
  max-width: 50%;
  margin: 0 auto;
`;

const ImageRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ImageLabel = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
  color: #999; /* You can adjust the label color as needed */
`;
const ImageContainer = styled.div`
  flex: 1;
  text-align: center;
`;

const LargeImageContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const LargeImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  gap: 20px;

  img {
    width: 70px;
    height: 70px;
    cursor: pointer;
    transition: opacity 0.3s ease;
    border-radius: 50%;

    &:hover {
      opacity: 0.5;
    }
  }

  @media (max-width: 768px) {
    margin: 0;
    margin-top: 10px;
  }
`;

export default Carbon;
