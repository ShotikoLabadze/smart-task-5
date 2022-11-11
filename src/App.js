import "./App.css";
import styled from "styled-components";
import Youtube from "./components/Youtube";
import logo from "./assets/logo.jpg";

function App() {
  const Title = styled.h1`
    font-size: 1.2em;
    width: 100%;
    height: 20px;
    color: white;
  `;
  const About = styled.div`
    width: 100%;
    background: #272727;
    border-radius: 25px;
    margintop: 10px;
    color: white;
    padding: 1px 5px;
  `;
  return (
    <div className="App">
      <Youtube videoId="n4RjJKxsamQ" />
      <Title>Scorpions - Wind Of Change (Official Music Video)</Title>
      <div className="row">
        <div className="owner">
          <div className="logo">
            <img src={logo} />
          </div>
        </div>
      </div>
      <About>
        <h4>983,128,108 views Nov 1, 2009</h4>
        <p>
          REMASTERED IN HD! Official Music Video for Wind Of Change performed by
          Scorpions.
        </p>
      </About>
    </div>
  );
}

export default App;
