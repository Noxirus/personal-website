import React from 'react';
import styled from 'styled-components';
import AboutSection from './about-section';
import ExperienceSection from './experience-section';
import ProjectSection from './project-section';
import ContactMe from '../contact-me';
import IntroductionSection from '../introduction/introduction-section';

const HomePage = () => {

   return (<BackgroundDiv>
      <IntroductionSection />
    <ProjectSection />
    <ExperienceSection />
    <AboutSection />
    
    {/* <BlogSection /> */}
    <ContactMe />
   </BackgroundDiv>);
}
export default HomePage;

const BackgroundDiv = styled.div`

`