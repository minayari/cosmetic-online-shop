import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetAllProducts() {
  async function queryFn() {
    const response = await axios.get("https://dummyjson.com/products/category/beauty");
    return response.data;
  }

  return useQuery({
    queryFn,
    queryKey: ["allProducts"],
    retry: 1,
  });
}
