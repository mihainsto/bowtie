/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import TitleCard from "./TitleCard/TitleCard"
import List from "./List/List"
import "../../style.scss"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <div className>
      <div className="layout-lists">
        <List></List>
        <List></List>
        <List></List>
      </div>
    </div>
  )
}

export default Layout
