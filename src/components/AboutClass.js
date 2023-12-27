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
      <div  className="user-card m-4 p-4 bg-gray-50 rounded-lg">
        <img src={avatar_url} />
        <h1 className="font-bold">Name : {name}</h1>
        <h1 className="font-bold" >Location : {location}</h1>
      </div>
    );
  }
}

export default AboutClass;
