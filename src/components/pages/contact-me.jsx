import React from 'react';
import { Col, Row, Button } from 'reactstrap';
import styled from 'styled-components';
import { CenteredTitle, InfoSection, ParagraphText, SecondaryText } from '../../library/styleLibrary';

const ContactMe = () => {

   return (<InfoSection padding="200px">
        <Row>
            <Col>
                <CenteredTitle>Contact me information here</CenteredTitle>
                <ParagraphText>I am currently looking for work! Should you have any opportunities for me please dont hesitate to send me an email about any opportunities.</ParagraphText>
                <Button onClick={(e) => {window.location.href = "mailto:hamishharrison@hotmail.com";
                e.preventDefault();}}>Email Me</Button>
            </Col>
        </Row>
   </InfoSection>);
}
export default ContactMe;