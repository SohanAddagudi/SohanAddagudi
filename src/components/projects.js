import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import Projcard from './projcard';
import carbonimg from '../SCR-20230828-shwl.png'
import calorie from '../RecAmounts.png'
import emoji from '../emoji.png'
import movie from '../IMG_2326.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import {Keyboard, Pagination, Navigation } from 'swiper/modules';

export default function Projects() {
  return (
    <Body id="projects">
      <h1>My Projects</h1>
      <Swiper
        cssMode={true}
        grabCursor={true}
        centeredSlides={true}
        navigation={true}
        keyboard={{
            enabled: true,
          }}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Better href="/projnba">
          <Projcard
                      imageSrc="https://a.espncdn.com/photo/2020/0311/espn_fba_1296x729.jpg"
                      title1="NBA Fantasy Optimizer"

                      text="Machine learning to optimize an NBA fantasy team. Submitted a paper for publication. Click to learn more"
                      title="Click to learn more!"
                      myList={['Python','Machine Learning','GurobiPy', 'Pandas','Web Scraping', 'Academic Writing']}
                  />
                  </Better>
        </SwiperSlide>
        <SwiperSlide>
          <Better href="/projcarbon">
          <Projcard
                      imageSrc={carbonimg}
                      title1="Carbon Calculator App"
                      text="This project is a full stack app that uses a carbon calculator and chatbot to educate people on their carbon footprint. Made for the Hackbytes hackathon."
                      title="Click to learn more!"
                      myList={['Python','HTML/CSS','Tensorflow','Django', 'AWS EC2']}
                  />
                  </Better>
        </SwiperSlide>

        <SwiperSlide>
          <Better href="/projemoji">
            <Projcard
                        imageSrc={emoji}
                        title1="Emoji Social Network"
                        description="Overall GPA: 3.9 - Major Specific GPA: 4.0"
                        text="For this project I worked on a team of 8 students to develop and launch a social media website focused on emoji based communication"
                        title="Fall 2022 - Spring 2024 (Expected)"
                        myList={['Python','HTML/CSS','Django', 'SQL']}
                    />
          </Better>
        </SwiperSlide>

        <SwiperSlide>
          <Projcard
                      imageSrc={calorie}
                      title1="Caloric Counter"
                      description="Overall GPA: 3.9 - Major Specific GPA: 4.0"
                      text="This project is an app that allows users to input and track their daily calories"
                      title="Fall 2022 - Spring 2024 (Expected)"
                      myList={['React','HTML/CSS','Data Munging', 'Javascript', 'Django']}
                  />
        </SwiperSlide>

        <SwiperSlide>
          <Projcard
                      imageSrc={movie}
                      title1="Movie Lookup App"
                      description="Overall GPA: 3.9 - Major Specific GPA: 4.0"
                      text="This web application allows the user to lookup any movie"
                      title="Fall 2022 - Spring 2024 (Expected)"
                      myList={['React','Javascript','HTML/CSS','APIs']}
                  />
        </SwiperSlide>
        
      </Swiper>
    </Body>
  );
}

const Body = styled.div`
  background-color: #18191A;
    text-align: center;
    color: white;
    font-size: 26px;
`

const Better = styled.a`
text-decoration: none;
color: inherit;
padding: 0;
margin: 0;
background-color: transparent;
border: none;
outline: none;
`