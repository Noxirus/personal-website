import React from 'react';
import { Row, Col } from 'reactstrap';
import { Blogs } from "../../../library/blogLibrary"
import BlogCard from '../blog/blog-card';
import { CenteredTitle, InfoSection } from '../../../library/styleLibrary';

const BlogSection = () => {

   return (<InfoSection padding="150px">
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