import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./components/Filter/Filter";
import Location from "./components/Location/Location";
import Logo from "./components/Logo/Logo";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import Price from "./components/Price/Price";

function App() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.itbook.store/1.0/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div className="App">
      <div style={{ width: "20%" }}>
        <Logo />
        <Filter />
        <Location />
        <Price />
      </div>
      <div style={{ width: "80%", padding: "2em" }}>
        <Nav />
        <Main />
      </div>
    </div>
  );
}

export default App;
