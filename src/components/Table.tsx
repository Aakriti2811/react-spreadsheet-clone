import React, { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  type ColumnDef,
} from '@tanstack/react-table';

import { FiBriefcase, FiCalendar, FiUser, FiLink, FiDollarSign } from 'react-icons/fi';
import Link_icon from "../assets/Link_icon.svg";
import Arrow_sync from "../assets/Arrow_sync.svg";
import Arrow_split from "../assets/Arrow_split.svg";
import { BsThreeDots } from 'react-icons/bs';
import Arrow_split_white from "../assets/Arrow_split_white.svg";

type StatusType = 'In-process' | 'Need to start' | 'Complete' | 'Blocked' | '';
type PriorityType = 'High' | 'Medium' | 'Low' | '';

interface Task {
  job: string;
  submitted: string;
  status: StatusType;
  submitter: string;
  url: string;
  assigned: string;
  priority: PriorityType;
  dueDate: string;
  value: string;
}

const data: Task[] = [
  {
    job: 'Launch social media campaign for product Launch social media campaign for product',
    submitted: '15-11-2024',
    status: 'In-process',
    submitter: 'Aisha Patel',
    url: 'www.aishapatel...',
    assigned: 'Sophie Choudhury',
    priority: 'Medium',
    dueDate: '20-11-2024',
    value: '6,200,000 ₹',
  },
  {
    job: 'Update press kit for company redesign',
    submitted: '28-10-2024',
    status: 'Need to start',
    submitter: 'Irfan Khan',
    url: 'www.irfankhan...',
    assigned: 'Tejas Pandey',
    priority: 'High',
    dueDate: '30-10-2024',
    value: '3,500,000 ₹',
  },
  {
    job: 'Finalize user testing feedback for app',
    submitted: '05-12-2024',
    status: 'In-process',
    submitter: 'Mark Johnson',
    url: 'www.markjohnson...',
    assigned: 'Rachel Lee',
    priority: 'Medium',
    dueDate: '10-12-2024',
    value: '4,750,000 ₹',
  },
  {
    job: 'Design new features for the website',
    submitted: '10-01-2025',
    status: 'Complete',
    submitter: 'Emily Green',
    url: 'www.emilygreen...',
    assigned: 'Tom Wright',
    priority: 'Low',
    dueDate: '15-01-2025',
    value: '5,900,000 ₹',
  },
  {
    job: 'Prepare financial report for Q4',
    submitted: '25-01-2025',
    status: 'Blocked',
    submitter: 'Jessica Brown',
    url: 'www.jessicabrown...',
    assigned: 'Kevin Smith',
    priority: 'Low',
    dueDate: '30-01-2025',
    value: '2,800,000 ₹',
  },
];

