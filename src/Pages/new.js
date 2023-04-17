import useSWR, { mutate } from "swr";
import axios from "axios";
import qs from "qs";
import { useApi } from "@/helper/fetcher";

// usage example
const MyComponent = () => {
  const param = {
    vs_currency: "inr",
    order: "market_cap_desc",
    per_page: 100,
    page: 1,
    sparkline: false,
    locale: "en",
  };
  const { data, error, isLoading, isValidating } = useApi(
    "coins/markets",
    param
  );
  console.log(data, error, isLoading, isValidating);
  mutate(param);

  if (isLoading) return <div>Error fetching data</div>;
  //   if (!data) return <div>Loading data...</div>;

  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default MyComponent;
