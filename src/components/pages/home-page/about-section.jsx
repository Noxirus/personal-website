import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

const AboutSection = () => {

   return (<InfoSection>
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
</InfoSection>);
}
export default AboutSection;

const InfoSection = styled(Container)`
    border-width: 5px;
    border-style: solid;
    test-code: ${props => props.test};
`