import styled from 'styled-components';

interface BoxProps {
  color: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  height: 19%;
  width: 100%;
  background: #2d2e2e;

  h1 {
    margin-left: 8%;
    font-weight: normal;
    font-size: 64px;
    line-height: 71px;

    color: #fbfbfb;
  }
`;
export const Body = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;
export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 30%;
  justify-content: center;
  align-items: center;
  padding: 80px;
  background: #0f0f0f;

  button {
    width: 228px;
    height: 71px;
    background: #2d2e2e;
    border-radius: 20px;
    font-weight: normal;
    font-size: 24px;
    line-height: 27px;
    border: 0;
    margin-top: 12%;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 6%;

  div {
    margin: 10px;
    display: flex;
    flex-direction: column;

    strong {
      color: #716969;
      font-weight: normal;
      font-size: 24px;
      line-height: 27px;
    }

    input {
      margin-top: 5px;
      width: 100px;
      height: 30px;

      background: #fbfbfb;
      border-radius: 10px;
      border: 0;
      text-align: center;
      color: #0f0f0f;
      font-weight: normal;
      font-size: 24px;
      line-height: 27px;
    }
  }
`;
export const LastRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  strong {
    color: #716969;
    font-weight: normal;
    font-size: 24px;
    line-height: 27px;
  }
  input {
    margin-top: 5px;
    width: 100px;
    height: 30px;

    background: #fbfbfb;
    border-radius: 10px;
    border: 0;
    text-align: center;
    color: #0f0f0f;
    font-weight: normal;
    font-size: 24px;
    line-height: 27px;
  }
`;
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  background: #0f0f0f;

  span {
    margin-top: 1%;
    font-size: 24px;
    line-height: 27px;
    color: #fbfbfb;
  }
`;

export const Box = styled.div<BoxProps>`
  width: 50%;
  height: 35%;
  background: ${props => props.color};
  border-radius: 30px;

  transition: background 0.1s;
`;
