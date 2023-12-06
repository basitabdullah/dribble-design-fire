import React from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";



const Datatable = (params) => {
  return (
    <div className="datatable">
      <h1 className="title">{params.title}</h1>
      <Link to="/newUser">
      <div className="newUserBtn">Add New</div>
      
      </Link>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={params.rows}
          columns={params.cols}
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
