import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Friends from "./components/friends/Friends";
import FriendForm from "./components/friends/FriendForm";
import SiteNav from "./components/SiteNav";
import Events from "./components/events/Events";
import Register from "./components/user/Register";
import LogIn from "./components/user/LogIn";
import Footer from "./components/Footer";
import NewLogIn from "./components/user/NewLogin";
import Movies from "./components/movies/Movies";
import Players from "./components/players/Players.jsx";
import debug from "sabio-debug";

const _logger = debug.extend("App");
function App() {
  const [currentUser] = useState({
    firstName: "",
    isLoggedIn: false,
    lastName: "",
  });

  function submitBtnCLiked() {
    console.log("Clicking");
  }

  _logger("Something important somewhere in a function within your component");

  return (
    <React.Fragment>
      <SiteNav user={currentUser}></SiteNav>
      {/*Allows to change the url */}

      <div className="container ">
        <Routes>
          <Route path="/" element={<Home user={currentUser} />}></Route>
          <Route path="/friends" element={<Friends />}></Route>
          <Route path="/friends/new" element={<FriendForm />}></Route>
          <Route path="/jobs" element={<Jobs />}></Route>
          <Route path="/companies" element={<Companies />}></Route>
          <Route
            path="/events"
            element={<Events buttonClicked={submitBtnCLiked} />}
          ></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/newlogin" element={<NewLogIn />}></Route>
          <Route path="/emailform2" element={<EmailForm2 />}></Route>
          <Route path="/actors" element={<Actors />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/soccerplayers" element={<SoccerPlayers />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/players" element={<Players />}></Route>
          <Route path="/tictactoe" element={<Tictactoe />}></Route>
          <Route path="/showtime" element={<Showtime />}></Route>
          <Route path="/cars" element={<Cars />}></Route>
          <Route path="/animals" element={<Animals />}></Route>
        </Routes>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
