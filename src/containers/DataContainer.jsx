import React, { Component } from "react";
import Axios from "axios";
import Loader from "react-loader-spinner";
import { ListGroup, Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Header from "../components/Header";

export default class DataContainer extends Component {
  state = {
    data: null
  };

  fetchData = (page) => {
    let url = `https://randomuser.me/api/?page=${page}&datas=10&seed=abc&nat=fr`;
    Axios.get(url)
      .then(response => {
        console.log(response);
        this.setState({ data: response.data.datas });
      })
      .catch(error => console.error(error));
  };

  componentDidMount = () => {
    console.log("in componentDidMount");
    this.fetchData();
  };

  render = () => {
    const { data } = this.state;
    console.log(data);

    if (!data) {
      return (
        <div className="text-center">
          <Loader type="Bars" color="#231F20" height={80} width={80} />
        </div>
      );
    }

    if (data) {
      return (
        <div>
          <Header />
          <ListGroup className="card-list">
            {data.map((item, index) => (
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
          <Button onClick={() => this.fetchData(data.info.page - 1)}>Prev</Button>
          <Button onClick={() => this.fetchData(data.info.page + 1)}>Next</Button>
        </div>
      );
    }

    return <div></div>;
  };
}
