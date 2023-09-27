import React from 'react';
import Navbar from './navbar';
import styled from 'styled-components';


const Harp = () => {
  return (
    <Wrapper >
      <Navbar/>
      <Content>
      <h1 style={{fontSize: "40px"}}>University of Minnesota - Research Assistant</h1>
        <TextSection>
          <h1 >Summary:</h1>
          <p>
          During my tenure as a Research Assistant at the Institute for Harnessing Data in Polar Regions (iHARP) from September 2022 to December 2022, I was actively involved in a project focused on analyzing and visualizing polar melting data in Greenland. This project allowed me to leverage a combination of geospatial tools and libraries, including GeoPandas, NumPy, Rasterio, and Xarray, to transform raw netCDF polar melting data into insightful raster layers. In this more in-depth description, I will elaborate on the key aspects of my work and its significance.
        </p>
          <h2>Data Cleaning:</h2>
          <p>
          One of the primary tasks of this project was to clean and convert netCDF data related to polar melting. This data often comes in a complex and unstructured format, requiring specialized tools for processing. I utilized Python libraries such as GeoPandas, NumPy, and Xarray to efficiently handle this data. This involved tasks like data validation, handling missing values, and ensuring the data was in a suitable format for further analysis.</p>
          <h2>Raster Conversion</h2>
          <p>To make the data more accessible for spatial analysis and visualization, I converted it into raster layers. Raster data represents geographic information in a grid format, making it easier to analyze and overlay with other geospatial datasets. By using tools like Rasterio, I successfully transformed the cleaned data into a series of raster layers, each containing valuable information about polar melting trends.</p>

          <SmallImageContainer>
          <ImageLabel>Raster Layers</ImageLabel>
            <img src="https://www.researchgate.net/profile/Satiprasad-Sahoo/publication/265611902/figure/fig2/AS:613930095345715@1523383749807/Raster-layer-of-different-features-considered-for-GWPI-calculation.png" alt="Raster" />
          </SmallImageContainer>

          <h2>Plotting: </h2>
          <p>After converting the netCDF to raster layers, I worked on plotting the data for easy geographic visualisation. I utilized the Basemap module from matplotlib to perform this.
            </p>

          <p>
          After the plotting of a static map, a key highlight of my work was the development of an interactive map that showcased the raster layers in a more user-friendly manner. I utilized the Folium library, which seamlessly integrates with Python and allows for the creation of interactive web maps. This interactive map was instrumental in enabling researchers to explore polar melting trends visually and in real time. I also added a feature using PostgreSQL for users to query specific dates to be represented on the map.         
          </p>


          
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


export default Harp;
