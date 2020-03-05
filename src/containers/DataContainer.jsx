import React, { Component } from "react";
import Axios from "axios";
import Loader from "react-loader-spinner";
// import Profile from "../components/Profile";

// const componentsByResource = {
//   profile: Profile
// };

export default class DataContainer extends Component {
  state = {
    data: null
  };

  fetchData = () => {
    // const { resource } = this.props.match.params;
    let url = `https://randomuser.me/api/?page=1&results=10&seed=abc&nat=fr`;

    Axios.get(url)
      // .then(response => this.setState({ data: response.data }))
      .then(response => console.log(response))
      .catch(error => console.error(error));
  };

  componentDidMount = () => {
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
  };
}
