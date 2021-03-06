# Pinterest

The goal of this project was to recreate Pinterest. Once a user logs in, they are able to view, create, update, and delete boards. Within those boards, they are able to view, create, update, and delete associated pins.

## Motivation

The motivation for this project was to display CRUD principles and Firebase authentitication.

## Build Status

- Deployed
- Adding update functionality

## Screenshots

![Alt text](/src/images/BoardView.png 'Boards View')

## Tech/Framwork

- Javascript ES6
- Node.js
- jQuery

## Features

- CRUD features
- Firebase Authentitication

## Code Example

```
const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBoardPins = (boardId) => new Promise((resolve, reject) => {
  axios
    .get(
      `${baseUrl}/pin.json?orderBy="Board_Firebase_Key"&equalTo="${boardId}"`
    )
    .then((response) => {
      const boardPins = response.data;
      const pins = [];
      if (boardPins) {
        Object.keys(boardPins).forEach((item) => {
          pins.push(boardPins[item]);
        });
      }
      resolve(pins);
    })
    .catch((error) => reject(error));
});
```

## Deployed Site

https://pinterest-aa40e.web.app/

## ERD

![Alt text](/src/images/Pinterest_ERD.png 'Pinterest Website')
