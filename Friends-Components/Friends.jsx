import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import friendsService from "../../services/friendsService";
import Friend from "./FriendCard";

function Friends() {
  const [friendsDataObj, setFriendsDataObj] = useState({
    arrayOfFriends: [],
    friendsComponents: [],
    show: false,
  });

  useEffect(() => {
    console.log("Firing useEffect for getFriends");
    friendsService
      .getFriends(0, 10)
      .then(onGetFriendsSuccess)
      .catch(onGetFriendsError);
  }, []);

  const onGetFriendsSuccess = (response) => {
    console.log("onGetFriendsSuccess: ", response);
    let friendsArray = response.data.item.pagedItems;
    // console.log("friendsArray :", { friendsArray });

    setFriendsDataObj((prevState) => {
      const friendsData = { ...prevState };
      friendsData.arrayOfFriends = friendsArray;
      friendsData.friendsComponents = friendsArray.map(mapFriend);
      return friendsData;
    });
  };

  const onShowFriendsClicked = () => {
    setFriendsDataObj((prevState) => {
      const showFriends = { ...prevState };

      showFriends.show = !showFriends.show;
      return showFriends;
    });
    console.log("onClickShowAll");
  };

  const onGetFriendsError = (error) => {
    console.error("onGetFriendsError :", error);
  };

  //----------DELETING A FRIEND------------
  const onDeleteRequested = useCallback((myFriend, eventObj) => {
    console.log("Click Handler", myFriend.id, { myFriend, eventObj });

    const deleteHandler = getDeleteSuccessHandler(myFriend.id);

    friendsService
      .deleteFriend(myFriend.id)
      .then(deleteHandler)
      .catch(onDeleteError);
  }, []);

  const getDeleteSuccessHandler = (friendIDToBeDeleted) => {
    return () => {
      console.log("onDeleteSuccess ID: ", friendIDToBeDeleted);

      setFriendsDataObj((prevState) => {
        const friendDeleteData = { ...prevState };
        friendDeleteData.arrayOfFriends = [...friendDeleteData.arrayOfFriends];

        const friendIndex = friendDeleteData.arrayOfFriends.findIndex(
          (friend) => {
            let result = false;

            if (friend.id === friendIDToBeDeleted) {
              result = true;
            }

            return result;
          }
        );

        if (friendIndex >= 0) {
          friendDeleteData.arrayOfFriends.splice(friendIndex, 1);

          friendDeleteData.friendsComponents =
            friendDeleteData.arrayOfFriends.map(mapFriend);
        }
        return friendDeleteData;
      });
    };
  };

  const onDeleteError = (error) => {
    console.error("onDeleteError ID:", error);
  };

  const mapFriend = (aFriend) => {
    return (
      <Friend
        friend={aFriend}
        key={"ListA" + aFriend.id}
        onFriendClicked={onDeleteRequested}
      />
    );
  };

  return (
    <React.Fragment>
      <h1 className="text-center">Friends</h1>
      <div className="conatiner text-center">
        <button
          type="button"
          className="link-btn btn btn-info"
          id="show-friends"
          onClick={onShowFriendsClicked}
        >
          Show Friends
        </button>

        <Link
          to="/friends/new"
          type="button"
          className="link-btn btn btn-warning me-2"
          id="add-friend"
          style={{ marginLeft: "10px" }}
        >
          Add Friend
        </Link>

        <div className="row">
          {friendsDataObj.show && friendsDataObj.friendsComponents}{" "}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Friends;
