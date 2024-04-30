import React, { useState, useEffect } from "react";
import soccerPlayersService from "./soccerPlayersService.js";
import SoccerPlayersCard from "./SoccerPlayersCard";

function SoccerPlayers() {
  const [playersData, setPlayersData] = useState({
    data: [],
    components: [],
    search: "",
  });

  const onSearchFieldChanged = (e) => {
    e.preventDefault();
    const newValue = e.target.value;
    console.log(newValue);

    setPlayersData((prevState) => {
      const newState = { ...prevState };
      newState.search = newValue;

      return newState;
    });
  };

  const onSearchBtnClicked = (e) => {
    e.preventDefault();

    const filterPosition = (aPosition) => {
      const position = aPosition.position.toLowerCase();
      const player = aPosition.player.toLowerCase();
      const searchValue = playersData.search.toLowerCase();

      return position.includes(searchValue) || player.includes(searchValue);
    };

    setPlayersData((prevState) => {
      const newState = { ...prevState };
      const newArrayFiltered = newState.data.filter(filterPosition);
      newState.components = newArrayFiltered.map(mapPlayer);
      return newState;
    });
  };

  useEffect(() => {
    soccerPlayersService
      .getAll()
      .then(onSoccerPlayersServiceSuccess)
      .catch(onSoccerPlayersServiceError);
  }, []);

  const onSoccerPlayersServiceSuccess = (response) => {
    console.log("onSoccerPlayersServiceSuccess: ", response);

    setPlayersData((prevState) => {
      const newState = { ...prevState };
      newState.data = response.data.items;

      newState.components = response.data.items.map(mapPlayer);
      return newState;
    });
  };

  const onSoccerPlayersServiceError = (response) => {
    console.log("onSoccerPlayersServiceError: ", response);
  };

  const mapPlayer = (aPlayerObj) => {
    return (
      <SoccerPlayersCard
        aPlayerObj={aPlayerObj}
        key={aPlayerObj.id}
      ></SoccerPlayersCard>
    );
  };

  const onBtnFilterClicked = (e) => {
    const clubToCheck = e.target.id;
    console.log("CLUB: ", clubToCheck);

    const filterPlayer = (aPlayerObj) => {
      const playerClub = aPlayerObj.club.toLowerCase();
      return playerClub.includes(clubToCheck);
    };

    setPlayersData((prevState) => {
      const newState = { ...prevState };
      const newArrayFiltered = newState.data.filter(filterPlayer);
      newState.components = newArrayFiltered.map(mapPlayer);

      return newState;
    });
  };

  return (
    <>
      <div className="row">
        <h1 className="text-center">BEST SOCCER PLAYERS 2024</h1>
        <div className="container text-center mb-2">
          <form className="mt-2 mb-2" stype={{ flex: 1, maxWidth: 100 }}>
            <div className="form-group">
              <label>Search</label>
              <input
                type="text"
                className="form-control"
                id="search"
                placeholder="Search"
                name="search"
                value={playersData.search}
                onChange={onSearchFieldChanged}
              />
            </div>

            <button
              type="button"
              className="btn btn-dark mt-1 mb-2"
              onClick={onSearchBtnClicked}
            >
              Enter
            </button>
          </form>

          <div className="row bg-info"></div>
          <button
            id="liverpool"
            type="button"
            onClick={onBtnFilterClicked}
            className="btn btn-danger me-2"
            style={{ backgroundColor: "#FF0000", fontWeight: "bold" }}
          >
            Liverpool F.C.
          </button>
          <button
            id="manchester"
            type="button"
            onClick={onBtnFilterClicked}
            className="btn btn-info me-2"
            style={{ backgroundColor: "#7acaff", fontWeight: "bold" }}
          >
            Manchester City F.C.
          </button>
          <button
            id="paris"
            type="button"
            style={{ backgroundColor: "#1f267a", fontWeight: "bold" }}
            onClick={onBtnFilterClicked}
            className="btn btn-dark me-2"
          >
            Paris Saint-Germain F.C.
          </button>
        </div>
        <div
          className="row "
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#1c2061",
          }}
        >
          {playersData.components}
        </div>
      </div>
    </>
  );
}

export default SoccerPlayers;
