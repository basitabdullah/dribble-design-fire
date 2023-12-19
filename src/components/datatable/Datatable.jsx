import React, { useState } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { userColumns, userRows } from "../../dataTableSource";

const Datatable = (params) => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((itm) => itm.id !== id));
  };

  const actionCols = [
    {
      feild: "action",
      headerName: "Actions",
      width: 200,
      renderCell: (values) => {
        return (
          <div className="cellAction">
            <Link to="/users/133">
              <div className="viewBtn">View</div>
            </Link>
            <div
              className="deleteBtn"
              onClick={() => handleDelete(values.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <h1 className="title">{params.title}</h1>
      <Link to="/newUser">
        <div className="newUserBtn">Add New</div>
      </Link>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={userColumns.concat(actionCols)}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default Datatable;
