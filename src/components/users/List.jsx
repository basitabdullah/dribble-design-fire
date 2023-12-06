import React from 'react'
import "./list.scss"
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import Datatable from '../datatable/Datatable'
import { UserColumns, UserRows } from '../../dataTableSource'
const List = () => {
  return (
    <div className='list'>
      <Sidebar/>
        <div className="navConatiner">
          <Navbar/>
          <div className="muiTableConatiner">
            <Datatable title={"Users"} rows={UserRows} cols={UserColumns}/>
          </div>
        </div>
    </div>
  )
}

export default List