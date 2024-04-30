import React from "react";

function MoviesCard(props) {
  const aMovieObj = props.aMovieObj;

  return (
    <div
      className="card col-3"
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: "300px",
        margin: "8px",
        border: "1px solid #a15715",
        backgroundColor: "#f58723",
      }}
    >
      <img
        src={aMovieObj.imgUrl}
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
        <h5 className="card-title text-center">{aMovieObj.name}</h5>
        <p className="card-genre text-black">{aMovieObj.genre}</p>
        <p className="card-summary text-center text-black">
          {aMovieObj.summary}
        </p>
      </div>
    </div>
  );
}

export default MoviesCard;
