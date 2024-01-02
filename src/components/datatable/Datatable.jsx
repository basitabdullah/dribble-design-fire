import React, { useEffect, useState } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { userColumns   } from "../../dataTableSource";
import { collection, getDocs } from "firebase/firestore";
import {db} from "../../firebase"
const Datatable = (params) => {
  const [data, setData] = useState([]);

  useEffect(()=>{
  const fetchData = async()=>{
     let list = []
    try{
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
      list.push({ id : doc.id , ...doc.data()})
      });

      setData(list)
      console.log(list);
    }
    catch(err){
      console.log(err);
    }
   
  }
  fetchData()
  },[])
  console.log(data);
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
