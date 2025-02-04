import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <h1 className="Title text-center">Dictionary</h1>
        <h5 className="Subtitle text-center">
          What word do you want to look up?
        </h5>
      </div>
      <div className="container mt-5">
        <Dictionary />
        <footer className="text-center border-top">
          <p className="mt-2">
            This project was coded by{" "}
            <a
              href="https://github.com/AlejandraVe"
              target="_blank"
              rel="noreferrer"
            >
              Alejandra Vera
            </a>{" "}
            and is{" "}
            <a href="https://github.com/AlejandraVe/react-dictionary">
              open-sourced on Github
            </a>{" "}
            and{" "}
            <a href="https://react-dictionary-alevera.netlify.app/">
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
