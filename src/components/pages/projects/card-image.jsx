import React from 'react';
import styled from 'styled-components';
import { Col } from 'reactstrap';

const CardImage = ({details}) => {

   return ( <ImageCol xl="5" lg="6" sm="12" onClick={() => window.open(details.link)}>
   <ProjectImage
     alt={details.description}
     src="https://picsum.photos/400/200" //TODO add image ref here
   />
   </ImageCol>);
}
export default CardImage;

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