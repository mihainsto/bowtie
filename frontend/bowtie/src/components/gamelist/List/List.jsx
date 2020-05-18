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
import "./List.scss"

const List = () => {
  return (
    <div className="list-list">
      <div className="list-title-card">
        <TitleCard />
      </div>
      <div className="list-card">
        <Card cardText="Metro Exodus" />
      </div>
      <div className="list-card">
        <Card cardText="The Last of Us" />
      </div>
      <div className="list-card">
        <Card cardText="Doom Eternal" />
      </div>
      <div className="list-card">
        <Card cardText="Horizon Zero Dawn" />
      </div>
    </div>
  )
}

export default List
