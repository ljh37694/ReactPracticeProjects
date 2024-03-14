import styled from "styled-components";
import { BoldLargeText, BoldNormalText, NormalText } from "../components/Texts";

let ContentsContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    background-color: #1b1b1b;
    border: none;
    position: relative;
    overflow-y: scroll;
    color: #fff;

    &::-webkit-scrollbar {
        display: none; /* 스크롤바 숨기기 */
    }
`;

let IamgeContainer = styled.img`
    width: 100%;
`;

let UserInfoContainer = styled.div`
    width: 100%;
    display: flex;
    border-bottom: 1px solid #eee;
    padding: 20px 0px;
`;

let UserProfileContainer = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
`;

const UserProfileImage = styled.img`
    width: 3em;
    height: 3em;
    border-radius: 1000px;
    margin-right: 1em;
`;

const UserTemperatureContainer = styled.div`
    width: 100%;
    height: 100%;
    flex-grow: 1;
    text-align: end;
`;

// Text
const TextContainer = styled.div`
    width: 100%;
    margin: 20px 0px;
`;

function DetailInfo(props) {
    return (
        <ContentsContainer>
            <IamgeContainer src="https://blog.kakaocdn.net/dn/tWx11/btqDag5h7y3/6aY75vJNfOPMyNicZo53c0/img.png" />
            <UserInfoContainer>
                <UserProfileContainer>
                    <UserProfileImage src="https://images.khan.co.kr/article/2022/03/21/l_2022032102001186000225851.jpg" />
                    <div>
                        <BoldNormalText>푸바오</BoldNormalText>
                        <NormalText>광주시 송정동</NormalText>
                    </div>
                </UserProfileContainer>
                <UserTemperatureContainer>
                    <BoldNormalText color="#49c442">36.5℃  😃</BoldNormalText>
                </UserTemperatureContainer>
            </UserInfoContainer>
            <TextContainer>
                <BoldLargeText>닌텐도 스위치 팝니다.</BoldLargeText>
                <NormalText color="#6e6e6e">취미/게임 · 1시간 전</NormalText>
                <NormalText>
                    닌텐도 스위치 팝니다.
                </NormalText>
            </TextContainer>
        </ContentsContainer>
    );
}

export default DetailInfo;
