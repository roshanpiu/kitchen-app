import "./App.css";

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
      <img alt="a image abut restaurant" src="https://github.com/roshanpiu.png" height={200}/>
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

const dishes = ["Rice and Curry", "Kottu", "String Hoppers", "Hoppers"];

const dishObject = dishes.map((d, i) => ({id: i, title: d}))

function App() {
  return (
    <div className="App">
      <Header name="Cindy" />
      <Main adjective="amazing" dishes={dishObject} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
