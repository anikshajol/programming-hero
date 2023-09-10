import { useState } from "react";
import "./Country.css";
const Country = ({ country ,handleVisitedCountries,handleVisitedFlags}) => {
  //   console.log(country.flags.png.length);

  const { name, subregion, coatOfArms } = country;

  const [visited,setVisited]=useState(false)

  const handleVisited = ()=>{
    setVisited(!visited)
   
  }



  //   console.log(name);

  return (
    <div className={`box ${visited && 'visited'}`}>
      <img src={coatOfArms.png} style={{ width: "100px" }} alt="" />
      <h3 style={{color: visited?'purple':'black', fontSize:visited?'1.8rem':''}}>Name: {name?.official} </h3>
      <h2>{country?.fifa}</h2>
      <h3>{subregion} </h3>
      <h3> Population: {country.population}</h3>
      <p>Area: {country.area} </p>
      <p>Code:<small>{country.cca2}</small></p>
      <button onClick={handleVisited}>{visited?'Visit':'Going'}</button><br />
     <input onChange={ ()=>handleVisitedCountries(country)} type="checkbox" defaultChecked='' name="mark" id="" /> <label htmlFor="mark">
        Mark as Visited
      </label>
      <p >{visited&&'Yes'}</p>
  
    <button onClick={()=>handleVisitedFlags(country.flags.png)} >Mark Countries Flags</button>
    </div>
  );
};

export default Country;
