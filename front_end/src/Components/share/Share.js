import Image from "../../Assets/images/map.png";
import Map from "../../Assets/images/map.png";
import Friend from "../../Assets/images/friend.png";
import Photo from "../../Assets/images/photo.png";
import Video from "../../Assets/images/9.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
// import { useContext } from "react";
// import { AuthContext } from "../../context/authContext";

import "../../Styles/scss/share.scss";

const Share = () => {
  // const {currentUser} = useContext(AuthContext)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function CreerPublication() {
    return (
      <div className="share">
        <div className="container">
          <div className="top">
            <input placeholder={`Partager une information...`} />
          </div>
          <hr />
          <div className="bottom">
            <div className="left">
              <input type="file" id="file" style={{ display: "none" }} />
              <label>
                <div className="item">
                  <img src={Photo} alt="" />
                  <span>Photo</span>
                </div>
              </label>
              <input type="file" id="video" style={{ display: "none" }} />
              <label>
                <div className="item">
                  <img src={Video} alt="" />
                  <span>Vidéo</span>
                </div>
              </label>
              <div className="item">
                <img src={Map} alt="" />
                <span>Géolocalisation</span>
              </div>
              <div className="item">
                <img src={Friend} alt="" />
                <span>Identifier un ou des amis</span>
              </div>
            </div>
            <div className="right">
              <button>Publier</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div variant="light" onClick={handleShow}>
        <CreerPublication />
      </div>

      <Modal show={show} onHide={handleClose} animation={false} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Faire une publication</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <div className="share">
            <div className="container">
              <div className="top">
                <textarea
                  placeholder={`Que souhaitez vous poster aujourd'hui/*{Sidiki Kaba}*`}
                ></textarea>
              </div>
              <hr />
              <div className="bottom">
                <div className="left">
                  <input type="file" id="file" style={{ display: "none" }} />
                  <label htmlFor="file">
                    <div className="item">
                      <img src={Photo} alt="" />
                      <span>Photo</span>
                    </div>
                  </label>
                  <input type="file" id="video" style={{ display: "none" }} />
                  <label htmlFor="video">
                    <div className="item">
                      <img src={Video} alt="" />
                      <span>Vidéo</span>
                    </div>
                  </label>
                  <div className="item">
                    <img src={Map} alt="" />
                    <span>Géolocalisation</span>
                  </div>
                  <div className="item">
                    <img src={Friend} alt="" />
                    <span>Identifier un ou des amis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              console.log("message publié");
              handleClose();
            }}
          >
            Publier
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Share;
