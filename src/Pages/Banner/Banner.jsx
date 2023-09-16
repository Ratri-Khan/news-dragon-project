import React from 'react';
import Footer from '../Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Shared/LeftNav/LeftNav';
import RightNav from '../Shared/RightNav/RightNav';

const Banner = () => {
    return (
        <div>
            <Container>
            <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <h3>Main Content Content</h3>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <p>This is Banner</p>
            <Footer></Footer>
        </div>
    );
};

export default Banner;