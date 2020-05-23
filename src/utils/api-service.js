import axios from "axios";

class API {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:8000",
      withCredentials: true,
    });
  }

  getHistory = () => {
    return this.api.get("history");
  };

  addToHistory = (title, author, videoId) => {
    return this.api.post("history", {
      title,
      author,
      videoId,
    });
  };
}

const APIservices = new API();

export default APIservices;
