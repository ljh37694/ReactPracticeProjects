import styled from "styled-components";
import { BLUEBLACK, GREY, WHITE } from "../components/Color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;

const ChattingForm = styled.form`
    display: flex;
    width: 100%;
`;

const ChatContainer = styled.div`
    width: 80%;
`;

const ChatInput = styled.input`
    border-radius: 20px;
    border: none;
    padding: 5px 10px;
    color: ${WHITE};
    width: 100%;
    background-color: ${BLUEBLACK};
`;

const Button = styled.button`
    width: 10%;
    color: ${GREY};
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: inherit;
    border: none;
`;

const socket = io("http://localhost:1234");

function ChattingFooter(props) {
    let { chatList, setChatList, userId } = props;
    let [msg, setMsg] = useState("");
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const roomId = queryParams.get("roomId");

    useEffect(() => {
        socket.emit("ask-join", roomId);

        console.log(roomId);
        console.log(chatList);
    }, []);

    socket.on("receiveMessage", (data) => {
        let tmp = [...chatList];
        console.log(chatList, data);
        tmp.push(data);

        setChatList(tmp);
    });

    return (
        <Container>
            <ChattingForm
                onSubmit={(e) => {
                    e.preventDefault();

                    if (msg == "") {
                        return;
                    }

                    const chat = {
                        userId: userId,
                        msg: msg,
                        roomId: roomId,
                    };

                    setChatList([...chatList, chat]);

                    setMsg("");

                    socket.emit("sendMessage", chat);
                }}
            >
                <Button>
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
                <ChatContainer>
                    <ChatInput
                        id="chat-input"
                        value={msg}
                        onChange={(e) => {
                            setMsg(e.target.value);
                        }}
                    />
                </ChatContainer>
                <Button type="submit">
                    <FontAwesomeIcon icon={faPaperPlane} />
                </Button>
            </ChattingForm>
        </Container>
    );
}

export default ChattingFooter;
