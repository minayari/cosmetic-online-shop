import Header1 from "./Header1";
import Header2 from "./Header2";

export default function Layout({ children }) {
  return (
    <>
      <Header1 />
      <Header2 />
      {children}
    </>
  );
}
