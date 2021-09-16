import React from 'react'
import {Row,Col} from 'react-bootstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Address = () => {
    return (
        <div>
            <Row>
                <Col></Col>
                <Col xs={6}><input type="texte" placeholder="my adresse"/></Col>
                <Col></Col>
            </Row>
            
        </div>
    )
}

export default Address
