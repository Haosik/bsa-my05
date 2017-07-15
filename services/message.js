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

module.exports = {
	findAllMessages: (callback) => {
		callback(null, messages);
	},

	getUserContacts: (id, callback) => {
		const userContacted = [];
		const user = user.users.id;

		userContacts = message.forEach((msg, ind) => {
			if (msg.receiverId === id || msg.receiverId === id) {
				userContacts.push(msg);
			}
		});

		return userContacted;
	}
};