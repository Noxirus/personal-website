import styled from 'styled-components';
import { IceColourPalette } from './colorPalette';

export const PrimaryText = styled.h1`
font-size: ${props => props.fontSize};
color: ${IceColourPalette.primary};
`

export const SecondaryText = styled.h2`
font-size: ${props => props.fontSize};
color: ${IceColourPalette.secondary};
`

export const ParagraphText = styled.p`
font-size: ${props => props.fontSize};
color: ${IceColourPalette.secondary};
`