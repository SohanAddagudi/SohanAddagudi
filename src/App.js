import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

import Reu from './components/reu';
import Home from './components/home';
import Nba from './components/nba';
import Carbon from './components/carbon';
import Harp from './components/iharp';
import Arrow from './components/arrow';
import Emoji from './components/emoji';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/jobreu" element={<Reu/>} />
        <Route path="/projnba" element={<Nba/>} />
        <Route path="/projcarbon" element={<Carbon/>} />
        <Route path="/projemoji" element={<Emoji/>} />
        <Route path="/jobharp" element={<Harp/>} />
        <Route path="/jobarrow" element={<Arrow/>} />

      </Routes>


  );
}

const Body = styled.div`
  background: #18191A;
  font-family: 'Lora'
  scroll-behavior: smooth;
`
export default App;
