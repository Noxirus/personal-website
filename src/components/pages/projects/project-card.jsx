import React from 'react';
import { Row } from 'reactstrap';
import styled from 'styled-components';
import { ColourPalette } from '../../../library/colorPalette';
import CardDetails from './card-details';
import CardImage from './card-image';

const ProjectCard = ({details, flipped}) => {

   return (<StyledCard>
    {(flipped && window.innerWidth > 1000) ? //TODO this doesn't change dynamically, only on page refresh
      <React.Fragment><CardImage details={details} /><CardDetails details={details}/></React.Fragment> : 
      <React.Fragment><CardDetails details={details}/><CardImage details={details} /></React.Fragment>
    }
      </StyledCard>
  );
}

export default ProjectCard;

const StyledCard = styled(Row)`
  border-style: solid;
  border-width: 2px;
  margin: 15px;
  border-radius: 15px;
  padding: 15px;
  background-color: ${ColourPalette.tertiary};
  border-color: ${ColourPalette.primary} ${ColourPalette.secondary} ${ColourPalette.grey}
`


