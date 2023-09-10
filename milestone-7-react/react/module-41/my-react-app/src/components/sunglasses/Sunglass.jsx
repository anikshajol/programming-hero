import { add, multiply } from "../../utilities/calculate";

export default function Sunglass() {
  const first = 15;
  const second = 15;

  const sum = add(first, second);

  const mul = multiply(first, second);

  return (
    <div>
      <h3>Sunglass</h3>
      {sum}
      <p>
        {" "}
        multiply with {first} & {second}: {mul}
      </p>
    </div>
  );
}
