import React, { Component } from "react";

export default class Parallax extends Component {
  render(props) {
    return (
      <div className="parallax-container">
        <div className="parallax">
          <img className="responsive-img" src={this.props.pic} alt="" />
        </div>
      </div>
    );
  }
}
