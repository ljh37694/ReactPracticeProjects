import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";

function MainNav(props) {
    const Nav = styled.nav`
        position: absolute;
        border: 1px solid #eee;
        height: 50px;
        width: 100%;
        min-width: 350px;
        color: #fff;
        font-family: "Nanum Gothic";
        font-size: 20px;
        margin: auto;
        text-align: center;
        padding: 10px;
        border: none;
        margin: auto;
    `;

    return (
        <Nav>
            <Row>
                <Col xs={2}>마포구</Col>
                <Col xs={8}></Col>
                <Col xs={1}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Col>
                <Col xs={1}>
                    <FontAwesomeIcon icon={faBell} />
                </Col>
            </Row>
        </Nav>
    );
}

export default MainNav;
