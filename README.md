# Full Stack Message Board

- [x] Create Server Folder
  - [x] Init npm
  - [x] Add express morgan cors
  - [x] Craete Hello World Route
- [x] Create Client Folder
  - [x] Vue create client
  - [x] add bootswatch CSS
  - [x] Homepage Layout
- [x] Add DB to server
  - [x] Add monk joi
  - [x] Create message model
  - [x] Create route to add message to db
    - [x] validate message with joi
      - username - default to anonymous
      - subject
      - message
      - imageURL
      - craeted_at
    - [x] insert message into db
    - [x] respond with inserted message
- [x] When page loads show all messages on page
  - [x] Server route to GET all messages
- [x] Create new message form on client
  - [x] Submit form - fetch POST to server
  - [x] Show any errors
  - [x] Show new message on page
- [x] Fix linting errors
- [] Deploy

## to be continued

- [] User can reply to a message
  - [] Reply appears under original message
- [] Group message into categories
