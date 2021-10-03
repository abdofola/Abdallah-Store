function CardDetails({ header, children, price, openForm }) {
  // console.log('title:', header)
  return (
    <div className="card">
      <div className="card__content">{children}</div>
      <div className="card__footer">
        <span>
          Price: <span className="price">{price}</span>
        </span>
        <button onClick={(e) => openForm(e, {  name: header })}>Request</button>
      </div>
    </div>
  );
}

export default CardDetails;
