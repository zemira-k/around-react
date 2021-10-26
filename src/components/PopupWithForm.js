function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__form">
        <button
          onClick={props.onClose}
          aria-label="popup__close"
          className={`popup__close popup__close_type_${props.name}`}
          type="button"
          id="btnClose"
        ></button>
        <form className={`form form_type_${props.name}`} name={props.name}>
          <h2 className="form__header">{props.header}</h2>
          <fieldset className="form__set">
            {props.children}
            <button
              aria-label="submit"
              className={`form__button form__button_type_${props.name} form__button_disabled`}
              type="submit"
              id="submit"
              disabled
              value={props.buttonTitle}
            >
              {props.buttonTitle}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
