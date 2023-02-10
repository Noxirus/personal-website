import React from 'react';
import styled from 'styled-components';
import IntroductionSection from '../introduction/introduction-section';
import ProjectSection from './project-section';

const ExperienceSection = React.lazy(() => import('./experience-section'));
const AboutSection = React.lazy(() =>import('./about-section'));
const ContactMe = React.lazy(() => import ('./contact-me'));

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