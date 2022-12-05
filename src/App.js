import './App.css';
import { Routes, Route } from "react-router-dom";
import React from 'react';
import NavigationBar from './components/navigationBar';
import HomePage from './components/pages/home-page/home-page';
import NotFound from './components/not-found';
import ProjectPage from './components/pages/projects/project-archive';
import styled from 'styled-components';
import { ColourPalette } from './library/colorPalette';
import Footer from './components/footer';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
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

//Add static background? Do I want a background?
const BackgroundDiv = styled.div`
    background-color: ${ColourPalette.dark};
    width:100%;
    height:100%;
    position:fixed;
    z-index:-5;
`