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
  align-items: center;

  margin-top: 5rem;

  > h3 {
    text-align: center;
  }
`;

export const Form = styled.form`
  > input {
    width: 40rem;
    margin-top: 100px;

    border: none;
    border-bottom: 5px solid #b5838d;
    text-align: center;
    font-size: 3rem;
    color: #b5838d;
  }

  > button {
    background-color: #b5838d;
    color: white;
    border: none;
    font-size: 2rem;
    padding: 10px 50px;
    border-radius: 5px;
    margin: 20px;
    cursor: pointer;
  }

  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CityInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 4rem 0;

  > span {
    font-size: 3rem;
    padding: 0.5rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;

  > button {
    background-color: #90be6d;
    color: white;
    border: none;
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 5px;
    margin: 10px;
    cursor: pointer;
  }
`;

export const Playlist = styled.div`
  border-radius: 5px;
  padding: 10px 30px;
  margin: 20px;
  width: 90%;
  height: 30rem;
  transition: all 0.3s ease-out;
  background-color: #eee;
  overflow-y: scroll;
`;

export const MusicCard = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;

  > img {
    margin-right: 6rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: #6d6875;
  }
`;
