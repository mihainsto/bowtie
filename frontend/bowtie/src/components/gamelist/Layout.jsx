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
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useState, useRef } from "react";

// array with cards 'id' - 'card title'
// const cards = {
//   "1": "Metro Exodus",
//   "2": "The Last of Us",
//   "3": "Doom Eternal",
//   "4": "Horizon Zero Dawn",
//   "5": "Nier Automata",
//   "6": "Until Dawn",
//   "7": "Gears 5",
//   "8": "Metro Last Light",
//   "9": "Life is Strange 2",
//   "10": "Control",
//   "11": "Star Wars Jedi: Fallen Order",
//   "12": "Just Cause 4"
// };
// const lists = {
//   "1": { cards: ["1", "2", "3"], title: "Completed 2020" },
//   "2": { cards: ["4", "5", "6", "7"], title: "To play" },
//   "3": {
//     cards: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
//     title: "Completed 2019",
//   },
// };
//const listorder = ["1", "2", "3"];
//const listorder = ["1"]
const Layout = ({ children }) => {
  const [listorder, setListorder] = useState(["list-1", "list-2", "list-3"])
  const [cards, setCards] = useState({
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
    "12": "Just Cause 4",
  });
  const [lists, setLists] = useState({
    "list-1": { cards: ["1", "2", "3"], title: "Completed 2020" },
    "list-2": { cards: ["4", "5", "6", "7"], title: "To play" },
    "list-3": {
      cards: ["8", "9", "10", "11", "12"],
      title: "Completed 2019",
    },
  });

  const onDragEnd = (result) => {
    const { destination, source, draggableId , type} = result;

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }
    console.log(type)
    if (type==='list') {
      const newListOrder = listorder
      newListOrder.splice(source.index, 1);
      newListOrder.splice(destination.index, 0, draggableId)

      setListorder(newListOrder)

      return
    }


    const startListId = source.droppableId;
    const finishListId = destination.droppableId;

    const startList = lists[startListId];
    const finishList = lists[finishListId];

    if (startList === finishList) {
      const curentListIndex = source.droppableId;
      const list = lists[curentListIndex];
      const newCardsList = Array.from(list.cards);

      newCardsList.splice(source.index, 1);
      newCardsList.splice(destination.index, 0, draggableId);

      const newList = {
        ...list,
        cards: newCardsList,
      };

      setLists({
        ...lists,
        [curentListIndex]: newList,
      });
      return;
    }

    const startListCards = Array.from(startList.cards);
    startListCards.splice(source.index, 1);
    const newStart = {
      ...startList,
      cards: startListCards,
    };

    const finishListCards = Array.from(finishList.cards);
    finishListCards.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finishList,
      cards: finishListCards,
    };

    setLists({
      ...lists,
      [startListId]: newStart,
      [finishListId]: newFinish,
    });
    return;
  };

  return (
    <div className="layout-wrapper">
      <div className="layout-lists">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="lists" direction="horizontal" type="list">
            {(provided) => (
              <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              >
                {listorder.map((item, index) => {
                  const listCards = [];
                  const curentList = lists[item];
                  const title = curentList.title;
                  const cardsOrder = curentList.cards;

                  cardsOrder.forEach((i) => {
                    listCards.push({ cardTitle: cards[i], cardId: i });
                  });

                  return (
                    <List listCards={listCards} title={title} listId={item} index={index}/>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default Layout;
