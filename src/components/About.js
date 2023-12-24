import AboutClass from "./AboutClass";

import { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <AboutClass/>
        <h1>This is About Page</h1>
      </div>
    );
  }
}

export default About;
