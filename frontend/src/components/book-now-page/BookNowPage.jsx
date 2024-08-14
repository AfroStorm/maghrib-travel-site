import styled from "styled-components";
import { useDestinationPageContext } from "../../app-context/book-now-context/destinationPageContext";
import { nanoid } from "nanoid";
import SingleDestination from "./SingleDestination";

const StyledBookNow = styled.section`
  & .headline {
    width: 100vw;
    height: 10rem;
    display: grid;
    place-items: center;
    background: var(--accent-2);
  }

  & h1 {
    font-size: clamp(1.7rem, 5vw, 2.3rem);
    font-family: "arabic-font";
  }

  & .center-div {
    width: var(--fluid-width-90);
    max-width: var(--max-width-xl);
    margin: 7rem auto 0 auto;
  }

  & .center-div ul {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }

  @media screen and (min-width: 375px) {
    & h1 {
      font-size: clamp(2rem, 5vw, 2.3rem);
    }
  }
  @media screen and (min-width: 768px) {
    & .headline {
      height: 15rem;
    }

    & .center-div ul {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (min-width: 1200px) {
    & .center-div ul {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

const BookNow = () => {
  const { destinations, sectionTitle } = useDestinationPageContext();

  return (
    <StyledBookNow>
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
