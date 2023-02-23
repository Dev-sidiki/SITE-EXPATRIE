import React from "react";
import Button from "react-bootstrap/Button";
// importation des composant depuis bootstrap et fichier composant
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import location from "../../Assets/images/location.png";
import AproposMenu from "../../Components/menus/AproposMenu";

// importation d'image
import defaultImage from "../../Assets/images/image_vide.jpg";

const Abonnement = () => {
  return (
    <div className="contenu-abonnement">
      <AproposMenu />
      <br />
      <section className="home-section-1">
        <h1 className="home-title">Lorem ipsum.</h1>
        <div className="para-title">Lorem ipsum dolor sit amet consectetur</div>
        <div className="section">
          <div className="section-left">
            <img src={location} alt="location" className="image-style" />
          </div>{" "}
          <br />
          <div className="section-right">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt,
            quam suscipit maxime praesentium ullam ipsam ipsa porro excepturi
            labore voluptatibus voluptas, assumenda illum provident animi neque
            voluptatum delectus tenetur eligendi. Delectus sit, velit facilis
            nisi aut amet magni, ducimus maiores recusandae repellat odio omnis
            voluptatibus voluptates non dolorum, magnam quidem vitae consequatur
            possimus iste id sed sunt nemo minima. Debitis mollitia ullam, qui
            quaerat voluptatibus tempore vero excepturi a temporibus accusamus,
            quo sequi assumenda voluptate voluptas ex inventore. Accusantium,
            animi!
            <Button variant="primary" size="lg">
              Large button
            </Button>
          </div>
        </div>
      </section>
      <br />
      <section className="home-section-part-1">
        <h1 className="home-title">Lorem ipsum.</h1>
        <div className="para-title">Lorem ipsum dolor sit amet consectetur</div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt,
          quam suscipit maxime praesentium ullam ipsam ipsa porro excepturi
          labore voluptatibus voluptas, assumenda illum provident animi neque
          voluptatum delectus tenetur eligendi. Delectus sit, velit facilis nisi
          aut amet magni, ducimus maiores recusandae repellat odio omnis
          voluptatibus voluptates non dolorum, magnam quidem vitae consequatur
          possimus iste id sed sunt nemo minima. Debitis mollitia ullam, qui
          quaerat voluptatibus tempore vero excepturi a temporibus accusamus,
          quo sequi assumenda voluptate voluptas ex inventore. Accusantium,
          animi!
        </div>
      </section>
      <br />
      <section className="home-section-part-1">
        <h1 className="home-title">Lorem ipsum dolor sit amet consectetur</h1>
        <h6 className="para-title">Lorem ipsum</h6>
        <div style={{ textAlign: "center" }}>
          {" "}
          <Button variant="primary" size="lg">
            Large button
          </Button>
        </div>
      </section>
      <br />
      <section className="home-section-part-1">
        <h1 className="home-title">Lorem ipsum dolor sit amet consectetur</h1>
        <Container>
          <Row>
            <Col>
              <section className="home-section-part-1">
                <div className="cc">
                  <br />
                  <Row>
                    <Col>
                      <img
                        className="ui centered tiny image"
                        src={defaultImage}
                        alt={"image_vide"}
                      />
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Cumque molestiae praesentium distinctio officiis
                      asperiores ducimus ut, reiciendis nesciunt repudiandae
                      quas veritatis magnam voluptate odio inventore aliquid
                      vitae laudantium ex animi.
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
                      veritatis placeat ducimus magnam ut quisquam
                      necessitatibus cupiditate praesentium! Nihil porro et at.
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
                  <div style={{ textAlign: "center" }}>
                    {" "}
                    <Button variant="primary" size="lg">
                      Large button
                    </Button>
                  </div>
                </div>
              </section>
              <br />
            </Col>
          </Row>
        </Container>
      </section>
      <br />
      <section className="home-section-part-1">
        <h1 className="home-title">
          {" "}
          <img
            className="ui centered tiny image"
            src={defaultImage}
            alt={"image_vide"}
          />
        </h1>
        <div className="para-title">Lorem ipsum dolor sit amet consectetur</div>
        <div style={{ textAlign: "center" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt,
          quam suscipit maxime praesentium ullam ipsam ipsa porro excepturi
          labore voluptatibus voluptas, assumenda illum provident animi neque
          voluptatum delectus tenetur eligendi. Delectus sit, velit facilis nisi
          aut amet magni, ducimus maiores recusandae repellat odio omnis
          voluptatibus voluptates non dolorum, magnam quidem vitae consequatur
          possimus iste id sed sunt nemo minima. Debitis mollitia ullam, qui
          quaerat voluptatibus tempore vero excepturi a temporibus accusamus,
          quo sequi assumenda voluptate voluptas ex inventore. Accusantium,
          animi!
        </div>
      </section>
      <br />
    </div>
  );
};

export default Abonnement;
