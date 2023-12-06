import { MdVerified } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";


export const UserRows = [
    {    
        id: 1, 
        lastName: "Snow",
        firstName: "Jon",
        age: 35,
        verified: true 
    },
    {
      id: 2,
      lastName: "Lannister",
      firstName: "Cersei",
      age: 42,
      verified: true,
    },
    {
      id: 3,
      lastName: "Lannister",
      firstName: "Jaime",
      age: 45,
      verified: false,
    },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16, verified: true },
    {
      id: 5,
      lastName: "Targaryen",
      firstName: "Daenerys",
      age: 12,
      verified: false,
    },
    {
      id: 6,
      lastName: "Melisandre",
      firstName: "Jame",
      
      verified: true,
    },
    {
      id: 7,
      lastName: "Clifford",
      firstName: "Ferrara",
      age: 44,
      verified: false,
    },
    {
      id: 8,
      lastName: "Frances",
      firstName: "Rossini",
      age: 36,
      verified: false,
    },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65, verified: false },
  ];
  
 
  export const UserColumns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 200,
      editable: true,
      renderCell: (prams) => {
        return (
          <div className="imgContainer">
            <img
              src="https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
  
            {prams.row.firstName}
          </div>
        );
      },
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 150,
      editable: true,
    },
  
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  
    {
      field: "verified",
      headerName: "Verified",
      width: 150,
      editable: false,
      renderCell: (params) => {
        return (
          <div className="iconsContainer">
            {params.row.verified ? (
              <MdVerified className="iconTrue" />
            ) : (
              <IoClose className="iconFalse" />
            )}
          </div>
        );
      },
    },
  
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 160,
      renderCell: (params) => (
        <div className="cellAction">
          <Link to="/users/12455">
            <div className="viewBtn">View</div>
          </Link>
          <div className="deleteBtn">Delete</div>
        </div>
      ),
    },
  ];

  export const productInputsRows = [
    {
      id: 1,
      label: "Title",
      stock: "yes",
      placeholder: "Apple Macbook Pro",
    },
    {
      id: 2,
      label: "Description",
      stock: "no",
      placeholder: "Mac Book",
    },
    {
      id: 3,
      label: "Category",
      stock: "yes",
      placeholder: "Nokia Pro",
    },
    {
      id: 4,
      label: "Price",
      stock: "no",
      placeholder: "Panasonic TV",
    },
    {
      id: 5,
      label: "Stock",
      stock: "yes",
      placeholder: "Asus Laptop 12",
    },
  ];




  export const productColumns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "productName",
      headerName: "Product Name",
      width: 200,
      editable: true,
      renderCell: (prams) => {
        return (
          <div className="imgContainer">
            <img
              src="https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
  
            {prams.row.placeholder }
          </div>
        );
      },
    },

  
    {
      field: "stock",
      headerName: "In Stock",
      width: 150,
      editable: true,
    },
  

  
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 160,
      renderCell: (params) => (
        <div className="cellAction">
          <div className="deleteBtn">Delete</div>
        </div>
      ),
    },
  ];