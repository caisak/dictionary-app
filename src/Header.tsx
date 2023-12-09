import styled from "styled-components";

function Header () {
    return (
        <div>
            <Title><StyledLink href="/">Dictionary</StyledLink></Title>
        </div>
    )
}

export default Header;

const Title = styled.h1`
display: flex;
justify-content: center;
align-items: center;
`

const StyledLink = styled.a`
text-decoration: none;
color: var(--color-tech-blue);
`