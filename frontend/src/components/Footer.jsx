import styled from "styled-components";

const StyledFooter = styled.footer`
  color: var(--gray-100);
  width: 100vw;
  background: var(--primary);
  text-align: center;
  padding: 0.5rem 0;
  margin-top: 3rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>© 2024 by AfroStorm Web Design</p>
    </StyledFooter>
  );
};
export default Footer;
