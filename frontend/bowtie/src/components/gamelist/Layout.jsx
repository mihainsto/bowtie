/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import List from "./List/List";
import "../../style.scss";
import "./layout.scss";

const listItems = {
  title: "Completed 2020",
  items: [
    "Metro Exodus",
    "The Last of Us",
    "Doom Eternal",
    "Horizon Zero Dawn",
  ],
};
const listItems2 = {
  title: "Completed 2020",
  items: [
    "Metro Exodus",
    "The Last of Us",
    "Doom Eternal",
    "Horizon Zero Dawn",
    "Nier Automata",
    "The Witcher3: Blood and Wine",
    "Until Dawn",
    "Gears 5",
    "Metro Last Light",
    "Life is Strange 2",
    "Control",
    "Star Wars Jedi: Fallen Order",
    "Just Cause 4"
  ],
};
const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <div className="layout-lists">
        <List listItems={listItems}></List>
        <List listItems={listItems}></List>
        <List listItems={listItems2}></List>
      </div>
    </div>
  );
};

export default Layout;
