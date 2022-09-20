import styled from "styled-components";
import readNewsBgImage from "../assets/read_news.jpg";

export const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const NewsContainer = styled.div`
  height: 100vh;
  width: 50vw;
  padding: 2rem;

  > img {
    width: 24rem;
    margin-bottom: 5.75rem;
  }

  h2 {
    color: ${({ theme }) => theme.colors["base-title"]};
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem;
  }

  strong {
    display: block;
    margin: 0.5rem 0;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  a {
    color: ${({ theme }) => theme.colors["base-button-bg"]};
    line-height: 1.25rem;
    font-size: 1rem;
  }
`;

export const PictureContainer = styled.div`
  background: ${() => `url(${readNewsBgImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right center;
  height: 100vh;
  width: 50vw;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 3.175rem 0;

  div {
    position: relative;
    width: 150%;
    display: flex;

    input {
      width: 80%;
      border-left: 5px solid ${({ theme }) => theme.colors["base-title"]};
      padding: 1rem;
    }

    button {
      background: ${({ theme }) => theme.colors["base-button-bg"]};
      color: ${({ theme }) => theme.colors["base-text"]};
      border: 1px solid ${({ theme }) => theme.colors["base-button-bg"]};
      width: 3rem;
      height: 3rem;

      :hover {
        background: ${({ theme }) => theme.colors["base-button-hover"]};
      }
    }
  }
`;

export const LetMeReadFirstLink = styled.div`
  display: flex;
  align-items: center;
  gap: 0.325rem;

  svg {
    color: ${({ theme }) => theme.colors["base-button-bg"]};
  }
`;
