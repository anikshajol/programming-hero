import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [visitedCountries, setVisitedCountries]=useState([])

  const [visitedFlags,setVisitedFlags]=useState([])

  const handleVisitedFlags = (flags)=>{
    console.log(flags);

    const newVisitedFlags = [...visitedFlags,flags]

    setVisitedFlags(newVisitedFlags)

  }

  const handleVisitedCountries =(country)=>{

    const newVisitedCountires = [...visitedCountries,country]
    setVisitedCountries(newVisitedCountires)
  }

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      {/* <h1>{countries.length}</h1> */}

    <h3>Visited Countries {visitedCountries.length} </h3>
    <ul>
      {
        visitedCountries.map(country=><li key={country.cca2}>{country.name.common}</li>)
        
      }
    </ul>
<div>
{
        visitedFlags.map((flag,idx)=><img key={idx} style={{width:'50px'}} src={flag} alt="" />)
      }
</div>
    <div className="grid">
      {countries.map((country) => (
        <Country key={country.cca2} handleVisitedFlags={handleVisitedFlags} handleVisitedCountries={handleVisitedCountries} country={country}></Country>
      ))}
      </div>
    </div>
  );
};

export default Countries;
