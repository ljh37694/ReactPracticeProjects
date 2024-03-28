import styled from "styled-components";
import { BLUEBLACK, GREY, WHITE } from "../components/Color";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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

function ChattingFooter(props) {
    let { chatList, setChatList } = props;
    let [msg, setMsg] = useState("");

    return (
        <Container>
            <ChattingForm onSubmit={(e) => {
                e.preventDefault();
                setChatList([...chatList, {
                    userId: "ljh37694",
                    msg: msg
                }]);
                
                setMsg("");
            }}>
                <Button>
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
                <ChatContainer>
                    <ChatInput id="chat-input" value={msg} onChange={(e) => {
                        setMsg(e.target.value);
                        console.log(msg);
                    }} />
                </ChatContainer>
                <Button type="submit">
                    <FontAwesomeIcon icon={faPaperPlane} />
                </Button>
            </ChattingForm>
        </Container>
    );
}

export default ChattingFooter;
