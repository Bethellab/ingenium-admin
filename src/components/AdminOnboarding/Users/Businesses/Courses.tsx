import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Courses = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <h1
        className="bg-gray-200 p-2 rounded-md flex justify-between items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <span>Members</span>
        {isOpen ? (
          <FaChevronUp className="w-4 h-4 text-gray-600" />
        ) : (
          <FaChevronDown className="w-4 h-4 text-gray-600" />
        )}
      </h1>

      {isOpen && (
        <div className="mt-2 overflow-x-auto">
          <table className="table-auto w-full border border-[#ebeef2] rounded-lg">
            <thead className="bg-[rgba(235,238,242,0.4)] border-b border-[#ebeef2]">
              <tr>
                <th className="text-left px-4 py-3 text-sm font-medium text-[#1c1b1c]">
                  Full Name
                </th>
                <th className="text-left px-4 py-3 text-sm font-medium text-[#1c1b1c]">
                  Course Enrolled
                </th>
                <th className="text-left px-4 py-3 text-sm font-medium text-[#1c1b1c]">
                  Status
                </th>
                <th className="text-left px-4 py-3 text-sm font-medium text-[#1c1b1c]">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#ebeef2] rounded-lg">
                <td className="px-4 py-3 text-xs text-[#1c1b1c] font-medium">Adeloba Joshua</td>
                <td className="px-4 py-3 text-xs text-[#1c1b1c]">4</td>
                <td className="px-4 py-3 text-xs">
                  <button className="bg-[#f0fdf4] rounded-full px-3 py-1 text-[#16a34a]">
                    Active
                  </button>
                </td>
                <td className="px-4 py-3 text-xs text-[#1c1b1c]">30/11/2024</td>
              </tr>
              <tr className="border-t border-[#ebeef2]">
                <td className="px-4 py-3 text-xs text-[#1c1b1c] font-medium">John Mark</td>
                <td className="px-4 py-3 text-xs text-[#1c1b1c]">15</td>
                <td className="px-4 py-3 text-xs">
                  <button className="bg-[#f0fdf4] rounded-full px-3 py-1 text-[#16a34a]">
                    Active
                  </button>
                </td>
                <td className="px-4 py-3 text-xs text-[#1c1b1c]">30/11/2024</td>
              </tr>
              <tr className="border-t border-[#ebeef2]">
                <td className="px-4 py-3 text-xs text-[#1c1b1c] font-medium">John Mark</td>
                <td className="px-4 py-3 text-xs text-[#1c1b1c]">15</td>
                <td className="px-4 py-3 text-xs">
                  <button className="bg-[#f0fdf4] rounded-full px-3 py-1 text-[#16a34a]">
                    Active
                  </button>
                </td>
                <td className="px-4 py-3 text-xs text-[#1c1b1c]">30/11/2024</td>
              </tr>
              <tr className="border-t border-[#ebeef2]">
                <td className="px-4 py-3 text-xs text-[#1c1b1c] font-medium">John Mark</td>
                <td className="px-4 py-3 text-xs text-[#1c1b1c]">15</td>
                <td className="px-4 py-3 text-xs">
                  <button className="bg-[#f0fdf4] rounded-full px-3 py-1 text-[#16a34a]">
                    Active
                  </button>
                </td>
                <td className="px-4 py-3 text-xs text-[#1c1b1c]">30/11/2024</td>
              </tr>
              <tr className="border-t border-[#ebeef2]">
                <td className="px-4 py-3 text-xs text-[#1c1b1c] font-medium">John Mark</td>
                <td className="px-4 py-3 text-xs text-[#1c1b1c]">15</td>
                <td className="px-4 py-3 text-xs">
                  <button className="bg-[#f0fdf4] rounded-full px-3 py-1 text-[#16a34a]">
                    Active
                  </button>
                </td>
                <td className="px-4 py-3 text-xs text-[#1c1b1c]">30/11/2024</td>
              </tr>
              <tr className="border-t border-[#ebeef2]">
                <td className="px-4 py-3 text-xs text-[#1c1b1c] font-medium">John Mark</td>
                <td className="px-4 py-3 text-xs text-[#1c1b1c]">15</td>
                <td className="px-4 py-3 text-xs">
                  <button className="bg-[#f0fdf4] rounded-full px-3 py-1 text-[#16a34a]">
                    Active
                  </button>
                </td>
                <td className="px-4 py-3 text-xs text-[#1c1b1c]">30/11/2024</td>
              </tr>
              <tr className="border-t border-[#ebeef2]">
                <td className="px-4 py-3 text-xs text-[#1c1b1c] font-medium">John Mark</td>
                <td className="px-4 py-3 text-xs text-[#1c1b1c]">15</td>
                <td className="px-4 py-3 text-xs">
                  <button className="bg-[#f0fdf4] rounded-full px-3 py-1 text-[#16a34a]">
                    Active
                  </button>
                </td>
                <td className="px-4 py-3 text-xs text-[#1c1b1c]">30/11/2024</td>
              </tr>
              <tr className="border-t border-[#ebeef2]">
                <td className="px-4 py-3 text-xs text-[#1c1b1c] font-medium">John Mark</td>
                <td className="px-4 py-3 text-xs text-[#1c1b1c]">15</td>
                <td className="px-4 py-3 text-xs">
                  <button className="bg-[#f0fdf4] rounded-full px-3 py-1 text-[#16a34a]">
                    Active
                  </button>
                </td>
                <td className="px-4 py-3 text-xs text-[#1c1b1c]">30/11/2024</td>
              </tr>
              <tr className="border-t border-[#ebeef2]">
                <td className="px-4 py-3 text-xs text-[#1c1b1c] font-medium">John Mark</td>
                <td className="px-4 py-3 text-xs text-[#1c1b1c]">15</td>
                <td className="px-4 py-3 text-xs">
                  <button className="bg-[#f0fdf4] rounded-full px-3 py-1 text-[#16a34a]">
                    Active
                  </button>
                </td>
                <td className="px-4 py-3 text-xs text-[#1c1b1c]">30/11/2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Courses;
