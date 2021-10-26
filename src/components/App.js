import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(props) {
    setSelectedCard(props);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page__container">
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <PopupWithForm
        name="add"
        header="New place"
        buttonTitle="create"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="form__input form__input_type_title"
          type="text"
          name="formTitle"
          id="formTitle"
          placeholder="Title"
          minLength="1"
          maxLength="30"
          required
          pattern=".*\S.*"
        />
        <span
          className="form__input-error form__input-error_type_title form__input-error_active"
          id="formTitle-error"
        ></span>
        <input
          className="form__input form__input_type_img-link"
          type="url"
          name="formLink"
          id="formLink"
          placeholder="Image link"
          required
        />
        <span
          className="form__input-error form__input-error_type_img-link form__input-error_active"
          id="formLink-error"
        ></span>
      </PopupWithForm>
      <PopupWithForm
        name="edit"
        header="Edit profile"
        buttonTitle="save"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="form__input form__input_type_name"
          type="text"
          name="formName"
          id="formName"
          minLength="2"
          maxLength="40"
          required
          pattern=".*\S.*"
        />
        <span
          className="form__input-error form__input-error_type_name form__input-error_active"
          id="formName-error"
        ></span>
        <input
          className="form__input form__input_type_about"
          type="text"
          name="formAbout"
          id="formAbout"
          minLength="2"
          maxLength="200"
          required
          pattern=".*\S.*"
        />
        <span
          className="form__input-error form__input-error_type_about form__input-error_active"
          id="formAbout-error"
        ></span>
      </PopupWithForm>
      <PopupWithForm
        name="edit-avatar"
        header="Change profile picture"
        buttonTitle="save"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="form__input form__input_type_link"
          type="url"
          name="avatarImageLink"
          id="avatarImageLink"
          required
        />
        <span
          className="form__input-error form__input-error_type_link form__input-error_active"
          id="avatarImageLink-error"
        ></span>
      </PopupWithForm>
      <PopupWithForm
        name="delete-card"
        header="Are you sure?"
        buttonTitle="Yes"
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      ></PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>

      <Footer />
    </div>
  );
}

export default App;
