import React from "react";
import AproposMenu from "../../Components/menus/AproposMenu";

import Button from "react-bootstrap/Button";

// importation d'image
import defaultImage from "../../Assets/images/image_vide.jpg";

const Service = () => {
  return (
    <div className="contenu-service">
      <AproposMenu />
      <br />
      <section className="home-section-part-2">
        <div>
          <h1 className="home-title">
            {" "}
            <img
              className="ui centered tiny image"
              src={defaultImage}
              alt={"image_vide"}
            />
          </h1>
          <div className="para-title">
            Lorem ipsum dolor sit amet consectetur
          </div>
          <div>
            ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, quam
            suscipit maxime praesentium ullam ipsam ipsa porro excepturi labore
            voluptatibus voluptas, assumenda illum provident animi neque
            voluptatum delectus tenetur eligendi. Delectus sit, velit facilis
            nisi aut amet magni, ducimus maiores recusandae repellat odio omnis
            voluptatibus voluptates non dolorum, magnam quidem vitae consequatur
            possimus iste id sed sunt nemo minima. Debitis mollitia ullam, qui
            quaerat voluptatibus tempore vero excepturi a temporibus accusamus,
            quo sequi assumenda voluptate voluptas ex inventore. Accusantium,
            animi!
          </div>
          <br />
          <div style={{ textAlign: "center" }}>
            <Button variant="primary" size="lg" active>
              Primary button
            </Button>{" "}
            <Button variant="secondary" size="lg" active>
              Button
            </Button>
          </div>
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
        <br />
      </section>
    </div>
  );
};

export default Service;
