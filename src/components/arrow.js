import React from 'react';
import Navbar from './navbar';
import styled from 'styled-components';


const Arrow = () => {
  return (
    <Wrapper >
      <Navbar/>
      <Content>
      <h1 style={{fontSize: "40px"}}>Arrow Markets - Software Engineering Intern</h1>
        <TextSection>
          <h1 >Summary:</h1>
          <p>
          During my Software Engineering Internship at Arrow Markets from June 2023 to September 2023, I worked on a multifaceted project that revolved around cryptocurrency options and data engineering. The primary focus of my work was to create a comprehensive data pipeline and develop a full-stack web application to enhance the pricing analysis of cryptocurrency options across various trading platforms.
        </p>

          <h2>Data Pipeline:</h2>
          <p>
          One of the key components of my internship involved building a robust data pipeline for recording on-chain pricing data for cryptocurrency options. Primarily, I leveraged Python's capabilities in tandem with the Web3 library, facilitating direct interaction with Ethereum and other blockchain networks. This empowered me to query and extract option pricing data directly from Solidity smart contracts, thus ensuring data integrity and accuracy. Moreover, I optimized data retrieval efficiency through the use of GraphQL and subgraph queries, enhancing the pipeline's ability to scale and adapt to evolving blockchain structures. In parallel, I applied Selenium, a powerful web automation framework, to programmatically scrape option data from platform-specific web interfaces, consolidating the comprehensive data feed into the pipeline. This technical orchestration culminated in a robust, automated, and extensible solution for the systematic capture of mission-critical on-chain pricing data across the cryptocurrency option ecosystem.          </p>




          <h2>Django Application: </h2>
          <p>I designed and implemented a full-stack web application using Django, a powerful Python web framework. This application served as a user-friendly interface for accessing and analyzing cryptocurrency option pricing data.

The application provided a seamless and intuitive user experience, offering features like data visualization, real-time updates, and historical price charts.
            </p>

            
        <h2>Data Storage in SQLite and AWS Integration</h2>
        <p>To ensure data persistence and accessibility, I implemented a SQLite database to store the collected data. SQLite was chosen for its efficiency and simplicity in handling structured data.

Moreover, I integrated the application with Amazon Web Services (AWS) to enhance scalability and reliability. AWS provided a cloud infrastructure that allowed for seamless deployment and scaling of the application, ensuring that it could handle increased user demand as needed.</p>




          
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


export default Arrow;
