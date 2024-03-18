import styled from "styled-components";
import CarrotButton from "../components/CarrotButton";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;

function LoginFooter(props) {
    return (
        <Container>
            <CarrotButton text="로그인" />
        </Container>
    );
}

export default LoginFooter;
