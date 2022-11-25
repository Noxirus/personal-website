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
            {Blogs.map((blog) => <BlogCard key={blog.id} details={blog} index={(Blogs.length - 1) - blog.id} />)}
        </Col>
    </Row>
   </Container>);
}

//TODO add a collapse section after you view 3 (ish?)
//Dont want to render out a crazy amount of blog cards right when you go to this page
export default BlogArchives;