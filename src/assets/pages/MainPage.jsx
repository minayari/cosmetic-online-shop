import useGetAllProducts from "../hooks/useGetAllProducts";

export default function MainPage() {
  const { data } = useGetAllProducts();
  console.log(data);

  return (
    <>
      <h1>main page</h1>
    </>
  );
}
