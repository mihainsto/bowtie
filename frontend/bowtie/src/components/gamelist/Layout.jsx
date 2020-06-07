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
    "Just Cause 4",
  ],
};
// array with cards 'id' - 'card title'
const cards = {
  "1": "Metro Exodus",
  "2": "The Last of Us",
  "3": "Doom Eternal",
  "4": "Horizon Zero Dawn",
  "5": "Nier Automata",
  "6": "Until Dawn",
  "7": "Gears 5",
  "8": "Metro Last Light",
  "9": "Life is Strange 2",
  "10": "Control",
  "11": "Star Wars Jedi: Fallen Order",
  "12": "Just Cause 4"
};
const lists = {
  "1": { cards: ["1", "2", "3"], title: "Completed 2020" },
  "2": { cards: ["4", "5", "6", "7"], title: "To play" },
  "3": {
    cards: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    title: "Completed 2019",
  },
};
const listorder = ["1", "2", "3"];

const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <div className="layout-lists">


        {listorder.map((item) => {
          const listCards = [];
          const curentList = lists[item]
          const title = curentList.title
          const cardsOrder = curentList.cards
          
          cardsOrder.forEach(i => {
            listCards.push({cardTitle: cards[i], index: i})
          });

          return (
            <List listItems={listItems} listCards={listCards} title={title} />
          )
        })}

      </div>
    </div>
  );
};

export default Layout;
