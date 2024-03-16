import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faBell,
    faUser,
    faExpand,
    faGear,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

let Nav = styled.nav`
    border: 1px solid #eee;
    height: 100%;
    width: 100%;
    color: #fff;
    font-size: 20px;
    margin: auto;
    text-align: center;
    border: none;
    display: flex;
    align-items: center;
`;

let NavTitle = styled.h3`
    font-size: 24px;
`;

let MenuIconContainer = styled.div`
    display: flex;
    align-items: end;
    justify-content: end;
    flex-grow: 1;
`;

let IconContainer = styled.div`
    font-size: 24px;
    color: #fff;
    width: 2.5em;
`;

function MainNav(props) {
    let { option } = props;

    const navMenuList = {
        home: {
            title: "송정동",
            icons: [faMagnifyingGlass, faBell],
        },
        neighborhood: {
            title: "송정동",
            icons: [faUser, faMagnifyingGlass, faBell],
        },
        myLocation: {
            title: "송정동",
            icons: [faMagnifyingGlass, faBell],
        },
        chattingList: {
            title: "채팅",
            icons: [faExpand, faBell],
        },
        user: {
            title: "나의 당근",
            icons: [faGear],
        },
    };

    return (
        <Nav>
            <NavTitle> {navMenuList[option].title}</NavTitle>

            <MenuIconContainer>
                {navMenuList[option].icons.map((item, idx) => {
                    return (
                        <Link to="/home">
                            <IconContainer>
                                <FontAwesomeIcon icon={item}></FontAwesomeIcon>
                            </IconContainer>
                        </Link>
                    );
                })}
            </MenuIconContainer>
        </Nav>
    );
}

export default MainNav;
