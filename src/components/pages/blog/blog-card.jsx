import React from 'react';
import { Card, Button, Row, Col} from 'reactstrap';
import styled from 'styled-components';
import { ColourPalette } from '../../../library/colorPalette';

const BlogCard = ({details, index}) => {

   return (<Row>
    <Col lg="4" sm="12">
      <img
        alt={details.description}
        src="https://picsum.photos/300/200" //TODO add image ref here
      />
    </Col>
   <Col>
     <Title>
       {details.title}
     </Title>
     <SecondaryText>
        {details.date}
     </SecondaryText>
     <SecondaryText>
       {details.description}
     </SecondaryText>
     <Button onClick={() => window.open("blog/" + index, "_self")}>
       Read Article
     </Button>
   </Col>
 </Row>);
}
export default BlogCard;

const Title = styled.h1`
font-size: clamp(20px, 3vw, 30px);
color: ${ColourPalette.primary};
`
const SecondaryText = styled.h2`
font-size: clamp(15px, 2vw, 20px);
color: ${ColourPalette.grey};
`

//TODO make this wider, maybe takes up the middle of the page for each article card?
const CardStyle = styled(Card)`
    width: 18rem;

    &:hover{
        cursor: pointer;
    }

`