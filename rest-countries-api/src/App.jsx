import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Country from "./components/Country";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setCountries(data);
      });
  }, []);

  const [markVisited, setMarkVisited] = useState([]);

  const handleMark =(country)=>{
   console.log(country);
   let newArray = [...markVisited, country];
   setMarkVisited(newArray)
  }

  return (
    <div className="app">
      <h2>Countries quantity: {countries.length}</h2>
      <h3>Visited countries: {markVisited.length}</h3>
      <ul>
        {
         markVisited.map(country => <li key={country.cca3}>{country.name?.common}</li>)
        }
      </ul>
      <div className="countries">
      {countries.map((country) => (
        <Country key={country.cca3} country={country} handleMark={handleMark}></Country>
      ))}
      </div>
    </div>
  );
}

export default App;
