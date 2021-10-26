import api from "../utils/api";
import React from "react";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err));
  }, []);

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(...cards, res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div
          className="profile__avatar"
          style={{ backgroundImage: `url(${userAvatar})` }}
        >
          <button
            onClick={props.onEditAvatarClick}
            aria-label="profile__editbutton"
            className="profile__editbutton profile__editbutton_type_avatar"
            type="button"
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__caption">
            <h1 className="profile__name" id="name">
              {userName}
            </h1>
            <button
              onClick={props.onEditProfileClick}
              aria-label="profile__editbutton"
              className="profile__editbutton profile__editbutton_type_data"
              type="button"
              id="btnOpen"
            ></button>
          </div>
          <p className="profile__task" id="task">
            {userDescription}
          </p>
        </div>
        <button
          onClick={props.onAddPlaceClick}
          aria-label="add-pic"
          className="profile__big-rectangle"
          type="button"
        ></button>
      </section>

      <section className="elements">
        {cards.map((cardEl) => (
          <Card
            key={cardEl._id}
            card={cardEl}
            onCardClick={props.onCardClick}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
