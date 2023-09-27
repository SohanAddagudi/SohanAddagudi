
import { BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';

import styled from 'styled-components';
import Projects from './projects';
import Skills from './skills';
import Education from './education';
import Intro from './intro';
import Jobs from './jobs';
import Navbar from './navbar';
import Reu from './reu';

function Home() {
  return (

    <Body>
      <Navbar></Navbar>
      <Intro></Intro>
      <Education id="jobs"></Education>
      <Jobs></Jobs>
      <Projects></Projects>
      <Skills></Skills>
    </Body>

  );
}

const Body = styled.div`
  background: #18191A;
  font-family: 'Lora';
  scroll-behavior: smooth;
`
export default Home;
