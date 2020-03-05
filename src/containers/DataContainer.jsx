import React, { Component } from "react";
import Axios from "axios";
import Loader from "react-loader-spinner";
import { ListGroup, Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Header from "../components/Header";
import Profil from "../components/Profil";

export default class DataContainer extends Component {
  state = {
    data: null
  };

  fetchData = page => {
    if (!page || 0 === page) {
      page = 1;
    }
    let url = `https://randomuser.me/api/?page=${page}&results=10&seed=abc&nat=fr`;
    Axios.get(url)
      .then(response => this.setState({ data: response.data }))
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
            {data.results.map((item, index) => (
              <ListGroup.Item key={index}>
                <ul>
                  <Image className="photo-profil" src={item.picture.large} />
                  <p>
                    {item.name.first} {item.name.last} {item.dob.age}
                  </p>
                  <p>
                    {item.login.first} a.k.a {item.login.username}
                  </p>
                  <p>Join Dev'Lobster {item.registered.age} ago !</p>
                  <p>
                    From {item.location.city} in {item.location.country}
                  </p>
                </ul>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Button onClick={e => this.fetchData(data.info.page - 1)}>
            Prev
          </Button>
          <Button onClick={e => this.fetchData(data.info.page + 1)}>
            Next
          </Button>
        </div>
      );
    }
    return <Profil {...data} />;
  };
}