export default function TaskTable() {
  const MIN_ROWS = 20;

  const [selectedCell, setSelectedCell] = useState<{ row: number; col: string | number } | null>(null);
  const [columnSizing, setColumnSizing] = useState({});

  const columns: ColumnDef<Task>[] = [
    { accessorKey: 'job', header: 'Job Request', maxSize: 300, size: 280, meta: { align: 'text-left', icon: <FiBriefcase /> } },
    { accessorKey: 'submitted', header: 'Submitted', size: 140, meta: { align: 'text-right', icon: <FiCalendar /> } },
    {
      accessorKey: 'status',
      header: 'Status',
      size: 140,
      meta: { align: 'text-center' },
      cell: ({ row }) => {
        const status = row.original.status;
        let bgColor = '';
        let textColor = '';

        switch (status) {
          case 'In-process': bgColor = 'bg-[#FFF3D6]'; textColor = 'text-[#9F6500]'; break;
          case 'Need to start': bgColor = 'bg-[#E2E8F0]'; textColor = 'text-[#334155]'; break;
          case 'Complete': bgColor = 'bg-[#D3F2E3]'; textColor = 'text-[#027A48]'; break;
          case 'Blocked': bgColor = 'bg-[#FFE1DE]'; textColor = 'text-[#B42318]'; break;
          default: bgColor = ''; textColor = 'text-black';
        }

        return (
          <span className={`px-[10px] py-[6px] rounded-[15px] ${bgColor} ${textColor} text-[14px] font-medium`}>
            {status}
          </span>
        );
      },
    },
    { accessorKey: 'submitter', header: 'Submitter', size: 140, meta: { align: 'text-left', icon: <FiUser /> } },
    {
      accessorKey: 'url',
      header: 'URL',
      size: 140,
      maxSize: 140,
      meta: { align: 'text-left', icon: <FiLink /> },
      cell: ({ row }) => (
        <a href={`https://${row.original.url}`} className="underline" target="_blank" rel="noopener noreferrer">
          {row.original.url}
        </a>
      ),
    },
    { accessorKey: 'assigned', header: 'Assigned', size: 140, meta: { align: 'text-left', icon: <FiUser />, headerBgColor: 'bg-[#E8F0E9]', textColor: 'text-[#666C66]' } },
    {
      accessorKey: 'priority',
      header: 'Priority',
      size: 120,
      meta: { align: 'text-center', headerBgColor: 'bg-[#EAE3FC]', textColor: 'text-[#655C80]' },
      cell: ({ row }) => {
        const priority = row.original.priority;
        let textColor = '';
        switch (priority) {
          case 'High': textColor = 'text-[#EF4D44]'; break;
          case 'Medium': textColor = 'text-[#C29210]'; break;
          case 'Low': textColor = 'text-[#1A8CFF]'; break;
          default: textColor = '';
        }
        return <span className={`${textColor} font-semibold`}>{priority}</span>;
      },
    },
    { accessorKey: 'dueDate', header: 'Due Date', size: 140, meta: { align: 'text-right', icon: <FiCalendar />, headerBgColor: 'bg-[#EAE3FC]', textColor: 'text-[#655C80]' } },
    { accessorKey: 'value', header: 'Est. Value', size: 140, meta: { align: 'text-right', icon: <FiDollarSign />, headerBgColor: 'bg-[#FFE9E0]', textColor: 'text-[#8C6C62]' } },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    enableColumnResizing: true,
    columnResizeMode: 'onChange',
    state: { columnSizing },
    onColumnSizingChange: setColumnSizing,
  });

  return (
    <div className="flex flex-col min-h-screen">
      <div className="overflow-x-auto flex-1">
        <table className="min-w-full table-fixed border border-gray-300 border-collapse">
          <thead>
            <tr>
              <th className="bg-white border border-gray-300 p-3" />
              <th colSpan={4} className="bg-[#E2E2E2] text-left p-2">
                <div className="flex gap-[8px]">
                  <div contentEditable className="flex gap-[8px] text-[#545454] font-normal p-[4px] outline-0 rounded-lg bg-[#EEEEEE] w-[220px]">
                    <img src={Link_icon} alt="url" className="w-[20px]" onClick={() => console.log('Link clicked')} />
                    Q3 Financial Overview
                  </div>
                  <img src={Arrow_sync} alt="sync" className="w-5 cursor-pointer" onClick={() => console.log('Data Synced')} />
                </div>
              </th>
              <th className="bg-white p-3" />
              <th className="bg-[#D2E0D4] text-[#505450] border border-white p-3 text-center">
                <div className="flex text-[#505450] items-center gap-[6px]">
                  <img src={Arrow_split} alt="split" className="w-[23px]" />
                  ABC
                  <BsThreeDots className="text-[#AFAFAF]" />
                </div>
              </th>
              <th colSpan={2} className="bg-[#DCCFFC] text-[#463E59] border border-white p-3 text-center">
                <div className="flex items-center text-[#463E59] gap-[6px]">
                  <img src={Arrow_split_white} alt="split" className="w-[23px]" />
                  Answer a question
                  <BsThreeDots className="text-[#AFAFAF]" />
                </div>
              </th>
              <th className="bg-[#FAC2AF] text-[#463e59] border border-white p-3 text-center">
                <div className="flex items-center text-[#695149] gap-[6px]">
                  <img src={Arrow_split_white} alt="split" className="w-[23px]" />
                  Extract
                  <BsThreeDots className="text-[#AFAFAF]" />
                </div>
              </th>
              <th className="bg-[#EEEEEE] text-2xl w-[140px] border border-gray-300 font-thin text-center">+</th>
            </tr>
            <tr>
              <th className="p-3 border border-gray-300 text-center text-[#AFAFAF] text-xl w-[32px] bg-[#EEEEEE]">#</th>
              {table.getHeaderGroups()[0].headers.map((header) => {
                const meta = header.column.columnDef.meta || {};
                return (
                  <th
                    key={header.id}
                    className={`pt-3 pb-3 pl-3 border border-gray-300 font-semibold relative ${meta.align || 'text-left'} ${meta.headerBgColor || 'bg-[#EEEEEE]'} ${meta.textColor || 'text-[#757575]'}`}
                    style={{ width: header.getSize(), maxWidth: header.column.columnDef.maxSize }}
                  >
                    <div className="relative flex items-center gap-1 select-none">
                      {meta.icon}
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      <div
                        onMouseDown={header.getResizeHandler()}
                        onTouchStart={header.getResizeHandler()}
                        className={`absolute right-0 top-0 h-full w-1 cursor-col-resize select-none touch-none ${header.column.getIsResizing() ? 'bg-gray-500' : 'hover:bg-gray-400'}`}
                      />
                    </div>
                  </th>
                );
              })}
              <th className="p-3 border border-gray-300 text-left font-semibold w-12 bg-[#EEEEEE]">+</th>
            </tr>
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row, rowIndex) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="p-3 border text-[#757575] border-gray-300 w-[48px] text-center">{rowIndex + 1}</td>
                {row.getVisibleCells().map((cell) => {
                  const meta = cell.column.columnDef.meta || {};
                  return (
                    <td
                      key={cell.id}
                      className={`truncate p-3 border cursor-pointer ${meta.align || 'text-left'} ${selectedCell?.row === rowIndex && selectedCell?.col === cell.column.id ? 'outline-2 outline-[#6C8B70]' : 'border-gray-300'}`}
                      style={{ width: cell.column.getSize(), maxWidth: cell.column.columnDef.maxSize }}
                      onClick={() => setSelectedCell({ row: rowIndex, col: cell.column.id })}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  );
                })}
                <td className="p-3 border border-gray-300 cursor-pointer w-[48px]" />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}