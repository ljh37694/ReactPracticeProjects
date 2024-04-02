import styled from "styled-components";
import { CARROT, GREY } from "./Color";
import { NormalText } from "./Texts";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import axios from "axios";

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
    let { chatList, setChatList, userId } = props;
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const roomId = queryParams.get("roomId");
    const chatEndRef = useRef(null);

    useEffect(() => {
        axios.get("http://localhost:1234/chatList?roomId=" + roomId)
        .then((res) => {
            setChatList(res.data);

            console.log(chatList);
        })
        .catch(e => console.log(e));
    }, []);

    useEffect(() => {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [chatList]);

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
            <div ref={chatEndRef}></div>
        </Container>
    );
}

export default Chatting;
