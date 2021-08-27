function Grid(props) {
  const cards = props.cards.map((card) => (
    <div className="products__card">
      <div className="products__img ">
        <img src={card.src} alt="product img"/>
      </div>
      <div className="products__text">
        <h3>{card.title}</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          excepturi totam ducimus, nemo tenetur, quibusdam accusamus neque
          deserunt aliquid perferendis.
        </p>
      </div>
      <div className="products__btn">
        <button type="submit">Detials</button>
      </div>
    </div>
  ));

  return <div className="products">{cards}</div>;
}

export default Grid;
