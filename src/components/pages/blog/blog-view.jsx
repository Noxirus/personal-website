import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';
import { Blogs } from '../../../library/blogLibrary';

const BlogView = () => {
//Get the ID from the URL to figure out which blog we are looking at here

var {id} = useParams();
const blog = Blogs[id];

   return (<Container>
    <Row>
        <Col>
            <h1>{blog.title}</h1>
            <h3>{blog.date}</h3>
        </Col>
    </Row>
            {blog.paragraphs.map((paragraph) => <p>{paragraph}</p>)}
   </Container>);
}
export default BlogView;