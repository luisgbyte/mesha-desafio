import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  min-height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 4rem;
`;

export const Card = styled.div`
  border-radius: 5px;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  padding: 30px;
  margin: 20px;
  width: 90%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  > p {
    margin: 0.5rem 0;
    font-size: 1.8rem;
  }

  > span {
    padding: 0 10px;

    &:hover {
      color: #a37774;
    }
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    /* align-items: center; */

    > span {
      padding-top: 2rem;
    }
  }
`;
