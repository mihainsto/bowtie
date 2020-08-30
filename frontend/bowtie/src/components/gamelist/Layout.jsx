import React from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./List/List";
import AddNewCard from "./AddNewCard/AddNewCard";
import TitleCardInput from "./TitleCard/TitleCardInput";
import GameSearchModal from "./GameSearchModal/GameSearchModal";
import { api_url } from "../../Api/config";
import MainNav from "../Navs/MainNav/MainNav";
import "../../style.scss";
import "./layout.scss";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useState, useRef, useEffect } from "react";
import {
  api_board_createlist,
  api_get_board_data,
  api_board_updateListOrder,
  api_board_addCard,
  api_board_updateCardOrder,
  api_board_moveCard,
} from "../../Api/Board";
import { useLocalStorage } from "@rehooks/local-storage";
import { OptionsContext } from "Context.js";

const Layout = ({ children }) => {
  // User options shared state
  const [optionsContext, setOptonsContext] = useState();
  const [jwt] = useLocalStorage("jwt");
  // The order of the lists, is a array containing the id's of the lists
  const [listorder, setListorder] = useState([]);
  // Object containing cards, the key is the card id
  // And the value is an Object containing the card information (including the game id)
  const [cards, setCards] = useState({});
  // Object containing lists, the key is the list id that can be found also in
  // listorder array
  const [lists, setLists] = useState({});
  // state containing the id of the lists that has the modal opened
  const [activeModalListId, setActiveModalListId] = useState(null);
  // Store css class for the add new list button
  const [addButtonVisibile, setAddButtonVisibile] = useState(
    "visibility-visible"
  );
  // Store css class for the add new list text field
  const [titleTextBoxVisible, settitleTextBoxVisible] = useState(
    "visibility-hidden"
  );
  const [modalStatus, setModalStatus] = useState(false);
  // store the new list title
  const [titleEntry, setTitleEntry] = useState("");
  // ref for focusing on new list text field
  const titleInputElement = useRef(null);

  // Fetches data from the api and update the state with that data
  const fetchDataFromApi = async () => {
    const data = await api_get_board_data(jwt);
    const _listOrder = data.board.listsOrder;
    const _lists = {};
    const _cards = {};
    data.board.lists.forEach((element) => {
      _lists[element.listId] = {
        cards: element.cardsIds,
        title: element.title,
      };
    });
    data.board.cards.forEach((element) => {
      _cards[element.cardId] = data.games[element.gameId];
    });
    setLists(_lists);
    setListorder(_listOrder);
    setCards(_cards);
  };
  // Use Effect for calling the fetch data from api function
  useEffect(() => {
    fetchDataFromApi();
  }, []);
  // Use Effect for handling context changes and update the database
  useEffect(() => {
    console.log(optionsContext)
  }, [optionsContext])
  // Adds a game card on the list that has the search modal open at that time
  // And is also sending the new created card on the backend and waits for a image response
  const addGameCard = async (game) => {
    const cardId = uuidv4();
    const listId = activeModalListId;
    const gameTitle = game.name;
    const gameId = game.id;
    setCards({ ...cards, [cardId]: { title: gameTitle } });
    const newCards = lists[listId].cards.concat(cardId);
    setLists({ ...lists, [listId]: { ...lists[listId], cards: newCards } });
    const updatedCard = await api_board_addCard(jwt, cardId, listId, gameId);
    setCards({ ...cards, [cardId]: updatedCard.game });
  };

  // React Beautiful DnD onDragEnd
  // Handles the card moving logic and updates the api at every change
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
      api_board_updateListOrder(jwt, newListOrder);
      return;
    }

    // reordering cards
    const startListId = source.droppableId;
    const finishListId = destination.droppableId;

    const startList = lists[startListId];
    const finishList = lists[finishListId];

    // Card moved in same list
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
      api_board_updateCardOrder(jwt, curentListIndex, newCardsList);
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
    api_board_moveCard(
      jwt,
      startListId,
      finishListId,
      newStart.cards,
      newFinish.cards
    );
    return;
  };
  // Handles the add new list button click
  // Auto focus the search element and scroll to left-most of the page
  const addnewButtonClicked = () => {
    titleInputElement.current.focus();
    window.scrollTo(9999999, 0);
  };
  const titleInputOnChangeValueHandler = (val) => {
    setTitleEntry(val.target.value);
  };

  // allow to pres enter only when input is on focus
  const [enterKeyAllow, setEnterKeyAllow] = useState(false);

  // Handle when the add new list text field is focused
  // It hides the button and shows the text field
  const addnewFocused = () => {
    setAddButtonVisibile("visibility-hidden");
    settitleTextBoxVisible("visibility-visible");
    setEnterKeyAllow(true);
  };

  // Handle when the add new list text field is blured
  // When is blured that means that the user clicked elsewhere
  // And we can add a new list, also sending an API call with the new list
  // It hides the button and shows the text field
  const addnewBlured = () => {
    setAddButtonVisibile("visibility-visible");
    settitleTextBoxVisible("visibility-hidden");
    // if no input do not add new list
    if (titleEntry === "") return;
    // After the users clicked out of the search we want to add a new list
    const newId = uuidv4();

    setLists({ ...lists, [newId]: { cards: [], title: titleEntry } });
    const new_order = listorder;
    new_order.push(newId);
    setListorder(new_order);
    console.log(titleInputElement.value);
    setTitleEntry("");
    api_board_createlist(jwt, newId, titleEntry);
  };

  // Calls onBlur for new list text field after the user pressed enter
  const addnewKeyPressed = (event) => {
    if (event.key === "Enter" && enterKeyAllow === true) {
      addnewBlured();
      setEnterKeyAllow(false);
    }
  };

  // When the add new card button is clicked
  // We show the modal
  const onAddNewCardClick = (list) => {
    setModalStatus(true);
    setActiveModalListId(list);
  };

  // Closes the modal when user clicks outside of it
  const modalOutsideClicked = (event) => {
    setModalStatus(false);
    event.stopPropagation();
  };

  // When a game is clicked we add it to the list
  const gameItemClicked = (game) => {
    console.log(game);
    setModalStatus(false);
    addGameCard(game);
  };

  // Default return
  // Returns the lists
  return (
    <OptionsContext.Provider value={[optionsContext, setOptonsContext]}>
      <div>
        <MainNav />
        <div className="layout-wrapper">
          <GameSearchModal
            modalOutsideClicked={modalOutsideClicked}
            status={modalStatus}
            gameItemClicked={gameItemClicked}
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
                        if (typeof cards[i] !== "undefined")
                          listCards.push({
                            cardTitle: cards[i]["title"],
                            cardId: i,
                            cardImage: api_url + "/" + cards[i]["imageUrl"],
                            cardReleaseDate: cards[i]["releaseDate"],
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
      </div>
    </OptionsContext.Provider>
  );
};

export default Layout;
