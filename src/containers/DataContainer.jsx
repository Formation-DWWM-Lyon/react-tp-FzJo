import React, { Component } from "react";
import Axios from "axios";
import Loader from "react-loader-spinner";
import { ListGroup } from "react-bootstrap";

// const UserList = ({ name }) => {
//   return <ListGroup.Item>{name}</ListGroup.Item>;
// };

export default class DataContainer extends Component {
  state = {
    result: null
  };

  fetchData = () => {
    let url = `https://randomuser.me/api/?page=1&results=10`;
    Axios.get(url)
      .then(response => {
        console.log(response);
        this.setState({ result: response.data.results });
      })
      .catch(error => console.error(error));
  };

  componentDidMount = () => {
    console.log("in componentDidMount");
    this.fetchData();
  };

  render = () => {
    const { result } = this.state;
    console.log(result);

    if (!result) {
      return (
        <div className="text-center">
          <Loader type="Bars" color="#231F20" height={80} width={80} />
        </div>
      );
    }

    if (result) {
      return (
        <ListGroup>
          {result.map((item, index) => (
            <ListGroup.Item key={index}>{item.name.last}</ListGroup.Item>
            // <UserList key={index}>{item.name.last}</UserList>
          ))}
        </ListGroup>
      );
    }

    return <div></div>;
  };
}
