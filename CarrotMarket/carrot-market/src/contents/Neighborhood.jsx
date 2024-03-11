import styled from "styled-components";

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

function Neighborhood(props) {
    return (
        <MainContainer>
            <div style={{ float: "left" }}>동네생활</div>
        </MainContainer>
    );
}

export default Neighborhood;
