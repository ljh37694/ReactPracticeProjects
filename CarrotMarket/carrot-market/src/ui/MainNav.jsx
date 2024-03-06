import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from 'react-bootstrap';

const Nav = styled.nav`
    display: flex;
    position: fixed;
    border: 1px solid #eee;
    height: 50px;
    width: 100%;
    background-color: black;
    color: #fff;
    font-family: "Nanum Gothic";
    font-size: 20px;
    margin: auto;
`;

function MainNav(props) {
    return (
        <Nav>
            <Row className="w-100">
                <Col xl={8}>마포구</Col>
                <Col>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Col>
                <Col>
                    <FontAwesomeIcon icon={faBell} />
                </Col>
            </Row>
        </Nav>
    );
}

export default MainNav;
