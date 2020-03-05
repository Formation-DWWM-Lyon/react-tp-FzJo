import React from 'react';
import { Container } from 'react-bootstrap';

const Layout = (props) => 
<div className="App">
  <Container>
    <main>
      {props.children}
    </main>
  </Container>
</div>
;

export default Layout;