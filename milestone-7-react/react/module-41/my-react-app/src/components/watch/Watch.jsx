import "./Watch.css";

const Watch = ({ watch }) => {
  const { name, price } = watch;

  return (
    <div className="box">
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  );
};

export default Watch;
