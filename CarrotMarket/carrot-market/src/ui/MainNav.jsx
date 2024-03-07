import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";

function MainNav(props) {
    const Nav = styled.nav`
        position: fixed;
        border: 1px solid #eee;
        height: 50px;
        width: 50%;
        min-width: 350px;
        color: #fff;
        font-family: "Nanum Gothic";
        font-size: 20px;
        margin: auto;
        text-align: center;
        padding: 10px;
        border: none;
        border-radius: 10px 10px 0px 0px;
        margin: auto;
    `;

    return (
        <Nav>
            <Row>
                <Col xs={3}>마포구</Col>
                <Col xs={6}></Col>
                <Col xs={3}>
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="me-3"
                    />
                    <FontAwesomeIcon icon={faBell} />
                </Col>
            </Row>
        </Nav>
    );
}

export default MainNav;
