import "./Country.css";
const Country = ({ country }) => {
  //   console.log(country.flags.png.length);

  const { name, subregion, coatOfArms } = country;

  //   console.log(name);

  return (
    <div className="box">
      <img src={coatOfArms.png} style={{ width: "100px" }} alt="" />
      <h3>Name: {name?.official} </h3>
      <h2>{country?.fifa}</h2>
      <h3>{subregion} </h3>
      <h3> Population: {country.population}</h3>
      <p>Area: {country.area} </p>
    </div>
  );
};

export default Country;
