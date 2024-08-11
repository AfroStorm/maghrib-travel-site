import styled from "styled-components";
import * as faIcons from "react-icons/fa";
import * as io5Icons from "react-icons/io5";
import * as fa6Icons from "react-icons/fa6";
import * as giIcons from "react-icons/gi";
import * as bsIcons from "react-icons/bs";
import * as ciIcons from "react-icons/ci";
import * as piIcons from "react-icons/pi";

const StyledDiv = styled.div`
  color: var(--primary);
  font-size: ${({ $fontSize }) => ($fontSize ? `${$fontSize}` : "1.5rem")};
  display: grid;
  place-items: center;
`;

const IconComponent = ({ iconName, fontSize }) => {
  let Icon;

  if (iconName in faIcons) {
    Icon = faIcons[iconName];
  } else if (iconName in fa6Icons) {
    Icon = fa6Icons[iconName];
  } else if (iconName in ciIcons) {
    Icon = ciIcons[iconName];
  } else if (iconName in io5Icons) {
    Icon = io5Icons[iconName];
  } else if (iconName in giIcons) {
    Icon = giIcons[iconName];
  } else if (iconName in bsIcons) {
    Icon = bsIcons[iconName];
  } else if (iconName in piIcons) {
    Icon = piIcons[iconName];
  } else {
    return null; // Return null if no matching icon is found
  }

  return (
    <StyledDiv $fontSize={fontSize}>
      <Icon />
    </StyledDiv>
  );
};
export default IconComponent;
