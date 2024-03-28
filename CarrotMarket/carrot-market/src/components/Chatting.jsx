import styled from "styled-components";
import { BLACK, CARROT, GREY } from "./Color";
import { NormalText } from "./Texts";

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: inherit;
    display: flex;
    flex-direction: column;
`;

const ChatContainer = styled.div`
    width: 100%;
`;

const ChatBox = styled.div`
    border: none;
    border-radius: 15px;
    color: #fff;
    padding: 10px;
    display: flex;
    align-items: center;
    vertical-align: middle;
`;

const BlackChatBox = styled(ChatBox)`
    background-color: ${GREY};
    float: left;
`;

const CarrotChatBox = styled(ChatBox)`
    background-color: ${CARROT};
    float: right;
`;

function Chatting(props) {
    
    return (
        <Container>
            <ChatContainer>
                <BlackChatBox>
                    <NormalText>안녕하세요</NormalText>
                </BlackChatBox>
            </ChatContainer>
            <ChatContainer>
                <CarrotChatBox>
                    <NormalText>안녕하세요</NormalText>
                </CarrotChatBox>
            </ChatContainer>
        </Container>
    );
}

export default Chatting;
