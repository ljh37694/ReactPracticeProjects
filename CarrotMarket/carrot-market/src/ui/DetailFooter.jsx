import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { CARROT, WHITE, GREY } from "../components/Color";
import { BoldLargeText, BoldNormalText, NormalText } from "../components/Texts";
import { useState } from "react";
import { useParams } from "react-router-dom";

const FooterContainer = styled.div`
    height: 100%;
    width: 100%;
    color: ${WHITE};
    display: flex;
    border-top: 1px solid ${GREY};
    padding: 1.3em 0px;
`;

const HeartContainer = styled.div`
    font-size: 30px;
    width: 2em;
    color: #6e6e6e;
    border-right: 1px solid ${GREY};
    display: flex;
    align-items: center;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
`;

const PriceContainer = styled.div`
    flex-grow: 1;
    padding-left: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ButtonContainer = styled.div``;

const ChattingButton = styled.button`
    border-radius: 5px;
    padding: 10px;
    background-color: ${CARROT};
    border: none;
    color: inherit;
    font-size: 16px;
    font-weight: bold;
`;

function DetailFooter(props) {
    const { userId, data } = props;
    const [heart, setHeart] = useState(false);
    const { idx } = useParams();

    const postData = data[parseInt(idx)];

    return (
        <FooterContainer>
            <HeartContainer>
                <FontAwesomeIcon
                    className="ps-2"
                    icon={faHeart}
                    onClick={(e) => {
                        e.currentTarget.style.color = heart ? CARROT : GREY;
                        setHeart(!heart);
                    }}
                />
            </HeartContainer>
            <PriceContainer>
                <BoldLargeText>8,000</BoldLargeText>
                <NormalText color={GREY}>가격 제안 불가</NormalText>
            </PriceContainer>
            <ButtonContainer>
                {postData.userId === userId ? null : <ChattingButton>채팅하기</ChattingButton>}
            </ButtonContainer>
        </FooterContainer>
    );
}

export default DetailFooter;
