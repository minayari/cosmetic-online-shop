import MenuIcon from "@mui/icons-material/Menu";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export default function Header1() {
  return (
    <div className="px-[1rem] py-[1rem]">
      <div className="flex justify-between items-center">
        <div className="bg-gray-400/40 p-[.3rem] rounded-[.5rem]">
          <MenuIcon fontSize="medium" />
        </div>
        <img className="w-[4rem]" src="./img/headIcon.png" alt="icon-page" />
        <button className="bg-gray-400/40 p-[.3rem] rounded-[.5rem]">
          <PersonAddIcon fontSize="medium" />
        </button>
      </div>

      <div className="px-[1rem]">
        <input
          className="w-full bg-gray-400/40 text-[1rem] p-[.5rem] focus:outline-none rounded-[1rem]"
          type="text"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}
