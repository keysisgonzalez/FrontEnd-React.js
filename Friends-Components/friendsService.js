import axios from "axios";

let friendsService = {
  endpoint: "https://localhost:50001/api/friends",  
};

friendsService.getFriends = (pageIndex, pageSize) => {
  const config = {
    method: "GET",
    url: friendsService.endpoint + `/paginate/?pageIndex=${pageIndex}&pageSize=${pageSize}`,    
    crossdomain: true,
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

friendsService.deleteFriend = (id) => {
  //console.log("Friend Delete ID is executing...", id);
  const config = {
    method: "DELETE",
    url: `${friendsService.endpoint}/${id}`,
    crossdomain: true,
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  };

  console.log("In the middle, axios call");
  return axios(config);
};


friendsService.addFriend = (payload) => {
  //console.log("PAYLOAD", payload);
  const config = {
    method: "POST",
    url: friendsService.endpoint,
    data: payload,
    crossdomain: true,
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config)
};

friendsService.updateFriend = (id, payload) => {
  //console.log("Updating friend by ID is executing...");

  const config = {
    method: "PUT",
    url: `${friendsService.endpoint}/${id}`,
    data: payload,
    crossdomain: true,
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
  // return axios(config).then((response) => {
  //   return { id: id, ...payload };
  // });
}

export default friendsService;
