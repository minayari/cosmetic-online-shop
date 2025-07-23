import Banners from "../components/Banners";
import useGetAllProducts from "../hooks/useGetAllProducts";

export default function MainPage() {
  const { data } = useGetAllProducts();
  console.log(data);

  return (
    <>
      <Banners />
      <h1>main page</h1>
    </>
  );
}
