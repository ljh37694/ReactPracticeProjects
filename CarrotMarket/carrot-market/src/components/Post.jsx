import styled from "styled-components";
import { faComments, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let PostContainer = styled.div`
    display: flex;
    color: #fff;
    box-sizing: border-box;
    border-bottom: 1px solid #6e6e6e;
    padding: 15px 0px;
`;

let ContentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    flex-grow: 1;
`;

let PostImage = styled.img`
    width: 8em;
`;

let PostTitle = styled.h3`
    font-size: 20px;
`;

let PostDetail = styled.p`
    font-size: 14px;
    color: #6e6e6e;
`;

let PostPrice = styled.p`
    font-size: 20px;
    font-weight: bold;
`;

let PostFooter = styled.div`
    display: flex;
    justify-content: end;
    text-align: end;
`;

let CountContainer = styled.div`
    color: #fff;
    display: flex;
    align-items: center;

    & > * {
        padding: 0px;
        margin: 0px;
    }

    & > p {
        margin: 0px 6px;
    }
`;

function Post(props) {
    let { onClick } = props;

    return (
        <PostContainer onClick={onClick}>
            <PostImage src="https://blog.kakaocdn.net/dn/tWx11/btqDag5h7y3/6aY75vJNfOPMyNicZo53c0/img.png"></PostImage>
            <ContentsContainer>
                <PostTitle>품절 임박! 닌텐도 스위치 팝니다</PostTitle>
                <PostDetail>송정동 · 3시간 전</PostDetail>
                <PostPrice>230,000원</PostPrice>
                <PostFooter>
                    <CountContainer>
                        <FontAwesomeIcon icon={faComments} />
                        <p>1</p>
                    </CountContainer>
                    <CountContainer>
                        <FontAwesomeIcon icon={faHeart} />
                        <p>5</p>
                    </CountContainer>
                </PostFooter>
            </ContentsContainer>
        </PostContainer>
    );
}

export default Post;
