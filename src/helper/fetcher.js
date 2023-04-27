import useSWR from "swr";
import axios from "axios";
import qs from "qs";
const API_URL = "https://api.coingecko.com/api/v3/";

export const fetcher = (url) => axios.get(url, {}).then((res) => res.data);

export const useApi = (endpoint, params) => {
  const queryString = qs.stringify(params);
  const url = `${API_URL}${endpoint}${queryString ? `?${queryString}` : ""}`;
  const response = useSWR([url], fetcher, {
    revalidateOnMount: false,
    shouldRetryOnError: false,
  }); 
  return response;
};
