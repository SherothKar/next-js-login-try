import React from 'react'
import Menu from './menu'
import Footer from './footer'
import { Col, Row, Form } from "react-bootstrap";
import { useRouter } from 'next/router';

function layout({ children }) {
  const router = useRouter();

  return (
    <div>
      {router.pathname == '/' ? (<Row>
        <Col xs lg="12">
          <Menu />
        </Col>
        <Col xs lg="12">
          {children}
        </Col>
        <Col className='col-lg-12'>
          <Footer />
        </Col>
      </Row>) :
        (<Row>
          <Col xs lg="5">
            <Menu />
          </Col>
          <Col xs lg="7">
            {children}
          </Col>
          <Col className='col-lg-12'>
            <Footer />
          </Col>
        </Row>)
      }
    </div>
  );

}

export default layout
