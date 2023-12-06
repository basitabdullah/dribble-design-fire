import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import "./home.scss"
import Widget from '../../components/widget/Widget'
import SmWidget from '../../components/smWidgets/SmWidget'
import Datatable from '../../components/datatable/Datatable'
import { UserColumns, UserRows } from '../../dataTableSource'

const Home = () => {
  const url1 = "https://images.unsplash.com/photo-1635614017406-7c192d832072?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const url2 = "https://images.unsplash.com/photo-1690716782428-183c40dede01?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const color = "#130E01"
  return (
    <div className='home'>
        <Sidebar/> 
      <div className="navContainer">
        <Navbar/>
        <div className="smWidgetContainer">
         <SmWidget type="user"/>
         <SmWidget type="order"/>
         <SmWidget type="earning"/>
         <SmWidget type="balance"/>
        </div>
        <div className="widgetContainer">
         <div className="widget1">
          <Widget name={"Revenue($)"} bgImg={url1}/>
         </div>
         <div className="widget2">
          <Widget name={"Users(T)"} bgImg={url2} color={color}/>
         </div>
        </div>

        <Datatable title={"Users"} rows={UserRows} cols={UserColumns}/>

      </div>
     
    </div>
  )
}

export default Home