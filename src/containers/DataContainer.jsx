import React, { Component } from "react";
import Axios from "axios";
import Loader from "react-loader-spinner";
import { ListGroup, Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Header from "../components/Header";

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
        <div>
          <Header />
          <ListGroup className="card-list">
            {result.map((item, index) => (
              <ListGroup.Item key={index}>
                <ul>
                  <Image className="img" src={item.picture.thumbnail} />
                  <p>
                    {item.name.first} {item.name.last}
                  </p>
                  <p>From {item.location.city}</p>
                  <p>{item.gender}</p>
                </ul>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Button onClick={e => this.fetchData(result.info - 1)}>Prev</Button>
          <Button onClick={e => this.fetchData(result.info + 1)}>Next</Button>
        </div>
      );
    }

    return <div></div>;
  };
}
