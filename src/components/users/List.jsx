import React, { useState } from 'react'
import "./list.scss"
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import Datatable from '../datatable/Datatable'
import { userColumns } from '../../dataTableSource'


const List = () => {


  return (
    <div className='list'>
      <Sidebar/>
        <div className="navConatiner">
          <Navbar/>
          <div className="muiTableConatiner">
            <Datatable title={"Users"}  cols={userColumns}/>
          </div>
        </div>
    </div>
  )
}

export default List