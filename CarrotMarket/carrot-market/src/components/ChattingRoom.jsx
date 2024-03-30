import styled from "styled-components";
import { NormalText } from "./Texts";
import { GREY, BLACK } from "./Color";

const Container = styled.div`
    width: 100%;
    height: 6em;
    color: #fff;
    background-color: inherit;
    display: flex;
    align-items: center;
`;

const ProfileImage = styled.img`
    border-radius: 50px;
    height: 4em;
    width: 4em;
    margin-right: 10px;
    border: 1px solid ${BLACK};
`;

const ContentsContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ContentsTopContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    & > * {
        margin-right: 5px;
    }
`;

const ContentsBottomContainer = styled.div`
    width: 100%;
`;

function ChattingRoom(props) {
    const { data } = props;
    const tmp = {
        nickname: "포코",
        profileImg: "https://cdn.gukjenews.com/news/photo/202210/2576950_2583875_450.jpg",
        location: "송정동",
        lastChat: "안녕하세요",
    };

    const { nickname, profileImg, location, lastChat } = tmp;

    return (
        <Container className="chatting-room" id={data._id}>
            <ProfileImage src={profileImg} />
            <ContentsContainer>
                <ContentsTopContainer>
                    <NormalText>{nickname}</NormalText>
                    <NormalText color={GREY}>{location}</NormalText>
                </ContentsTopContainer>
                <ContentsBottomContainer>
                    <NormalText color={GREY}>{lastChat}</NormalText>
                </ContentsBottomContainer>
            </ContentsContainer>
        </Container>
    );
}

export default ChattingRoom;
