import styled from "styled-components";
import { useFormDataContext } from "../../../app-context/home-page-context/form-data-context/formDataContext";
import React from "react";
import { nanoid } from "nanoid";
const StyledSection = styled.section`
  display: grid;
  place-items: center;
  gap: 2rem;
  height: 95vh;
  background: var(--gray-100);

  & .center-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: var(--fluid-width-90);
    max-width: var(--max-width-sm);
  }

  & .center-div h4 {
    font-family: "arabic-font";
    margin-top: 2rem;
  }

  & .contact-info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    line-height: 2;
    color: var(--text-2);
    font-size: 0.8rem;
  }

  & form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
  }

  & form > * {
    width: 100%;
  }

  & form textarea {
    height: 8rem;
    padding-top: 1rem;
    padding-left: 0.5rem;
    resize: none;
  }

  & form button {
    position: relative;
    top: -25.625px;
    width: auto;
    text-transform: capitalize;
    background: var(--gray-1000);
    color: var(--accent-1);
    padding: 0.5rem 2rem;
    border: 2px solid var(--gray-1000);
    transition: var(--transition-quick);
    cursor: pointer;
  }
`;

const Form = () => {
  const { formData, handleSubmit, handleChange, inputData } =
    useFormDataContext();
  const placeHolder = {
    name: " Name",
    email: " Email",
    subject: " Subject",
    message: " Type your message here...",
  };
  return (
    <StyledSection>
      <div className="center-div">
        {formData &&
          formData.map((data) => {
            const { section_title: sectionTitle, email, address } = data;
            return (
              <React.Fragment key={nanoid()}>
                <h4>{sectionTitle}</h4>
                <div className="contact-info">
                  <p>{address}</p>
                  <p>{email}</p>
                </div>
              </React.Fragment>
            );
          })}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-field-light"
            placeholder={placeHolder.name}
            name="name"
            value={inputData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            className="input-field-light"
            placeholder={placeHolder.email}
            name="email"
            value={inputData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            className="input-field-light"
            placeholder={placeHolder.subject}
            name="subject"
            value={inputData.subject}
            onChange={handleChange}
          />
          <textarea
            className="input-field-light"
            placeholder={placeHolder.message}
            name="message"
            value={inputData.message}
            onChange={handleChange}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </StyledSection>
  );
};
export default Form;
