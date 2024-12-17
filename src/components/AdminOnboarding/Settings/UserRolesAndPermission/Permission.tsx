import React, { useState } from "react";

interface PermissionsState {
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
}

interface SectionState {
  selectAll: boolean;
  permissions: PermissionsState;
}

const PermissionManager: React.FC = () => {
  const [sections, setSections] = useState<Record<string, SectionState>>({
    overview: {
      selectAll: false,
      permissions: { create: false, read: false, update: false, delete: false },
    },
    courses: {
      selectAll: false,
      permissions: { create: false, read: false, update: false, delete: false },
    },
    analytics: {
      selectAll: false,
      permissions: { create: false, read: false, update: false, delete: false },
    },
    usersManagement: {
      selectAll: false,
      permissions: { create: false, read: false, update: false, delete: false },
    },
    earnings: {
      selectAll: false,
      permissions: { create: false, read: false, update: false, delete: false },
    },
  });

  const handleSelectAll = (sectionName: string) => {
    const updatedSection = sections[sectionName];
    const newSelectAllValue = !updatedSection.selectAll;

    // Update the state to ensure it fits the SectionState structure
    setSections((prev) => ({
      ...prev,
      [sectionName]: {
        selectAll: newSelectAllValue,
        permissions: Object.keys(updatedSection.permissions).reduce(
          (acc, key) => ({ ...acc, [key]: newSelectAllValue }),
          {} as PermissionsState
        ),
      },
    }));
  };

  const handlePermissionChange = (
    sectionName: string,
    permission: keyof PermissionsState
  ) => {
    const updatedSection = sections[sectionName];
    const newPermissionValue = !updatedSection.permissions[permission];

    setSections((prev) => ({
      ...prev,
      [sectionName]: {
        ...updatedSection,
        permissions: {
          ...updatedSection.permissions,
          [permission]: newPermissionValue,
        },
        selectAll: Object.values({
          ...updatedSection.permissions,
          [permission]: newPermissionValue,
        }).every((value) => value),
      },
    }));
  };

  return (
    <div className="space-y-8 mb-24">
      {Object.entries(sections).map(([sectionName, sectionState]) => (
        <div
          key={sectionName}
          className="flex flex-col rounded-[12px] border border-[#ebeef2] overflow-hidden"
        >
          {/* Header */}
          <div className="flex justify-between items-center p-4 bg-white border-b border-b-[#e9e9e9]">
            <h1 className="text-[18px] font-medium text-[#2f3033] capitalize">
              {sectionName.replace(/([A-Z])/g, " $1")}
            </h1>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id={`${sectionName}-select-all`}
                className="w-4 h-4 cursor-pointer"
                checked={sectionState.selectAll}
                onChange={() => handleSelectAll(sectionName)}
              />
              <label
                htmlFor={`${sectionName}-select-all`}
                className="text-[14px] font-medium text-[#1c1b1c] opacity-60 cursor-pointer"
              >
                Select all
              </label>
            </div>
          </div>

          {/* Permissions */}
          <div className="flex justify-between items-center p-4">
            {Object.keys(sectionState.permissions).map((permission) => (
              <div key={permission} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`${sectionName}-${permission}`}
                  className="w-4 h-4 cursor-pointer"
                  checked={sectionState.permissions[permission as keyof PermissionsState]}
                  onChange={() =>
                    handlePermissionChange(sectionName, permission as keyof PermissionsState)
                  }
                />
                <label
                  htmlFor={`${sectionName}-${permission}`}
                  className="text-[14px] font-medium text-[#1c1b1c] opacity-60 cursor-pointer capitalize"
                >
                  {permission}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PermissionManager;
