import "./Bottle.css";
const Bottle = ({ bottle, handleAddToCart }) => {
  //   console.log(bottle);

  return (
    <div className="bottle">
      <h2>{bottle.name}</h2>
      <p>{bottle.capacity}</p>
      <p>{bottle.price}</p>
      <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
    </div>
  );
};

export default Bottle;
