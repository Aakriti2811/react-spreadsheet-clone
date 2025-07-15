import type { FC } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import Profile from "../assets/Profile.svg";
import WorkspaceIcon from "../assets/workspace_icon.svg";
import Notification_bell from "../assets/Notification_bell.svg";

const TopBar: FC = () => {
  return (
    <div className="flex justify-between items-center py-[8px] border border-[#EEEEEE] bg-white">
      {/* Left: Breadcrumb */}
      <div className="flex text-sm text-gray-500 gap-[16px] ml-[16px]">
        <img src={WorkspaceIcon} alt="icon" className="w-[20px] h-[16px]" />

        <div className="flex gap-[4px] items-center font-medium">
          <div className="flex gap-[4px] items-center text-[#AFAFAF]">
            <p className="hover:text-[#666] transition-colors cursor-pointer">Workspace</p>
            <IoIosArrowForward />
            <p className="hover:text-[#666] transition-colors cursor-pointer">Folder 2</p>
            <IoIosArrowForward />
          </div>
          <span className="text-[#121212] hover:text-[#333] cursor-pointer transition font-medium">
            Spreadsheet 3
          </span>
          <BsThreeDots
            className="ml-[8px] text-[#AFAFAF] hover:text-[#333] cursor-pointer transition"
            onClick={() => console.log("More menu opened")}
          />
        </div>
      </div>

      {/* Right: Search + User Info */}
      <div className="flex gap-2 items-center mr-[16px]">
        {/* Search Box */}
        <div className="relative group bg-[#F6F6F6] rounded-[5px] border border-[#E2E2E2] focus-within:ring-2 focus-within:ring-blue-300 transition">
          <FiSearch size={20} className="absolute text-[#757575] top-[11.5px] left-[12px]" />
          <input
            type="text"
            placeholder="Search within sheet"
            className="rounded-[5px] pl-[42px] pr-[12px] py-[12px] text-sm text-[#757575] bg-[#F6F6F6] placeholder:text-[#AFAFAF] outline-none w-[220px] focus:bg-white transition"
          />
        </div>

        {/* Profile + Notifications */}
        <div className="flex items-center gap-[8px] py-1 cursor-pointer group">
          <img
            src={Notification_bell}
            alt="notification_bell"
            className="w-[40px] h-[40px] hover:bg-[#F0F0F0] transition"
            onClick={() => console.log("Notification bell clicked")}
          />

          <img
            src={Profile}
            alt="User"
            className="w-[32px] h-[32px] rounded-full hover:ring-2 hover:ring-blue-300 transition"
            onClick={() => console.log("Profile photo opened")}
          />

          <div
            className="ml-[6px] flex flex-col gap-0 hover:underline"
            onClick={() => console.log("Profile Section viewed")}
          >
            <span className="text-sm font-medium text-[#121212] group-hover:text-[#333]">John Doe</span>
            <span className="text-[#757575] text-xs group-hover:text-[#555]">john.doe..</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
