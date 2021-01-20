/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// class Profile extends React.Component {
export const About = () => {
    return (
      <>
        <main className="profile-page">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-primary">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                      <div className="card-profile-image d-flex">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("../assets/img/pics/20181224_113217.jpg")}
                            width='300px'
                            height='200px'
                          />
                        </a>
                      </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Lauren Buckley{" "}
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Head Baker
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                          I've been baking for over 15 years. I've been a baker every since I could talk.
                          When people ask me what I want to do with my life. I always respond with 'I want to spread love.'
                          Though I was naive, I still feel like I'm doing just that with the goods that I make.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
      </>
    );
}
