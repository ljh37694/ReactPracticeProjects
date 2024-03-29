import styled from "styled-components";
import { BoldLargeText, NormalText } from "../components/Texts";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > *:not(:last-child):not(:first-child) {
        margin-top: 30px;
    }
`;

const CarrotImage = styled.img`
    width: 8em;
    margin: 2em auto;
`;

function Start(props) {
    return (
        <Container>
            <CarrotImage src="https://brandnew.daangn.com/static/83204de0c76f5d19f87a4cd3d02a23df/49a66/logoImage.png" />
            <BoldLargeText>당신 근처의 당근</BoldLargeText>
            <NormalText>동네라서 가능한 모든 것</NormalText>
            <NormalText>지금 내 동네를 선택하고 시작해보세요!</NormalText>
        </Container>
    );
}

export default Start;
