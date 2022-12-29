import axios from "axios";
import type { Degree } from "./types";

const getDegree = async () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL;
  const url = `${baseUrl}/degrees`;
  const response = await axios.get<Degree[]>(url);
  return response.data;
};

export default getDegree;
