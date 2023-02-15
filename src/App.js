import './App.css';
import { Routes, Route } from "react-router-dom";
import React from 'react';
import NavigationBar from './components/general/navigationBar';
import HomePage from './components/pages/home-page';
import NotFound from './components/general/not-found';
import ProjectPage from './components/pages/projects/project-archive';
import styled from 'styled-components';
import { ColorPalette } from './library/colorPalette';
import Footer from './components/general/footer';
import AnimationBackground from './components/background-animation/animation-background';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <AnimationBackground />
      <BackgroundDiv />
        <Routes>
          <Route path="/projects" element={<ProjectPage />} />
          <Route exact path="/" element={<HomePage />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;

const BackgroundDiv = styled.div`
background-color: ${ColorPalette.dark};
width:100%;
height:100%;
position:fixed;
z-index:-10;
`
