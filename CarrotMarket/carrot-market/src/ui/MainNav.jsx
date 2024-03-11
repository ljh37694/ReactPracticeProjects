import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";

function MainNav(props) {
    const Nav = styled.nav`
        border: 1px solid #eee;
        height: 100%;
        width: 100%;
        color: #fff;
        font-family: "Nanum Gothic";
        font-size: 20px;
        margin: auto;
        text-align: center;
        border: none;
        margin: auto;
    `;

    return (
        <Nav>
            <Row>
                <Col xs={4} md={4} className="text-start">마포구</Col>
                <Col xs={4} md={6}></Col>
                <Col xs={2} md={1}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Col>
                <Col xs={2} md={1}>
                    <FontAwesomeIcon icon={faBell} />
                </Col>
            </Row>
        </Nav>
    );
}

export default MainNav;
