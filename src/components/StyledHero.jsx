import styled from "styled-components";

const StyledHero = styled.header`
    min-height: 60vh;
    /* background: url(); */
    background: url(${props => props.styeling });
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default StyledHero;