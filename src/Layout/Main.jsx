import React from 'react';
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
           
           <Container>
                
                <Banner></Banner>
                {/* <Footer></Footer> */}
           </Container>
        </div>
    );
};

export default Main;