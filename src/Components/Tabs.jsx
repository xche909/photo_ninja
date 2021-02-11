import React, { Component } from "react";

export default class Tabs extends Component {
  render() {
    return (
      <section className="scrollspy container section" id="services">
        <div className="row">
          <div className="col s12 l4">
            <h2 className="indigo-text text-darken-4">What I do...</h2>
            <p>
              iusduasgfuysdvufdsgfudb fbudgfudsgf abiusaiudgsaiu sdasdbuasyduyas
              bsaiduasiudbni s sauidhiusbdas basiudbsaiub
            </p>
            <p>
              iusduasgfuysdvufdsgfudb fbudgfudsgf abiusaiudgsaiu sdasdbuasyduyas
              bsaiduasiudbni s sauidhiusbdas basiudbsaiub
            </p>
          </div>
          <div className="col s12 l6 offset-l2">
            <ul className="tabs">
              <li className="tab col s6">
                <a href="#photography" className="indigo-text text-darken-4">
                  Photography
                </a>
              </li>
              <li className="tab col s6">
                <a href="#editing" className="indigo-text text-darken-4">
                  Editing
                </a>
              </li>
            </ul>
            <div className="col s12" id="photography">
              <p className="flow-text indigo-text text-darken-4">Photography</p>
              <p>
                iusduasgfuysdvufdsgfudb fbudgfudsgf abiusaiudgsaiu
                sdasdbuasyduyas bsaiduasiudbni s sauidhiusbdas basiudbsaiub
              </p>
              <p>
                iusduasgfuysdvufdsgfudb fbudgfudsgf abiusaiudgsaiu
                sdasdbuasyduyas bsaiduasiudbni s sauidhiusbdas basiudbsaiub
              </p>
            </div>
            <div className="col s12" id="editing">
              <p className="flow-text indigo-text text-darken-4">Editing</p>
              <p>
                iusduasgfuysdvufdsgfudb fbudgfudsgf abiusaiudgsaiu
                sdasdbuasyduyas bsaiduasiudbni s sauidhiusbdas basiudbsaiub
              </p>
              <p>
                iusduasgfuysdvufdsgfudb fbudgfudsgf abiusaiudgsaiu
                sdasdbuasyduyas bsaiduasiudbni s sauidhiusbdas basiudbsaiub
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
