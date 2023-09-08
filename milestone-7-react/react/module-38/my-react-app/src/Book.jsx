import "./book.css";

export default function Book({ book }) {
  return (
    <div className="book">
      <h2>Book Name: {book.name} </h2> <span>:{book.price} </span>
    </div>
  );
}
