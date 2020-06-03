/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import List from "./List/List"
import "../../style.scss"
import "./layout.scss"

const listItems ={title: "Completed 2020", items: [
  "Metro Exodus", "The Last of Us", "Doom Eternal", "Horizon Zero Dawn"]} 

const Layout = ({ children }) => {
  return (
    <div className>
      <div className="layout-lists">
        <List listItems = {listItems}></List>
        <List listItems = {listItems}></List>
        <List listItems = {listItems}></List>
      </div>
      
    </div>
  )
}

export default Layout
