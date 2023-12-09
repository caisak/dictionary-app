import styled from "styled-components";

function Header () {
    return (
        <div>
            <Title>Dictionary</Title>
        </div>
    )
}

export default Header;

const Title = styled.h1`
color: var(--color-tech-blue);
display: flex;
justify-content: center;
align-items: center;
`