import logo from "./logo.svg";
import "./App.css";
import styled, { css } from "styled-components";

const Wrapper = styled.section`
  padding: 2rem;
  margin: 4 rem;
  background-color: ${({ color }) => (color ? color : "honeydew")};
  ${({ is3D }) =>
    is3D &&
    css`
      background-color: yellow;
      box-shadow: 1rem, 1rem, black;
      border: 2rem solid yellow;
    `};
`;
const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: palevioletred;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wrapper>
          <Title>Hello</Title>
        </Wrapper>
        <Wrapper color={"red"}>
          <Title>Hello</Title>
        </Wrapper>
        <Wrapper is3D={true}>
          <Title>Hello</Title>
        </Wrapper>
      </header>
    </div>
  );
}

export default App;
