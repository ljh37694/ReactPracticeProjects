import styled from "styled-components";
import { LargeText, NormalText } from "./Texts";
import { GREY } from "./Color";

const Container = styled.div`
    width: 100%;
    height: 3em;
    padding: 10px 0px;
    color: #fff;
    background-color: inherit;
    display: flex;
`;

const ProfileImage = styled.img`
    border-radius: 50px;
    width: 5em;
`;

const ContentsContainer = styled.div`
    flex-grow: 1;
`;

const ContentsTopContainer = styled(Container)`
`;

const ContentsBottomContainer = styled(Container)`
`;

function Chatting(props) {
    const { data } = props;
    const { nickname, profileImg, location, lastChat } = data;

    return (
        <Container>
            <ProfileImage src={profileImg} />
            <ContentsContainer>
                <Container>
                    <LargeText>{nickname}</LargeText>
                    <NormalText color={GREY}>{location}</NormalText>
                </Container>
                <Container>
                    <NormalText color={GREY}>{lastChat}</NormalText>
                </Container>
            </ContentsContainer>
        </Container>
    );
}

export default Chatting;