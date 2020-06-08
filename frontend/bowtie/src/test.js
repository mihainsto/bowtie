const cards = {
  "1" : "metro exodus",
  "2" : "the last of us",
  "3" : "doom eternal",
  "4" : "horizon zero dawn",
  "5" : "nier automata",
  "6" : "until dawn",
  "7" : "gears 5",
  "8" : "metro last light",
  "9" : "life is strange 2",
  "10" : "control"
 }
 const lists = {
   "1" : {cards: ["1", "2", "3"], title: "completed 2020"},
   "2" : {cards: ["4", "5", "6", "7"], title: "to play"},
   "3" : {cards: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], title: "completed 2019"}
 }
 const listorder = ["1", "2", "3"]

listorder.map((item) => {
            const listCards = [];
            const curentList = lists[item]
            const title = curentList.title
            const cardsOrder = curentList.cards
            
            cardsOrder.forEach(i => {
              listCards.push({cardTitle: cards[i], index: i})
            });

            listCards.map((item) => (
              console.log(item)
            ))

            
  })
