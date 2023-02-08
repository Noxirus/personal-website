import React from 'react';
import { Row } from 'reactstrap';
import { CenteredCol, CenteredTitle, InfoSection, ParagraphText, StyledButton } from '../../../library/styleLibrary';

const ContactMe = () => {

   return (<InfoSection id="contact" padding="200px">
        <Row>
            <CenteredCol>
                <CenteredTitle>Contact me</CenteredTitle>
                <ParagraphText>I am currently looking for work! Should you have any opportunities for me please dont hesitate to send me an email.</ParagraphText>
                <StyledButton onClick={(e) => {window.location.href = "mailto:hamishharrison@hotmail.com"; e.preventDefault();}}>
                    Email Me
                </StyledButton>
            </CenteredCol>
        </Row>
   </InfoSection>);
}
export default ContactMe;
