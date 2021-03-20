import "./App.css";
import React, { useState, useEffect } from "react";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <img
        alt="a image abut restaurant"
        src="https://github.com/roshanpiu.png"
        height={200}
      />
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((d) => (
          <li key={d.id}>{d.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

function SetName(props) {
  const { setName, initialName } = props;
  const [inputVal, setInputVal] = useState("");
  return (
    <div>
      <input
        value={inputVal}
        onChange={(val) => setInputVal(inputVal + val.nativeEvent.data)}
        type="text"
      ></input>
      <button onClick={() => setName(inputVal)}>set name</button>
      <button
        onClick={() => {
          setName(initialName);
          setInputVal("");
        }}
      >
        reset
      </button>
    </div>
  );
}

const dishes = ["Rice and Curry", "Kottu", "String Hoppers", "Hoppers"];

const dishObject = dishes.map((d, i) => ({ id: i, title: d }));

function App() {
  const initialName = "Cindy";
  const [name, setName] = useState(initialName);

  useEffect(() => {
    console.log(`It's ${name}'s Kitchen`);
  }, [name]);
  return (
    <div className="App">
      <Header name={name} />
      <Main adjective="amazing" dishes={dishObject} />
      <Footer year={new Date().getFullYear()} />
      <SetName setName={setName} initialName={initialName} />
    </div>
  );
}

export default App;
