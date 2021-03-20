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

function GitHubUsers({ login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  if(loading) {
    return <h1>Loading....</h1>
  }

  if(error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>
  }

  if (data) {
    return (
      <div>
        <h3>{data.name}</h3>
        <p>{data.location}</p>
      </div>
    );
  }
  return <div>No Data Available</div>;
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
      <GitHubUsers login="roshanpiu" />
    </div>
  );
}

export default App;
