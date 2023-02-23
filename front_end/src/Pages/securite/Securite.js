import React from "react";
// importation des composant bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";

import location from "../../Assets/images/location.png";

import AproposMenu from "../../Components/menus/AproposMenu";

const Securite = () => {
  return (
    <div className="contenu-securite">
      <AproposMenu />
      <section className="home-section-part-1">
        <h1 className="home-title">lorem i</h1>
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
      <section>
        <div>
          <br />
          <Container>
            <Row>
              <Col xs={{ order: "last" }}>
                <h3 className="home-title">Lorem ipsum.</h3> Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Sapiente illum inventore
                saepe magnam laborum nemo deleniti mollitia quae possimus!
                Reprehenderit maiores natus quo ex laudantium voluptatibus
                facere quam, a tempora.
              </Col>
              <Col xs>
                <h3 className="home-title">Lorem ipsum.</h3> Lorem ipsum dolor
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                quas quam maxime odio necessitatibus placeat ipsam repellendus
                doloribus ad excepturi in consequuntur veritatis cupiditate eius
                eligendi repellat, ipsum dicta eveniet!
              </Col>
              <Col xs={{ order: "first" }}>
                <h3 className="home-title">Lorem ipsum.</h3>
                Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Id nihil voluptatibus reiciendis quisquam, hic
                voluptatem fugit molestias consectetur eos harum ea, veniam nam
                corrupti quia sequi natus ducimus accusamus ipsa!
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={{ order: "last" }}>
                <h3 className="home-title">Lorem ipsum.</h3> Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Sapiente illum inventore
                saepe magnam laborum nemo deleniti mollitia quae possimus!
                Reprehenderit maiores natus quo ex laudantium voluptatibus
                facere quam, a tempora.
              </Col>
              <Col xs>
                <h3 className="home-title">Lorem ipsum.</h3> Lorem ipsum dolor
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                quas quam maxime odio necessitatibus placeat ipsam repellendus
                doloribus ad excepturi in consequuntur veritatis cupiditate eius
                eligendi repellat, ipsum dicta eveniet!
              </Col>
              <Col xs={{ order: "first" }}>
                <h3 className="home-title">Lorem ipsum.</h3>
                Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Id nihil voluptatibus reiciendis quisquam, hic
                voluptatem fugit molestias consectetur eos harum ea, veniam nam
                corrupti quia sequi natus ducimus accusamus ipsa!
              </Col>
            </Row>
            <br />
          </Container>
        </div>
      </section>

      <section className="home-section-1">
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
          </div>
        </div>
      </section>
      <br />
      <section className="home-section-part-1">
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
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nam fuga
          laudantium
        </h1>
        <h2 className="para-title">Lorem, ipsum dolor.</h2>
        <div style={{ textAlign: "center" }}>
          {" "}
          <Button variant="primary" size="lg">
            Large button
          </Button>
        </div>
      </section>
      <br />
    </div>
  );
};

export default Securite;
