import React, { Component } from "react";
import Potrait from "../img/portrait.jpg";
import City from "../img/city.jpg";
import Nature from "../img/nature.jpg";

export default class PhotoGrid extends Component {
  render() {
    return (
      <section className="scrollspy container section" id="photo">
        <div className="row">
          <div className="col s12 l4">
            <img
              className="responsive-img materialboxed"
              src={Potrait}
              alt="portrait"
            />
          </div>
          <div className="col s12 l6 offset-l1">
            <h2 className="indigo-text text-darken-4">Portraits</h2>
            <p>
              Lndisd biashaiu dhasi dhs ixjsi xjioxs xjiosjx xnosoo oasoans,
              skao asijsaksn c jsnsjnd.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l4 push-l7 offset-1">
            <img
              className="responsive-img materialboxed"
              src={City}
              alt="city"
            />
          </div>
          <div className="col s12 l6 pull-l5 right-align offset-l1">
            <h2 className="indigo-text text-darken-4">City</h2>
            <p>
              Lndisd biashaiu dhasi dhs ixjsi xjioxs xjiosjx xnosoo oasoans,
              skao asijsaksn c jsnsjnd.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l4">
            <img
              className="responsive-img materialboxed"
              src={Nature}
              alt="nature"
            />
          </div>
          <div className="col s12 l6 offset-l1">
            <h2 className="indigo-text text-darken-4">Nature</h2>
            <p>
              Lndisd biashaiu dhasi dhs ixjsi xjioxs xjiosjx xnosoo oasoans,
              skao asijsaksn c jsnsjnd.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
