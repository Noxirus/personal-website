import React from 'react';
import { Col, Row} from 'reactstrap';
import styled from 'styled-components';
import { IceColourPalette } from '../../../library/colorPalette';

const ProjectCard = ({details}) => {

   return (<StyledCard>
        <ImageCol xl="5" lg="6" sm="12" onClick={() => window.open(details.link)}>
          <ProjectImage
            alt={details.description}
            src="https://picsum.photos/400/200" //TODO add image ref here
          />
          </ImageCol>
          <TextCol>
            <Title>
              {details.title}
            </Title>
            <SecondaryText>
              Roles: {details.roles}
            </SecondaryText>
            <SecondaryText>
              {details.tech}
            </SecondaryText>
            <ParagraphText>
              {details.description}
            </ParagraphText>
        </TextCol>
      </StyledCard>
  );
}

export default ProjectCard;

//TODO more detail around card border?

const StyledCard = styled(Row)`
  border-style: solid;
  border-width: 2px;
  margin: 15px;
  border-radius: 15px;
  padding: 15px;
  
  border-color: ${IceColourPalette.primary} ${IceColourPalette.secondary} ${IceColourPalette.grey}
`

const Title = styled.h1`
font-size: clamp(20px, 3vw, 30px);
color: ${IceColourPalette.primary};
`

const SecondaryText = styled.h2`
font-size: clamp(15px, 2vw, 20px);
color: ${IceColourPalette.grey};
`

export const ParagraphText = styled.p`
font-size: clamp(10px, 4vw, 25px);
color: ${IceColourPalette.secondary};
`

const TextCol = styled(Col)`

`

const ProjectImage = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;

  &:hover{
    cursor: pointer;
  }
`

const ImageCol = styled(Col)`

`