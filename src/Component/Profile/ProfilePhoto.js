import React from 'react'
import {Row,Col} from 'react-bootstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const ProfilePhoto = () => {
    return (
        <div>
             <Row>
                 <Col></Col>
                <Col xs={4}><img style={{width:"80%",border:"1em black dotted"}} src='/propic.jpg' alt='mypic'/> </Col>
                <Col></Col>
            </Row>
        </div>
    )
}

export default ProfilePhoto
