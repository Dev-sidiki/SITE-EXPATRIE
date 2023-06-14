import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import pageIntrouvable from "../../Assets/images/notfound.png";

import "../../Styles/css/pageIntrouvable.css";
const PageIntrouvable = () => {
  return (
    <>
      <Container style={{ height: "100vh" }}>
        <Row>
          <Col>
            <div className="page_404">
              <div className="page-title">
                <h1>PAGE NON TROUVÉE</h1>
              </div>
              <img
                src={pageIntrouvable}
                alt="bienvenu"
                className="image-not-found"
              />
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            {" "}
            <div className="text_404">
              <p>
                Désolé, la page que vous recherchez n'existe pas. Si vous pensez
                que quelque chose est cassé, signalez un problème.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="container_btn">
            <Link to="/" className="btn_404">
              RETOUR
            </Link>

            <Link to="/contacte" className="btn_404">
              NOUS CONTACTER
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PageIntrouvable;
