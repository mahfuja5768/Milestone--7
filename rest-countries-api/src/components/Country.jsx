import { useState } from 'react';
import '../App.css'

const Country = ({ country, handleMark }) => {
//   console.log(country);
  const { name, region, independent, flags, capital, ccn3, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited =()=>{
    setVisited(!visited)
  }


  return (
    <div className={`country ${visited && 'visit'}`}>
      <h2>Name: {name?.common}</h2>
      <img style={{ width: "150px", height: "100px" }} src={flags.png} alt="" />
      <p>Capital: {capital}</p>
      <p>Region: {region}</p>
      <p>Code: {cca3}</p>
      <p>Is Independent: {independent === true ? "Yes" : "No"}</p>
      {visited ? 'Visited' : 'I will visit'} <br /> <br />
      <div className='btns'>
      <button onClick={handleVisited}>Visited</button>
      <button onClick={()=> handleMark(country)}>Mark visited</button>
      </div>
    </div>
  );
};

export default Country;
