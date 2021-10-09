import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  min-height: 100vh;
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
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: #6d6875;
  }
`;

export const Button = styled.button`
  background-color: #b5838d;
  color: white;
  border: none;
  font-size: 1.6rem;
  padding: 10px;
  border-radius: 5px;
  margin-top: 4rem;
  cursor: pointer;
`;
