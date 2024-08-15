import styled from "styled-components";
import errorImg from "../assets/svg/Error404.svg";
import { Link, useRouteError } from "react-router-dom";

const StyledSection = styled.section`
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .img {
    width: var(--fluid-width-90);
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }

  .info {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .link {
    color: var(--primary);
    font-weight: 700;
    text-transform: capitalize;
  }
`;

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <StyledSection>
        <img src={errorImg} alt="not found" className="img" />
        <div className="info">
          <h3 className="title">ohh!</h3>
          <p className="description">
            We can't seem to find the page you are looking for
          </p>
          <Link className="link" to={"/"}>
            back home
          </Link>
        </div>
      </StyledSection>
    );
  }
  return <StyledSection>error</StyledSection>;
};
export default ErrorPage;
