import styled from 'styled-components';
import { IceColourPalette } from './colorPalette';
import { Container } from 'reactstrap';

export const PrimaryText = styled.h1`
font-size: clamp(40px, 8vw, 80px);
color: ${IceColourPalette.primary};
`

export const SecondaryText = styled.h2`
font-size: clamp(30px, 6vw, 50px);
color: ${IceColourPalette.secondary};
`

export const ParagraphText = styled.p`
font-size: clamp(10px, 4vw, 25px);
color: ${IceColourPalette.secondary};
`

export const CenteredTitle = styled.h1`
font-size: clamp(40px, 8vw, 60px);
text-align: center;
    color: ${IceColourPalette.primary}
`

export const InfoSection = styled(Container)`
    margin-left: auto;
    margin-right: auto;
    padding-top: ${props => props.padding};
`