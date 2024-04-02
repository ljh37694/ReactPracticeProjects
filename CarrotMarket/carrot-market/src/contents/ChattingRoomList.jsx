import styled from "styled-components";
import ChattingRoom from "../components/ChattingRoom";
import { useNavigate } from "react-router-dom";

let MainContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    background-color: #1b1b1b;
    border: none;
    position: relative;
    overflow: hidden;
    color: #fff;
`;

function ChattingRoomList(props) {
    const { userId, chattingRoomList } = props;
    const navigate = useNavigate();

    return (
        <MainContainer>
            {chattingRoomList.map((data) => {
                return <ChattingRoom userId={userId} data={data} onClick={() => {
                    navigate("/chat?roomId=" + data._id);
                }} />;
            })}
        </MainContainer>
    );
}

export default ChattingRoomList;
