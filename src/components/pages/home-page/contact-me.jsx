import React from 'react';
import { Row } from 'reactstrap';
import { BackgroundRow, CenteredCol, CenteredTitle, InfoSection, ParagraphText, StyledButton } from '../../../library/styleLibrary';

const ContactMe = () => {

   return (<InfoSection id="contact" padding="200px">
        <Row>
            <CenteredCol>
                <CenteredTitle>Contact me</CenteredTitle>
            </CenteredCol>
        </Row>
        <BackgroundRow>
            <CenteredCol>
                <ParagraphText>I am currently looking for work! Should you have any opportunities for me please send me an email.</ParagraphText>
                <br />
                <StyledButton onClick={(e) => {window.location.href = "mailto:hamishharrison@hotmail.com"; e.preventDefault();}}>
                    Email Me
                </StyledButton>
            </CenteredCol>
        </BackgroundRow>
   </InfoSection>);
}
export default ContactMe;
