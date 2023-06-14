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
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <input placeholder={`Quoi de neuf /*{Sidiki Kaba}*/?*`} />
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
            <label htmlFor="file">
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
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Share;
