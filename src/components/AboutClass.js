import React from "react";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {}

  render() {
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div>
        Name : {name}
        <h1>count : {count}</h1>
        <button
          onClick={() =>
            this.setState({
              count: count + 1,
            })
          }
        >
          Count ++
        </button>
      </div>
    );
  }
}

export default AboutClass;
