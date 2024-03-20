import styled from "styled-components";
import { NormalText } from "../components/Texts";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const MenuButton = styled.button`
    width: 100%;
    height: 3em;
    background-color: inherit;
    border: none;
    text-align: start;
    padding: 0px 10px;
`;

function Setting(props) {
    const navigate = useNavigate();

    return (
        <Container>
            <MenuButton
                onClick={() => {
                    localStorage.setItem("token", "");
                    navigate("/");
                }}
            >
                <NormalText>로그아웃</NormalText>
            </MenuButton>
        </Container>
    );
}

export default Setting;
