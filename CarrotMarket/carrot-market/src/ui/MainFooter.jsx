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
import { Link } from "react-router-dom";

// styled-components
let FooterContainer = styled.footer`
    color: #fff;
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-around;

    &:focus {
        color: #6e6e6e;
    }

    & > div {
        width: 100%;
    }
`;

let Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    font-size: 28px;
`;

let MenuTitle = styled.p`
    margin: 0px;
    font-size: 14px;
    margin-top: 0.5em;
`;

function Footer(props) {
    let { setOption, selectMenu, setSelectMenu } = props;

    const footerMenuData = [
        { icon: faHouse, title: "홈", link: "/main/home", id: "home" },
        { icon: faBuilding, title: "동네생활", link: "/main/neighborhood", id: "neighborhood" },
        { icon: faLocationDot, title: "내 근처", link: "/main/my-location", id: "myLocation" },
        { icon: faComments, title: "채팅", link: "/main/chatting-list", id : "chattingList"},
        { icon: faUser, title: "나의 당근", link: "/main/my-page", id : "user"},
    ];

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
                {footerMenuData.map((data, idx) => {
                    return (
                        <Col>
                            <Link
                                to={data.link}
                                onClick={() => {
                                    setOption(data.id);
                                    setSelectMenu(idx);
                                }}
                                style={{ textDecorationLine: "none" }}
                            >
                                <Menu className="menu-btn" data-id={data.id}>
                                    <FontAwesomeIcon icon={data.icon} />
                                    <MenuTitle>{data.title}</MenuTitle>
                                </Menu>
                            </Link>
                        </Col>
                    );
                })}
            </Row>
        </FooterContainer>
    );
}

export default Footer;
