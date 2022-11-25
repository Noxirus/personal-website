import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';
import styled from 'styled-components';

const BlogCard = ({details}) => {

   return (<CardStyle onClick={() => window.open("blog/" + details.id, "_self")}>
   <img
     alt={details.description}
     src="https://picsum.photos/300/200" //TODO add image ref here
   />
   <CardBody >
     <CardTitle tag="h5">
       {details.title}
     </CardTitle>
     <CardText>
        {details.date}
     </CardText>
     <CardText>
       {details.description}
     </CardText>
     <Button>
       Read Article
     </Button>
   </CardBody>
 </CardStyle>);
}
export default BlogCard;

//TODO make this wider, maybe takes up the middle of the page for each article card?
const CardStyle = styled(Card)`
    width: 18rem;

    &:hover{
        cursor: pointer;
    }

`