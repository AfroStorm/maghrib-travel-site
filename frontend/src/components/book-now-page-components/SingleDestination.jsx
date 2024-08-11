import styled from "styled-components";

const StyledLi = styled.li`
  & .card {
    width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    box-shadow: var(--shadow-300);
    border: 1px solid var(--gray-500);
    padding: 0.5rem;
    border-radius: 0.2rem;
  }

  & .img-container {
    width: 100%;
    height: 12em;
    overflow: hidden;
  }

  & .img-container img {
    width: 100%;
    object-fit: contain;
  }

  & .title {
    font-family: "arabic-font";
    margin: 1rem 0;
  }

  & .info-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5rem;
    color: var(--text-1);
    line-height: 1.5;
    height: 16rem;
  }

  & .price {
    color: var(--green-800);
    font-weight: 700;
  }

  & .duration {
    color: var(--gray-800);
    font-weight: 700;
  }

  & a {
    align-self: start;
    display: inline-block;
    text-transform: capitalize;
    color: var(--gray-100);
    margin-top: 1rem;
    padding: 1rem 1.5rem;
    border: 2px solid var(--gray-1000);
    background: var(--gray-1000);
    transition: var(--transition-quick);
  }
`;

const SingleDestination = ({ data }) => {
  const { title, price, duration, description, image } = data;

  return (
    <StyledLi>
      <article className="card">
        <div className="img-container">
          <img src={image} alt={title} />
        </div>
        <h3 className="title">{title}</h3>
        <div className="info-container">
          <p className="price">${price}</p>
          <p className="duration">{duration} weeks</p>
          <p>{description}</p>
        </div>
        <a href="#">book now</a>
      </article>
    </StyledLi>
  );
};
export default SingleDestination;
