import EmptyUser from "@/assets/svg/empty-user.svg";
import EmptyFile from "@/assets/svg/empty-file.svg";
import EmptyGrid from "@/assets/svg/empty-grid.svg";
import EmptyLayout from "@/assets/svg/empty-layout.svg";

export const EmptyState = ({
  emptyStateImage = "user",
  emptyStateText,
}: {
  emptyStateImage?: "user" | "file" | "grid";
  emptyStateText?: string;
}) => {
  const emptyImageTypes = {
    user: EmptyUser,
    file: EmptyFile,
    grid: EmptyGrid,
    layout: EmptyLayout,
  };

  const imageUrl = emptyImageTypes[emptyStateImage];

  return (
    <div className="min-h-[29rem] flex items-center flex-col justify-center">
      <img src={imageUrl} alt="empty state" />

      <p
        data-testid="empty-state"
        className="max-w-[25rem] text-base text-neutral-base text-center"
      >
        {emptyStateText ??
          "Uh oh! It seems the desk is a little lonely. Time to  bring some life into this corner of the universe!"}
      </p>
    </div>
  );
};
