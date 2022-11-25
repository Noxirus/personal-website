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

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
    
      <BrowserRouter>
        <Routes>
          <Route path="/blog" element={<BlogArchives />} />
          <Route path="/blog/:id" element={<BlogView/>} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route exact path="/" element={<HomePage />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
