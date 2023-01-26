import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../Styles/home.css";

import location from "../../Assets/images/location.png";

import imageLocation from "../../Assets/images/image-location.png";
import people from "../../Assets/images/people.png";
import peopleJoie from "../../Assets/images/groupe-joyeux.png";
import bienvenu from "../../Assets/images/bienvenu.png";
import securite from "../../Assets/images/securite.png";
import grouBar from "../../Assets/images/group-bar.png";
import cafeGroupe from "../../Assets/images/cafe-groupe.png";
import joieGroupe from "../../Assets/images/joie-groupe.png";
import groupNumber from "../../Assets/images/group-number.png";
import MenuHorizontal from "../../Components/menus/MenuHorizontal";

//le composant ayant le contenu de la première page de notre application
const Home = () => {
  return (
    <div className="home ">
      {/* menu de navigation */}
      <MenuHorizontal />
      <div className="home-header">
        <br />

        <h1 className="phrase-accroche">
          Avec NewExapt c'est la communication, l'entraide et la solidarité{" "}
        </h1>

        <h3 className="phrase-accroche">
          Vous n'avez aucun soucis à vous faire,car l'esprit fraternel est
          toujours au rendez-vous.
        </h3>

        <img src={groupNumber} alt="img-user" className="people-joie" />

        <div className="picture-list-container ">
          <img src={bienvenu} alt="bienvenu" className="picture-list" />
          <img src={people} alt="people" className="picture-list" />
          <img src={securite} alt="securite" className="picture-list" />
        </div>
      </div>
      <div className="title-list-picture">
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
          asperiores, atque consequatur dolores, sunt tempore nam est similique
          eum velit distinctio, maiores nihil ipsum alias corporis? Nihil,
          temporibus voluptatem! Aliquam?
        </span>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor id,
          inventore quas et animi quo, sed exercitationem illum aspernatur
          veritatis quos quibusdam accusantium dicta deleniti ut quam est
          corporis ipsam.
        </span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          voluptatum quo cumque perferendis maiores id officia omnis dicta.
          Natus rem illo voluptate provident voluptatibus eaque minima dolorem
          doloremque voluptas error!
        </span>
      </div>
      <h1 className="home-title">
        <span className="logo-mini">
          Guid<span>Expat </span>
        </span>
        Lorem, ipsum dolor sit amet
      </h1>
      <div>
        <br />
        <Container>
          <Row>
            <Col xs={{ order: "last" }}>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              illum inventore saepe magnam laborum nemo deleniti mollitia quae
              possimus! Reprehenderit maiores natus quo ex laudantium
              voluptatibus facere quam, a tempora.
            </Col>
            <Col xs>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab quas
              quam maxime odio necessitatibus placeat ipsam repellendus
              doloribus ad excepturi in consequuntur veritatis cupiditate eius
              eligendi repellat, ipsum dicta eveniet!
            </Col>
            <Col xs={{ order: "first" }}>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nihil
              voluptatibus reiciendis quisquam, hic voluptatem fugit molestias
              consectetur eos harum ea, veniam nam corrupti quia sequi natus
              ducimus accusamus ipsa!
            </Col>
          </Row>
        </Container>
      </div>

      <hr style={{ color: "rgb(165, 156, 156)" }} />
      <section className="home-section-part-1">
        <div className="cc">
          <h1 className="home-title">Lorem ipsum.</h1>
          <div className="para-title">
            Lorem ipsum dolor sit amet consectetur
          </div>

          <div>
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
      <hr style={{ color: "rgb(165, 156, 156)" }} />
      <section className="home-section-part-2">
        <div>
          <h1 className="home-title">Lorem ipsum.</h1>
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
        </div>
      </section>
      <hr style={{ color: "rgb(165, 156, 156)" }} />
      <section className="home-section-part-3">
        <div>
          <h1 className="home-title">Lorem ipsum.</h1>
          <div className="para-title">
            Lorem ipsum dolor sit amet consectetur
          </div>

          <div>
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
      <hr style={{ color: "rgb(165, 156, 156)" }} />

      <div>
        <h1 className="home-title">
          <span className="logo-mini">
            Guid<span>Expat </span>
          </span>
          Lorem, ipsum dolor sit amet
        </h1>
        <div>
          <br />
          <Container>
            <Row>
              <Col xs={{ order: "last" }}>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente illum inventore saepe magnam laborum nemo deleniti
                mollitia quae possimus! Reprehenderit maiores natus quo ex
                laudantium voluptatibus facere quam, a tempora.
              </Col>
              <Col xs>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                quas quam maxime odio necessitatibus placeat ipsam repellendus
                doloribus ad excepturi in consequuntur veritatis cupiditate eius
                eligendi repellat, ipsum dicta eveniet!
              </Col>
              <Col xs={{ order: "first" }}>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                nihil voluptatibus reiciendis quisquam, hic voluptatem fugit
                molestias consectetur eos harum ea, veniam nam corrupti quia
                sequi natus ducimus accusamus ipsa!
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <hr style={{ color: "rgb(165, 156, 156)" }} />
      <section className="home-section-1">
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
      {/* <hr /> */}
      <section className="home-section-2">
        <div className="section">
          <div className="section-right">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            vel fugit at perspiciatis architecto aliquam dolorem obcaecati odio
            hic in minus culpa porro ipsum quidem blanditiis, rem provident
            voluptatibus optio, animi laborum illo aut nisi cum! Voluptatem
            totam doloremque tempore voluptatibus sed, quasi et, officia eius ab
            unde iste praesentium quidem delectus temporibus ea magnam aliquid!
            Ullam eveniet debitis dolor sint doloribus! Tempora autem adipisci
            veritatis iste pariatur quidem, praesentium doloribus dolore
            laboriosam voluptates, repudiandae provident vero illo deserunt
            debitis!
          </div>
          <br />
          <div className="section-left">
            <img
              src={peopleJoie}
              alt="fraternite-img"
              className="image-style"
            />
          </div>
        </div>
      </section>
      <section className="home-section-3">
        <div className="section">
          <div className="section-left">
            <img src={cafeGroupe} alt="cafe-group" className="image-style" />
          </div>{" "}
          <br />
          <div className="section-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tempore
            aperiam dolor eos et facilis libero est. Minima vitae qui quos in.
            Id repudiandae fuga ducimus porro eos eius consequatur doloribus. Et
            eaque at fuga magni delectus unde, voluptas, aspernatur corrupti in
            est recusandae incidunt sit minus quibusdam praesentium dicta
            mollitia quidem earum eligendi tempore cupiditate! Debitis vero ab a
            tenetur vel accusamus sed doloremque delectus, maxime corrupti eius
            quis velit odit eaque! Ipsum laborum modi, suscipit totam
            accusantium perferendis.
          </div>
        </div>
      </section>
      <section className="home-section-4">
        <div className="section">
          <div className="section-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quod
            facilis consequatur, et laudantium, voluptate mollitia natus porro
            incidunt doloribus assumenda labore dicta hic id repudiandae
            dolorum? Molestias voluptates praesentium vel vero porro architecto
            deserunt inventore sequi ea facere necessitatibus quidem sed, neque
            quod dicta dignissimos numquam impedit reiciendis itaque eos nemo
            sapiente, ipsum odio! Perspiciatis, id. Nam aliquam, quibusdam
            numquam eius repellendus impedit magnam odit ut aut, possimus minus,
            illo a. Voluptates impedit quas tempora minima earum deleniti
            aliquid.
          </div>{" "}
          <br />
          <div className="section-left">
            <img src={joieGroupe} alt="people-joie" className="image-style" />
          </div>
        </div>
      </section>
      <section className="home-section-5">
        <div className="section">
          <div className="section-left">
            <img src={grouBar} alt="people-joie" className="image-style" />
          </div>{" "}
          <br />
          <div className="section-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            repudiandae quam vel aperiam quo qui dolor quas, fugit minima
            consequatur exercitationem dolore suscipit et quia itaque neque
            temporibus rerum assumenda. Soluta modi maiores minima ipsum rem
            sint nulla fugiat officia fugit deleniti nam necessitatibus autem
            rerum quod sunt quasi ipsa similique amet accusamus quibusdam qui
            nihil, ab libero enim? Quibusdam, fuga ipsam quo architecto iure,
            repellendus harum veritatis magnam labore, tenetur numquam? Maiores
            odit ad officia consequatur eius cupiditate nesciunt.
          </div>
        </div>
      </section>
      <hr style={{ color: "rgb(165, 156, 156)" }} />
      <div>
        <div className="para-title">Lorem ipsum dolor sit amet consectetur</div>
        <br />
        <Container>
          <Row>
            <Col xs={{ order: "first" }}>
              {" "}
              <img
                src={imageLocation}
                alt="location"
                className="image-style-2"
              />
            </Col>
            <Col xs={{ order: "first" }}>
              {" "}
              <img
                src={imageLocation}
                alt="location"
                className="image-style-2"
              />
            </Col>
            <Col xs>
              {" "}
              <img
                src={imageLocation}
                alt="location"
                className="image-style-2"
              />
            </Col>
            <Col xs={{ order: "last" }}>
              {" "}
              <img
                src={imageLocation}
                alt="location"
                className="image-style-2"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={{ order: "first" }}>
              {" "}
              <img
                src={imageLocation}
                alt="location"
                className="image-style-2"
              />
            </Col>
            <Col xs={{ order: "first" }}>
              {" "}
              <img
                src={imageLocation}
                alt="location"
                className="image-style-2"
              />
            </Col>
            <Col xs>
              {" "}
              <img
                src={imageLocation}
                alt="location"
                className="image-style-2"
              />
            </Col>

            <Col xs={{ order: "last" }}>
              {" "}
              <img
                src={imageLocation}
                alt="location"
                className="image-style-2"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={{ order: "first" }}>
              {" "}
              <img
                src={imageLocation}
                alt="location"
                className="image-style-2"
              />
            </Col>
            <Col xs={{ order: "first" }}>
              {" "}
              <img
                src={imageLocation}
                alt="location"
                className="image-style-2"
              />
            </Col>
            <Col xs>
              {" "}
              <img
                src={imageLocation}
                alt="location"
                className="image-style-2"
              />
            </Col>
            <Col xs={{ order: "last" }}>
              {" "}
              <img
                src={imageLocation}
                alt="location"
                className="image-style-2"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
