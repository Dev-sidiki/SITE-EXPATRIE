import React from "react";

// importation du composant menu
import CommunauteMenu from "../../Components/menus/CommunauteMenu";

// importation des composant depuis react-boostrap
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";

// importation des composant depuis material ui
import Box from "@mui/material/Box";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

// importation de l'image par defaut
import defaultImage from "../../Assets/images/image_vide.jpg";

// importation du fichier style
import "../../Styles/css/communaute.css";

const Communaute = () => {
  return (
    <div className="communaute-container">
      {/* on fait appel au menu associé au composant */}
      <CommunauteMenu />
      <Box sx={{ width: 1 }}>
        {/* le contenu de notre composnt */}
        <Container>
          {/* les sujets de discussion */}
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 3">
              <div>
                <h4>Thème des sujets</h4>
              </div>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <ListItem key={value}>
                    <ListItemText primary={`Line item ${value}`} />
                  </ListItem>
                ))}
              </List>
            </Box>
            {/* la liste des discussion */}
            <Box gridColumn="span 9">
              <ListGroup as="ol" variant="flush">
                <h2 style={{ textAlign: "center" }}>Forum, nomDuSujet</h2>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div style={{ display: "flex" }}>
                      <img
                        alt="img-user"
                        className="ui mini circular image"
                        src={defaultImage}
                      />
                      <div className="content">
                        <div className="header">
                          <h2>titre du sujet</h2>
                        </div>
                        <p>la date de publication</p>
                      </div>
                    </div>
                  </div>
                  <ButtonGroup
                    aria-label="Basic example"
                    style={{ marginRight: "5px" }}
                  >
                    <Button variant="dark" size="sm">
                      thème{" "}
                    </Button>
                  </ButtonGroup>
                  <Badge bg="dark" pill style={{ cursor: "pointer" }}>
                    <QuestionAnswerIcon /> 14
                  </Badge>
                </ListGroup.Item>

                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div style={{ display: "flex" }}>
                      <img
                        alt="img-user"
                        className="ui mini circular image"
                        src={defaultImage}
                      />
                      <div className="content">
                        <div className="header">
                          <h2>titre du sujet</h2>
                        </div>
                        <p>la date de publication</p>
                      </div>
                    </div>
                  </div>
                  <ButtonGroup
                    aria-label="Basic example"
                    style={{ marginRight: "5px" }}
                  >
                    <Button variant="dark" size="sm">
                      thème{" "}
                    </Button>
                  </ButtonGroup>
                  <Badge bg="dark" pill>
                    <QuestionAnswerIcon /> 14
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div style={{ display: "flex" }}>
                      <img
                        alt="img-user"
                        className="ui mini circular image"
                        src={defaultImage}
                      />
                      <div className="content">
                        <div className="header">
                          <h2>titre du sujet</h2>
                        </div>
                        <p>la date de publication</p>
                      </div>
                    </div>
                  </div>

                  <ButtonGroup
                    aria-label="Basic example"
                    style={{ marginRight: "5px" }}
                  >
                    <Button variant="dark" size="sm">
                      thème{" "}
                    </Button>
                  </ButtonGroup>
                  <Badge bg="dark" pill>
                    <QuestionAnswerIcon /> 14
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div style={{ display: "flex" }}>
                      <img
                        alt="img-user"
                        className="ui mini circular image"
                        src={defaultImage}
                      />
                      <div className="content">
                        <div className="header">
                          <h2>titre du sujet</h2>
                        </div>
                        <p>la date de publication</p>
                      </div>
                    </div>
                  </div>
                  <ButtonGroup
                    aria-label="Basic example"
                    style={{ marginRight: "5px" }}
                  >
                    <Button variant="dark" size="sm">
                      thème{" "}
                    </Button>
                  </ButtonGroup>
                  <Badge bg="dark" pill>
                    <QuestionAnswerIcon /> 14
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div style={{ display: "flex" }}>
                      <img
                        alt="img-user"
                        className="ui mini circular image"
                        src={defaultImage}
                      />
                      <div className="content">
                        <div className="header">
                          <h2>titre du sujet</h2>
                        </div>
                        <p>la date de publication</p>
                      </div>
                    </div>
                  </div>
                  <ButtonGroup
                    aria-label="Basic example"
                    style={{ marginRight: "5px" }}
                  >
                    <Button variant="dark" size="sm">
                      thème{" "}
                    </Button>
                  </ButtonGroup>
                  <Badge bg="dark" pill>
                    <QuestionAnswerIcon /> 14
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div style={{ display: "flex" }}>
                      <img
                        alt="img-user"
                        className="ui mini circular image"
                        src={defaultImage}
                      />
                      <div className="content">
                        <div className="header">
                          <h2>titre du sujet</h2>
                        </div>
                        <p>la date de publication</p>
                      </div>
                    </div>
                  </div>
                  <ButtonGroup
                    aria-label="Basic example"
                    style={{ marginRight: "5px" }}
                  >
                    <Button variant="dark" size="sm">
                      thème{" "}
                    </Button>
                  </ButtonGroup>
                  <Badge bg="dark" pill>
                    <QuestionAnswerIcon /> 14
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Communaute;
