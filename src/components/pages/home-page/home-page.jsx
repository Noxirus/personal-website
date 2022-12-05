import React from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import AboutSection from './about-section';
import ExperienceSection from './experience-section';
import { InfoSection } from '../../../library/styleLibrary';
import ProjectSection from './project-section';
import ContactMe from '../contact-me';
import IntroductionSection from './introduction-section';


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