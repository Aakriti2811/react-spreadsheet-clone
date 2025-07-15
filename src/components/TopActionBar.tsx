import { RiArrowRightDoubleLine } from "react-icons/ri";
import {
  Download,
  Upload,
  Share2,
  Plus,
  EyeOff,
  Filter,
  SortAsc,
  Grid
} from 'lucide-react';

export default function TopActionBar() {
  return (
    <div className="flex justify-between border border-[#EEEEEE] items-center px-4 py-2 bg-white">
      {/* Left side actions */}
      <div className="flex items-center text-[#121212] gap-6">
        <div
          className="flex items-center gap-1 cursor-pointer border-r pr-4 border-[#EEEEEE] transition text-[#757575] hover:text-[#121212] active:scale-[0.97]"
          onClick={() => console.log('Toolbar clicked')}
        >
          <span className="font-medium">Tool bar</span>
          <RiArrowRightDoubleLine size={16} />
        </div>

        <div
          className="flex items-center gap-1 cursor-pointer transition text-[#757575] hover:text-[#121212] active:scale-[0.97]"
          onClick={() => console.log('Hide Files clicked')}
        >
          <EyeOff size={16} />
          <span>Hide Files</span>
        </div>

        <div
          className="flex items-center gap-1 cursor-pointer transition text-[#757575] hover:text-[#121212] active:scale-[0.97]"
          onClick={() => console.log('Sort clicked')}
        >
          <SortAsc size={16} />
          <span>Sort</span>
        </div>

        <div
          className="flex items-center gap-1 cursor-pointer transition text-[#757575] hover:text-[#121212] active:scale-[0.97]"
          onClick={() => console.log('Filter clicked')}
        >
          <Filter size={16} />
          <span>Filter</span>
        </div>

        <div
          className="flex items-center gap-1 cursor-pointer transition text-[#757575] hover:text-[#121212] active:scale-[0.97]"
          onClick={() => console.log('Cell View clicked')}
        >
          <Grid size={16} />
          <span>Cell View</span>
        </div>
      </div>

      {/* Right side buttons */}
      <div className="flex items-center text-[#545454] gap-[8px]">
        <button
          className="flex items-center gap-1 border border-[#EEEEEE] px-3 py-[8px] rounded text-sm text-[#333] bg-white hover:bg-[#F7F7F7] active:scale-[0.98] transition"
          onClick={() => console.log('Import clicked')}
        >
          <Download size={14} />
          Import
        </button>

        <button
          className="flex items-center gap-1 border border-[#EEEEEE] px-3 py-[8px] rounded text-sm text-[#333] bg-white hover:bg-[#F7F7F7] active:scale-[0.98] transition"
          onClick={() => console.log('Export clicked')}
        >
          <Upload size={14} />
          Export
        </button>

        <button
          className="flex items-center gap-1 border border-[#EEEEEE] px-3 py-[8px] rounded text-sm text-[#333] bg-white hover:bg-[#F7F7F7] active:scale-[0.98] transition"
          onClick={() => console.log('Share clicked')}
        >
          <Share2 size={14} />
          Share
        </button>

        <button
          className="flex items-center gap-1 bg-[#4B6A4F] text-white px-[24px] py-[8px] rounded-lg text-sm hover:bg-[#3f5942] active:scale-[0.98] transition"
          onClick={() => console.log('New Action clicked')}
        >
          <Plus size={14} />
          New Action
        </button>
      </div>
    </div>
  );
}
