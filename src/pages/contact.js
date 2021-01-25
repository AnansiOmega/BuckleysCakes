import React from 'react'
import { Button, Card, Container, Row, Col } from "reactstrap";
import { OrderForm } from '../components/form'

export const Contact = () => {
    return(
          <>
        <section className="section section-shaped">
          <div className="shape shape-style-1 shape-primary">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-md">
            <Row className="justify-content-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  Get in Touch
                </h1>
                <p className="lead text-white mt-4">
                  Our cakes are baked to order. I ask that place your order at least two weeks prior to the date of your event.
                  Keep in mind the grander the cake the more time it may take. 
                </p>
                </Col>
                </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-pink" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        <Container className="py-md">
            <Row className="justify-content-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h3 className="text-white">
                  Pricing starts at $3 a serving.
                </h3>
                <p className="lead text-white mt-4">
                 Feel free to send an email directly or fill out the form below.
                  I will reach out to you about availability & specifications as soon as I can.
                </p>
                </Col>
                  <Col className="mb-5 mb-lg-0 ml-8" lg="5">
                    <h3 className='text-white'> Contact Information:</h3>
                    <ul>
                      <li className='text-white'> Email: BuckleysCakes@gmail.com </li>
                      <li className='text-white'> Phone: (815) - 272 - 5792  (Text message only!)</li>
                    </ul>
                  </Col>
                </Row>
          </Container>
          <section style={{ marginBottom: '50px'}}>
          <Container>
                  <Card className='shadow'>
                  <div className="px-4">
                  <Row className="justify-content-center">
                      <OrderForm />
                  </Row>
                  </div>
                  </Card>
              </Container>
          </section>
        </>
    )
}