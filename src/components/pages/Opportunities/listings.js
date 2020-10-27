import axios from "axios";

export default axios.create({
  baseURL: "http://ec2-34-239-125-91.compute-1.amazonaws.com/api",
});
