import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';
import { Blogs } from '../../../library/blogLibrary';
import BlogCard from './blog-card';

const BlogArchives = () => {

   return (<Container>
    <Row>
        <Col>
            <h1>Hamish's Blog</h1>
            <h3>Check out some new and old posts from my software dev journey!</h3>
        </Col>
    </Row>
    <Row>
        <Col>
            {Blogs.map((blog) => <BlogCard key={blog.id} details={blog} />)}
        </Col>
    </Row>
   </Container>);
}
export default BlogArchives;