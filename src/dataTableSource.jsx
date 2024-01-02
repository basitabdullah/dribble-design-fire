export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone No.",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//product section

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
        <div className="cellWithImg">
          <img
            className="cellImg"
            src="https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />

          {prams.row.placeholder}
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
