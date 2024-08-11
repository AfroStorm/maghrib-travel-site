import styled from "styled-components";
import { useNavBarContext } from "../../app-context/nav-bar-context/navBarContext";
import { nanoid } from "nanoid";
import IconComponent from "../reusable/IconComponent";

const StyledUl = styled.ul`
  display: none;

  @media screen and (min-width: 992px) {
    display: flex;
    align-items: center;
    gap: 0.7rem;
  }
  & .link svg {
    transition: var(--transition-quick);
  }
  & .link svg:hover {
    transform: scale(1.05);
  }
`;

const SocialLinks = () => {
  const { socialLinks } = useNavBarContext();

  return (
    <StyledUl>
      {socialLinks &&
        socialLinks.map((link) => {
          const { url, icon } = link;

          return (
            <li key={nanoid()} className="link">
              <a href={url}>
                <IconComponent iconName={icon} fontSize={"1.4rem"} />
              </a>
            </li>
          );
        })}
    </StyledUl>
  );
};
export default SocialLinks;
