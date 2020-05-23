import axios from "axios";

class API {
  constructor() {
    this.api = axios.create({
      baseURL: "localhost:8000",
    });
  }

  getHistory = () => {
    return this.api.get("/");
  };

  addToHistory = (title, author, videoId) => {
    return this.api.post("/", {
      title,
      author,
      videoId,
    });
  };
}

const APIservices = new API();

export default APIservices;
