import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CarrotButton from "../components/CarrotButton";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function SignUpFooter(props) {
    const navigate = useNavigate();

    return (
        <Container>
            <CarrotButton text="회원가입" onClick={() => navigate("/main/home")} />
        </Container>
    );
}

export default SignUpFooter;
