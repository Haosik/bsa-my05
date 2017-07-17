# USER and MESSAGE REST API

*npm i*  
*node index*  
*localhost:3001*  

**/user** - Get list of all users  
**/user/id** - (number) Get info about user by id  
**POST /user/id** - (number) (id, name, email) Create new user by id ()  
**PUT /user/id** - (json) (id, name, email) Create new user by id  
**DELETE /user/id** - (number) Delete a  user by id  

**/message** - Get list of all messages  
**/message/id** - (number) Get message by id  
**POST /message** - (json) (receiverId, senderId, body) Create new message with receiverId, senderId and body of the message  
**PUT /message/:id** - (json) (receiverId, senderId, body) Change message with putted id  
**DELETE /message/:id** - (number)  Delete a message by it's id  

**/phonebook/id** - (number) Get list of user's contacts by id (Everyone who contacted him, or he had contact with)  