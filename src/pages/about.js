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
                          <img
                            alt="selfie"
                            className="rounded"
                            src={require("../assets/img/pics/laurensSelfie.jpg")}
                          />
                      </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                    Lauren (Buckley) Shepherd{" "}
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Head Baker
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <h2>About me</h2>
                        <p>
                        Baking cakes is something I've been doing for over 10 years. All of the cakes that I make are baked in my home, I am
                        the head baker and the sole baker. Because of this every order that I receive gets special attention until it is complete.
                        Drawbacks to this are that I am only able to take on a single order at a time, so please make sure to give ample time before
                        requesting an order ( about 2 weeks in advance. )
                        </p>
                        <div className="mt-5 py-5 border-top text-center">
                        <h3> Why Buckleys cakes? </h3>
                        <p>
                          I constantly challenge myself
                          to make every cake better than the last. I've graduated from Le Cordon Bleu College of Culinary Arts in Chicago
                          with a degree in Baking & Patisserie. I know what it takes to create a delicious cake from scratch. If you have dietary
                          restrictions or just simply want a cake made with specific ingredients, feel free to mention that within your order and
                          I will see what accommodations I can make.
                        </p>
                        </div>
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
