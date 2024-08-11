import styled from "styled-components";
import { useDestinationPageContext } from "../../app-context/book-now-context/destinationPageContext";
import { nanoid } from "nanoid";
import SingleDestination from "./SingleDestination";

const StyledBookNow = styled.main`
  top: 0;
  left: 0;
  width: 100vw;
  position: fixed;
  opacity: 0;
  visibility: hidden;
  z-index: 0;
  transition: var(--transition-quick);
  /* margin-top do it dynamically through navbar ref*/
  margin-top: 92px;

  ${({ $currentPage }) =>
    $currentPage === "/book-now" &&
    `
      position: static;
      opacity: 1;
      visibility: visible;
      z-index:1;`}

  & .headline {
    width: 100vw;
    height: 10rem;
    background: var(--accent-2);
    display: grid;
    place-items: center;
  }

  & h1 {
    font-size: clamp(2rem, 5vw, 2.3rem);
    font-family: "arabic-font";
  }

  & .center-div {
    width: var(--fluid-width-90);
    max-width: var(--max-width-lg);
    margin: 7rem auto 0 auto;
  }

  & .center-div ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 768px) {
    & .headline {
      height: 15rem;
    }

    & .center-div ul {
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
`;

const BookNow = ({ currentPage }) => {
  const { destinations, sectionTitle } = useDestinationPageContext();

  return (
    <StyledBookNow $currentPage={currentPage}>
      <div className="headline">{sectionTitle && <h1>{sectionTitle}</h1>}</div>

      <div className="center-div">
        <ul>
          {destinations &&
            destinations.map((data) => {
              return <SingleDestination key={nanoid()} data={data} />;
            })}
        </ul>
      </div>
    </StyledBookNow>
  );
};
export default BookNow;
