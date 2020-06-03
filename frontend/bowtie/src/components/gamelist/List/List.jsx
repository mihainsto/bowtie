/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
//import TitleCard from "/../TitleCard/TitleCard"
import TitleCard from "../TitleCard/TitleCard"
import Card from "../Card/Card"
import AddNewCard from "../AddNewCard/AddNewCard"

import "./List.scss"
const List = (props) => {
  return (
    <div className="list-list">

      <div className="list-title-card">
        <TitleCard title = {props.listItems.title}/>
      </div>
 
      {props.listItems.items.map((item)=>(
        <div className="list-card">
          <Card cardText = {item} />
        </div>

      ))}
        <div className="list-card">
          <AddNewCard cardText = "+ Add new game"/>
        </div>
    </div>
    
  )
}

export default List
