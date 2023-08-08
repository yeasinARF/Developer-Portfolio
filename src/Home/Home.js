import React from 'react';
import { Badge, Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
// css style import 
import './Home.css'
// image 
import image from '../Image/image-person.png';

const Home = () => {
    return (
        <Container>
            {/* navbar  */}
            <Navbar expand="lg" className="">
                <Container>
                    <Navbar.Brand href="#home" className='brandName fs-1'>Jacob.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto text-center">
                            <Nav.Link href="#home" className='navLink fs-6'>Home</Nav.Link>
                            <Nav.Link href="#project" className='navLink fs-6'>Project</Nav.Link>
                            <Nav.Link href="#about" className='navLink fs-6'>About</Nav.Link>
                        </Nav>
                        <Nav>
                            <div className='text-center text-lg-start'>
                                <Nav.Link href="#link"><Badge className='outline-primary contact-me py-3 fs-7'>Contact Me</Badge></Nav.Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* first section  */}
            <div className='py-5'>
                <Row gap={3}>
                    {/* left section  */}
                    <Col lg={7}>
                        <h1 className='py-3 fs-1 text-lg-start text-center'>I'm <span className='title-text'>Jacob</span></h1>
                        <p className='py-3 fs-5 text-lg-start text-center'>I am a professional web developer<br></br>with more than 10 years of experience.</p>
                        {/* hire me button  */}
                        <div className='text-lg-start text-center'>
                            <Button className='mt-3 mb-5 fs-5' variant="outline-primary">Hire Me</Button>
                        </div>

                        {/* skilled language  */}

                        <div className='d-flex justify-content-lg-start justify-content-center'>
                            <div className='me-3 mb-2'>
                                <Badge bg="primary" className='py-3 fs-6' text="light">C++</Badge>
                            </div>
                            <div>
                                <Badge bg="danger" className='py-3 fs-6' text="light">java</Badge>
                            </div>
                        </div>
                        <div className='d-flex justify-content-lg-start justify-content-center'>
                            <div className='me-3 mb-4'>
                                <Badge bg="dark" className='py-3 fs-6' text="light">php</Badge>
                            </div>
                            <div>
                                <Badge bg="warning" className='py-3 fs-6' text="dark">javascript</Badge>
                            </div>
                        </div>
                    </Col>
                    {/* Right section  */}
                    <Col lg={5}>
                        <div className='text-center'>
                            <img className='rounded-circle image' src={image} alt="" srcset="" />
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>

    );
};

export default Home;