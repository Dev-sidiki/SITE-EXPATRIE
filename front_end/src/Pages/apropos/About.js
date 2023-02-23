import React from "react";

// importation des composant depuis bootstrap et fichier composant
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import AproposMenu from "../../Components/menus/AproposMenu";

// importation d'image
import defaultImage from "../../Assets/images/image_vide.jpg";
// import about from "../../Assets/images/about.png";

// importation du style
import "../../Styles/about.css";

//le composant de la page a propos
const About = () => {
  return (
    <div className="contenu-apropos">
      {/* on fait appel */}
      <AproposMenu />
      {/* <div className="apropos-header">
        <br />
        <h1 style={{ textAlign: "center" }}>
          À propos de{" "}
          <span className="logo-apropos">
            Guid<span>Expat </span>
          </span>{" "}
        </h1>

        <img src={about} alt="img-user" className="people-about" />
      </div> */}

      <Container fluid>
        <Row style={{ backgroundColor: "" }}>
          <Col>
            <section className="home-section-part-1">
              <div className="cc">
                <h1 className="home-title">Lorem ipsum.</h1>
                <div className="para-title">
                  Lorem ipsum dolor sit amet consectetur
                </div>

                <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Incidunt, quam suscipit maxime praesentium ullam ipsam ipsa
                  porro excepturi labore voluptatibus voluptas, assumenda illum
                  provident animi neque voluptatum delectus tenetur eligendi.
                  Delectus sit, velit facilis nisi aut amet magni, ducimus
                  maiores recusandae repellat odio omnis voluptatibus voluptates
                  non dolorum, magnam quidem vitae consequatur possimus iste id
                  sed sunt nemo minima. Debitis mollitia ullam, qui quaerat
                  voluptatibus tempore vero excepturi a temporibus accusamus,
                  quo sequi assumenda voluptate voluptas ex inventore.
                  Accusantium, animi!
                </div>

                <Button variant="primary" size="lg" style={{ ma: "center" }}>
                  Acceder à l'inscription
                </Button>
              </div>
            </section>
          </Col>
        </Row>
        <Row style={{ backgroundColor: "red" }}>
          <Col>
            <section className="home-section-part-1">
              <div className="cc">
                <h1 className="home-title">Lorem ipsum.</h1>
                <div className="para-title">
                  Lorem ipsum dolor sit amet consectetur
                </div>

                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Accordion Item #3</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </section>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <section className="home-section-part-1">
              <div className="cc">
                <h1 className="home-title">Lorem ipsum.</h1>
                <div className="para-title">
                  Lorem ipsum dolor sit amet consectetur
                </div>
                <br />
                <Row>
                  <Col>
                    <img
                      className="ui centered tiny image"
                      src={defaultImage}
                      alt={"image_vide"}
                    />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Cumque molestiae praesentium distinctio officiis asperiores
                    ducimus ut, reiciendis nesciunt repudiandae quas veritatis
                    magnam voluptate odio inventore aliquid vitae laudantium ex
                    animi.
                  </Col>
                  <Col>
                    <img
                      className="ui centered tiny image"
                      src={defaultImage}
                      alt={"image_vide"}
                    />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quod quisquam blanditiis natus molestiae? Quo, minus ut
                    inventore explicabo tempore, perferendis deserunt velit
                    laboriosam, quibusdam repellendus voluptas iusto culpa
                    corporis doloribus.
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <img
                      className="ui centered tiny image"
                      src={defaultImage}
                      alt={"image_vide"}
                    />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique recusandae consequatur non possimus, ex
                    praesentium expedita hic iure soluta cumque eos dolorum
                    veniam ea id ab temporibus quisquam voluptatum dolorem!
                  </Col>
                  <Col>
                    <img
                      className="ui centered tiny image"
                      src={defaultImage}
                      alt={"image_vide"}
                    />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis culpa nihil, aperiam eaque error eligendi ex hic
                    veritatis placeat ducimus magnam ut quisquam necessitatibus
                    cupiditate praesentium! Nihil porro et at.
                  </Col>
                </Row>
              </div>
            </section>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <section className="home-section-part-1">
              <h1 className="home-title">Lorem ipsum.</h1>
              <br />
              <Row>
                <Col>sm=true</Col>
                <Col>sm=true</Col>
                <Col>sm=true</Col>
                <Col>sm=true</Col>
              </Row>
              <br />
            </section>
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
