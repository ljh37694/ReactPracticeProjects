import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faBuilding,
    faLocationDot,
    faComments,
    faUser,
} from "@fortawesome/free-solid-svg-icons";

function Footer(props) {
    const FooterContainer = styled.footer`
        color: #fff;
        position: absolute;
        bottom: 0px;
        width: 100%;
        text-align: center;
    `;

    const Menu = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;

    const MenuTitle = styled.p`
        font-size: 14px;
    `;

    return (
        <FooterContainer>
            <Row>
                <Col>
                    <Menu>
                        <FontAwesomeIcon icon={faHouse} />
                        <MenuTitle>홈</MenuTitle>
                    </Menu>
                </Col>
                <Col>
                    <Menu>
                        <FontAwesomeIcon icon={faBuilding} />
                        <MenuTitle>동네생활</MenuTitle>
                    </Menu>
                </Col>
                <Col>
                    <Menu>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <MenuTitle>내 근처</MenuTitle>
                    </Menu>
                </Col>
                <Col>
                    <Menu>
                        <FontAwesomeIcon icon={faComments} />
                        <MenuTitle>채팅</MenuTitle>
                    </Menu>
                </Col>
                <Col>
                    <Menu>
                        <FontAwesomeIcon icon={faUser} />
                        <MenuTitle>나의 당근</MenuTitle>
                    </Menu>
                </Col>
            </Row>
        </FooterContainer>
    );
}

export default Footer;
