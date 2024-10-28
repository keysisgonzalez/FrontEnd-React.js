import React, { useState } from "react";
import friendsService from "../../services/friendsService";
import toastr from "toastr";

function FriendForm() {
  const [friendData, setFriendData] = useState({
    id: "",
    title: "",
    bio: "",
    summary: "",
    headline: "",
    slug: "",
    statusId: "Active",
    primaryImage: "",
    tenantId: "U06C4AUE5AT",
  });

  const onFormChange = (e) => {
    //console.log("onAddFormChange", e);
    const newValue = e.target.value;
    const nameOfField = e.target.name;

    //console.log(newValue);

    setFriendData((prevState) => {
      const newState = { ...prevState };
      newState[nameOfField] = newValue;

      return newState;
    });
  };

  //--------ADDING A FRIEND---------
  const onSubmitClicked = (e) => {
    e.preventDefault();

    console.log("onSubmitClicked Friend ID", friendData.id, friendData);

    if (friendData.id > 0) {
      friendsService
        .updateFriend(friendData.id, friendData)
        .then(onUpdateFriendSuccess)
        .catch(onUpdateFriendError);
    } else {
      friendsService
        .addFriend(friendData)
        .then(onAddFriendSuccess)
        .catch(onAddFriendError);
    }
  };

  const onUpdateFriendSuccess = (response) => {
    console.log("onUpdateFriendSuccess: ", response);
    toastr.success("Your friend has been updated!");
  };

  const onUpdateFriendError = (error) => {
    console.error("onUpdateFriendError: ", error);
    toastr.error("Unable to update friend");
  };

  const onAddFriendSuccess = (response) => {
    console.log("onAddFriendSucces: ", response.data.item);
    toastr.success("You've added a friend!");

    const friendId = response.data.item;

    setFriendData((prevState) => {
      const newState = { ...prevState };

      newState.id = friendId;
      return newState;
    });
  };

  const onAddFriendError = (error) => {
    console.error("onAddFriendError: ", error);
    toastr.error("Adding friend Failed. Please try again.");
  };

  return (
    <React.Fragment>
      <h1>Friend Form</h1>
      <div className="container mt-5 fs-2">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <form>
              <div className="form-group">
                <label htmlFor="title" style={{ fontSize: 20 }}>
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  placeholder="Enter your Name"
                  value={friendData.title}
                  onChange={onFormChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="bio" style={{ fontSize: 20 }}>
                  Bio
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bio"
                  name="bio"
                  placeholder="Enter your bio"
                  value={friendData.bio}
                  onChange={onFormChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="summary" style={{ fontSize: 20 }}>
                  Summary
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="summary"
                  name="summary"
                  placeholder="Enter your summary"
                  value={friendData.summary}
                  onChange={onFormChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="headline" style={{ fontSize: 20 }}>
                  Headline
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="headline"
                  name="headline"
                  placeholder="Enter your headline"
                  value={friendData.headline}
                  onChange={onFormChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="slug" style={{ fontSize: 20 }}>
                  Slug
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="slug"
                  name="slug"
                  placeholder="Enter your slug"
                  value={friendData.slug}
                  onChange={onFormChange}
                />
              </div>

              <div className="form-group d-none">
                <label htmlFor="statusId" style={{ fontSize: 20 }}>
                  Status Id
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="statusId"
                  name="statusId"
                  placeholder="Status"
                  value={friendData.statusId}
                  onChange={onFormChange}
                />
              </div>

              <div className="form-group mt-2">
                <label
                  className="mb-1"
                  htmlFor="primaryImage"
                  style={{ fontSize: 20 }}
                >
                  Image Url
                </label>
                <input
                  type="text"
                  name="primaryImage"
                  className="form-control"
                  id="primaryImage"
                  placeholder="Provide Url to an Image"
                  value={friendData.primaryImage}
                  onChange={onFormChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={onSubmitClicked}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FriendForm;
