import React, { Component } from "react";
import Axios from "axios";
import Loader from "react-loader-spinner";

const List = [
  {
    name: ""
  }
];

export default class DataContainer extends Component {
  state = {
    users: []
  };

  fetchData = () => {
    let url = `https://randomuser.me/api/?page=1&results=10&seed=abc&nat=fr`;
    Axios.get(url)
      .then(response => {
        console.log(response);
        this.setState({ data: response.data });
      })
      .catch(error => console.error(error));
  };

  componentDidMount = () => {
    console.log("in componentDidMount");
    this.fetchData();
  };

  render = () => {
    const { data } = this.state;

    if (!data) {
      return (
        <div className="text-center">
          <Loader type="Bars" color="#231F20" height={80} width={80} />
        </div>
      );
    }

    return <div></div>;
  };
}
