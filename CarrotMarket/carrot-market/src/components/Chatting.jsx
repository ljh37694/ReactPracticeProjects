import styled from "styled-components";
import { CARROT, GREY } from "./Color";
import { NormalText } from "./Texts";
import { io } from "socket.io-client";

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
    margin-bottom: 10px;
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
    let { chatList, userId } = props;
    const socket = io("https://localhost:1234");

    return (
        <Container>
            {chatList.map((data) => {
                return (
                    <ChatContainer>
                        {data.userId === userId ? (
                            <CarrotChatBox>
                                <NormalText>{data.msg}</NormalText>
                            </CarrotChatBox>
                        ) : (
                            <BlackChatBox>
                                <NormalText>{data.msg}</NormalText>
                            </BlackChatBox>
                        )}
                    </ChatContainer>
                );
            })}
        </Container>
    );
}

export default Chatting;
