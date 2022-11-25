import "./InfoCard.scss";
import React, { useState } from "react";
import ProfileModal from "../ProfileModal/ProfileModal";
import { UilPen } from "@iconscout/react-unicons";
const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div className="edit-info">
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>
      <div className="info">
        <span>
          <b>Status</b>
          &nbsp;
        </span>
        <span>in Relationship</span>
        &nbsp;
      </div>
      <div className="info">
        <span>
          <b>Live in</b>
          &nbsp;
        </span>
        <span>Hanoi</span>
      </div>
      <div className="info">
        <span>
          <b>Works at</b>
          &nbsp;
        </span>
        <span>KMA EDU</span>
      </div>
      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;
