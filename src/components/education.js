import React from "react";
import styled from 'styled-components';
import Card from "./cards";

export default function Education(){
    return(
        <section id='education'>
        <Body>
            <h1 style={{textAlign: "center", color:"white", fontSize: "50px"}}>My Education</h1>
            <Center>
                <Card
                    imageSrc="https://twin-cities.umn.edu/sites/twin-cities.umn.edu/files/styles/desktop/public/umn-lawn.jpg"
                    title1="University of Minnesota - Twin Cities"
                    description="Overall GPA: 3.9 - Major Specific GPA: 4.0"
                    text="I am currently a student at the Univeristy of Minnesota Twin Cities, College of Science and Engineering (CSE). I'm studying for my B.S in Computer Science."
                    title="Fall 2022 - Present"
                />
                <Card
                    imageSrc="https://resources.finalsite.net/images/f_auto,q_auto/v1626879791/district196org/e1mfe3tuthct0ipqen6k/BOYImportantDates2023_24wide_3.jpg"
                    title1="Eastview High School"
                    title="Fall 2018 - Spring 2022"
                    description="Unweighted GPA: 3.97"
                    text="I was a student at Eastview High School in Apple Valley, Minnesota where I took a variety of upper level courses which allowed me to jump start my college education."
                />
            </Center>
        </Body>
        </section>
    )
}

const Center = styled.div`
  justify-content: center;
  padding: 10px;
  display: flex;
  gap: 10px;
`;
const Body = styled.div`
//   background-color: #121212;
`

