import React from 'react';
import Navbar from './navbar';
import styled from 'styled-components';
import paper from '../Machine_Learning_Optimization_Model_to_Predict_Fantasy_Basketball_Teams.pdf';


const Nba = () => {
  return (
    <Wrapper >
      <Navbar/>
      <Content>
        <h1 style={{fontSize: "40px"}}>NBA Fantasy Optimizer</h1>
        <TextSection>

          <h1 >Summary:</h1>
          <p>
          This project introduces an innovative machine learning optimization model designed to revolutionize the way fantasy basketball teams are crafted. With a focus on the DraftKings platform, the model systematically assembles competitive teams while adhering to constraints like salary caps and player positions. It aims to maximize a team's fantasy point potential, offering users a significant edge in fantasy sports competitions. The project leverages Gurobi-Py Optimization and combines data from DraftKings and Action Network to ensure player selection is based on recent performance and injury status. The model's efficiency lies in its ability to swiftly navigate complex solution spaces, providing optimal team compositions. For this project, we also wrote an academic paper that is in the process of being published.         </p>
          <h1>Data Sources:</h1>
          <p>
          The project relies on two key data sources: DraftKings, which provides player data including salary cap information and player positions, and Action Network, from which injury data is web scraped. By combining these datasets, the project ensures that player selection is based on comprehensive and up-to-date information, reducing the risk of choosing inactive or underperforming players due to injuries.</p>
          <h1> Preproccesing:</h1>

          <p>
            We curated and preprocced the data using the python library Pandas. This ensured that inured players were not included in the optimizations, and it allowed for a streamlined pipeline into optimization. 
          </p>
            <h1>Optimization:</h1>
          <p>
          The project employs Gurobi-Py Optimization, a powerful tool, to streamline the team selection process. Unlike traditional iterative methods, Gurobi-Py efficiently explores vast solution spaces, rapidly identifying the most advantageous team compositions. This advanced approach significantly accelerates the optimization process and ensures optimal team selection within specified constraints.
        </p>
            <h1>Constraints:</h1>
          <p>
          Two critical constraints shape the team selection process: salary caps and player positions. Users are allocated a budget of $50,000 to build their team, and the model must adhere to this financial limit. Additionally, the model ensures a diverse team composition by enforcing position-specific constraints, such as the inclusion of guards, forwards, centers, and utility players. This attention to detail prevents the formation of imbalanced teams and ensures compliance with the platform's rules.
            </p>

          <p>For further information, please refer to the early <a href={paper} target='blank'>manuscript</a> we produced.</p>

          
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


export default Nba;
