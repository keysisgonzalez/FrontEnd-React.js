import axios from "axios";

const entitiesService = {
    endpoint: "https://api.remotebootcamp.dev/api/entities/movies"
}

entitiesService.getAll = () => {
    const config = {
        method: "GET",
        url: entitiesService.endpoint,
        crossdomain: true,
        withCredentials: true,
        headers: {"Content-Type": "application/json"}
    }

    return axios(config);
}

export default entitiesService;