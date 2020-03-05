import React from 'react';
import { Container } from 'react-bootstrap';
import { Header, Footer } from 'react-bootstrap';

const Layout = (props) => 
<div className="App">
  <Container>
    <Header>Beautiful Header</Header>
    <main>
      {props.children}
    </main>
    <Footer>Beautiful Footer</Footer>
  </Container>
</div>
;

export default Layout;