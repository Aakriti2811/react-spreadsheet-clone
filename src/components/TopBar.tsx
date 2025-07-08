import type { FC } from "react";
import { IoIosArrowForward} from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import Profile from "../assets/Profile.svg";
import WorkspaceIcon from "../assets/workspace_icon.svg";
import Notification_bell from "../assets/Notification_bell.svg";

const TopBar: FC = () => {
  return (
    <div className="flex justify-between items-center py-[8px] border border-[#EEEEEE]">
      {/* Left: Breadcrumb */}
      <div className="flex text-sm text-gray-500 gap-[16px] ml-[16px]">
        <img src={WorkspaceIcon} alt="icon" className="w-[20px] h-[16px]" />
        <div className="flex gap-[4px] items-center font-med">
         <div className="flex gap-[4px] items-center text-[#AFAFAF]">
           <p>Workspace</p>
          <IoIosArrowForward />
          <p>Folder 2</p>
          <IoIosArrowForward />
         </div>
          <span className="text-[#121212] font-medium">Spreadsheet 3</span>
          <BsThreeDots className="ml-[8px] text-[#AFAFAF]" />
        </div>
      </div>

      <div className="flex gap-2 items-center mr-[16px]">
        <div className="relative bg-[#F6F6F6]">
          <FiSearch size={20} className="absolute text-[#757575] top-[11.5px] left-[12px]" />
          <input
            type="text"
            placeholder="Search within sheet"
            className="border rounded-[5px] border-[#E2E2E2] text-[#757575] pl-[42px] py-[12px] text-sm "
          />
        </div>

        
        <div className="flex items-center gap-[8px]  py-1 cursor-pointer">
          <img src={Notification_bell} alt="notification_bell" className="w-[40px] h-[40px]" onClick={() => console.log('Notification bell clicked')}/>
          <img src={Profile} alt="Image" className="w-[32px] h-[32px]" onClick={() => console.log('Profile photo opened')}/>
          <div className="ml-[6px] flex flex-col gap-0" onClick={() => console.log('Profile Section viewed')}>
            <span className="text-sm font-medium mr-1">John Doe</span>
            <span className="text-[#757575] text-xs">john.doe..</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
