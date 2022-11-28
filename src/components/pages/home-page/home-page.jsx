import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import AboutSection from './about-section';
import BlogSection from './blog-section';
import PortfolioSection from './portfolio-section';

import SkillsSection from './skills-section';
import { IceColourPalette } from '../../../library/colorPalette';
import { InfoSection } from '../../../library/styleLibrary';


const HomePage = () => {

   return (<BackgroundDiv>
    <AboutSection />
    <SkillsSection />
    <PortfolioSection />
    <BlogSection />
    <InfoSection>
        <Row>
            <Col>
                <h2>Contact Me!</h2>
                <p>Feel free to send me message about any opportunities!</p>
            </Col>
        </Row>
    </InfoSection>
    {/*Social media at the bottom? */}
   </BackgroundDiv>);
}
export default HomePage;

const BackgroundDiv = styled.div`
    background-color: ${IceColourPalette.black};
`
//Border?
//Alternating color pattern?
//Margins
//Background picture optional?
//Animation to display information?
//Needs lots of spacing, and focused in a specific section of the container