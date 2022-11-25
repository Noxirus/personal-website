import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { Blogs } from "../../../library/blogLibrary"
import BlogCard from '../blog/blog-card';


const BlogSection = () => {
   return (<InfoSection>
    <Row>
        <Col>
            <h1>
                Check out my most recent blog post below
            </h1>
        </Col>
    </Row>
    <Row>
        <Col>
            <BlogCard details={Blogs[Blogs.length - 1]} />
        </Col>
    </Row>
    <Row>
        <Col>
            <p>Insert button here to view blog archives</p>
        </Col>
    </Row>
</InfoSection>);
}
export default BlogSection;

const InfoSection = styled(Container)`
    border-width: 5px;
    border-style: solid;
    test-code: ${props => props.test};
`