import React from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import AboutSection from './about-section';
import SkillsSection from './skills-section';
import { InfoSection } from '../../../library/styleLibrary';
import ProjectSection from './project-section';
import ContactMe from '../contact-me';


const HomePage = () => {

   return (<BackgroundDiv>
    <AboutSection />
    <SkillsSection />
    <ProjectSection />
    {/* <BlogSection /> */}
    <ContactMe />
    {/*Social media at the bottom? */}
   </BackgroundDiv>);
}
export default HomePage;

const BackgroundDiv = styled.div`

`
//Border?
//Alternating color pattern?
//Margins
//Background picture optional?
//Animation to display information?
//Needs lots of spacing, and focused in a specific section of the container