import React, { Component } from "react";
import { directive } from "@babel/types";

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer grey darken-3">
        <div className="container">
          <div className="row">
            <div className="col s12 l6">
              <h5>About me</h5>
              <p>
                iusduasgfuysdvufdsgfudb fbudgfudsgf abiusaiudgsaiu
                sdasdbuasyduyas bsaiduasiudbni s sauidhiusbdas basiudbsaiub
              </p>
              <p>
                iusduasgfuysdvufdsgfudb fbudgfudsgf abiusaiudgsaiu
                sdasdbuasyduyas bsaiduasiudbni s sauidhiusbdas basiudbsaiub
              </p>
            </div>
            <div className="col s12 l4 offset-l2">
              <h5>Connect</h5>
              <ul>
                <li>
                  <a href="" className="grey-text text-lighten-3">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="" className="grey-text text-lighten-3">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="" className="grey-text text-lighten-3">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="" className="grey-text text-lighten-3">
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright grey darken-4">
          <div className="container center-align">&copy; 2019 Photo Ninja</div>
        </div>
      </footer>
    );
  }
}
