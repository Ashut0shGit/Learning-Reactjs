import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1> About Us </h1>
        <UserClass name={" "} location={""} />
      </div>
    );
  }
}

export default About;
