import React from "react";
import debug from "sabio-debug";
import PropTypes from "prop-types";

function FriendCard(props) {
  //console.log("Friend::", props.friend);
  const _logger = debug.extend("FriendCard");
  const aFriend = props.friend;
  _logger("aFriend", props);

  const onDeleteClicked = (e) => {
    e.preventDefault();
    props.onFriendClicked(props.friend, e);
  };

  const onUpdateClicked = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="card col-md-3"
      style={{
        width: "300px",
        margin: "8px",
        border: "1px solid #b0b0b0",
        backgroundColor: "#9e60f0",
      }}
    >
      <img
        src={aFriend.primaryImageUrl}
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
        <h5 className="card-title">{aFriend.title}</h5>
        <p className="card-text text-black-50">{aFriend.summary}</p>
        <button
          type="button"
          className="link-btn btn btn-dark"
          onClick={onDeleteClicked}
        >
          Delete
        </button>
        <button
          type="button"
          className="link-btn btn btn-light"
          style={{ marginLeft: "10px" }}
          onClick={onUpdateClicked}
        >
          Update
        </button>
      </div>
    </div>
  );
}

FriendCard.propTypes = {
  friend: PropTypes.object.isRequired,
  onFriendClicked: PropTypes.func.isRequired,
};

export default FriendCard;
