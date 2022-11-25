import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import AboutSection from './about-section';
import BlogSection from './blog-section';
import PortfolioSection from './portfolio-section';

import SkillsSection from './skills-section';


const HomePage = () => {
    


   return (<React.Fragment>
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

   </React.Fragment>);
}
export default HomePage;

const InfoSection = styled(Container)`
    border-width: 5px;
    border-style: solid;
    test-code: ${props => props.test};
`
//Border?
//Alternating color pattern?
//Margins
//Background picture optional?
//Animation to display information?
//Needs lots of spacing, and focused in a specific section of the container