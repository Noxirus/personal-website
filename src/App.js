import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import NavigationBar from './components/navigationBar';
import HomePage from './components/pages/home-page/home-page';
import ContactMe from './components/pages/contact-me';
import NotFound from './components/not-found';
import BlogView from './components/pages/blog/blog-view';
import BlogArchives from './components/pages/blog/blog-archives';
import ProjectPage from './components/pages/projects/project-archive';
import styled from 'styled-components';
import { IceColourPalette } from './library/colorPalette';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <BackgroundDiv />
      <BrowserRouter>
        <Routes>
          <Route path="/blog" element={<BlogArchives />} />
          <Route path="/blog/:id" element={<BlogView/>} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route exact path="/" element={<HomePage />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

//Add static background? Do I want a background?
const BackgroundDiv = styled.div`
    background-color: ${IceColourPalette.black};
    width:100%;
    height:100%;
    position:fixed;
    z-index:-5;
`