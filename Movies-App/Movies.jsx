import React, { useState, useEffect } from "react";
import entitiesService from "./moviesService";
import MoviesCard from "./MoviesCard";

function Movies() {
  const [moviesData, setMoviesData] = useState({
    data: [],
    component: [],
    search: "",
  });

  //----Search bar handling----
  const onSearchFieldChanged = (e) => {
    e.preventDefault();

    const newValue = e.target.value;
    console.log(newValue);

    setMoviesData((prevState) => {
      const newState = { ...prevState };
      newState.search = newValue;
      return newState;
    });
  };

  const onSearchBtnClicked = (e) => {
    e.preventDefault();

    const filterMovieName = (aMovieName) => {
      const movieName = aMovieName.name.toLowerCase();
      const searchValue = moviesData.search.toLowerCase();
      return movieName.includes(searchValue);
    };

    setMoviesData((prevState) => {
      const newState = { ...prevState };

      const newArrayFiltered = newState.data.filter(filterMovieName);
      newState.component = newArrayFiltered.map(mapMovie);

      console.log("newArrayFiltered", newArrayFiltered);
      return newState;
    });
  };

  useEffect(() => {
    entitiesService
      .getAll()
      .then(onGetAllEntititesSuccess)
      .catch(onGetAllEntititesError);
  }, []);

  const onGetAllEntititesSuccess = (response) => {
    console.log("onGetAllEntititesSuccess: ", response);

    setMoviesData((prevState) => {
      const newState = { ...prevState };
      newState.data = response.data.items;
      newState.component = response.data.items.map(mapMovie);

      return newState;
    });
  };

  const onGetAllEntititesError = (error) => {
    console.error("onGetAllEntititesError: ", error);
  };

  const mapMovie = (aMovieObj) => {
    return <MoviesCard aMovieObj={aMovieObj} key={aMovieObj.id}></MoviesCard>;
  };

  const onBtnFilterClicked = (e) => {
    const genreToCheck = e.target.id;
    console.log("ID", genreToCheck);

    const filterGenre = (aMovieObj) => {
      const movieGenre = aMovieObj.genre.toLowerCase();
      return movieGenre.includes(genreToCheck);
    };

    setMoviesData((prevState) => {
      const newState = { ...prevState };
      const newArrayFiltered = newState.data.filter(filterGenre);
      newState.component = newArrayFiltered.map(mapMovie);

      return newState;
    });
  };

  return (
    <>
      <div className="row">
        <h1 className="text-center">Movies Coming Up!</h1>
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
                value={moviesData.search}
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

          <button
            id="action"
            type="button"
            onClick={onBtnFilterClicked}
            className="btn btn-dark me-2"
          >
            Action
          </button>
          <button
            id="thriller"
            type="button"
            onClick={onBtnFilterClicked}
            className="btn btn-dark me-2"
          >
            Thriller
          </button>
          <button
            id="adventure"
            type="button"
            onClick={onBtnFilterClicked}
            className="btn btn-dark me-2"
          >
            Adventure
          </button>
          <button
            id="sci-fi"
            type="button"
            onClick={onBtnFilterClicked}
            className="btn btn-dark me-2"
          >
            Sci-fi
          </button>
          <button
            id="suspense"
            type="button"
            onClick={onBtnFilterClicked}
            className="btn btn-dark me-2"
          >
            Suspense
          </button>
          <button
            id="mystery"
            type="button"
            onClick={onBtnFilterClicked}
            className="btn btn-dark me-2"
          >
            Mystery
          </button>
        </div>
        <div
          className="row "
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#013750",
          }}
        >
          {moviesData.component}
        </div>
      </div>
    </>
  );
}

export default Movies;
