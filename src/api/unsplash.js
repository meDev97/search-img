import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID e6rV63Fb6gpK4tZV1No_vwIpG3rtyRPyfTVe7W51_Os",
  },
});
