import React from "react";
import styled from 'styled-components';

export default function Skills(){
    return(
        <>
            <Title>Technical Skills</Title>
            <Grid>
                <li>Python</li>
                <li>Java</li>
                <li>C/C++</li>
                <li>Pandas</li>
                <li>SQl</li>
                <li>Docker</li>
                <li>Git</li>
                <li>Linux</li>
                <li>Django</li>
                <li>HTML/CSS/JS</li>
                <li>React.js</li>
                <li>TensorFlow</li>
                <li>PyTorch</li>
                <li>HPC</li>
                <li>Solidity</li>
                <li>AWS</li>
                <li>Agile</li>
            </Grid>
        </>
    )
}

const Grid = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    list-style: none;
    padding: 10px;

    li {
        flex: 0 0 calc(12.5% - 10px); /* Each row should have 8 items */
        padding: 8px;
        background-color: lightgray;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

`

const Title = styled.h1`
background-color: #18191A;
text-align: center;
color: white;
font-size: 45px;
`