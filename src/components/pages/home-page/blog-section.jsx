import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { Blogs } from "../../../library/blogLibrary"
import BlogCard from '../blog/blog-card';
import { CenteredTitle } from '../../../library/styleLibrary';

const BlogSection = () => {

   return (<InfoSection>
    <Row>
        <Col>
            <CenteredTitle>
                Check out my most recent blog post below
            </CenteredTitle>
        </Col>
    </Row>
    <hr />
    <Row>
        <Col>
            <BlogCard details={Blogs[0]}  index={(Blogs.length - 1) - Blogs[0].id} />
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
    margin-left: auto;
    margin-right: auto;
    padding-top: 150px;
`