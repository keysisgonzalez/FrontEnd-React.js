import React from "react";

function SoccerPlayersCard(props) {
  const aPlayerObj = props.aPlayerObj;

  return (
    <div
      className="card col-3"
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: "300px",
        margin: "8px",
        border: "1px solid #a15715",
        backgroundColor: "#d99f48",
      }}
    >
      <img
        src={aPlayerObj.imgUrl}
        className="card-img-top"
        alt="friend"
        style={{
          width: "100%",
          height: "320px",
          marginTop: "14px",
          borderRadius: "8px",
          objectFit: "cover",
        }}
      />

      <div className="card-body text-center">
        <h4 className="card-title text-center" style={{ fontWeight: "bold" }}>
          {aPlayerObj.player}
        </h4>
        <h5 className="card-genre text-black" style={{ fontStyle: "italic" }}>
          {aPlayerObj.position}
        </h5>
        <h5 className="card-summary text-center text-black">
          {aPlayerObj.club}
        </h5>
      </div>
    </div>
  );
}

export default SoccerPlayersCard;
