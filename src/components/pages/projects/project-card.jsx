import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Col} from 'reactstrap';
import styled from 'styled-components';

const ProjectCard = ({details}) => {

   return (
    <Col>
      <CardStyle onClick={() => window.open(details.link)}>
      <img
        alt={details.description}
        src="https://picsum.photos/300/200" //TODO add image ref here
      />
      <CardBody >
        <CardTitle tag="h5">
          {details.title}
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          {details.roles}
        </CardSubtitle>
        <CardText>
          {details.description}
        </CardText>
        <Button>
          View
        </Button>
      </CardBody>
    </CardStyle>
  </Col>);
}

export default ProjectCard;


//TODO more detail around card border?
const CardStyle = styled(Card)`
    width: 18rem;

    &:hover{
        cursor: pointer;
    }

`