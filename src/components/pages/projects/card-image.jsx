import React, { useState } from 'react';
import styled from 'styled-components';
import { Col } from 'reactstrap';

const VideoEmbed = React.lazy(() => import('../../general/video-embed'));

const CardImage = ({details}) => {
  const[viewingTrailer, setViewingTrailer] = useState(false);

  function OnHover()
  {
    if(details.videoUrl !== undefined)
    {
      setViewingTrailer(true);
    }
  }

   return ( <ImageCol onMouseEnter={() => OnHover()} xl="5" lg="6" sm="12">
   {viewingTrailer ? <VideoEmbed videoUrl={details.videoUrl} /> : <ProjectImage
     alt={details.description}
     src={details.img}
   />} 
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