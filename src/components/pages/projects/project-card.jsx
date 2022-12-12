import React from 'react';
import { Row } from 'reactstrap';
import styled from 'styled-components';
import { ColourPalette } from '../../../library/colorPalette';
import CardDetails from './card-details';
import CardImage from './card-image';

const ProjectCard = ({details, flipped}) => {

   return (<StyledCard>
    {(flipped && window.innerWidth > 1000) ?
      <React.Fragment><CardImage details={details} /><CardDetails details={details}/></React.Fragment> : 
      <React.Fragment><CardDetails details={details}/><CardImage details={details} /></React.Fragment>
    }
      </StyledCard>
  );
}

export default ProjectCard;

const StyledCard = styled(Row)`
margin: 15px;
padding: 15px;
background-color: ${ColourPalette.tertiary};
box-shadow: 5px 5px ${ColourPalette.grey};
`