import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

const HomePage = () => {

   return (<React.Fragment>
    <InfoSection>
        <Row>
            <Col>
                <h1>Welcome to my website!</h1>
                <p>
                    My name is Hamish Harrison and I am a professional software and web developer. 
                    From building games to making websites I am happy to challenge the next big project!
                </p>
            </Col>
            <Col>
                <h1>Picture of me working or something here?</h1>
            </Col>
        </Row>
    </InfoSection>
    <InfoSection>
        <Row>
            <Col>
                <h2>Insert fancy looking tech stack representation here?</h2>
                <p>Visual Studio, C#, Git, React, Javascript, SQL, NoSQL (Mongodb, firebase)</p>
            </Col>
        </Row>
    </InfoSection>
    <InfoSection>
        <Row>
            <Col>
                <h2>My portfolio of projects</h2>
                <h2>OR all? And I just get rid of the additional route pages?</h2>
                <p>Insert project cards here (Just a few?), animate them?</p>
                <p>Maybe lets try adding all relevant information here? and they can click to see more information if they want</p>
            </Col>
        </Row>
    </InfoSection>
    <InfoSection>
        <Row>
            <Col>
                <h2>Recent blog updates!</h2>
                <p>I like to keep in touch with various things I have been working on, feel free to read up on them here!</p>
            </Col>
        </Row>
    </InfoSection>
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

`
//Border?
//Alternating color pattern?
//Margins
//Background picture optional?
//Animation to display information?
//Needs lots of spacing, and focused in a specific section of the container