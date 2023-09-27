import React from 'react';
import Navbar from './navbar';
import styled from 'styled-components';
import network from '../networkarch.png';
import confusion from '../confusion matrix.png';
import latent from '../latent_space.png';
import poster from '../poster.png';

const Reu = () => {
  return (
    <Wrapper >
      <Navbar/>
      <Content>
      <h1 style={{fontSize: "40px"}}>National Science Foundation - Research Intern (REU)</h1>
        <TextSection>
          <h1 >Summary:</h1>
          <p>
            During my REU (Research Experience for Undergraduates) internship, funded by the National Science Foundation, I had the privilege to conduct research at the University of North Texas. Under the guidance of Dr. Rajeev Azad's bioinformatics lab, I had the opportunity to contribute to cutting-edge research in the field of neural networks for cancer diagnostics. This experience also enriched my academic journey, as we presented an academic poster and authored a manuscript that we hope to publish soon.
          </p>
          <h1>The Project:</h1>
          <p>
            Our project, titled "RXNet: a More Complete Model for Pan-Cancer Diagnostics Using DNA Methylation Data," aimed to address the challenge of diagnosing rare cancers, often detected only in advanced stages. To tackle this issue, we developed RareNet, a deep learning model leveraging transfer learning to predict rare cancer types using DNA methylation data from circulating tumor DNA (ctDNA) in the bloodstream.
          </p>

          {/* Image 1 (smaller) */}
          <SmallImageContainer>
            <img src={network} alt="Network" />
          </SmallImageContainer>

          <p>
            Our approach involved using a pre-trained variational autoencoder (VAE) on a comprehensive dataset of common cancer types to enhance our model's predictive capabilities for less prevalent cancers.
          </p>

          {/* Images 2 and 3 (same line) */}
          <ImageRow>
            <ImageContainer>
            <ImageLabel>Confusion Matrix</ImageLabel>
              <img src={confusion} alt="ConfMatrix" />
            </ImageContainer>
            <ImageContainer>
            <ImageLabel>Latent Space</ImageLabel>
              <img src={latent} alt="Latent Space" />
            </ImageContainer>
          </ImageRow>

          <p>
            Our model achieved an impressive F1 score exceeding 86% when tested on five specific rare cancer types: Wilms tumor (WT), Clear Cell Sarcoma of the Kidney (CCSK), Neuroblastoma (NB), Osteosarcoma (OST), and Acute Myeloid Leukemia (AML), despite having limited samples for each. The latent space and confusion matrix also indicated that the network excelled at diagnosing certain types of cancers with higher accuracy due to their biological similarities.
          </p>

          <p>
            Although our model's F1 score was slightly lower compared to a similar model trained on common cancers, this work highlights the potential of transfer learning to enhance early detection and diagnosis of rare cancers. These improvements could lead to more effective treatment strategies and better patient outcomes. Looking forward, we envision using our model to develop a non-invasive "liquid biopsy" for ctDNA detection, advancing cancer diagnostics by leveraging transfer learning with a sample set trained on biopsied DNA.
          </p>

          <p>For further information, please refer to the academic poster and early <a href="https://docs.google.com/document/d/1wFhOvqFCiVfW0Ess2tVN2dS_OTPYkYxqcokTfduB5KM/edit?usp=sharing" target='blank'>manuscript</a> we produced during the internship.</p>
          <LargeImageContainer>
            <LargeImage src={poster} alt="Poster" />
          </LargeImageContainer>
          
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


export default Reu;
