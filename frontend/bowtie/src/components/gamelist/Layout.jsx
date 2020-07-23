import React from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./List/List";
import AddNewCard from "./AddNewCard/AddNewCard";
import TitleCardInput from "./TitleCard/TitleCardInput";
import GameSearchModal from "./GameSearchModal/GameSearchModal";
import {api_url} from "../../Api/config";
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

const Layout = ({ children }) => {
  const [jwt] = useLocalStorage("jwt");

  // const [listorder, setListorder] = useState(["list-1", "list-2", "list-3"]);
  // const [cards, setCards] = useState({
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
  //   "12": "Just Cause 4",
  // });
  // const [cardImages, setCardsImages] = useState({
  //   "1": "https://i.imgur.com/SvPjEBF.jpg",
  //   "2": "https://i.imgur.com/SvPjEBF.jpg",
  //   "3": "https://i.imgur.com/SvPjEBF.jpg",
  //   "4": "https://i.imgur.com/SvPjEBF.jpg",
  //   "5": "https://i.imgur.com/SvPjEBF.jpg",
  // });
  // const [lists, setLists] = useState({
  //   "list-1": { cards: ["1", "2", "3"], title: "Completed 2020" },
  //   "list-2": { cards: ["4", "5", "6", "7"], title: "To play" },
  //   "list-3": {
  //     cards: ["8", "9", "10", "11", "12"],
  //     title: "Completed 2019",
  //   },
  // });

  // const [users, setUsers] = useState({
  //   "test_user_1" : {products: ["1", "2", "3"], status: "gold"},
  //   "test_user_2" : {products: ["2", "5", "6"], status: "silver"}
  // })

  // serUsers(...users, [username]: {...[users.username], {}})

  const [listorder, setListorder] = useState([]);
  const [cards, setCards] = useState({});
  const [cardImages, setCardsImages] = useState({});
  const [lists, setLists] = useState({});
  const [activeModalListId, setActiveModalListId] = useState(null);
  const fetchDataFromApi = async () => {
    const data = await api_get_board_data(jwt);
    console.log(data.board);
    console.log({games: data.games})
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
      console.log({ element: element });
      _cards[element.cardId] = data.games[element.gameId];
    });
    console.log({ lists: _lists });
    console.log({ listsOrder: _listOrder });
    setLists(_lists);
    setListorder(_listOrder);
    setCards(_cards);
    // _listOrder.forEach(element => {
    //   console.log(_lists[element])
    // });
  };
  useEffect(() => {
    fetchDataFromApi();
  }, []);

  const addGameCard = async (game) => {
    const cardId = uuidv4();
    const listId = activeModalListId;
    const gameTitle = game.name;
    const gameId = game.id;
    setCards({ ...cards, [cardId]: {title:gameTitle} });
    // setLists({...lists, [listId]:{...[lists.listId], cards: [...cards, cardId] }})
    // console.log({lists, lists})
    const newCards = lists[listId].cards.concat(cardId);
    setLists({ ...lists, [listId]: { ...lists[listId], cards: newCards } });
    const updatedCard = await api_board_addCard(jwt, cardId, listId, gameId);
    setCards({ ...cards, [cardId]: updatedCard.game });

  };
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
    const newId = uuidv4();

    setLists({ ...lists, [newId]: { cards: [], title: titleEntry } });
    const new_order = listorder;
    new_order.push(newId);
    setListorder(new_order);
    console.log(titleInputElement.value);
    setTitleEntry("");
    api_board_createlist(jwt, newId, titleEntry);
  };
  const addnewKeyPressed = (event) => {
    if (event.key === "Enter" && enterKeyAllow === true) {
      addnewBlured();
      setEnterKeyAllow(false);
    }
  };
  const [modalStatus, setModalStatus] = useState(false);
  const onAddNewCardClick = (list) => {
    setModalStatus(true);
    setActiveModalListId(list);
    //searchInputElement.current.focus();
    //console.log(searchInputElement.curent.value)
  };
  const modalOutsideClicked = (event) => {
    setModalStatus(false);
    event.stopPropagation();
  };
  const gameItemClicked = (game) => {
    console.log(game);
    setModalStatus(false);
    addGameCard(game);
  };
  return (
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
                    console.log(cards)
                    if (typeof cards[i] !== "undefined")
                      listCards.push({
                        cardTitle: cards[i]["title"],
                        cardId: i,
                        cardImage: api_url + "/"+cards[i]["imageUrl"],
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
