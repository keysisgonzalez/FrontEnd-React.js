import React, { useState, useEffect } from "react";
import friendsService from "../../services/friendsService";

function Friends() {
  const [arrayOfFriends] = useState([]);

  const [friendsComponents] = useState([
    {
      id: 87336,
      bio: "Lorem ipsum",
      title: "Tony Stark",
      summary: "Lorem ipsum",
      headline: "friend4",
      entityTypeId: 1,
      statusId: "Active",
      slug: "104",
      skills: null,
      primaryImage: null,
      dateCreated: "2024-02-17T00:26:31.0133333",
      dateModified: "2024-02-17T00:26:31.0133333",
    },
    {
      id: 87329,
      bio: "Lorem ipsum",
      title: "Wanda Maximoff",
      summary: "Lorem ipsum",
      headline: "friend3",
      entityTypeId: 1,
      statusId: "Active",
      slug: "103",
      skills: null,
      primaryImage: {
        id: 68240,
        entityId: 87329,
        imageTypeId: "Main",
        imageUrl:
          "https://r2.erweima.ai/imgcompressed/compressed_87944d060a167bfa261fc584c4344d27.webp",
      },
      dateCreated: "2024-02-17T00:24:23.17",
      dateModified: "2024-02-17T00:24:23.17",
    },
    {
      id: 87313,
      bio: "Lorem ipsum",
      title: "Doctor Strange",
      summary: "Lorem ipsum",
      headline: "friend2",
      entityTypeId: 1,
      statusId: "Active",
      slug: "102",
      skills: null,
      primaryImage: {
        id: 68233,
        entityId: 87313,
        imageTypeId: "Main",
        imageUrl:
          "https://cdn.pixabay.com/photo/2023/03/06/15/37/ai-generated-7833751_960_720.jpg",
      },
      dateCreated: "2024-02-17T00:16:25.85",
      dateModified: "2024-02-17T00:16:25.85",
    },
    {
      id: 87288,
      bio: "Lorem ipsum",
      title: "Jessica Jones",
      summary: "Lorem ipsum",
      headline: "friend",
      entityTypeId: 1,
      statusId: "Active",
      slug: "101",
      skills: null,
      primaryImage: {
        id: 68213,
        entityId: 87288,
        imageTypeId: "Main",
        imageUrl:
          "https://s.yimg.com/ny/api/res/1.2/TYAj9nP3BBDvq4LeV7pjmA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY0MA--/https://media.zenfs.com/en/buzzfeed_articles_778/67c94a7acd7b46e0900ed99951a9c223",
      },
      dateCreated: "2024-02-16T21:09:38.9766667",
      dateModified: "2024-02-16T21:09:38.9766667",
    },
  ]);

  console.log(arrayOfFriends);

  console.log(friendsComponents);

  const mapPerson = (aPerson) => {
    return (
      <div className="col-md-3" key={"ListA" + aPerson.id}>
        {" "}
        {/*giving the "ListA" prefix to make it unique compare to other lists that might be on the page*/}
        <div className="card">
          <img
            src={aPerson.primaryImage.imageUrl}
            className="card-img-top"
            alt="I love Code"
          />
          <div className="card-body">
            <h5 className="card-title">{aPerson.title}</h5>
            <p className="card-text">{aPerson.summary}</p>
            <button className="link-btn btn btn-primary">Go somewhere</button>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    friendsService.getFriends();
  }, []);

  return (
    <React.Fragment>
      <h1>Friends</h1>

      <div className="conatiner">
        <h3>Rendering</h3>
        <div className="row">{friendsComponents.map(mapPerson)}</div>
      </div>
    </React.Fragment>
  );
}
export default Friends;

//------------------------------------------------------

// <div className="col-md-3"
// key={"ListA-" + aFriend.id}> {/*giving the "ListA" prefix to make it unique compare to other lists that might be on the page*/}
// <div className="card">
//   <img
//   src= {aFriend.primaryImage.imageUrl}
//   className="card-img-top"
//   alt="A Friend"/>

//   <div className="card-body">
//     <p className="card-bio">{aFriend.bio}</p>
//     <h3 className="card-title">{aFriend.title}</h3>
//     <h5 className="card-summary text-black-50">{aFriend.summary}</h5>
//     <p className="card-headline">{aFriend.headline}</p>
//     <p className="card-entityTypeId">{aFriend.entityTypeId}</p> {/*????????????*/ }
//     <p className="card-statusId">{aFriend.statusId}</p> {/*????????????*/ }
//     <p className="card-slug">{aFriend.slug}</p>
//     <p className="card-skills">{aFriend.skills}</p> {/*????????????*/ }
//     <button className="link-btn btn btn-primary">Go somewhere</button>
//   </div>
// </div>
// </div>
