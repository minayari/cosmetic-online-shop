export default function Banners() {
  return (
    <>
      <div className="w-full h-[20rem] px-[1rem] pt-[1rem]">
        <img
          className="w-full h-full object-cover rounded-[1rem]"
          src="./img/welcome1.jpeg"
        />
      </div>

      <div className="grid grid-cols-2 gap-8 py-[2rem] px-[1.5rem]">
        <div className="banners-container">
          <img
            className="banners-items"
            src="./img/skincare1.jpeg"
            alt="skincare"
          />
          <div className="banners__overlay"></div>
          <h2 className="banners-text">Skincare</h2>
        </div>
        <div className="banners-container">
          <img
            className="banners-items"
            src="./img/makeup1.jpeg"
            alt="makeup"
          />
          <div className="banners__overlay"></div>
          <h2 className="banners-text">Makeup</h2>
        </div>
        <div className="banners-container">
          <img
            className="banners-items"
            src="./img/perfume1.jpeg"
            alt="perfume"
          />
          <div className="banners__overlay"></div>
          <h2 className="banners-text">Perfume</h2>
        </div>
        <div className="banners-container">
          <img className="banners-items" src="./img/hair.jpeg" alt="hair" />
          <div className="banners__overlay"></div>
          <h2 className="banners-text">Hair Products</h2>
        </div>
      </div>
    </>
  );
}
