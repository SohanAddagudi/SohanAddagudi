import React from "react";
import styled from 'styled-components';
import HoverBar from "./jobcard";
import { Link } from "react-router-dom";

export default function Jobs(){
    return(
        <Body id="jobs">
            <h1 style={{textAlign: "center", color:"white", fontSize: "300%"}}>My Work and Research Experiences</h1>
            <HoverBar
                    logoSrc="data:image/jpeg;base64,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"
                    text="I was a research assistant in Dr. Junaed Sattar's lab working on underwater video enhancement software. This is ongoing!"
                    title="IRV Lab - Research Assistant"
                    myList={['Python','PyTorch','Docker']}
                    date={'Jul 2023 - Present'}
                />
                <Better href="/SohanAddagudi/jobarrow">
                    <HoverBar
                        logoSrc="https://pbs.twimg.com/profile_images/1456746607542734853/uVQ9BxQW_400x400.png"
                        text="During this internship I was tasked with the development of a full-stack application to record on-chain pricing for crypto currency derivatives. Click to learn more!"
                        title="Arrow Markets - Software Engineering Intern"
                        date = "June 2023 - Sep 2023"
                        myList={['Python','Web3','GraphQL','Django','AWS', 'Solidity']}
                    />
                </Better>
                <Better href="/SohanAddagudi/jobreu#reu-id"> 
                <HoverBar
                    logoSrc="https://upload.wikimedia.org/wikipedia/commons/7/7e/NSF_logo.png"
                    text="This 10 week internship program was a National Science Foundation (NSF) Research Experience for Undergraduates (REU). During this intership, I worked under Dr. Rajeez Azad's lab at the University of North Texas working on a deep learning rare cancer diagnostic model. Click to learn more"
                    title="National Science Foundation - Research Intern (REU)"
                    date = "May 2023 - August 2023"
                    myList={['Python','Tensorflow','Linux','HPC','Pandas','Acadmic Writing', 'Agile']}
                />
                </Better>
                <Better href="/SohanAddagudi/jobharp"> 
                <HoverBar
                    logoSrc="data:image/jpeg;base64,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"
                    text="I was a research assistant under Dr. Mohamed Mokbel working on the iHARP project (institute for harnessing data in polar regions). Worked on visualisation and cleansing of geological data. Click to learn more"
                    title="University of Minnesota - Research Assistant"
                    myList={['Python','GeoPandas','Rasterio','NumPy', 'Xarray','SQL']}
                    date={'Sep 2022 - Dec 2022'}
                />
                </Better>

                    <HoverBar
                        logoSrc="https://yt3.googleusercontent.com/VrU9MmAzb92b07YmMdf3Go8Ic0-pssbYjWcz37lJxezNTuxBcqQIgEgRSAEJZnSM_brRowCfPBk=s900-c-k-c0x00ffffff-no-rj"
                        text="I was the lead tutor at the Kumon Math and Reading center located in Eagan, Minnesota. As a tutor I mentored students K-12 in a variety of different subjects ranging from addition to calculus and grammar. I also organized and filed paperwork, and during the COVID-19 pandemic, I was in charge of scheduling online meetings with students and other tutors."
                        title="Kumon - Lead Tutor"
                        myList={['Teaching','Administration','Communication','Leadership']}
                        date='Feb 2017- June 2022'
                    />

        </Body>
    )
}



const Body = styled.div`
    justify-content: center;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
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