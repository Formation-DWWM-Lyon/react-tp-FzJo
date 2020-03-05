import React, { Component } from "react";
import Axios from "axios";

export default class LinkContainer extends Component {
  state = {
    data: null
  };

  componentDidMount = () => {
    const { url } = this.props;

    Axios.get(url)
      .then(response => this.setState({ data: response.data }))
      .catch(error => console.error(error));
  };

  render = () => {
    const { data } = this.state;

    if (!data) {
      return <span>Loading...</span>;
    }

    return <div>Loading...</div>;
  };
}
