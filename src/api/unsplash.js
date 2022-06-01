import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID bv5W3rAqdE-1y6WrwvPIR_aNRGdi443SSSSHwuBoqWo",
  },
});
