import React, { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  type ColumnDef,
} from '@tanstack/react-table';

import { FiBriefcase, FiCalendar, FiUser, FiLink, FiDollarSign } from 'react-icons/fi';


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

interface CustomMeta {
  align?: string;
  icon?: React.ReactNode;
  headerBgColor?: string;
  textColor?: string;
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

  const columns: ColumnDef<Task, unknown>[] = [
    {
      accessorKey: 'job',
      header: 'Job Request',
      maxSize: 300,
      size: 280,
      meta: { align: 'text-left', icon: <FiBriefcase /> } as CustomMeta,
    },
    {
      accessorKey: 'submitted',
      header: 'Submitted',
      size: 140,
      meta: { align: 'text-right', icon: <FiCalendar /> } as CustomMeta,
    },
    {
      accessorKey: 'status',
      header: 'Status',
      size: 140,
      meta: { align: 'text-center' } as CustomMeta,
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
    {
      accessorKey: 'submitter',
      header: 'Submitter',
      size: 140,
      meta: { align: 'text-left', icon: <FiUser /> } as CustomMeta,
    },
    {
      accessorKey: 'url',
      header: 'URL',
      size: 140,
      maxSize: 140,
      meta: { align: 'text-left', icon: <FiLink /> } as CustomMeta,
      cell: ({ row }) => (
        <a href={`https://${row.original.url}`} className="underline" target="_blank" rel="noopener noreferrer">
          {row.original.url}
        </a>
      ),
    },
    {
      accessorKey: 'assigned',
      header: 'Assigned',
      size: 140,
      meta: {
        align: 'text-left',
        icon: <FiUser />,
        headerBgColor: 'bg-[#E8F0E9]',
        textColor: 'text-[#666C66]',
      } as CustomMeta,
    },
    {
      accessorKey: 'priority',
      header: 'Priority',
      size: 120,
      meta: {
        align: 'text-center',
        headerBgColor: 'bg-[#EAE3FC]',
        textColor: 'text-[#655C80]',
      } as CustomMeta,
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
    {
      accessorKey: 'dueDate',
      header: 'Due Date',
      size: 140,
      meta: {
        align: 'text-right',
        icon: <FiCalendar />,
        headerBgColor: 'bg-[#EAE3FC]',
        textColor: 'text-[#655C80]',
      } as CustomMeta,
    },
    {
      accessorKey: 'value',
      header: 'Est. Value',
      size: 140,
      meta: {
        align: 'text-right',
        icon: <FiDollarSign />,
        headerBgColor: 'bg-[#FFE9E0]',
        textColor: 'text-[#8C6C62]',
      } as CustomMeta,
    },
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

  const rowCount = table.getRowModel().rows.length;
  const extraRows = MIN_ROWS - rowCount > 0 ? MIN_ROWS - rowCount : 0;

  const handleKeyNavigation = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!selectedCell) return;

    let { row, col } = selectedCell;
    const colKeys = table.getVisibleLeafColumns().map(col => col.id);
    const colIndex = typeof col === 'string' ? colKeys.indexOf(col) : col;

    switch (e.key) {
      case 'ArrowUp':
        if (row > 0) setSelectedCell({ row: row - 1, col });
        break;
      case 'ArrowDown':
        if (row + 1 < table.getRowModel().rows.length + extraRows) {
          setSelectedCell({ row: row + 1, col });
        }
        break;
      case 'ArrowLeft':
        if (colIndex > 0) setSelectedCell({ row, col: colKeys[colIndex - 1] });
        break;
      case 'ArrowRight':
        if (colIndex < colKeys.length - 1) {
          setSelectedCell({ row, col: colKeys[colIndex + 1] });
        }
        break;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div tabIndex={0} className="overflow-x-auto flex-1 outline-0" onKeyDown={handleKeyNavigation}>
        <table className="min-w-full table-fixed border border-gray-300 border-collapse">
          <thead>
            <tr>
              <th className="p-3 border border-gray-300 text-center text-[#AFAFAF] text-xl w-[32px] bg-[#EEEEEE]">#</th>
              {table.getHeaderGroups()[0].headers.map((header) => {
                const meta = header.column.columnDef.meta as CustomMeta;
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
                        className={`absolute right-0 top-0 h-full w-1 cursor-col-resize ${
                          header.column.getIsResizing() ? 'bg-gray-500' : 'hover:bg-gray-400'
                        }`}
                      />
                    </div>
                  </th>
                );
              })}
              <th className="p-3 border border-gray-300 w-[48px]"></th>
            </tr>
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row, rowIndex) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="p-3 border border-gray-300 w-[48px] text-center text-[#757575]">{rowIndex + 1}</td>
                {row.getVisibleCells().map((cell) => {
                  const meta = cell.column.columnDef.meta as CustomMeta;
                  return (
                    <td
                      key={cell.id}
                      className={`truncate p-3 border cursor-pointer ${meta?.align || 'text-left'} ${
                        selectedCell?.row === rowIndex && selectedCell?.col === cell.column.id ? 'outline-2 outline-[#6C8B70]' : ''
                      } border-gray-300`}
                      style={{ width: cell.column.getSize(), maxWidth: cell.column.columnDef.maxSize }}
                      onClick={() => {
                        setSelectedCell({ row: rowIndex, col: cell.column.id });
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          const td = e.currentTarget as HTMLTableCellElement;
                          td.contentEditable = 'true';
                        }
                      }}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  );
                })}
                <td className="p-3 border border-gray-300 w-[48px]"></td>
              </tr>
            ))}

            {/* Empty rows to fill MIN_ROWS */}
            {Array.from({ length: extraRows }).map((_, emptyIndex) => (
              <tr key={`empty-row-${emptyIndex}`} className="hover:bg-gray-50">
                <td className="p-3 border text-[#757575] border-gray-300 w-[48px] text-center">
                  {rowCount + emptyIndex + 1}
                </td>
                {table.getAllColumns().map((col, colIndex) => {
                  const colId = col.id ?? `col-${colIndex}`;
                  const meta = col.columnDef.meta as CustomMeta;

                  return (
                    <td
                      key={`empty-cell-${emptyIndex}-${colId}`}
                      className={`truncate p-3 border cursor-pointer ${meta?.align || 'text-left'} ${
                        selectedCell?.row === rowCount + emptyIndex && selectedCell?.col === colId
                          ? 'outline-2 outline-[#6C8B70]'
                          : 'border-gray-300'
                      }`}
                      style={{ width: col.getSize(), maxWidth: col.columnDef.maxSize }}
                      onClick={() => {
                        setSelectedCell({ row: rowCount + emptyIndex, col: colId });
                      }}
                    />
                  );
                })}
                <td className="p-3 border border-gray-300 w-[48px]"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
