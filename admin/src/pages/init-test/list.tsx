import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import {
  List,
  useDataGrid,
} from "@refinedev/mui";
import React from "react";

export const InitTestList = () => {
  const { dataGridProps } = useDataGrid({
    syncWithLocation: true,
  });

  const columns = React.useMemo<GridColDef[]>(
    () => [
        { 
          field: "id", 
          headerName: "ID", 
          width: 90 
        },
        { 
          field: "name", 
          headerName: "Name", 
          width: 150,
          renderCell: (params) => (
            <div style={{ fontWeight: 'bold' }}>{params.value}</div>
          )
        }
    ],
    []
  );

  return (
    <List>
      <DataGrid {...dataGridProps} columns={columns} autoHeight />
    </List>
  );
};
