import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import {
  List,
  useDataGrid,
  EditButton,
  DeleteButton,
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
        },
        {
            field: "edit",
            headerName: "edit",
            renderCell: (params) => (
              <EditButton hideText recordItemId={params.row.id} />
            ),
            width: 80,
        },
        {
            field: "delete",
            headerName: "delete",
            renderCell: (params) => (
                <DeleteButton hideText recordItemId={params.row.id} />
            ),
            width: 80,
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
