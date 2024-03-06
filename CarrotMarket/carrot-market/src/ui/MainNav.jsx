import styled from "styled-components"

function MainNav(props) {
    const Nav = styled.nav`
        display: flex;
        position: fixed;
        left: 0px;
        top: 0px;
        border: 1px solid #eee;
        height: 100px;
        width: 100%;
        background-color: black;
        color: #fff;
    `;

    return (
        <Nav>
            hi
        </Nav>
    );
}

export default MainNav;