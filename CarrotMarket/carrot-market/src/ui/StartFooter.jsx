import styled from "styled-components";
import { CARROT, GREY } from "../components/Color";
import { BoldLargeText, NormalText } from "../components/Texts";
import { Link, useNavigate } from "react-router-dom";
import CarrotButton from "../components/CarrotButton";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function StartFooter(props) {
    const navigate = useNavigate();

    return (
        <Container>
            <CarrotButton text="시작하기" onClick={() => navigate("/sign-up")} />
            <NormalText color={GREY}>
                이미 계정이 있나요?{" "}
                <Link
                    to="/login"
                    style={{ color: CARROT, textDecorationLine: "none" }}
                >
                    로그인
                </Link>
            </NormalText>
        </Container>
    );
}

export default StartFooter;
