import React from "react";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/itsamitofficial37");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div>
        <img src={avatar_url} />
        <h1>Name : {name}</h1>
        <h1>Location : {location}</h1>
      </div>
    );
  }
}

export default AboutClass;
