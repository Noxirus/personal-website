import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import NavigationBar from './components/navigationBar';
import HomePage from './components/pages/home-page/home-page';
import Projects from './components/pages/projects/projects';
import Blog from './components/pages/blog';
import ContactMe from './components/pages/contact-me';
import NotFound from './components/not-found';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
    
      <BrowserRouter>
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route exact path="/" element={<HomePage />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
