/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import List from "./List/List";
import AddNewCard from "./AddNewCard/AddNewCard";
import TitleCardInput from "./TitleCard/TitleCardInput";
import GameSearchModal from "./GameSearchModal/GameSearchModal";
import "../../style.scss";
import "./layout.scss";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useState, useRef } from "react";

const Layout = ({ children }) => {
  const [listorder, setListorder] = useState(["list-1", "list-2", "list-3"]);
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
  const [cardImages, setCardsImages] = useState({
    "1": "https://i.imgur.com/SvPjEBF.jpg",
    "2": "https://i.imgur.com/SvPjEBF.jpg",
    "3": "https://i.imgur.com/SvPjEBF.jpg",
    "4": "https://i.imgur.com/SvPjEBF.jpg",
    "5": "https://i.imgur.com/SvPjEBF.jpg",
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
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    // reordering lists
    if (type === "list") {
      const newListOrder = listorder;
      newListOrder.splice(source.index, 1);
      newListOrder.splice(destination.index, 0, draggableId);
      setListorder(newListOrder);
      return;
    }

    // reordering cards
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

  const [addButtonVisibile, setAddButtonVisibile] = useState(
    "visibility-visible"
  );
  const [titleTextBoxVisible, settitleTextBoxVisible] = useState(
    "visibility-hidden"
  );
  const [titleEntry, setTitleEntry] = useState("");
  const titleInputElement = useRef(null);

  const addnewButtonClicked = () => {
    titleInputElement.current.focus();
    window.scrollTo(9999999, 0);
  };
  const titleInputOnChangeValueHandler = (val) => {
    setTitleEntry(val.target.value);
  };

  // allow to pres enter only when input is on focus
  const [enterKeyAllow, setEnterKeyAllow] = useState(false);

  const addnewFocused = () => {
    setAddButtonVisibile("visibility-hidden");
    settitleTextBoxVisible("visibility-visible");
    setEnterKeyAllow(true);
  };

  const addnewBlured = () => {
    setAddButtonVisibile("visibility-visible");
    settitleTextBoxVisible("visibility-hidden");
    // if no input do not add new list
    if (titleEntry == "") return;
    // After the users clicked out of the search we want to add a new list
    const lists_ids = Object.keys(lists).sort();
    const last_id = lists_ids[lists_ids.length - 1];
    const new_id =
      "list-" + (parseInt(last_id.replace("list-", "")) + 1).toString();

    setLists({ ...lists, [new_id]: { cards: [], title: titleEntry } });
    const new_order = listorder;
    new_order.push(new_id);
    setListorder(new_order);
    console.log(titleInputElement.value);
    setTitleEntry("");
  };
  const addnewKeyPressed = (event) => {
    if (event.key === "Enter" && enterKeyAllow === true) {
      addnewBlured();
      setEnterKeyAllow(false);
    }
  };
  const [modalStatus, setModalStatus] = useState(true);
  const onAddNewCardClick = (list) => {
    //console.log(list);
    setModalStatus(true);
    //searchInputElement.current.focus();
    //console.log(searchInputElement.curent.value)
  };
  const modalOutsideClicked = (event) => {
    setModalStatus(false);
    event.stopPropagation();
  };
  return (
    <div className="layout-wrapper">
      <GameSearchModal
        modalOutsideClicked={modalOutsideClicked}
        status={modalStatus}
      />
      <div className="layout-lists">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="lists" direction="horizontal" type="list">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="lists-wrapper"
              >
                {listorder.map((item, index) => {
                  const listCards = [];
                  const curentList = lists[item];
                  const title = curentList.title;
                  const cardsOrder = curentList.cards;

                  cardsOrder.forEach((i) => {
                    listCards.push({
                      cardTitle: cards[i],
                      cardId: i,
                      cardImage: cardImages[i],
                    });
                  });

                  return (
                    <List
                      listCards={listCards}
                      title={title}
                      listId={item}
                      index={index}
                      onAddNewCardClick={() => onAddNewCardClick(item)}
                    />
                  );
                })}
                {provided.placeholder}
                <div className={"addnew-list-card " + titleTextBoxVisible}>
                  <TitleCardInput
                    onChangeValue={titleInputOnChangeValueHandler}
                    ref={titleInputElement}
                    focused={addnewFocused}
                    blured={addnewBlured}
                    onKeyPress={addnewKeyPressed}
                    value={titleEntry}
                  />
                </div>
                <div className={"addnew-list-card " + addButtonVisibile}>
                  <AddNewCard
                    cardText="+ Add new list"
                    height={60}
                    onClick={addnewButtonClicked}
                  />
                </div>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default Layout;
