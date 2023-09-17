import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';
import RightNav from '../Pages/Shared/RightNav/RightNav';
import Footer from '../Pages/Footer/Footer';
import Banner from '../Pages/Banner/Banner';


const Main = () => {
    return (
        <div>
           <Header></Header>
           
           <Container className='d-flex'>
              <Row>
                <Col lg={3}><LeftNav></LeftNav></Col>
                <Col lg={6}><Outlet></Outlet></Col>
                <Col lg={3}><RightNav></RightNav></Col>
              </Row>
             
             
           </Container>

        </div>
    );
};

export default Main;