import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import defaultImage from "../../Assets/images/image_vide.jpg";

import "../../Styles/css/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* <section>Footer Example 4</section> */}
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Viv<span>Exp@t</span>
          </h3>

          <p className="footer-links">
            <Link to="/contact ">Aide & Contact</Link>
            <Link to="/info-legale">Informations légales</Link>
            <Link to="/protection-donne">Protection des Données</Link>
            <Link to="/cookie-parameter">Cookies et paramètres</Link>
            <Link to="/condition-general"> Condition générales</Link>
          </p>
          {/* texte copyright */}
          <p className="footer-company-name">
            &copy; KS Socity all right reserved - 2023.
          </p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>1 Rue aux Juifs</span>14000 Caen, France
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+337 52 54 15 78</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <span
              href="mailto:support@company.com"
              style={{ color: "lightseagreen" }}
            >
              assistance@ksociete.com
            </span>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span> FONDATEUR</span>
            <img src={defaultImage} alt="img-user" className="img-avatar" />
            <br />
            Sidiki KABA <br /> Developpeur informatique
          </p>

          <div className="footer-icons">
            <h4>SUIVEZ-NOUS</h4>

            <a href=" ">
              <FacebookIcon color="primary" fontSize="large" />
            </a>
            <a href=" ">
              <TwitterIcon color="primary" fontSize="large" />
            </a>
            <a href=" ">
              <LinkedInIcon color="primary" fontSize="large" />
            </a>
            <a href=" ">
              <InstagramIcon color="primary" fontSize="large" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
