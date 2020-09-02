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
import {
  api_reauth,
  api_set_options
} from "Api/user";
import { useLocalStorage } from "@rehooks/local-storage";
import { OptionsContext, optionsContextDefaultValues } from "Context.js";

const Layout = ({ children }) => {
  const dummyData = {
    "name": "User",
    "email": "email",
    "board": {
      "listsOrder": [
        "0d884a5d-ebcf-4ddd-a46c-61125e656f64",
        "72d8f3db-bbb7-44a3-9830-9fa8cd1359c2",
        "c956294a-ae6f-400d-8363-58b96a4647c6",
        "7d60ebeb-cb82-4edb-bb08-17a575fb266b"
      ],
      "_id": "5f4fb524e0adcc043b3aba80",
      "cards": [
        {
          "_id": "5f4fb569e0adcc043b3aba8e",
          "cardId": "c19e63f9-3301-438e-8767-ce71059a84cd",
          "gameId": "1937"
        },
        {
          "_id": "5f4fb572e0adcc043b3aba92",
          "cardId": "b135082a-32b2-43b2-8c50-d7f7f71e975f",
          "gameId": "19565"
        },
        {
          "_id": "5f4fb57ae0adcc043b3aba96",
          "cardId": "bb2409d9-f1ff-4e06-81c6-cb38a053e692",
          "gameId": "19560"
        },
        {
          "_id": "5f4fb584e0adcc043b3aba9a",
          "cardId": "c5ce14f7-a27e-498a-aa39-fcbd4b861ce2",
          "gameId": "26192"
        },
        {
          "_id": "5f4fb58be0adcc043b3aba9e",
          "cardId": "99dde418-c13d-4fe5-b4de-7522f68be147",
          "gameId": "119177"
        },
        {
          "_id": "5f4fb594e0adcc043b3abaa2",
          "cardId": "b2144551-6866-429a-970d-36b4196e4de2",
          "gameId": "7609"
        },
        {
          "_id": "5f4fb59ae0adcc043b3abaa6",
          "cardId": "c65366ca-ba92-4bef-bf1c-55d8ebc18b85",
          "gameId": "19564"
        },
        {
          "_id": "5f4fb5a0e0adcc043b3abaaa",
          "cardId": "f207b2e2-736e-4b9a-8f31-56d7f43d67ed",
          "gameId": "9727"
        },
        {
          "_id": "5f4fb5ace0adcc043b3abab0",
          "cardId": "7e462d1b-ef2c-40d9-90df-20c1e2510ca2",
          "gameId": "112874"
        },
        {
          "_id": "5f4fb5b5e0adcc043b3abab4",
          "cardId": "cc6a9e4d-9215-45d8-b6a0-55d3fbd89316",
          "gameId": "126290"
        },
        {
          "_id": "5f4fb5bfe0adcc043b3abab8",
          "cardId": "25aa91dd-348b-405c-8300-7768b4cc9e7e",
          "gameId": "1877"
        }
      ],
      "lists": [
        {
          "cardsIds": [
            "c19e63f9-3301-438e-8767-ce71059a84cd",
            "b135082a-32b2-43b2-8c50-d7f7f71e975f",
            "bb2409d9-f1ff-4e06-81c6-cb38a053e692"
          ],
          "_id": "5f4fb537e0adcc043b3aba85",
          "listId": "0d884a5d-ebcf-4ddd-a46c-61125e656f64",
          "title": "Want to play"
        },
        {
          "cardsIds": [
            "c5ce14f7-a27e-498a-aa39-fcbd4b861ce2",
            "99dde418-c13d-4fe5-b4de-7522f68be147"
          ],
          "_id": "5f4fb543e0adcc043b3aba87",
          "listId": "72d8f3db-bbb7-44a3-9830-9fa8cd1359c2",
          "title": "Currently playing"
        },
        {
          "cardsIds": [
            "b2144551-6866-429a-970d-36b4196e4de2",
            "c65366ca-ba92-4bef-bf1c-55d8ebc18b85",
            "f207b2e2-736e-4b9a-8f31-56d7f43d67ed"
          ],
          "_id": "5f4fb558e0adcc043b3aba89",
          "listId": "c956294a-ae6f-400d-8363-58b96a4647c6",
          "title": "Done"
        },
        {
          "cardsIds": [
            "7e462d1b-ef2c-40d9-90df-20c1e2510ca2",
            "cc6a9e4d-9215-45d8-b6a0-55d3fbd89316",
            "25aa91dd-348b-405c-8300-7768b4cc9e7e"
          ],
          "_id": "5f4fb55de0adcc043b3aba8b",
          "listId": "7d60ebeb-cb82-4edb-bb08-17a575fb266b",
          "title": "Upcoming"
        }
      ]
    },
    "Date": "2020-09-02T15:07:16.309Z",
    "__v": 15,
    "options": {
      "images": true,
      "release_date_released": false,
      "release_date_unreleased": true
    },
    "games": {
      "1877": {
        "_id": "5f4bb0ef8a8a97184150f04e",
        "gameId": "1877",
        "title": "Cyberpunk 2077",
        "imageUrl":  '/co1rft.jpg',
        "releaseDate": "1605744000",
        "Date": "2020-08-30T14:00:15.544Z",
        "__v": 0
      },
      "1937": {
        "_id": "5f4fb56ce0adcc043b3aba8f",
        "gameId": "1937",
        "title": "Killzone: Shadow Fall",
        "imageUrl": "public/images/games/co1v40.jpg",
        "releaseDate": "1384473600",
        "Date": "2020-09-02T15:08:28.534Z",
        "__v": 0
      },
      "7609": {
        "_id": "5f4fb597e0adcc043b3abaa3",
        "gameId": "7609",
        "title": "Until Dawn",
        "imageUrl": "public/images/games/co1mqe.jpg",
        "releaseDate": "1440460800",
        "Date": "2020-09-02T15:09:11.157Z",
        "__v": 0
      },
      "9727": {
        "_id": "5f4fb5a2e0adcc043b3abaab",
        "gameId": "9727",
        "title": "SOMA",
        "imageUrl": "public/images/games/co2a20.jpg",
        "releaseDate": "1442880000",
        "Date": "2020-09-02T15:09:22.069Z",
        "__v": 0
      },
      "19560": {
        "_id": "5f4fb57ce0adcc043b3aba97",
        "gameId": "19560",
        "title": "God of War",
        "imageUrl": "public/images/games/co1tmu.jpg",
        "releaseDate": "1524182400",
        "Date": "2020-09-02T15:08:44.560Z",
        "__v": 0
      },
      "19564": {
        "_id": "5f4fb59ce0adcc043b3abaa7",
        "gameId": "19564",
        "title": "Death Stranding",
        "imageUrl": "public/images/games/co1syk.jpg",
        "releaseDate": "1573171200",
        "Date": "2020-09-02T15:09:16.390Z",
        "__v": 0
      },
      "19565": {
        "_id": "5f4fb574e0adcc043b3aba93",
        "gameId": "19565",
        "title": "Marvel's Spider-Man",
        "imageUrl": "public/images/games/co1r77.jpg",
        "releaseDate": "1536278400",
        "Date": "2020-09-02T15:08:36.625Z",
        "__v": 0
      },
      "26192": {
        "_id": "5f4baf418a8a97184150efe6",
        "gameId": "26192",
        "title": "The Last of Us Part II",
        "imageUrl": "public/images/games/co1r0o.jpg",
        "releaseDate": "1592524800",
        "Date": "2020-08-30T13:53:05.596Z",
        "__v": 0
      },
      "112874": {
        "_id": "5f4bc7918a8a97184150f0b9",
        "gameId": "112874",
        "title": "Horizon Forbidden West",
        "imageUrl": "public/images/games/co2a5n.jpg",
        "releaseDate": "1640908800",
        "Date": "2020-08-30T15:36:49.870Z",
        "__v": 0
      },
      "119177": {
        "_id": "5f4fb58de0adcc043b3aba9f",
        "gameId": "119177",
        "title": "Call Of Duty: Modern Warfare",
        "imageUrl": "public/images/games/co1rsg.jpg",
        "releaseDate": "1571961600",
        "Date": "2020-09-02T15:09:01.384Z",
        "__v": 0
      },
      "126290": {
        "_id": "5f4fb5b7e0adcc043b3abab5",
        "gameId": "126290",
        "title": "Far Cry 6",
        "imageUrl": "public/images/games/co2ecy.jpg",
        "releaseDate": "1613606400",
        "Date": "2020-09-02T15:09:43.239Z",
        "__v": 0
      }
    }
  }
  // User options shared state
  const [optionsContext, setOptonsContext] = useState();
  const [fetchingDataState, setFetchingDataState] = useState(true);
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
  // State containing username, this is fetched from the backend when loading first tme
  const [username, setUsername] = useState(null);
  // Fetches data from the api and update the state with that data
  const fetchDataFromApi = async () => {
    setFetchingDataState(true)
    //const user = await api_reauth(jwt)
    const data = dummyData
    setUsername(data.name)
    // If options are not set we set them
    if (typeof data.options === "undefined") {
      api_set_options(jwt, optionsContextDefaultValues)
      data.options = optionsContextDefaultValues
    }
    // Set the user options to the context
    setOptonsContext(data.options)
    // Processing the board and setting the data
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
    setFetchingDataState(false);
  };
  // Use Effect for calling the fetch data from api function
  useEffect(() => {
    fetchDataFromApi();
  }, []);
  // Use Effect for handling context changes and update the database
  useEffect(() => {
    if (!fetchingDataState){
      const optionsCopy = {...optionsContext}
      api_set_options(jwt, optionsCopy)
    }
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
        <MainNav username={username}/>
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
                            cardImage: cards[i]["imageUrl"],
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
