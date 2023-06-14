import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../../Styles/scss/detailEmploi.scss";

const DetailEmploi = () => {
  return (
    <div className="container-detailEmploi">
      <Card
        className=""
        style={{
          height: "15rem",
          backgroundColor: "whitesmoke",
          textAlign: "center",
        }}
      >
        <Card.Img src="holder.js/100px270" alt="" />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.ImgOverlay>
      </Card>
      <br />
      <Card
        className="text-center"
        style={{
          height: "60rem",
        }}
      >
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default DetailEmploi;
