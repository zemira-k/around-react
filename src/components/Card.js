function Card(props) {
  //   function handleClick() {
  //     props.onCardClick(props.card);
  //   }
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="element">
      <button
        onClick={handleClick}
        className="element__btn element__btn_type_image"
        type="button"
      >
        <img
          className="element__item"
          style={{ backgroundImage: `url(${props.card.link})` }}
        />
      </button>
      <button
        className="element__btn element__btn_type_trash"
        type="button"
      ></button>
      <div className="element__name">
        <h2 className="element__name-text">{props.card.name}</h2>
        <div className="element__name-like">
          <button className="element__name-heart" type="button"></button>
          <span className="element__name-number">
            {props.card.likes.length}
          </span>
        </div>
      </div>
    </article>
  );
}

export default Card;
