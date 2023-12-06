import React from 'react'
import "./product.scss"
import Datatable from '../../components/datatable/Datatable'
import { productColumns, productInputsRows } from '../../dataTableSource'
import  Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

const Product = () => {
  return (
    <div className='product'>
        <Sidebar/>
      <div className="navContainer">
       <Navbar/>

       <Datatable title={"Products"} rows={productInputsRows} cols={productColumns}/>

      </div>
    </div>
  )
}

export default Product