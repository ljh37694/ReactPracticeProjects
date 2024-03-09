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
import { useState, useEffect } from "react";

function Footer(props) {
    let [selectMenu, setSelectMenu] = useState(0);

    const FooterContainer = styled.footer`
        color: #fff;
        position: absolute;
        bottom: -20px;
        width: 100%;
        text-align: center;

        &:focus {
            color: #6e6e6e;
        }
    `;

    const Menu = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;

    const MenuTitle = styled.p`
        font-size: 14px;
        margin-top: 5px;
    `;

    const footerMenuData = [
        { icon : faHouse, title : "홈" },
        { icon : faBuilding, title : "동네생활" },
        { icon : faLocationDot, title : "내 근처" },
        { icon : faComments, title : "채팅" },
        { icon : faUser, title : "나의 당근" },
    ]

    useEffect(() => {
        const menuBtn = document.querySelectorAll(".menu-btn");

        [...menuBtn].forEach((data) => {
            data.style.color = "#fff";
        });

        menuBtn[selectMenu].style.color = "#6e6e6e";
    }, [selectMenu]);

    return (
        <FooterContainer>
            <Row>
                { 
                    footerMenuData.map((data, idx) => {
                        return (
                            <Col>
                                <Menu className="menu-btn" data-id={idx} onClick={() => setSelectMenu(idx)}>
                                    <FontAwesomeIcon icon={data.icon} />
                                    <MenuTitle>{data.title}</MenuTitle>
                                </Menu>
                            </Col>
                        );
                    })
                }
            </Row>
        </FooterContainer>
    );
}

export default Footer;
