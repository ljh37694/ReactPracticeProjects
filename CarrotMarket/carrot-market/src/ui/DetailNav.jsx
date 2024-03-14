import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faEllipsisVertical,
    faHouse,
    faShare,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Nav = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 24px;
`;

const LeftMenu = styled.div`
    height: 100%;
    display: flex;
    text-align: start;
`;

const RightMenu = styled.div`
    height: 100%;
    flex-grow: 1;
    display: flex;
    justify-content: end;
    text-align: end;
`;

const IconContainer = styled.div`
    width: 2.5em;
`;

function DetailNav(props) {
    const navigate = useNavigate();

    const navMenuList = {
        detail: {
            left: [
                { icon: faChevronLeft, onClick: () => navigate(-1) },
                { icon: faHouse, onClick: () => navigate("/main/home") },
            ],

            right: [faShare, faEllipsisVertical],
        },
    };

    return (
        <Nav>
            <LeftMenu>
                {navMenuList["detail"].left.map((item) => {
                    return (
                        <IconContainer>
                            <FontAwesomeIcon
                                icon={item.icon}
                                onClick={item.onClick}
                            ></FontAwesomeIcon>
                        </IconContainer>
                    );
                })}
            </LeftMenu>

            <RightMenu>
                {navMenuList["detail"].right.map((item) => {
                    return (
                        <IconContainer>
                            <FontAwesomeIcon icon={item}></FontAwesomeIcon>
                        </IconContainer>
                    );
                })}
            </RightMenu>
        </Nav>
    );
}

export default DetailNav;
