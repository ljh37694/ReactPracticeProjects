import styled from "styled-components";

const Text = styled.p`
    color: ${(props) => props.color || "#fff"};
    margin: 0;
`;

const NormalText = styled(Text)`
    font-size: 14px;
`;

const BoldNormalText = styled(NormalText)`
    font-weight: bold;
`;

const LargeText = styled(Text)`
    font-size: 20px;
`;

const BoldLargeText = styled(LargeText)`
    font-weight: bold;
`;

export { NormalText, BoldNormalText, LargeText, BoldLargeText };
