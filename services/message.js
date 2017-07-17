const messages = [{
	id: 1,
	receiverId: 2,
	senderId: 1,
	body: 'Hello!'
}, {
	id: 2,
	receiverId: 1,
	senderId: 2,
	body: 'Hello!'
}, {
	id: 3,
	receiverId: 2,
	senderId: 1,
	body: 'How are you?'
}, {
	id: 4,
	receiverId: 1,
	senderId: 2,
	body: 'I\'m fine, thanks!'
}, {
	id: 5,
	receiverId: 3,
	senderId: 4,
	body: 'Hello you to!'
}, {
	id: 6,
	receiverId: 4,
	senderId: 3,
	body: 'Hi!'
}, {
	id: 7,
	receiverId: 2,
	senderId: 3,
	body: 'Do you want a joke?'
}, {
	id: 8,
	receiverId: 3,
	senderId: 1,
	body: 'No! :('
}, {
	id: 9,
	receiverId: 3,
	senderId: 1,
	body: 'Whyyyyyyyy?!'
}, {
	id: 10,
	receiverId: 2,
	senderId: 4,
	body: 'What a jerk...'
}];

function findMessage(id){
	const err = null;
	if (typeof id === 'undefined'){
		err = new Error('id is undefined');
	}

	let index;
	const message = messages.find((el, ind) => {
		if (el.id === id){
			index = ind;
			return true;
		} else {
			return false;
		}
	});
	return {message, index, err};
}

function findMessage(id){
	const err = null;
	if (typeof id === 'undefined'){
		err = new Error('id is undefined');
	}

	let index;
	const message = messages.find((el, ind) => {
		if (el.id === id){
			index = ind;
			return true;
		} else {
			return false;
		}
	});
	return {message, index, err};
}

const {findInstantUser} = require('./user');

module.exports = {
	findOneMessage: (id, callback) => {
		const {err, message} = findMessage(id);
		callback(err, message);
	},

	findAllMessages: (callback) => {
		callback(null, messages);
	},

	getUserContacts: (id, callback) => {
		if (isNaN(Number(id))) {
			let err = new Error('Wrong id');
			err.status = 400;
			callback(err);
			return
		}
		let userContacted = [];

		messages.forEach((msg, ind) => {
			if (msg.receiverId === Number(id)) {
				userContacted.push(findInstantUser(msg.senderId));
			} else if (msg.senderId === Number(id)) {
				userContacted.push(findInstantUser(msg.receiverId));
			}
		});
		userContacted = userContacted.filter(function(userId, i, self){
			return self.indexOf(userId) === i;
		});
		
		if (userContacted.length == 0) {
			let err = new Error('No contacts of this id found');
			err.status = 400;
			callback(err);
			return
		}
		
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

	findMessageAndUpdate: (id, message, callback) => {
		const {err, index} = findMessage(id);
		messages[index] = Object.assign(messages[index], message);
		callback(err);
	},

	findMessageAndDelete: (id, callback) => {
		let {err, message, index} = findMessage(id);
		if (typeof index !== 'undefined'){
			messages.splice(index, 1);
		} else {
			err = new Error('User with such ID not found');
		}
		callback(err);
	}

};