import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CarrotButton from "../components/CarrotButton";
import axios from "axios";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function SignUpFooter(props) {
    return (
        <Container>
            <CarrotButton type="submit" form="sign-up-form" text="회원가입" />
        </Container>
    );
}

export default SignUpFooter;
