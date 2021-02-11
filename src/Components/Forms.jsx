import React, { Component } from "react";

export default class Forms extends Component {
  render() {
    return (
      <section className="scrollspy section container" id="contact">
        <div className="row">
          <div className="col s12 l5">
            <h2 className="indigo-text text-darken-4">Get In Touch</h2>
            <p>
              iusduasgfuysdvufdsgfudb fbudgfudsgf abiusaiudgsaiu sdasdbuasyduyas
              bsaiduasiudbni s sauidhiusbdas basiudbsaiub
            </p>
            <p>
              iusduasgfuysdvufdsgfudb fbudgfudsgf abiusaiudgsaiu sdasdbuasyduyas
              bsaiduasiudbni s sauidhiusbdas basiudbsaiub
            </p>
            <p>
              iusduasgfuysdvufdsgfudb fbudgfudsgf abiusaiudgsaiu sdasdbuasyduyas
              bsaiduasiudbni s sauidhiusbdas basiudbsaiub
            </p>
            <p>
              iusduasgfuysdvufdsgfudb fbudgfudsgf abiusaiudgsaiu sdasdbuasyduyas
              bsaiduasiudbni s sauidhiusbdas basiudbsaiub
            </p>
          </div>
          <div className="col s12 l5 offset-l2">
            <form action="">
              <div className="input-field">
                <i className="material-icons prefix">email</i>
                <input type="email" id="email" />
                <label htmlFor="email">Your Email</label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">message</i>
                <textarea id="message" className="materialize-textarea" />
                <label htmlFor="message">Your Message</label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">event</i>
                <input type="text" id="date" className="datepicker" />
                <label htmlFor="date">Choose the date you need me for</label>
              </div>
              <div className="input-field">
                <p>Services required</p>
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>Photography</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>Editing</span>
                  </label>
                </p>
              </div>
              <div className="input-field center">
                <button className="btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
