import { DataTable } from "./DataTable";
import { columns } from "./TokenTable/columns";

export const SkeletonTable: React.FC = () => {
  return (
    <DataTable
      columns={columns}
      data={
        [
          // tokenRowLoading,
          // tokenRowLoading,
          // tokenRowLoading,
          // tokenRowLoading,
          // tokenRowLoading,
          // tokenRowLoading,
          // tokenRowLoading,
          // tokenRowLoading,
          // tokenRowLoading,
          // tokenRowLoading,
        ]
      }
    />
  );
};
