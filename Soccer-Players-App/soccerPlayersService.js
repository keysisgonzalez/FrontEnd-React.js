import axios from "axios";

const soccerPlayersService = {
    endpoint: "https://api.remotebootcamp.dev/api/entities/soccerplayers"
}

soccerPlayersService.getAll = () =>{
    const config = {
        method: "GET",
        url: soccerPlayersService.endpoint,
        crossdomain: true,
        withCredentials: true,
        headers: {"Content-Type": "application/json"}
    }

    return axios(config);
}

export default soccerPlayersService;