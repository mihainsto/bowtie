# ![Bowtie logo](https://i.imgur.com/YmyvU17.png)

Bowtie is a web application with the purpose of helping gamers organize their games. Bowtie is constructed with a Kanban board style in mind and it's utilizing IGDB API to keep all the game data up to date.  

Bowtie is a work in progress project and it will be soon released on its first alpha version.

# ![Bowtie](https://i.imgur.com/wmEsTaX.png)


## Table of contents

- [Demo](#demo)
- [Features](#features)
- [Roadmap](#roadmap)
- [Installation](#installation)
- [Built with](#built-with)
- [License](#license)
- [Thanks](#thanks)

## Demo
Here is a working live demo :  https://mihainsto.github.io/bowtie/   
(The demo does not contain api/backend functionality)  

## Features
- Create your lists and add what games you want.
- Search games in the IGDB database and add them.
- Track and organize your gaming life in a clean UI.
- Display a reference image of the game on the card.
- See the release date of the unreleased games and get notifications when/before a game is released (TODO).
- See all information about a game (TODO).
- More in the future.

## Roadmap
The Roadmap for the first Alpha release:
[roadmap](https://github.com/mihainsto/bowtie/wiki/Roadmap-for-first-release)

## Installation
- Database
  - For the database you need to have docker installed, go in `docker-bowtie` and run `docker-compose up -d`.
- Backend
  - For Smartcrop.js you may need imagemagick, if you encounter an error run when starting the backend run
  `sudo apt install imagemagick` or `brew install imagemagick` (for MacOS) to install imagemagick.
  - You need IGDB API credential, you can get them [here](https://www.igdb.com/api).
  - Create a file named `config.js` in `backend/services/igdb` with the credentials as export.   
  `module.exports = {
    access_token: your-access-token
    client_id: your-client-id
  }`
  - Generate keys with `node generateKeypair.js`.
  - Create the public/images/games folders in `backend/public/images/games`
  - To start the backend run `npm install` and then `npm start`.
- Frontend
  - To start the frontend run `yarn install` and then `yarn start`.

## Built with 

- [React](https://github.com/facebook/react)
- [Material-UI](https://github.com/mui-org/material-ui)
- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)
- [Node.js](https://github.com/nodejs/node)
- [IGDB API](https://www.igdb.com/api)
- [Smartcrop.js](https://github.com/jwagner/smartcrop.js/)
- [MongoDB](https://github.com/mongodb/mongo)

## [License](https://github.com/mihainsto/bowtie/blob/readme/LICENSE)
Bowtie is under the Mozilla Public License 2.0.

## Thanks
Thanks to [Andrei Sugeac](https://github.com/AndreiSugeac) for designing the awesome Bowtie logo.
