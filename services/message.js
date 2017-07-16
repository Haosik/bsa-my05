const messages = [{
	receiverId: 2,
	senderId: 1,
	body: 'Hello!'
}, {
	receiverId: 1,
	senderId: 2,
	body: 'Hello!'
}, {
	receiverId: 2,
	senderId: 1,
	body: 'How are you?'
}, {
	receiverId: 1,
	senderId: 2,
	body: 'I\'m fine, thanks!'
}, {
	receiverId: 3,
	senderId: 4,
	body: 'Hello you to!'
}, {
	receiverId: 4,
	senderId: 3,
	body: 'Hi!'
}, {
	receiverId: 2,
	senderId: 3,
	body: 'Do you want a joke?'
}, {
	receiverId: 3,
	senderId: 1,
	body: 'No! :('
}, {
	receiverId: 3,
	senderId: 1,
	body: 'Whyyyyyyyy?!'
}, {
	receiverId: 2,
	senderId: 4,
	body: 'What a jerk...'
}];

const {findInstantUser} = require('./user');

module.exports = {
	findAllMessages: (callback) => {
		callback(null, messages);
	},

	getUserContacts: (id, callback) => {
		const userContacted = [];

		messages.forEach((msg, ind) => {
			if (msg.receiverId === Number(id) && !userContacted.includes(findInstantUser(msg.senderId))) {
				userContacted.push(findInstantUser(msg.senderId));
			} else if (msg.senderId === Number(id) && !userContacted.includes(findInstantUser(msg.receiverId))) {
				userContacted.push(findInstantUser(msg.receiverId));
			}
		});
		
		callback(null, userContacted);
	},


	addMessage: (message, callback) => {
		if (typeof message.receiverId !== 'undefined' &&
			typeof message.senderId !== 'undefined' &&
			message.body) {
			messages.push(message);
			callback(message);
		} else {
			callback(new Error('Can not create a message without Sender or Receiver'));
		}
	},

};